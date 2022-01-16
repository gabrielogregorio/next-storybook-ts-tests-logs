import { useState } from 'react';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import styles from './styles.module.css';
import { colors } from '../../../core/theme/palette';

export type optionType = {
  key: string;
  label: string;
};

export type dropdownType = {
  title: string;
  options: optionType[];
  setDropdonw: (value: string) => void;
  value: string;
};

export function DropDown({ title, options, setDropdonw, value }: dropdownType) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  const handleSelect = (value: string) => {
    toggle();
    setDropdonw(value);
  };
  const placeholder = options.filter((option) => value === option.key);
  const placeHolderText = placeholder.length === 0 ? '' : placeholder[0].label;
  return (
    <div className={styles.dropdown} style={{ background: colors.primary.default, color: colors.text.default }}>
      <span className={styles.dropdown__label}>{title}</span>

      <button
        id="exp_button"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-labelledby="exp_elem exp_button"
        className={styles.dropdown__value}
        style={{ background: colors.primary.default, color: colors.text.default }}
        onClick={toggle}>
        <span>{placeHolderText}</span> <MdOutlineArrowDropDown />
      </button>

      {isOpen ? (
        <>
          <div className={styles.dropdown__overlay} onClick={toggle}></div>

          <ul
            id="exp_elem"
            className={styles.dropdown__content}
            style={{ background: colors.primary.default }}
            role="listbox"
            tabIndex={-1}>
            {options.map((option, index) => {
              const isSelected = value === option.key;
              return (
                <li
                  className={styles.dropdown__item}
                  key={index}
                  role="option"
                  aria-selected={isSelected}
                  data-value={option.key}
                  onClick={() => handleSelect(option.key)}>
                  {option.label}
                </li>
              );
            })}
          </ul>
        </>
      ) : null}
    </div>
  );
}
