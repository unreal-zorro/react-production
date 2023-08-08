const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = (sliceName) => `import { type EntityState } from '@reduxjs/toolkit';
import { type Entity } from 'entitites/Entity';
export interface ${firstCharUpperCase(sliceName)}Schema extends EntityState<Entity> {

}
`;
