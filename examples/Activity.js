import React, { Component } from "react";

import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar
} from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome5";

// Sheets
import textColor from "./Utilities/textColor";
import width from "./Utilities/width";
import bgColor from "./Utilities/bgColor";
import border from "./Utilities/border";
import padding from "./Utilities/padding";
import textAlign from "./Utilities/textAlign";
import font from "./Utilities/font";
import margin from "./Utilities/margin";
import height from "./Utilities/height";
import flex from "./Utilities/flex";
import text from "./Utilities/text";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullDay: '',
      day: '',
      month: '',
      year: '',
      todoItems: new Array()
    };
  }

  componentDidMount() {
    var fullDay = new Date().getDate();
    var day = new Date().getDay();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();

    /*
      dayConverter => 
        1: Pazartesi
        2: Salı
        3: Çarşamba
        4: Perşembe
        5: Cuma
        6: Cumartesi
        7: Pazar
    */

    var days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
    var months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]

    this.setState({
      fullDay: fullDay,
      day: days[day - 1],
      month: months[month],
      year: year
    });
  }

  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <View style={[padding.pt10, padding.pb10, { borderBottomColor: 'rgba(0, 0, 0, 0.05)', borderBottomWidth: 1 }]}>
          <Text style={[font.xl10, textAlign.center, { fontFamily: 'Rubik-Regular' }]}>{this.state.fullDay}</Text>
          <Text style={[textColor.gray, font.xl, textAlign.center, margin.mt7, { fontFamily: 'Rubik-Regular' }]}>{this.state.day}</Text>
          <Text style={[font.xl10, textAlign.center, margin.mt7, { fontFamily: 'Rubik-Regular' }]}>{this.state.month}</Text>
          <Text style={[textColor.gray, font.xl, textAlign.center, margin.mt7, { fontFamily: 'Rubik-Regular' }]}>{this.state.year}</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={[{ borderBottomColor: 'rgba(0, 0, 0, 0.05)', borderBottomWidth: 1 }, { height: '50%' }]}>
          <View style={[margin.mt10, width.container3]}>
            {/* ToDo List */}
            <View style={[flex.row, margin.mt10]}>
              <Text style={[text.lineThrought, flex.f1, textColor.success, font.md, { fontFamily: 'Rubik-Regular' }]}>
                Proje başlangıç <Text style={[flex.f1, textColor.success, font.md]}>(0sn)</Text>
              </Text>
              <Icon style={[textAlign.alignItemsCenter, textColor.success]} name="smile" size={28}></Icon>
            </View>
            <View style={[flex.row, margin.mt8]}>
              <Text style={[flex.f1, textColor.blue, font.md, { fontFamily: 'Rubik-Regular' }]}>
                1. görev <Text style={[flex.f1, textColor.blue, font.md]}>(11s 10dk 05sn)</Text>
            </Text>
              <Icon style={[textAlign.alignItemsCenter, textColor.blue]} name="meh-blank" size={28}></Icon>
            </View>
            <View style={[flex.row, margin.mt8]}>
              <Text style={[flex.f1, textColor.black, font.md, { fontFamily: 'Rubik-Regular' }]}>
                2. görev
            </Text>
              <Icon style={[textAlign.alignItemsCenter, textColor.gray]} name="meh-rolling-eyes" size={28}></Icon>
            </View>
            <View style={[flex.row, margin.mt8]}>
              <Text style={[flex.f1, textColor.black, font.md, { fontFamily: 'Rubik-Regular' }]}>
                3. görev
            </Text>
              <Icon style={[textAlign.alignItemsCenter, textColor.gray]} name="meh-rolling-eyes" size={28}></Icon>
            </View>
            <View style={[flex.row, margin.mt8]}>
              <Text style={[flex.f1, textColor.black, font.md, { fontFamily: 'Rubik-Regular' }]}>
                4. görev
            </Text>
              <Icon style={[textAlign.alignItemsCenter, textColor.gray]} name="meh-rolling-eyes" size={28}></Icon>
            </View>
            <View style={[flex.row, margin.mt8]}>
              <Text style={[flex.f1, textColor.black, font.md, { fontFamily: 'Rubik-Regular' }]}>
                5. görev
            </Text>
              <Icon style={[textAlign.alignItemsCenter, textColor.gray]} name="meh-rolling-eyes" size={28}></Icon>
            </View>
            <View style={[flex.row, margin.mt8]}>
              <Text style={[flex.f1, textColor.black, font.md, { fontFamily: 'Rubik-Regular' }]}>
                6. görev
            </Text>
              <Icon style={[textAlign.alignItemsCenter, textColor.gray]} name="meh-rolling-eyes" size={28}></Icon>
            </View>
            <View style={[flex.row, margin.mt8]}>
              <Text style={[flex.f1, textColor.black, font.md, { fontFamily: 'Rubik-Regular' }]}>
                7. görev
            </Text>
              <Icon style={[textAlign.alignItemsCenter, textColor.gray]} name="meh-rolling-eyes" size={28}></Icon>
            </View>
            <View style={[flex.row, margin.mt8]}>
              <Text style={[flex.f1, textColor.black, font.md, { fontFamily: 'Rubik-Regular' }]}>
                8. görev
            </Text>
              <Icon style={[textAlign.alignItemsCenter, textColor.gray]} name="meh-rolling-eyes" size={28}></Icon>
            </View>
            <View style={[flex.row, margin.mt8]}>
              <Text style={[flex.f1, textColor.black, font.md, { fontFamily: 'Rubik-Regular' }]}>
                9. görev
            </Text>
              <Icon style={[textAlign.alignItemsCenter, textColor.gray]} name="meh-rolling-eyes" size={28}></Icon>
            </View>
            <View style={[flex.row, margin.mt8]}>
              <Text style={[flex.f1, textColor.black, font.md, { fontFamily: 'Rubik-Regular' }]}>
                10. görev
            </Text>
              <Icon style={[textAlign.alignItemsCenter, textColor.gray]} name="meh-rolling-eyes" size={28}></Icon>
            </View>
            <View style={[flex.row, margin.mt8]}>
              <Text style={[flex.f1, textColor.black, font.md, { fontFamily: 'Rubik-Regular' }]}>
                11. görev
            </Text>
              <Icon style={[textAlign.alignItemsCenter, textColor.gray]} name="meh-rolling-eyes" size={28}></Icon>
            </View>
            <View style={[flex.row, margin.mt8]}>
              <Text style={[flex.f1, textColor.black, font.md, { fontFamily: 'Rubik-Regular' }]}>
                12. görev
            </Text>
              <Icon style={[textAlign.alignItemsCenter, textColor.gray]} name="meh-rolling-eyes" size={28}></Icon>
            </View>
            <View style={[flex.row, margin.mt8]}>
              <Text style={[flex.f1, textColor.black, font.md, { fontFamily: 'Rubik-Regular' }]}>
                13. görev
            </Text>
              <Icon style={[textAlign.alignItemsCenter, textColor.gray]} name="meh-rolling-eyes" size={28}></Icon>
            </View>
            <View style={[flex.row, margin.mt8]}>
              <Text style={[flex.f1, textColor.black, font.md, { fontFamily: 'Rubik-Regular' }]}>
                14. görev
            </Text>
              <Icon style={[textAlign.alignItemsCenter, textColor.gray]} name="meh-rolling-eyes" size={28}></Icon>
            </View>
            <View style={[flex.row, margin.mt8]}>
              <Text style={[flex.f1, textColor.black, font.md, { fontFamily: 'Rubik-Regular' }]}>
                15. görev
            </Text>
              <Icon style={[textAlign.alignItemsCenter, textColor.gray]} name="meh-rolling-eyes" size={28}></Icon>
            </View>
            <View style={[flex.row, margin.mt8]}>
              <Text style={[flex.f1, textColor.black, font.md, { fontFamily: 'Rubik-Regular' }]}>
                16. görev
            </Text>
              <Icon style={[textAlign.alignItemsCenter, textColor.gray]} name="meh-rolling-eyes" size={28}></Icon>
            </View>
            <View style={[flex.row, margin.mt8]}>
              <Text style={[flex.f1, textColor.black, font.md, { fontFamily: 'Rubik-Regular' }]}>
                17. görev
            </Text>
              <Icon style={[textAlign.alignItemsCenter, textColor.gray]} name="meh-rolling-eyes" size={28}></Icon>
            </View>
            <View style={[flex.row, margin.mt8]}>
              <Text style={[flex.f1, textColor.black, font.md, { fontFamily: 'Rubik-Regular' }]}>
                18. görev
            </Text>
              <Icon style={[textAlign.alignItemsCenter, textColor.gray]} name="meh-rolling-eyes" size={28}></Icon>
            </View>
            <View style={[flex.row, margin.mt8]}>
              <Text style={[flex.f1, textColor.black, font.md, { fontFamily: 'Rubik-Regular' }]}>
                19. görev
            </Text>
              <Icon style={[textAlign.alignItemsCenter, textColor.gray]} name="meh-rolling-eyes" size={28}></Icon>
            </View>
            <View style={[flex.row, margin.mt8]}>
              <Text style={[flex.f1, textColor.black, font.md, { fontFamily: 'Rubik-Regular' }]}>
                20. görev
            </Text>
              <Icon style={[textAlign.alignItemsCenter, textColor.gray]} name="meh-rolling-eyes" size={28}></Icon>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity activeOpacity={0.85} style={[margin.mla, margin.mra, padding.ph10, padding.pv5, border.br10, bgColor.success, margin.mt8]}>
          <Text style={[textColor.white, font.xl2]}>Ekle</Text>
        </TouchableOpacity>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  main: {
    height: "100%",
    backgroundColor: "black"
    // backgroundColor: 'rgb(248, 250, 251)'
  }
});

export default App;
