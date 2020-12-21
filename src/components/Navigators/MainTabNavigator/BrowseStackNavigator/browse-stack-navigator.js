import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Browse from "../../../Main/Browse/browse";
import Setting from "../../../AccountManagement/Setting/setting";
import Profile from "../../../AccountManagement/Profile/profile";
import ListStack from "../ListStack/list-stack";
import PathDetailStackNavigator from "./PathDetailStackNavigator/path-detail-stack-navigator";
import AuthorDetailStackNavigator from "../AuthorDetailStackNavigator/author-detail-stack-navigator";
import SkillStackNavigator from "./SkillStackNavigator/skill-stack-navigator";
import FieldDetailStackNavigator from "./FieldDetailStackNavigator/field-detail-stack-navigator";
import PathProvider from "../../../../provider/path-provider";
import {NavigatorName, ScreenName} from "../../../../globals/constants";
import PathDetail from "../../../DetailScreen/PathDetail/path-detail";
import CourseDetail from "../../../DetailScreen/CourseDetail/course-detail";
import AuthorDetail from "../../../DetailScreen/AuthorDetail/author-detail";
import StudyList from "../../../List/StudyList/study-list";
import SkillDetail from "../../../DetailScreen/SkillDetail/skill-detail";
import FieldDetail from "../../../DetailScreen/FieldDetail/field-detail";

const Stack = createStackNavigator()

const BrowseStackNavigator = (props) => {
  return (
    <PathProvider>
      <Stack.Navigator initialRouteName={ScreenName.browse}>
        <Stack.Screen name={ScreenName.browse} component={Browse} options={{headerShown: false}}/>
        <Stack.Screen name={ScreenName.setting} component={Setting}/>
        <Stack.Screen name={ScreenName.profile} component={Profile}/>
        {/*<Stack.Screen*/}
        {/*  name={NavigatorName.pathDetailStack}*/}
        {/*  component={PathDetailStackNavigator}*/}
        {/*  options={{headerShown: false}}/>*/}
        <Stack.Screen
          name={ScreenName.pathDetail}
          component={PathDetail}
          options={{headerShown: true}}/>
        {/*<Stack.Screen*/}
        {/*  name={NavigatorName.authorDetailStack}*/}
        {/*  component={AuthorDetailStackNavigator}*/}
        {/*  options={{headerShown: false}}/>*/}
        <Stack.Screen name={ScreenName.courseDetail} component={CourseDetail} options={{headerShown: false}}/>
        <Stack.Screen name={ScreenName.authorDetail} component={AuthorDetail} options={{title: "Author"}}/>
        {/*<Stack.Screen*/}
        {/*  name={NavigatorName.skillStack}*/}
        {/*  component={SkillStackNavigator}*/}
        {/*  options={{headerShown: false}}/>*/}
        <Stack.Screen name={ScreenName.skillDetail}
                      component={SkillDetail}
                      options={
                        ({route}) => ({title: route.params.item.skill})
                      }/>
        {/*<Stack.Screen*/}
        {/*  name={NavigatorName.fieldDetailStack}*/}
        {/*  component={FieldDetailStackNavigator}*/}
        {/*  options={{headerShown: false}}/>*/}
        <Stack.Screen name={ScreenName.fieldDetail}
                      component={FieldDetail}
                      options={
                        ({route}) => ({title: route.params.field})
                      }/>

        {/*<Stack.Screen*/}
        {/*  name={NavigatorName.listStack}*/}
        {/*  component={ListStack}*/}
        {/*  options={{*/}
        {/*    headerShown: false*/}
        {/*  }}/>*/}
        <Stack.Screen
          name={ScreenName.studyList}
          component={StudyList}
          options={({route}) => ({
            title: route.params.title
          })}/>
      </Stack.Navigator>
    </PathProvider>
  );
};

export default BrowseStackNavigator;
