import {Text} from "react-native";
import {
  HeaderButton,
  HeaderTitle,
  HeaderView,
} from "../styles/appStyles";

import {Entypo} from '@expo/vector-icons'

const Header = () => {
  return (
    <HeaderView>
      <HeaderTitle>Todos</HeaderTitle>
      <HeaderButton>
        <Entypo name="trash" size={25} color={"#E6E6E6"} />
      </HeaderButton>
    </HeaderView>
  )
}

export default Header
