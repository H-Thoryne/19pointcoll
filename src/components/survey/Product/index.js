
import styled from 'styled-components';

import Image from './Image';
import Name from './Name';
import Label from './Label'

const Product = styled.div`
  width: 200px;
  position: relative;
  user-select: none;
  margin: 30px 0;
  padding: 10px;
  
  overflow: hidden;
  transition: 0.2s all ease;

  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);

  box-sizing: border-box;
  
  &:hover {
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
    transform: scale(1.02, 1.02);
    transition: 0.2s all ease;
    cursor: pointer;
  }
`;


Product.Name = Name;
Product.Image = Image;
Product.Label = Label;

export default Product;