import React, {createContext, useState} from 'react';
import {courses} from "../localize/data";

export const CourseContext = createContext();

const CourseProvider = (props) => {
    const [courseList, setCourseList] = useState(courses)

    /* Function: Update courses list value */
    const updateCourseList = (id, newValue) => {
        for (let i = 0; i < courseList.length; i++) {
            if (courseList[i].id === id) {
                /* update new value for array element */
                courseList[i] = newValue
                break;
            }
        }
        setCourseList([...courseList])
    }

    /* Function: get course from id */
    const getCourseFromId = (id) => {
        return courseList.find(o => o.id === id)
    }

    /* Function: get all favorite courses */
    const getFavoriteCourses = () => {
        return courseList.filter(obj => obj.isFavorite === true)
    }

    /* Function: get all downloaded courses */
    const getDownloadedCourses = () => {
        return courseList.filter(obj => obj.isDownload === true)
    }

    /* Function: remove all downloaded courses*/
    const removeAllDownloadedCourses = () => {
        // setDownloadedList([])
        for (let i = 0; i < courseList.length; i++) {
            courseList[i].isDownload = false;
        }
        setCourseList([...courseList])
    }

    return (
        <CourseContext.Provider
            value={{
                courseList,
                updateCourseList,
                getCourseFromId,
                getFavoriteCourses,
                getDownloadedCourses,
                removeAllDownloadedCourses
            }}>
            {props.children}
        </CourseContext.Provider>
    );
};

export default CourseProvider;
