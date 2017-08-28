/** Interface that describes a collection of component information. */
export interface MaterialNameData {
  md: string;
  mat: string;
}

export interface MaterialAttributeSelector {
  md: string;
  mat: string;
  tagPrefix?: string;
}

/** Export the class name data as part of a module. This means that the data is cached. */
export const classNames: MaterialNameData[] = require('./data/class-names.json');

/** Export the input names data as part of a module. This means that the data is cached. */
export const inputNames: MaterialNameData[] = require('./data/input-names.json');

/** Export the element selectors data as part of a module. This means that the data is cached. */
export const elementSelectors: MaterialNameData[] = require('./data/element-selectors.json');


/** Export the attribute selectors data as part of a module. This means that the data is cached. */
export const exportAsNames: MaterialNameData[] = require('./data/export-as-names.json');


/** Export the attribute selectors data as part of a module. This means that the data is cached. */
export const attributeSelectors: MaterialAttributeSelector[] =
  require('./data/attribute-selectors.json');
