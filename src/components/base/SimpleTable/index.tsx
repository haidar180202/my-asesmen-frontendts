import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import style from './style.module.css';

type SimpleTableProps = {
  classNameContainer?: string;
  children: ReactNode;
};

type HeadProps = {
  children: ReactNode;
};

type HeadContentProps = {
  content: ReactNode;
};

type BodyProps = {
  children: ReactNode;
};

type BodyTrProps = {
  children: ReactNode;
};

type BodyContentProps = {
  children: ReactNode;
  className?: string;
};

const SimpleTable: React.FC<SimpleTableProps> & {
  Head: React.FC<HeadProps>;
  HeadContent: React.FC<HeadContentProps>;
  Body: React.FC<BodyProps>;
  BodyTr: React.FC<BodyTrProps>;
  BodyContent: React.FC<BodyContentProps>;
} = ({ classNameContainer = '', children }) => {
  return (
    <div className={`${style['simple-table-container']} ${classNameContainer}`}>
      <table className={style['simple-table']}>{children}</table>
    </div>
  );
};

const Head: React.FC<HeadProps> = ({ children }) => {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  );
};

const HeadContent: React.FC<HeadContentProps> = ({ content }) => {
  return <th className={style['simple-table-th']}>{content}</th>;
};

const Body: React.FC<BodyProps> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

const BodyTr: React.FC<BodyTrProps> = ({ children }) => {
  return <tr className={style['simple-table-tr']}>{children}</tr>;
};

const BodyContent: React.FC<BodyContentProps> = ({ children, className = '' }) => {
  return <td className={`${style['simple-table-td']} ${className}`}>{children}</td>;
};

SimpleTable.propTypes = {
  classNameContainer: PropTypes.string,
};

SimpleTable.defaultProps = {
  classNameContainer: '',
};

SimpleTable.Head = Head;
SimpleTable.HeadContent = HeadContent;
SimpleTable.Body = Body;
SimpleTable.BodyTr = BodyTr;
SimpleTable.BodyContent = BodyContent;

export default SimpleTable;
