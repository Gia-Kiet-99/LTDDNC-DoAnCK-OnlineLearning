import React, {createContext, useState} from 'react';
import {courses, downloads} from "../localize/data";

export const CourseContext = createContext();

const CourseProvider = (props) => {
    const [courseList, setCourseList] = useState(courses)
    const [downloadedList, setDownloadedList] = useState(downloads)

    /* Function: Update courses list value */
    const updateCourseList = (id, newValue) => {
        for (let i = 0; i < courseList.length; i++) {
            if (courseList[i].id === id) {
                /* update new value for array element */
                courseList[i] = newValue
                setCourseList([...courseList])
                break;
            }
        }
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
        setDownloadedList([])
    }

    const addItemToDownloadList = (newItem) => {
        if (downloadListContain(newItem.id) === false) {
            downloadedList.push(newItem)
        }
    }
    const removeItemFromDownloadList = (id) => {
        for (let i = 0; i < downloadedList.length; i++) {
            if (downloadedList[i].id === id) {
                /* delete item from array */
                downloadedList.splice(i, 1)
                setDownloadedList([...downloadedList])
                break;
            }
        }
    }

    const downloadListContain = (id) => {
        for (let i = 0; i < downloadedList.length; i++) {
            if (downloadedList[i].id === id) {
                return true;
            }
        }
        return false;
    }

    return (
        <CourseContext.Provider
            value={{
                courseList,
                downloadedList,
                updateCourseList,
                getCourseFromId,
                getFavoriteCourses,
                getDownloadedCourses,
                addItemToDownloadList,
                removeItemFromDownloadList,
                downloadListContain,
                removeAllDownloadedCourses
            }}>
            {props.children}
        </CourseContext.Provider>
    );
};

export default CourseProvider;
