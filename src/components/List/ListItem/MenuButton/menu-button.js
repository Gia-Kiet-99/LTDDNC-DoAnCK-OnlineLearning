import React, {useContext, useEffect, useState} from 'react'
import {Image, TouchableOpacity, StyleSheet} from 'react-native'
import Menu, {MenuItem} from "react-native-material-menu";
import {CourseContext} from "../../../../provider/course-provider";

function MenuButton(props) {
  const item = props.item
  const {updateCourseList} = useContext(CourseContext)

  const [menu, setMenu] = useState(null);
  const [isFavorite, setIsFavorite] = useState(item.isFavorite)
  const [isDownloaded, setIsDownloaded] = useState(item.isDownload)

  const showMenu = () => {
    menu.show()
  }
  const hideMenu = () => {
    menu.hide()
  }
  const onBookmarkPressed = () => {
    hideMenu()
    setIsFavorite(!isFavorite)
  }
  const onDownloadMenuItemPressed = () => {
    hideMenu()
    setIsDownloaded(!isDownloaded)
  }

  useEffect(() => {
    if (item.isFavorite !== isFavorite) {
      item.isFavorite = isFavorite
      updateCourseList(item.id, item)
    }
  }, [isFavorite])
  useEffect(() => {
    if (item.isDownload !== isDownloaded) {
      item.isDownload = isDownloaded;
      updateCourseList(item.id, item)
    }
  }, [isDownloaded])

  const doNothing = () => {

  }

  return (
    <TouchableOpacity style={styles.menuWrapper} onPress={showMenu}>
      <Menu
        ref={ref => setMenu(ref)}
        button={
          <Image style={{height: 24, width: 24}}
                 source={require('../../../../../assets/icon-menu-vertical.png')}/>
        }>
        <MenuItem onPress={onBookmarkPressed}>{isFavorite ? "UnBookmark" : "Bookmark"}</MenuItem>
        <MenuItem onPress={doNothing}>Add to channel</MenuItem>
        <MenuItem onPress={onDownloadMenuItemPressed}>{isDownloaded ? "Remove download" : "Download"}</MenuItem>
      </Menu>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  menuWrapper: {
    justifyContent: 'center',
  }
})

export default MenuButton;