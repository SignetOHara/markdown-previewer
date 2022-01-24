import React from 'react';
import { PageWrapper } from './styles';

interface Props {
  children: React.ReactNode;
}

export const Page = ({ children }: Props) => {
  return <PageWrapper>{children}</PageWrapper>;
};
