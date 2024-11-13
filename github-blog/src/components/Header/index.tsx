import { EffectLeftContainer, EffectRightContainer, HeaderContainer, ImgContainer, } from './styles'

import logo from '../../assets/logo.svg'
  
  export const Header = () => {
    return (
      <HeaderContainer>
        <EffectLeftContainer />
  
        <ImgContainer>
          <img src={logo} alt="" />
        </ImgContainer>
  
        <EffectRightContainer />
      </HeaderContainer>
    )
  }