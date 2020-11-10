import React from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList,
    TouchableOpacity
} from "react-native";
import CourseListItem from "../../../List/ListItem/course-list-item";
import PathListItem from "../../../List/ListItem/path-list-item";
import AuthorListItem from "../../../List/ListItem/author-list-item";
import ListItemSeparator from "../../../Common/list-item-separator";
import {results} from "../../../../localize/data";

// const results = [
//     {
//         title: "Courses",
//         count: 9,
//         data: [
//             {
//                 id: '1',
//                 title: 'Leadership for Non-managers',
//                 author: 'Gia Kiet',
//                 level: 'Advance',
//                 released: 'May 2020',
//                 duration: '30 h',
//                 image: require('../../../../../assets/girl.jpg')
//             },
//             {
//                 id: '2',
//                 title: 'iOS',
//                 author: 'Gia Kiet',
//                 level: 'Beginner',
//                 released: 'Aug 2020',
//                 duration: '25 h',
//                 image: require('../../../../../assets/girl.jpg')
//             },
//             {
//                 id: '3',
//                 title: 'Android',
//                 author: 'Gia Kiet',
//                 level: 'Intermediate',
//                 released: 'Jan 2019',
//                 duration: '28 h',
//                 image: require('../../../../../assets/girl.jpg')
//             },
//             {
//                 id: '4',
//                 title: 'Leadership for Non-managers',
//                 author: 'Gia Kiet',
//                 level: 'Advance',
//                 released: 'May 2020',
//                 duration: '30 h',
//                 image: require('../../../../../assets/girl.jpg')
//             },
//             {
//                 id: '5',
//                 title: 'iOS',
//                 author: 'Gia Kiet',
//                 level: 'Beginner',
//                 released: 'Aug 2020',
//                 duration: '25 h',
//                 image: require('../../../../../assets/girl.jpg')
//             },
//             {
//                 id: '6',
//                 title: 'Android',
//                 author: 'Gia Kiet',
//                 level: 'Intermediate',
//                 released: 'Jan 2019',
//                 duration: '28 h',
//                 image: require('../../../../../assets/girl.jpg')
//             },
//             {
//                 id: '7',
//                 title: 'Leadership for Non-managers',
//                 author: 'Gia Kiet',
//                 level: 'Advance',
//                 released: 'May 2020',
//                 duration: '30 h',
//                 image: require('../../../../../assets/girl.jpg')
//             },
//             {
//                 id: '8',
//                 title: 'iOS',
//                 author: 'Gia Kiet',
//                 level: 'Beginner',
//                 released: 'Aug 2020',
//                 duration: '25 h',
//                 image: require('../../../../../assets/girl.jpg')
//             },
//             {
//                 id: '9',
//                 title: 'Android',
//                 author: 'Gia Kiet',
//                 level: 'Intermediate',
//                 released: 'Jan 2019',
//                 duration: '28 h',
//                 image: require('../../../../../assets/girl.jpg')
//             },
//         ]
//     },
//     {
//         title: "Paths",
//         count: 3,
//         data: [
//             {
//                 id: 1,
//                 title: 'AWS Certified Database - Specialty (DBS-C01)',
//                 count: '3 courses'
//             },
//             {
//                 id: 2,
//                 title: 'Big Data LDN 2020',
//                 count: '44 courses'
//             },
//             {
//                 id: 3,
//                 title: 'Securing ASP.NET and ASP.NET Core Applications',
//                 count: '14 courses'
//             }
//         ]
//     },
//     {
//         title: "Authors",
//         count: 6,
//         data: [
//             {
//                 id: 1,
//                 avatar: require('../../../../../assets/avatar.png'),
//                 name: 'Gia Kiet',
//                 numberOfCourses: 4
//             },
//             {
//                 id: 2,
//                 avatar: require('../../../../../assets/avatar.png'),
//                 name: 'Simon',
//                 numberOfCourses: 5
//             },
//             {
//                 id: 3,
//                 avatar: require('../../../../../assets/avatar.png'),
//                 name: 'Cristiano Ronaldo',
//                 numberOfCourses: 6
//             },
//             {
//                 id: 4,
//                 avatar: require('../../../../../assets/avatar.png'),
//                 name: 'Lionel Messi',
//                 numberOfCourses: 13
//             },
//             {
//                 id: 5,
//                 avatar: require('../../../../../assets/avatar.png'),
//                 name: 'Bailey Newton',
//                 numberOfCourses: 9
//             },
//             {
//                 id: 6,
//                 avatar: require('../../../../../assets/avatar.png'),
//                 name: 'Gerry Burns',
//                 numberOfCourses: 4
//             }
//         ]
//     }
// ];

// const SectionListHeader = (props) => {
//     return <View style={styles.header}>
//         <Text style={{fontSize: 20}}>{title}</Text>
//         <Text style={styles.header}>{title}</Text>
//     </View>
// }

const SearchResultList = () => {

    const renderSectionHeader = ({section: {title, count}}) => {
        return <View style={styles.header}>
            <Text style={{fontSize: 22}}>{title}</Text>
            <TouchableOpacity>
                <Text style={styles.header}>{`${count} Results >`}</Text>
            </TouchableOpacity>
        </View>
    }
    const renderSectionListItem = ({item, section: {title}}) => {
        switch (title){
            case 'Courses':
                return <CourseListItem item={item}/>;
            case 'Paths':
                return <PathListItem item={item}/>;
            case 'Authors':
                return <AuthorListItem item={item} />
            default:
                return <CourseListItem item={item}/>;
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <SectionList
                sections={results}
                keyExtractor={(item, index) => item + index}
                renderItem={renderSectionListItem}
                renderSectionHeader={renderSectionHeader}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListItemSeparator/>}
                // SectionSeparatorComponent={() => <ListItemSeparator/>}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        marginHorizontal: 16
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8
    },
    header: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'pink'
    },
});

export default SearchResultList;
