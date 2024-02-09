import { COMPONENT_TYPE_OPTIONS } from '@shared/constants';
export type ComponentTypes = (typeof COMPONENT_TYPE_OPTIONS)[keyof typeof COMPONENT_TYPE_OPTIONS];
