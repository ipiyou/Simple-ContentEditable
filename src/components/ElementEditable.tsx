import { createElement, RefObject, KeyboardEvent, FocusEvent } from "react";
import Element, { ElementChangeType, ElementType, RefType } from "./Element";
import "./placeholder.css";

export interface ElementEditableType {
  element: ElementType;
  Ref?: RefObject<RefType>;
  contentEditable?: boolean;
  value: string;
  className?: string;
  style?: Object;
  onChange: (e: ElementChangeType) => void;
  onKeyDown?: (e: KeyboardEvent<ElementType>) => void;
  onKeyPress?: (e: KeyboardEvent<ElementType>) => void;
  onKeyUp?: (e: KeyboardEvent<ElementType>) => void;
  onFocus?: (e: FocusEvent<ElementType>) => void;
  onBlur?: (e: FocusEvent<ElementType>) => void;
  placeholder?: string;
}

function ElementEditable(props: ElementEditableType) {
  const className = "ElementEditable"; // placeholder를 주기 위해 className추가
  return createElement("div", { className }, <Element {...props} />);
}

export default ElementEditable;
