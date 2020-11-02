import React from 'react';
import {StyleSheet,TouchableOpacity,View,Text,ScrollView} from 'react-native';

const PopularSkills = (props) => {
    const titles = [
        'Angular','JavaScript','C# ','Java','Data Analysis','ASP.NET',
        'Node.js','Design Pattern','Python','React','.Net',
    ]

    const renderButton = (titles) => {
        return titles.map((title) => <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>)
    }

    return (
        <View>
            <Text style={styles.header}>Popular Skills</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {renderButton(titles)}
            </ScrollView>
        </View>

    );
};

const styles = StyleSheet.create({
    header: {
        color: '#444',
        fontWeight: 'bold',
        fontSize: 18
    },
    button: {
        paddingTop: 6,
        paddingBottom: 8,
        paddingHorizontal: 15,
        backgroundColor: 'lightgray',
        borderRadius: 18,
        marginRight: 5
    },
    buttonText: {
        justifyContent: 'center',
    }
})

export default PopularSkills;
