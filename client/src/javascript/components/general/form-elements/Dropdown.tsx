import classnames from 'classnames';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {FC, MouseEvent, ReactNode, useCallback, useRef} from 'react';
import {observer} from 'mobx-react';
import uniqueId from 'lodash/uniqueId';
import {useKeyPressEvent} from 'react-use';

import UIActions from '../../../actions/UIActions';
import UIStore from '../../../stores/UIStore';

interface DropdownButtonProps {
  className?: string;
  label: ReactNode;
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
}

const DropdownButton: FC<DropdownButtonProps> = ({className, label, onClick}: DropdownButtonProps) => (
  <div className={className} onClick={onClick}>
    {label}
  </div>
);

DropdownButton.defaultProps = {
  className: undefined,
};

export interface DropdownItem<T extends string = string> {
  className?: string;
  displayName: ReactNode;
  selectable?: boolean;
  selected?: boolean;
  property?: T;
  value?: number | null;
}

type DropdownItems<T extends string = string> = Array<DropdownItem<T>>;

interface DropdownProps<T extends string = string> {
  header: ReactNode;
  trigger?: ReactNode;
  dropdownButtonClass?: string;
  menuItems: Array<DropdownItems<T>>;
  handleItemSelect: (item: DropdownItem<T>) => void;
  onOpen?: () => void;

  dropdownWrapperClass?: string;
  baseClassName?: string;
  direction?: 'down' | 'up';
  width?: 'small' | 'medium' | 'large';
  matchButtonWidth?: boolean;
  noWrap?: boolean;
}

const Dropdown = observer(
  <T extends string = string>({
    baseClassName,
    dropdownWrapperClass,
    dropdownButtonClass,
    direction,
    header,
    matchButtonWidth,
    menuItems,
    noWrap,
    trigger,
    width,
    handleItemSelect,
    onOpen,
  }: DropdownProps<T>) => {
    const id = useRef<string>(uniqueId('dropdown_'));
    const isOpen = UIStore.activeDropdownMenu === id.current;
    const dropdownWrapperClassName = classnames(dropdownWrapperClass, `${baseClassName}--direction-${direction}`, {
      [`${baseClassName}--match-button-width`]: matchButtonWidth,
      [`${baseClassName}--width-${width}`]: width != null,
      [`${baseClassName}--no-wrap`]: noWrap,
      'is-expanded': isOpen,
    });

    const closeDropdown = useCallback(() => {
      window.removeEventListener('click', closeDropdown);

      UIActions.displayDropdownMenu(null);
    }, []);

    useKeyPressEvent('Escape', () => closeDropdown());

    const openDropdown = useCallback(() => {
      window.addEventListener('click', closeDropdown);

      if (onOpen) {
        onOpen();
      }

      UIActions.displayDropdownMenu(id.current);
    }, [closeDropdown, onOpen]);

    const handleDropdownClick = (event: MouseEvent<HTMLDivElement>): void => {
      event.stopPropagation();

      if (isOpen) {
        closeDropdown();
      } else {
        openDropdown();
      }
    };

    let contentElement: ReactNode;
    if (isOpen) {
      const headerElement = (
        <div className="dropdown__header" key="dropdown-header">
          <DropdownButton className={dropdownButtonClass} label={header} onClick={handleDropdownClick} />
        </div>
      );

      const listElement = (
        <ul className="dropdown__items" key="dropdown-items">
          {menuItems.map((items, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="dropdown__list" key={index}>
              {items.map((item, itemIndex) => {
                const classes = classnames('dropdown__item menu__item', item.className, {
                  'is-selectable': item.selectable !== false,
                  'is-selected': item.selected,
                });

                return (
                  <li
                    className={classes}
                    // eslint-disable-next-line react/no-array-index-key
                    key={itemIndex}
                    onClick={
                      item.selectable === false
                        ? undefined
                        : () => {
                            closeDropdown();
                            handleItemSelect(item);
                          }
                    }>
                    {item.displayName}
                  </li>
                );
              })}
            </div>
          ))}
        </ul>
      );

      contentElement = (
        <CSSTransition classNames="menu" timeout={{enter: 250, exit: 250}}>
          <div className="dropdown__content menu">
            {direction === 'up' ? [listElement, headerElement] : [headerElement, listElement]}
          </div>
        </CSSTransition>
      );
    }

    return (
      <div className={dropdownWrapperClassName}>
        <DropdownButton className={dropdownButtonClass} label={trigger ?? header} onClick={handleDropdownClick} />
        <TransitionGroup>{contentElement}</TransitionGroup>
      </div>
    );
  },
);

(Dropdown as FC<DropdownProps>).defaultProps = {
  baseClassName: 'dropdown',
  direction: 'down',
  dropdownWrapperClass: 'dropdown',
  dropdownButtonClass: 'dropdown__trigger',
  matchButtonWidth: false,
  noWrap: false,
};

export default Dropdown;
