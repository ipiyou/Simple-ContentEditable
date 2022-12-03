import { deepEqual } from "assert";
import {
  FormEvent,
  FunctionComponent,
  createRef,
  createElement,
  useRef,
  memo,
} from "react";
import { ElementEditableType } from "./ElementEditable";

export type ElementType =
  | "div"
  | "p"
  | "span"
  | "a"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "strong"
  | "i"
 

export type RefType =
  | HTMLDivElement
  | HTMLParagraphElement
  | HTMLSpanElement
  | HTMLAreaElement
  | HTMLHeadingElement
  | HTMLElement;

interface ChangeType {
  target: { value: string };
}

export type ElementChangeType = FormEvent<RefType> & ChangeType;

const Element: FunctionComponent<ElementEditableType> = ({
  Ref,
  value,
  onChange,
  ...props
}) => {
  const ref = Ref ? Ref : createRef<RefType>();
  const last = useRef<string>(value);

  const onInput = (e: FormEvent<HTMLElement>) => {
    const parent = ref.current;
    if (!parent) return;

    const html = parent.innerHTML;
    if (html !== last.current) {
      // Clone event with Object.assign to avoid
      // "Cannot assign to read only property 'target' of object"
      const evt = Object.assign({}, e, {
        target: {
          value: html,
        },
      });
      onChange(evt);
    }
    last.current = html;
  };

  return createElement(props.element, {
    ref: ref,
    dangerouslySetInnerHTML: { __html: value },
    onInput: onInput,
    ...props,
  });
};

const MemoBoolean = (
  props: Readonly<ElementEditableType>,
  nextProps: Readonly<ElementEditableType>
): boolean => {
  return (
    props.className === nextProps.className ||
    props.element === nextProps.element ||
    props.Ref === nextProps.Ref ||
    props.placeholder === nextProps.placeholder ||
    props.contentEditable === nextProps.contentEditable ||
    props.onFocus === nextProps.onFocus ||
    props.onChange === nextProps.onChange ||
    props.onBlur === nextProps.onBlur ||
    props.onKeyDown === nextProps.onKeyDown ||
    props.onKeyPress === nextProps.onKeyPress ||
    props.onKeyUp === nextProps.onKeyUp
  );
};

export default memo(Element, MemoBoolean);
