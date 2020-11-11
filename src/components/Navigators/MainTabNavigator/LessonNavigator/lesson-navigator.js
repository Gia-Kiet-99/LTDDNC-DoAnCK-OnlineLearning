import 'react-native-gesture-handler';
import React from 'react';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {Text} from "react-native";
import LessonList from "../../../DetailScreen/CourseDetail/ListLesson/lesson-list";

const Tab = createMaterialTopTabNavigator();

const Transcript = () => {
    return <Text style={{padding: 15}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus ligula, commodo at lacus ut, porta viverra purus. Sed eu ex ac est bibendum dictum eu at eros. Mauris varius imperdiet volutpat. Pellentesque in lacus turpis. Aliquam erat volutpat. Aliquam blandit finibus tristique. Suspendisse potenti. Ut tincidunt elit ut elit dictum, in convallis sem hendrerit. Vivamus quis mi a nisi ultricies elementum. Sed in fringilla justo. Aenean bibendum maximus nunc nec consectetur. Aenean tempus vehicula aliquam. Suspendisse eu nisi feugiat, tristique arcu at, consequat leo.
        Nulla a maximus mi. Aliquam erat volutpat. Aliquam dui dolor, aliquet in tortor sed, sollicitudin sagittis elit. Morbi vel neque magna. Quisque bibendum vehicula ligula, sit amet aliquet leo aliquam at. Aenean quis hendrerit quam. Aliquam mi ex, luctus ut purus eu, dapibus malesuada magna. Fusce semper vitae elit non facilisis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum scelerisque, mi vitae malesuada auctor, nisi lectus maximus eros, a aliquam mi est nec justo. Ut odio libero, posuere quis leo quis, rutrum pulvinar sem. Aenean sed dictum dolor. Suspendisse facilisis nisi nec tincidunt pharetra. Vivamus pulvinar sed arcu vitae tristique. Cras finibus lorem in aliquam hendrerit. Morbi sed rhoncus velit, vitae eleifend turpis.
        Nullam iaculis massa a odio suscipit vehicula. Nam posuere dui ut arcu blandit, mollis fermentum orci hendrerit. Etiam porttitor lacus sit amet tincidunt sollicitudin. Integer tempor urna ac orci ornare, vitae mattis turpis scelerisque. In et elit ligula. Sed pretium vel dolor eu sollicitudin. Sed rutrum varius leo vel elementum. Praesent pharetra eget nibh quis lobortis. Maecenas scelerisque quam quis augue auctor, vel fermentum eros sodales.
        Suspendisse potenti. Phasellus nisi sem, ultrices aliquet ante ac, vulputate vulputate purus. Donec ac faucibus ex. Nullam dictum lectus sit amet ante blandit faucibus. Sed facilisis convallis lacinia. Etiam consequat faucibus est, et eleifend lorem facilisis in. Sed scelerisque neque ut turpis euismod aliquet. Nullam id quam quis mauris venenatis tempor. Vivamus id odio mattis, dictum neque ut, interdum arcu. Aliquam sit amet volutpat neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Proin non feugiat nibh. Cras posuere porttitor mi eu accumsan. Vestibulum vel dapibus diam, eget lobortis libero. Praesent molestie lacus ex, eget luctus augue imperdiet sit amet. Proin vulputate sem eros, in malesuada tellus fringilla sed. Aenean sed bibendum ex. Maecenas nisi est, iaculis sit amet nisl quis, pellentesque suscipit neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam ultricies erat sagittis risus pellentesque, quis volutpat dui dictum. Ut consequat justo libero, at porta mauris porttitor a. Suspendisse sed mi urna. Donec tincidunt, nisl eget varius fringilla, ligula nulla dictum orci, nec ullamcorper dui velit id leo. Vestibulum commodo libero dictum venenatis venenatis. Mauris porta sodales leo id tincidunt.
    </Text>
}

const LessonNavigator = (props) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Contents" component={LessonList}/>
            <Tab.Screen name="Transcript" component={Transcript}/>
        </Tab.Navigator>
    )
};

export default LessonNavigator;
