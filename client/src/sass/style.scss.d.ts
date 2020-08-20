declare const styles: {
  readonly button: string;
  readonly 'button--primary': string;
  readonly inverse: string;
  readonly 'button--secondary': string;
  readonly 'button--tertiary': string;
  readonly 'button--quaternary': string;
  readonly 'button--is-disabled': string;
  readonly button__content: string;
  readonly icon: string;
  readonly 'icon--loading': string;
  readonly 'button--is-loading': string;
  readonly 'context-menu': string;
  readonly 'context-menu--enter': string;
  readonly 'context-menu__items': string;
  readonly 'context-menu__items--is-up': string;
  readonly 'context-menu--enter--active': string;
  readonly 'context-menu--exit': string;
  readonly 'context-menu--exit--active': string;
  readonly 'context-menu__items__padding-surrogate': string;
  readonly 'context-menu__items--match-trigger-width': string;
  readonly 'context-menu__items--no-padding': string;
  readonly 'context-menu__items--no-scrolling': string;
  readonly container: string;
  readonly error: string;
  readonly 'error--is-loading': string;
  readonly input: string;
  readonly form__row: string;
  readonly 'form__row--no-margin': string;
  readonly 'form__row--group': string;
  readonly 'form__row--align--start': string;
  readonly 'form__row--align--center': string;
  readonly 'form__row--align--end': string;
  readonly 'form__row--justify--start': string;
  readonly 'form__row--justify--center': string;
  readonly 'form__row--justify--end': string;
  readonly form__row__item: string;
  readonly 'is-first': string;
  readonly 'is-last': string;
  readonly 'form__row__item--grow': string;
  readonly 'form__row__item--shrink': string;
  readonly 'form__row__item--one-eighth': string;
  readonly 'form__row__item--one-quarter': string;
  readonly 'form__row__item--three-eighths': string;
  readonly 'form__row__item--one-half': string;
  readonly 'form__row__item--five-eighths': string;
  readonly 'form__row__item--three-quarters': string;
  readonly 'form__row__item--seven-eighths': string;
  readonly checkbox: string;
  readonly form__element__wrapper: string;
  readonly radio: string;
  readonly form__element__label: string;
  readonly 'form__element--label-offset': string;
  readonly 'form__element--match-textbox-height': string;
  readonly 'form__element--has-addon--placed-before': string;
  readonly 'form__element--has-addon--count-2': string;
  readonly 'form__element--has-addon--placed-after': string;
  readonly form__element__addon: string;
  readonly form__element: string;
  readonly 'icon--stroke': string;
  readonly 'form__element__addon--placed-before': string;
  readonly 'form__element__addon--index-2': string;
  readonly 'form__element__addon--placed-after': string;
  readonly 'form__element__addon--is-icon': string;
  readonly 'form__element__addon--is-interactive': string;
  readonly 'icon--small': string;
  readonly 'icon--large': string;
  readonly icon__element: string;
  readonly 'icon--loading--ring': string;
  readonly 'icon__ring-slice': string;
  readonly 'input--hidden': string;
  readonly 'toggle-input': string;
  readonly 'toggle-input__indicator': string;
  readonly 'toggle-input__indicator__icon': string;
  readonly 'toggle-input--is-active': string;
  readonly 'toggle-input__element': string;
  readonly overlay: string;
  readonly 'overlay--transparent': string;
  readonly 'overlay--no-interaction': string;
  readonly panel: string;
  readonly 'panel--medium': string;
  readonly panel__content: string;
  readonly panel__header: string;
  readonly 'panel__header--has-border': string;
  readonly panel__footer: string;
  readonly 'panel__footer--has-border': string;
  readonly 'panel--large': string;
  readonly h1: string;
  readonly h2: string;
  readonly h3: string;
  readonly h4: string;
  readonly h5: string;
  readonly h6: string;
  readonly 'panel__content--has-border--top': string;
  readonly 'panel__content--has-border--bottom': string;
  readonly 'panel--light': string;
  readonly portal: string;
  readonly section: string;
  readonly section__heading: string;
  readonly padded: string;
  readonly select: string;
  readonly select__button: string;
  readonly select__indicator: string;
  readonly select__item: string;
  readonly 'select__item--is-selected': string;
  readonly 'select--is-open': string;
  readonly app: string;
  readonly application: string;
  readonly application__view: string;
  readonly application__content: string;
  readonly application__panel: string;
  readonly 'application__panel--torrent-list': string;
  readonly 'is-open': string;
  readonly 'application__panel--torrent-details': string;
  readonly unit: string;
  readonly 'text-overflow': string;
  readonly 'copy--lead': string;
  readonly 'action-bar': string;
  readonly 'action-bar--is-condensed': string;
  readonly 'action-bar__item': string;
  readonly 'action-bar__item--sort-torrents': string;
  readonly dropdown__content: string;
  readonly 'action-bar__item--torrent-operations': string;
  readonly dropdown: string;
  readonly 'action-bar__group': string;
  readonly 'action-bar__group--has-divider': string;
  readonly actions: string;
  readonly action: string;
  readonly action__label: string;
  readonly 'application__loading-overlay': string;
  readonly 'application__loading-overlay-exit': string;
  readonly 'application__loading-overlay-exit-active': string;
  readonly 'application__entry-barrier': string;
  readonly alerts__list: string;
  readonly 'alerts__list-exit': string;
  readonly 'alerts__list-exit-active': string;
  readonly 'alerts__list-enter': string;
  readonly 'alerts__list-enter-active': string;
  readonly alert: string;
  readonly 'is-success': string;
  readonly alert__count: string;
  readonly 'is-error': string;
  readonly alert__content: string;
  readonly 'attached-panel': string;
  readonly 'attached-panel__content': string;
  readonly 'attached-panel__wrapper': string;
  readonly 'attached-panel-enter': string;
  readonly 'attached-panel-enter-active': string;
  readonly 'attached-panel-exit': string;
  readonly 'attached-panel-exit-active': string;
  readonly 'textbox--has-attached-panel--is-open': string;
  readonly badge: string;
  readonly menu: string;
  readonly menu__item: string;
  readonly 'menu__item__label--primary': string;
  readonly 'has-action': string;
  readonly menu__item__label: string;
  readonly menu__item__label__action: string;
  readonly 'menu__item__label--secondary': string;
  readonly 'menu__item--separator': string;
  readonly 'is-selectable': string;
  readonly 'is-selected': string;
  readonly 'menu-enter': string;
  readonly 'fade-in': string;
  readonly 'menu-exit': string;
  readonly 'fade-out': string;
  readonly 'client-stats': string;
  readonly 'client-stats__rates': string;
  readonly 'client-stats__rate': string;
  readonly 'client-stats__rate--download': string;
  readonly 'client-stats__rate__data--limit': string;
  readonly 'client-stats__rate--upload': string;
  readonly 'client-stats__rate__icon': string;
  readonly 'client-stats__rate__data--secondary': string;
  readonly 'client-stats__rate__data--timestamp': string;
  readonly 'client-stats__rate__data--primary': string;
  readonly 'is-visible': string;
  readonly 'client-stats__graph': string;
  readonly 'loading-indicator': string;
  readonly 'graph__gradient--bottom': string;
  readonly 'graph__gradient--bottom--upload': string;
  readonly 'graph__gradient--bottom--download': string;
  readonly 'graph__gradient--top': string;
  readonly 'graph__gradient--top--upload': string;
  readonly 'graph__gradient--top--download': string;
  readonly graph__area: string;
  readonly graph__line: string;
  readonly 'graph__line--upload': string;
  readonly 'graph__line--download': string;
  readonly graph__circle: string;
  readonly 'graph__circle--upload': string;
  readonly 'graph__circle--download': string;
  readonly 'connection-status': string;
  readonly 'connection-status__icon': string;
  readonly 'connection-status__copy': string;
  readonly 'dependency-list': string;
  readonly 'dependency-list__dependency': string;
  readonly 'dependency-list__dependency__icon': string;
  readonly 'dependency-list__dependency--satisfied': string;
  readonly 'directory-tree': string;
  readonly 'directory-tree__wrapper': string;
  readonly 'directory-tree__wrapper--toolbar-visible': string;
  readonly 'directory-tree__selection-toolbar': string;
  readonly 'modal__content--nested-scroll__content': string;
  readonly 'directory-tree__selection-toolbar__item': string;
  readonly 'directory-tree__selection-toolbar__item-count': string;
  readonly 'button--download': string;
  readonly dropdown__items: string;
  readonly dropdown__trigger: string;
  readonly dropdown__button: string;
  readonly dropdown__value: string;
  readonly 'directory-tree__parent-directory': string;
  readonly 'icon--disk': string;
  readonly 'directory-tree__checkbox': string;
  readonly checkbox__decoy: string;
  readonly 'directory-tree__tree': string;
  readonly 'directory-tree__node': string;
  readonly file__label: string;
  readonly 'directory-tree__checkbox__item--icon': string;
  readonly 'directory-tree__checkbox__item--checkbox': string;
  readonly 'directory-tree__node--selected': string;
  readonly 'directory-tree__node--directory': string;
  readonly 'directory-tree__node--group': string;
  readonly 'directory-tree__node--file-list': string;
  readonly file: string;
  readonly 'icon--file': string;
  readonly file__detail: string;
  readonly 'file__detail--secondary': string;
  readonly 'file__detail--priority': string;
  readonly 'directory-tree__checkbox__item': string;
  readonly 'icon--folder': string;
  readonly file__checkbox: string;
  readonly file__name: string;
  readonly 'dropdown--direction-up': string;
  readonly dropdown__content__container: string;
  readonly dropdown__label: string;
  readonly dropdown__header: string;
  readonly dropdown__item: string;
  readonly dropdown__list: string;
  readonly 'dropdown--align-right': string;
  readonly 'dropdown--match-button-width': string;
  readonly 'dropdown--width-small': string;
  readonly 'is-expanded': string;
  readonly dropzone: string;
  readonly dropzone__icon: string;
  readonly 'dropzone--is-dragging': string;
  readonly 'icon--files': string;
  readonly 'icon--files__file--right': string;
  readonly 'icon--files__file--left': string;
  readonly dropzone__copy: string;
  readonly 'dropzone__browse-button': string;
  readonly 'dropzone__selected-files': string;
  readonly 'interactive-list': string;
  readonly 'dropzone__selected-files__file': string;
  readonly 'dropzone--with-overlay': string;
  readonly dropzone__overlay: string;
  readonly 'duration--segment': string;
  readonly 'filesystem__directory-list': string;
  readonly 'filesystem__directory-list__item': string;
  readonly 'filesystem__directory-list__item--parent': string;
  readonly 'filesystem__directory-list__item--directory': string;
  readonly 'filesystem__directory-list__item--file': string;
  readonly 'floating-action__button': string;
  readonly 'floating-action__button--search': string;
  readonly 'floating-action__group--on-textbox': string;
  readonly 'icon--eta': string;
  readonly icon__ring: string;
  readonly 'icon--information__fill': string;
  readonly 'icon--information__ring': string;
  readonly 'icon--limits': string;
  readonly 'limits__bars--top': string;
  readonly 'limits__bars--middle': string;
  readonly 'limits__bars--bottom': string;
  readonly 'icon--loading-indicator': string;
  readonly 'loading-indicator--dots__dot': string;
  readonly 'loading-indicator-dots-pulse': string;
  readonly 'loading-indicator--dots__dot--center': string;
  readonly 'loading-indicator--dots__dot--right': string;
  readonly 'icon--spinner': string;
  readonly 'spinner-spin': string;
  readonly 'interactive-list--loading': string;
  readonly 'interactive-list__item': string;
  readonly 'interactive-list__icon--action': string;
  readonly 'interactive-list__icon--action--warning': string;
  readonly 'interactive-list__item--stacked-content': string;
  readonly 'interactive-list__label': string;
  readonly 'interactive-list__label__text': string;
  readonly 'interactive-list__label__tag': string;
  readonly tag: string;
  readonly 'interactive-list__loading-indicator': string;
  readonly 'interactive-list__loading-indicator-enter': string;
  readonly 'interactive-list__loading-indicator-enter-active': string;
  readonly 'interactive-list__loading-indicator-exit': string;
  readonly 'interactive-list__loading-indicator-exit-active': string;
  readonly 'interactive-list__icon': string;
  readonly 'icon--close': string;
  readonly 'interactive-list__detail--primary': string;
  readonly 'interactive-list__detail--tertiary': string;
  readonly 'interactive-list__detail-list': string;
  readonly 'interactive-list__detail-list__item': string;
  readonly 'interactive-list__detail-list__item--overflow': string;
  readonly 'is-inverse': string;
  readonly 'loading-indicator__bar': string;
  readonly 'loading-indicator-swipe': string;
  readonly 'loading-indicator__bar--1': string;
  readonly 'loading-indicator__bar--2': string;
  readonly 'loading-indicator__bar--3': string;
  readonly mediainfo: string;
  readonly mediainfo__toolbar: string;
  readonly tooltip__wrapper: string;
  readonly 'mediainfo__copy-button': string;
  readonly mediainfo__output: string;
  readonly modal: string;
  readonly modal__overlay: string;
  readonly 'modal--align-center': string;
  readonly modal__tabs: string;
  readonly modal__tab: string;
  readonly 'is-active': string;
  readonly modal__header: string;
  readonly 'modal--tabs-in-header': string;
  readonly 'has-tabs': string;
  readonly modal__content: string;
  readonly modal__content__wrapper: string;
  readonly 'modal__content--nested-scroll': string;
  readonly 'modal__content--nested-scroll__header': string;
  readonly modal__body: string;
  readonly 'modal--tabs-in-body': string;
  readonly modal__footer: string;
  readonly modal__actions: string;
  readonly 'modal__button-group': string;
  readonly 'modal__animation-enter': string;
  readonly 'modal__animation-enter-active': string;
  readonly 'modal__animation-exit': string;
  readonly 'modal__animation-exit-active': string;
  readonly 'modal--vertical': string;
  readonly 'modal--size-large': string;
  readonly form__section__heading: string;
  readonly 'form__section__sub-heading': string;
  readonly 'notifications--empty': string;
  readonly 'notifications--is-loading': string;
  readonly notifications__list: string;
  readonly 'notifications__loading-indicator': string;
  readonly notifications__badge: string;
  readonly notifications__list__item: string;
  readonly notifications__toolbar: string;
  readonly 'toolbar__item--button': string;
  readonly notification__heading: string;
  readonly notification__category: string;
  readonly 'notification__message__sub-heading': string;
  readonly 'peers-list__flag': string;
  readonly 'peers-list__flag__image': string;
  readonly 'peers-list__flag__text': string;
  readonly 'peers-list__encryption': string;
  readonly 'priority-meter': string;
  readonly 'priority-meter__wrapper': string;
  readonly 'priority-meter--max-2': string;
  readonly 'priority-meter--level-0': string;
  readonly 'priority-meter--level-1': string;
  readonly 'priority-meter--level-2': string;
  readonly 'priority-meter--max-3': string;
  readonly 'priority-meter--level-3': string;
  readonly 'progress-bar': string;
  readonly 'progress-bar__icon': string;
  readonly 'torrent--is-seeding': string;
  readonly 'torrent--is-stopped': string;
  readonly 'torrent--has-error': string;
  readonly 'torrent--is-checking': string;
  readonly 'torrent--is-selected': string;
  readonly 'progress-bar__fill': string;
  readonly 'progress-bar__fill__wrapper': string;
  readonly 'candy-stripe': string;
  readonly scrollbars__thumb: string;
  readonly 'scrollbars__thumb--surrogate': string;
  readonly 'is-inverted': string;
  readonly scrollbars: string;
  readonly search: string;
  readonly textbox: string;
  readonly 'is-in-use': string;
  readonly application__sidebar: string;
  readonly 'sidebar__icon-button': string;
  readonly 'sidebar__icon-button--interactive': string;
  readonly 'sidebar__action--last': string;
  readonly sidebar__actions: string;
  readonly sidebar__diskusage: string;
  readonly 'diskuage__size-avail': string;
  readonly 'diskusage__text-row': string;
  readonly 'diskusage__details-list': string;
  readonly 'diskusage__details-list__item': string;
  readonly 'diskusage__details-list__label': string;
  readonly 'dropdown--speed-limits': string;
  readonly 'sidebar-filter': string;
  readonly 'sidebar-filter__item': string;
  readonly 'sidebar-filter__item--heading': string;
  readonly 'sort-dropdown__item': string;
  readonly 'sort-dropdown__indicator': string;
  readonly 'sort-dropdown__indicator--asc': string;
  readonly 'sortable-list': string;
  readonly 'sortable-list__item': string;
  readonly 'sortable-list__item--is-dragging': string;
  readonly 'sortable-list__item--is-locked': string;
  readonly 'sortable-list__item--is-preview': string;
  readonly 'icon--error': string;
  readonly 'icon--lock': string;
  readonly 'sortable-list__content': string;
  readonly 'sortable-list__content__wrapper': string;
  readonly 'sortable-list__content--primary': string;
  readonly 'sortable-list__content--secondary': string;
  readonly 'sortable-list__content--secondary__copy': string;
  readonly 'table__row--heading': string;
  readonly table__heading: string;
  readonly 'table__heading--is-sorted': string;
  readonly 'table__heading--direction--asc': string;
  readonly 'table__heading--fill': string;
  readonly table__heading__handle: string;
  readonly table__heading__label: string;
  readonly 'table__heading__resize-line': string;
  readonly 'table__heading__column-fill': string;
  readonly table__cell: string;
  readonly 'textbox-repeater': string;
  readonly toolbar: string;
  readonly 'toolbar--dark': string;
  readonly 'toolbar--bottom': string;
  readonly 'toolbar--top': string;
  readonly toolbar__item: string;
  readonly 'is-disabled': string;
  readonly 'toolbar__item--centered': string;
  readonly 'toolbar__item--label': string;
  readonly tooltip: string;
  readonly tooltip__content: string;
  readonly 'tooltip__content--no-padding': string;
  readonly 'tooltip__content--padding-surrogate': string;
  readonly 'is-interactive': string;
  readonly 'tooltip--no-wrap': string;
  readonly 'tooltip--position--bottom': string;
  readonly 'tooltip--anchor--center': string;
  readonly 'tooltip--position--top': string;
  readonly 'tooltip--anchor--start': string;
  readonly 'tooltip--align--center': string;
  readonly 'tooltip--anchor--end': string;
  readonly 'tooltip--position--left': string;
  readonly 'tooltip--position--right': string;
  readonly 'tooltip--is-error': string;
  readonly 'torrent-details__heading': string;
  readonly 'torrent-details__sub-heading': string;
  readonly 'torrent-details__sub-heading__secondary': string;
  readonly 'torrent-details__sub-heading__tertiary': string;
  readonly 'torrent-details__header': string;
  readonly 'is-completed': string;
  readonly 'is-stopped': string;
  readonly 'torrent-details__action': string;
  readonly 'torrent-details__table': string;
  readonly 'torrent-details__table__heading--primary': string;
  readonly 'torrent-details__table__heading--secondary': string;
  readonly 'torrent-details__table__heading--tertiary': string;
  readonly 'torrent-details__section': string;
  readonly 'torrent-details__section__heading': string;
  readonly 'torrent-details__section__null-data': string;
  readonly 'torrent-details__section--file-tree': string;
  readonly 'directory-tree__node--selectable': string;
  readonly 'file__detail--size': string;
  readonly 'torrent-details__detail--hash': string;
  readonly 'torrent-details__detail__value': string;
  readonly 'torrent-details__detail--tags': string;
  readonly 'torrent-details__detail': string;
  readonly 'torrent-details__table__heading': string;
  readonly 'torrent-details__detail__label': string;
  readonly 'not-available': string;
  readonly torrents: string;
  readonly torrents__alert: string;
  readonly torrents__alert__wrapper: string;
  readonly torrents__alert__action: string;
  readonly torrent__list: string;
  readonly 'torrent__list__scrollbars--horizontal': string;
  readonly 'torrent__list__scrollbars--vertical': string;
  readonly torrent__list__wrapper: string;
  readonly 'torrent__list--loading-enter': string;
  readonly 'torrent__list--loading-enter-active': string;
  readonly 'torrent__list--loading-exit': string;
  readonly 'torrent__list--loading-exit-active': string;
  readonly 'torrent__list--empty': string;
  readonly 'view--torrent-list': string;
  readonly torrent: string;
  readonly 'torrent__more-info': string;
  readonly torrent__detail: string;
  readonly 'torrent__detail--name': string;
  readonly 'torrent__detail--tags': string;
  readonly torrent__tag: string;
  readonly 'torrent__detail__icon--checkmark': string;
  readonly 'torrent__details__section--secondary': string;
  readonly 'torrent__details__section--tertiary': string;
  readonly 'torrent--is-downloading--actively': string;
  readonly 'torrent__detail--downRate': string;
  readonly 'torrent-details__sub-heading__tertiary--download': string;
  readonly 'torrent--is-uploading--actively': string;
  readonly 'torrent__detail--upRate': string;
  readonly 'torrent-details__sub-heading__tertiary--upload': string;
  readonly 'torrent--is-expanded': string;
  readonly 'torrent__detail--eta': string;
  readonly torrent__details__section: string;
  readonly 'torrent__details__section--quaternary': string;
  readonly 'torrent__details__section--primary': string;
  readonly torrent__details__section__wrapper: string;
  readonly 'torrent__detail--percentComplete': string;
  readonly 'torrent__detail--upTotal': string;
  readonly 'torrent__detail--sizeBytes': string;
  readonly 'torrent__detail--freeDiskSpace': string;
  readonly 'torrent__detail--added': string;
  readonly 'torrent__detail--creationDate': string;
  readonly 'torrent__detail--isPrivate': string;
  readonly 'torrent__detail--peers': string;
  readonly 'torrent__detail--ratio': string;
  readonly 'torrent__detail--seeds': string;
  readonly torrent__tags: string;
  readonly 'torrent--is-condensed': string;
  readonly 'transfer-data--download': string;
  readonly 'transfer-data--upload': string;
  readonly 'application__view--auth-form': string;
  readonly 'form--authentication': string;
  readonly form__wrapper: string;
  readonly form__header: string;
  readonly form__label: string;
  readonly 'form__row--error': string;
  readonly form__actions: string;
  readonly 'feed-list__feed-label': string;
  readonly rotateAroundMidpoint: string;
};
export = styles;
