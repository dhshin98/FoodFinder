import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../image/search.svg";

export default function Dropdown({ textOptions, onSelect }) {
  const [searchItem, setSearchItem] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("All");

  // 로컬 스토리지에서 아이템 불러오기
  useEffect(() => {
    const storedItem = localStorage.getItem("selectedItem");
    if (storedItem) {
      setSelectedItem(storedItem);
    }
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    localStorage.setItem("selectedItem", item);
    // 선택한 항목에 대한 네비게이션을 처리합니다.
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <DropdownWrapper>
      <DropdownBox onClick={() => setIsOpen(!isOpen)}>
        {selectedItem}
        <Arrow>▼</Arrow>
      </DropdownBox>
      {isOpen && (
        <SelectWrapper>
          <IconPosition>
            <SearchIcon />
          </IconPosition>
          <SelectInput
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchItem(e.target.value)}
          />
          <hr />
          {textOptions
            .filter((data) =>
              data.toLowerCase().includes(searchItem.toLowerCase())
            )
            .map((data) => (
              <SelectOptions key={data} onClick={() => handleItemClick(data)}>
                {data}
              </SelectOptions>
            ))}
        </SelectWrapper>
      )}
    </DropdownWrapper>
  );
}

const DropdownWrapper = styled.div`
  width: 100%;
  padding: 20px;
  /* margin-bottom: 300px; */
`;
const DropdownBox = styled.div`
  width: 100%;
  padding: 14px 10px 14px 10px;
  /* margin: 0 30% 5px 30%; */
  border: 1px solid var(--shadow);
  border-radius: 5px;
  background: var(--white);
  line-height: 15px;
  cursor: pointer;
  position: relative;
`;
const Arrow = styled.div`
  position: absolute;
  top: 14px;
  left: calc(100% - 22px);
  font-size: 0.6em;
`;
const SelectWrapper = styled.div`
  /* width: 240px; */
  /* width: 60vw; */
  padding-bottom: 10px;
  /* margin: 0 30% 40px 30%; */
  border: 1px solid var(--shadow);
  border-radius: 5px;
  background: var(--white);
  line-height: 15px;
  position: relative;
  box-shadow: 0 1px 1px 0 var(--shadow), 0 1px 5px 0 var(--grey-light);
`;
const IconPosition = styled.div`
  margin: 5px;
  position: absolute;
  top: 8px;
  left: 5px;
  width: 12px;
  path {
    fill: var(--shadow);
  }
`;
const SelectInput = styled.input`
  width: 200px;
  margin-left: 20px;
  padding: 10px 0 5px 10px;
  border-radius: 5px;
  background: var(--white);
  line-height: 15px;
`;
const SelectOptions = styled.div`
  width: 100%;
  padding: 10px;
  background: var(--white);
  line-height: 15px;
  cursor: pointer;
  :hover {
    background: var(--white-second);
  }
`;
