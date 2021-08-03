import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  HomeProfile,
  Gap,
  RatedMentor,
  MentorCategory,
  NewsItem,
} from '../components';
import {colors} from '../utils/colors';
import {DummyAnwar, Dummy1} from '../assets/dummy';
import {JSONCategoryMentor} from '../assets';
import {getData, showError} from '../utils';
import {Fire} from '../config';

const Home = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [categoryMentor, setCategoryMentor] = useState([]);
  useEffect(() => {
    Fire.database()
      .ref('news/')
      .once('value')
      .then(res => {
        // console.log('data: ', res.val());
        if (res.val()) {
          setNews(res.val());
        }
      })
      .catch(err => {
        showError(err.message);
      });

    getData('user').then(res => {
      console.log('data user: ', res);
    });

    Fire.database()
      .ref('category_mentor/')
      .once('value')
      .then(res => {
        // console.log('data: ', res.val());
        if (res.val()) {
          setCategoryMentor(res.val());
        }
      })
      .catch(err => {
        showError(err.message);
      });

    getData('user').then(res => {
      console.log('data user: ', res);
    });
  }, []);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <View style={styles.wrapperSection}>
          <Gap height={30} />
          <HomeProfile onPress={() => navigation.navigate('Account')} />
          <Gap height={20} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.welcome}>
            Find consultation do you want today?
          </Text>
          <View style={styles.wrapperSection}>
            <Text style={styles.welcomeDesc}>Let's with US</Text>
          </View>
          <View style={styles.containerContent}>
            <View style={styles.wrapperScrolls}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.category}>
                  <Gap width={32} />
                  {categoryMentor.map(item => {
                    return (
                      <MentorCategory
                        key={item.id}
                        name={item.name}
                        category={item.category}
                        onPress={() => navigation.navigate('ChoseMentor')}
                      />
                    );
                  })}
                  <Gap width={22} />
                </View>
              </ScrollView>
            </View>
          </View>
          <Gap height={20} />
          <View style={styles.containerProfile}>
            <Text style={styles.sectionLabel}> Profile Rated </Text>
            <View style={styles.containerRated}>
              {/* {mentors.map(mentor => {
                return ( */}
              <RatedMentor
                pic={DummyAnwar}
                name="Anwar"
                categoty="UI Design"
                // key={mentor.id}
                // pic={{uri: mentor.data.photo}}
                // name={mentor.data.fullName}
                // categoty={mentor.data.profesi}
                onPress={() => navigation.navigate('ProfileMentor')}
              />
              {/* );
              })} */}
            </View>
            <Gap height={10} />
            <View style={styles.containerRated}>
              <RatedMentor
                pic={Dummy1}
                name="Anwar"
                categoty="UI Design"
                onPress={() => navigation.navigate('ProfileMentor')}
              />
            </View>
            <Gap height={10} />
            <View style={styles.containerRated}>
              <RatedMentor
                pic={DummyAnwar}
                name="Agus Anwar"
                categoty="Mobile App"
                onPress={() => navigation.navigate('ProfileMentor')}
              />
            </View>
            <Gap height={10} />
          </View>
          <Gap height={20} />
          <View style={styles.containerNews}>
            <Text style={styles.sectionLabel}> Good news </Text>
            {news.map(item => {
              return (
                <NewsItem
                  key={item.id}
                  title={item.title}
                  body={item.body}
                  date={item.date}
                  image={item.image}
                />
              );
            })}
          </View>
          <Gap height={60} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.black,
    flex: 1,
  },
  content: {
    backgroundColor: colors.primary,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  containerContent: {
    backgroundColor: colors.black,
    height: 180,
    paddingVertical: 25,
    borderRadius: 30,
  },
  welcome: {
    fontSize: 26,
    fontFamily: 'Poppins-Large',
    color: colors.text.primary,
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 20,
    maxWidth: 209,
  },
  welcomeDesc: {
    fontSize: 26,
    fontFamily: 'Poppins-Large',
    color: colors.text.primary,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 20,
    maxWidth: 209,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  wrapperScrolls: {
    marginHorizontal: -16,
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
  containerProfile: {
    backgroundColor: colors.black,
    height: 320,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
  containerRated: {
    backgroundColor: colors.cardGrey2,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  containerNews: {
    backgroundColor: colors.black,
    height: 420,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
});
