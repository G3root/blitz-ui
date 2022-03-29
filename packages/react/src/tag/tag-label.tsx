import type { GetComponentProps } from '../utils/types';
import { styled } from 'react-cva';

export type TagLabelProps = GetComponentProps<typeof TagLabel>;

export const TagLabel = styled('span', true)('line-clamp-1');
