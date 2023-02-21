import React from 'react';
import { TextErrorProp } from '../../interface/TextErrorType';

export const TextError = ({ children }: TextErrorProp) => (
  <div className="text-danger" >
    {children}
  </div>
);