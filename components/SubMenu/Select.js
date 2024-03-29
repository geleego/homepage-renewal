import React, { useContext, useEffect, useState } from 'react';
import { GlobalStateContext } from 'context';
import { ArrowIcon, IconContainer, SelectContainer } from './styles';

export default function Select({ defaultValue, selectList, onClickSelect, selectNumber, onClickOption }) {
  const [selectedOption, setSelectedOption] = useState('');
  const { selectedSubMenu } = useContext(GlobalStateContext);
  const [viewport, setViewport] = useState('');

  const desktopWidth = selectNumber === 2 ? 500 : 300;
  const tabletWidth = selectNumber === 2 ? 250 : 200;

  const onResize = () => {
    if (window.innerWidth >= 768 && window.innerWidth < 1200) {
      setViewport('tablet');
    } else if (window.innerWidth >= 1200) {
      setViewport('desktop');
    }
  };

  useEffect(() => {
    if (window.innerWidth >= 768 && window.innerWidth < 1200) {
      setViewport('tablet');
    } else if (window.innerWidth >= 1200) {
      setViewport('desktop');
    }

    window.addEventListener('resize', onResize);
  }, []);

  return (
    <SelectContainer
      $open={selectedSubMenu === selectNumber}
      $width={viewport === 'desktop' ? desktopWidth : viewport === 'tablet' ? tabletWidth : null}
    >
      <button id={selectNumber} onClick={onClickSelect}>
        <span>{selectedOption || defaultValue}</span>
        <IconContainer $open={selectedSubMenu === selectNumber}>
          <ArrowIcon />
        </IconContainer>
      </button>
      <ul>
        {selectList.map(({ value, text }) => (
          <li id={value} onClick={e => onClickOption(e, setSelectedOption)} key={value}>
            {text}
          </li>
        ))}
      </ul>
    </SelectContainer>
  );
}
