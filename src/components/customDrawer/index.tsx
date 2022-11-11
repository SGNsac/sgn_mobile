import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer'

const DrawerMenuCustom = ({ props } : any) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Home" onPress={() => alert('Toggle Art')} />
      <DrawerItem label="Movimentação diária " onPress={() => alert('Toggle Culture')} />
    </DrawerContentScrollView>
  )
}

export default DrawerMenuCustom
