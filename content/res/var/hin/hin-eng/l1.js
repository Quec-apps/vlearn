//Lesson1
k=0;t='a';

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "घर"; window[t+"-m"+k] = "hin/level1/house.mp3"; //m is music
window[t+"-n"+k] = "House"; window[t+"-n-m"+k] = "घर"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "water"; window[t+"-l1-"+k] = "/level1/water.png";
window[t+"-o2"+k] = "tea"; window[t+"-l2-"+k] = "/level1/tea.png";
window[t+"-o3"+k] = "house"; window[t+"-l3-"+k] = "/level1/house.png";
window[t+"-o4"+k] = "car"; window[t+"-l4-"+k] = "/level1/car.png";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "गाड़ी"; window[t+"-m"+k] = "hin/level1/car.mp3"; //m is music
window[t+"-n"+k] = "Car"; window[t+"-n-m"+k] = "गाड़ी";
window[t+"-o1"+k] = "hot"; window[t+"-l1-"+k] = "/level1/hot.png";
window[t+"-o2"+k] = "house"; window[t+"-l2-"+k] = "/level1/house.png";
window[t+"-o3"+k] = "car"; window[t+"-l3-"+k] = "/level1/car.png";
window[t+"-o4"+k] = "cold"; window[t+"-l4-"+k] = "/level1/cold.png";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "मेरी गाड़ी"; window[t+"-m"+k] = "hin/level1/my-car.mp3"; //m is music
window[t+"-n"+k] = "My"; window[t+"-n-m"+k] = "मेरी / मेरा";
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "car";
window[t+"-o2"+k] = "what";
window[t+"-o3"+k] = "her";
window[t+"-o4"+k] = "small";
window[t+"-o5"+k] = "my";
window[t+"-o6"+k] = "cold";
window[t+"-ans"+k] = [5,1];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "तुम्हारी गाड़ी"; window[t+"-m"+k] = "hin/level1/your-car.mp3"; //m is music
window[t+"-n"+k] = "Your"; window[t+"-n-m"+k] = "तुम्हारी / तुम्हारा";
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "big";
window[t+"-o2"+k] = "cold";
window[t+"-o3"+k] = "my";
window[t+"-o4"+k] = "your";
window[t+"-o5"+k] = "car";
window[t+"-o6"+k] = "tea";
window[t+"-ans"+k] = [4,5];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "your"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "तुम्हारा";
window[t+"-o2"+k] = "बड़ा";
window[t+"-o3"+k] = "गाड़ी";
window[t+"-o4"+k] = "चाय";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "मेरा घर"; window[t+"-m"+k] = "hin/level1/my-house.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "water";
window[t+"-o2"+k] = "your";
window[t+"-o3"+k] = "house";
window[t+"-o4"+k] = "hot";
window[t+"-o5"+k] = "my";
window[t+"-o6"+k] = "small";
window[t+"-ans"+k] = [5,3];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "is"; window[t+"-m"+k] = null; //m is music
window[t+"-n"+k] = "is"; window[t+"-n-m"+k] = "है";
window[t+"-o1"+k] = "घर";
window[t+"-o2"+k] = "है";
window[t+"-o3"+k] = "गाड़ी";
window[t+"-o4"+k] = "ठंडा";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "मेरी गाड़ी बड़ी है"; window[t+"-m"+k] = "hin/level1/my-car-is-big.mp3"; //m is music
window[t+"-n"+k] = "big"; window[t+"-n-m"+k] = "बड़ी / बड़ा";
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "is";
window[t+"-o2"+k] = "big";
window[t+"-o3"+k] = "car";
window[t+"-o4"+k] = "my";
window[t+"-o5"+k] = "house";
window[t+"-o6"+k] = "her";
window[t+"-o7"+k] = "your";
window[t+"-o8"+k] = "cold";
window[t+"-ans"+k] = [4,3,1,2];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "big"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "तुम्हारा";
window[t+"-o2"+k] = "बड़ा";
window[t+"-o3"+k] = "छोटा";
window[t+"-o4"+k] = "है";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "मेरी गाड़ी छोटी है"; window[t+"-m"+k] = "hin/level1/my-car-is-small.mp3"; //m is music
window[t+"-n"+k] = "small"; window[t+"-n-m"+k] = "छोटी / छोटा";
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "is";
window[t+"-o2"+k] = "big";
window[t+"-o3"+k] = "her";
window[t+"-o4"+k] = "my";
window[t+"-o5"+k] = "house";
window[t+"-o6"+k] = "car";
window[t+"-o7"+k] = "small";
window[t+"-o8"+k] = "cold";
window[t+"-ans"+k] = [4,6,1,7];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "small"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "तुम्हारा";
window[t+"-o2"+k] = "बड़ा";
window[t+"-o3"+k] = "छोटा";
window[t+"-o4"+k] = "है";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "match";
window[t+"-l"+k] = 4; //how many options are there
window[t+"-o-l-1"+k] = "car"; window[t+"-o-r-1"+k] = "गाड़ी";
window[t+"-o-l-2"+k] = "big"; window[t+"-o-r-2"+k] = "बड़ा";
window[t+"-o-l-3"+k] = "my"; window[t+"-o-r-3"+k] = "मेरा";
window[t+"-o-l-4"+k] = "is"; window[t+"-o-r-4"+k] = "है";
window[t+"-o-l-5"+k] = "your"; window[t+"-o-r-5"+k] = "तुम्हारा";

k++;
window[t+"-type"+k] = "match";
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o-l-1"+k] = "small"; window[t+"-o-r-1"+k] = "छोटा";
window[t+"-o-l-2"+k] = "is"; window[t+"-o-r-2"+k] = "है";
window[t+"-o-l-3"+k] = "car"; window[t+"-o-r-3"+k] = "गाड़ी";
window[t+"-o-l-4"+k] = "big"; window[t+"-o-r-4"+k] = "बड़ा";
window[t+"-o-l-5"+k] = "house"; window[t+"-o-r-5"+k] = "घर";

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "hin/level1/your-house-is-small.mp3"; //file name
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "छोटा";
window[t+"-o2"+k] = "है";
window[t+"-o3"+k] = "घर";
window[t+"-o4"+k] = "उसका";
window[t+"-o5"+k] = "तुम्हारा";
window[t+"-o6"+k] = "ठंडा";
window[t+"-o7"+k] = "और";
window[t+"-o8"+k] = "मेरा";
window[t+"-ans"+k] = [5,3,1,2];

k++;
window[t+"-type"+k] = "match";
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o-l-1"+k] = "car"; window[t+"-o-r-1"+k] = "गाड़ी";
window[t+"-o-l-2"+k] = "big"; window[t+"-o-r-2"+k] = "बड़ा";
window[t+"-o-l-3"+k] = "my"; window[t+"-o-r-3"+k] = "मेरा";
window[t+"-o-l-4"+k] = "your"; window[t+"-o-r-4"+k] = "तुम्हारा";
window[t+"-o-l-5"+k] = "house"; window[t+"-o-r-5"+k] = "घर";



//Lesson2

lesson1Total = k;
k=0;t='b';

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "पानी"; window[t+"-m"+k] = "hin/level1/water.mp3"; //m is music
window[t+"-n"+k] = "Water"; window[t+"-n-m"+k] = "पानी";
window[t+"-o1"+k] = "tea"; window[t+"-l1-"+k] = "/level1/tea.png";
window[t+"-o2"+k] = "water"; window[t+"-l2-"+k] = "/level1/water.png";
window[t+"-o3"+k] = "cold"; window[t+"-l3-"+k] = "/level1/cold.png";
window[t+"-o4"+k] = "hot"; window[t+"-l4-"+k] = "/level1/hot.png";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "water"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "मेरा";
window[t+"-o2"+k] = "चाय";
window[t+"-o3"+k] = "पानी";
window[t+"-o4"+k] = "ठंडा";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "चाय"; window[t+"-m"+k] = "hin/level1/tea.mp3"; //m is music
window[t+"-n"+k] = "Tea"; window[t+"-n-m"+k] = "चाय";
window[t+"-o1"+k] = "cold"; window[t+"-l1-"+k] = "/level1/cold.png";
window[t+"-o2"+k] = "tea"; window[t+"-l2-"+k] = "/level1/tea.png";
window[t+"-o3"+k] = "water"; window[t+"-l3-"+k] = "/level1/water.png";
window[t+"-o4"+k] = "hot"; window[t+"-l4-"+k] = "/level1/hot.png";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "tea"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "बड़ा";
window[t+"-o2"+k] = "चाय";
window[t+"-o3"+k] = "घर";
window[t+"-o4"+k] = "ठंडा";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "ठंडा"; window[t+"-m"+k] = "hin/level1/cold.mp3"; //m is music
window[t+"-n"+k] = "Cold"; window[t+"-n-m"+k] = "ठंडा";
window[t+"-o1"+k] = "tea"; window[t+"-l1-"+k] = "/level1/tea.png";
window[t+"-o2"+k] = "hot"; window[t+"-l2-"+k] = "/level1/hot.png";
window[t+"-o3"+k] = "cold"; window[t+"-l3-"+k] = "/level1/cold.png";
window[t+"-o4"+k] = "water"; window[t+"-l4-"+k] = "/level1/water.png";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "ठंडा पानी"; window[t+"-m"+k] = "hin/level1/cold-water.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "water";
window[t+"-o2"+k] = "my";
window[t+"-o3"+k] = "what";
window[t+"-o4"+k] = "big";
window[t+"-o5"+k] = "hot";
window[t+"-o6"+k] = "cold";
window[t+"-ans"+k] = [6,1];

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "गरम"; window[t+"-m"+k] = "hin/level1/hot.mp3"; //m is music
window[t+"-n"+k] = "Hot"; window[t+"-n-m"+k] = "गरम";
window[t+"-o1"+k] = "tea"; window[t+"-l1-"+k] = "/level1/tea.png";
window[t+"-o2"+k] = "hot"; window[t+"-l2-"+k] = "/level1/hot.png";
window[t+"-o3"+k] = "cold"; window[t+"-l3-"+k] = "/level1/cold.png";
window[t+"-o4"+k] = "water"; window[t+"-l4-"+k] = "/level1/water.png";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "गरम पानी"; window[t+"-m"+k] = "hin/level1/hot-water.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "water";
window[t+"-o2"+k] = "my";
window[t+"-o3"+k] = "what";
window[t+"-o4"+k] = "big";
window[t+"-o5"+k] = "hot";
window[t+"-o6"+k] = "cold";
window[t+"-ans"+k] = [5,1];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "तुम्हारी गाड़ी और मेरा घर"; window[t+"-m"+k] = "hin/level1/your-car-and-my-house.mp3"; //m is music
window[t+"-n"+k] = "और"; window[t+"-n-m"+k] = "and"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "house";
window[t+"-o2"+k] = "hot";
window[t+"-o3"+k] = "your";
window[t+"-o4"+k] = "my";
window[t+"-o5"+k] = "tea";
window[t+"-o6"+k] = "and";
window[t+"-o7"+k] = "she";
window[t+"-o8"+k] = "car";
window[t+"-ans"+k] = [3,8,6,4,1];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "hin/level1/hot-and-cold.mp3"; //file name
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "मेरा";
window[t+"-o2"+k] = "गरम";
window[t+"-o3"+k] = "ठंडा";
window[t+"-o4"+k] = "उसकी";
window[t+"-o5"+k] = "छोटा";
window[t+"-o6"+k] = "और";
window[t+"-o7"+k] = "चाय";
window[t+"-ans"+k] = [2,6,3];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "गरम चाय"; window[t+"-m"+k] = "hin/level1/hot-tea.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "tea";
window[t+"-o2"+k] = "water";
window[t+"-o3"+k] = "what";
window[t+"-o4"+k] = "your";
window[t+"-o5"+k] = "hot";
window[t+"-o6"+k] = "cold";
window[t+"-ans"+k] = [5,1];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Hot tea and cold water"; window[t+"-m"+k] = null; //m is music
window[t+"-n"+k] = "और"; window[t+"-n-m"+k] = "and"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 9; //how many options are there
window[t+"-o1"+k] = "तुम्हारा";
window[t+"-o2"+k] = "गरम";
window[t+"-o3"+k] = "नाम";
window[t+"-o4"+k] = "चाय";
window[t+"-o5"+k] = "बड़ा";
window[t+"-o6"+k] = "उसकी";
window[t+"-o7"+k] = "पानी";
window[t+"-o8"+k] = "ठंडा";
window[t+"-o9"+k] = "और";
window[t+"-ans"+k] = [2,4,9,8,7];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Hot and cold"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "उसकी";
window[t+"-o2"+k] = "नाम";
window[t+"-o3"+k] = "गरम";
window[t+"-o4"+k] = "मेरा";
window[t+"-o5"+k] = "और";
window[t+"-o6"+k] = "बड़ा";
window[t+"-o7"+k] = "ठंडा";
window[t+"-ans"+k] = [3,5,7];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My tea is hot"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "चाय";
window[t+"-o2"+k] = "घर";
window[t+"-o3"+k] = "गरम";
window[t+"-o4"+k] = "है";
window[t+"-o5"+k] = "बड़ा";
window[t+"-o6"+k] = "गाड़ी";
window[t+"-o7"+k] = "मेरा";
window[t+"-o8"+k] = "उसका";
window[t+"-ans"+k] = [7,1,3,4];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Your car and my house"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 9; //how many options are there
window[t+"-o1"+k] = "घर";
window[t+"-o2"+k] = "गाड़ी";
window[t+"-o3"+k] = "उसका";
window[t+"-o4"+k] = "मेरा";
window[t+"-o5"+k] = "और";
window[t+"-o6"+k] = "उसकी";
window[t+"-o7"+k] = "ठंडा";
window[t+"-o8"+k] = "चाय";
window[t+"-o9"+k] = "तुम्हारा";
window[t+"-ans"+k] = [9,2,5,4,1];

lesson2Total = k;
k=0;t='c';

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "क्या?"; window[t+"-m"+k] = "hin/level1/what.mp3"; //m is music
window[t+"-n"+k] = "What"; window[t+"-n-m"+k] = "क्या";
window[t+"-o1"+k] = "and";
window[t+"-o2"+k] = "big";
window[t+"-o3"+k] = "what";
window[t+"-o4"+k] = "your";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "what"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "क्या";
window[t+"-o2"+k] = "छोटा";
window[t+"-o3"+k] = "ठंडा";
window[t+"-o4"+k] = "बड़ा";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "उसकी गाड़ी"; window[t+"-m"+k] = "hin/level1/her-car.mp3"; //m is music
window[t+"-n"+k] = "Her"; window[t+"-n-m"+k] = "उसकी";
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o1"+k] = "tea";
window[t+"-o2"+k] = "cold";
window[t+"-o3"+k] = "my";
window[t+"-o4"+k] = "car";
window[t+"-o5"+k] = "her";
window[t+"-ans"+k] = [5,4];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "her"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "घर";
window[t+"-o2"+k] = "उसकी";
window[t+"-o3"+k] = "छोटा";
window[t+"-o4"+k] = "मेरा";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "his"; window[t+"-m"+k] = null; //m is music
window[t+"-n"+k] = "His"; window[t+"-n-m"+k] = "उसका";
window[t+"-o1"+k] = "घर";
window[t+"-o2"+k] = "उसका";
window[t+"-o3"+k] = "छोटा";
window[t+"-o4"+k] = "मेरा";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "उसकी चाय गरम है"; window[t+"-m"+k] = "hin/level1/her-tea-is-hot.mp3"; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "is";
window[t+"-o2"+k] = "tea";
window[t+"-o3"+k] = "hot";
window[t+"-o4"+k] = "car";
window[t+"-o5"+k] = "Aamir";
window[t+"-o6"+k] = "her";
window[t+"-o7"+k] = "water";
window[t+"-ans"+k] = [6,2,1,3];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "मेरा नाम"; window[t+"-m"+k] = "hin/level1/my-name.mp3"; //m is music
window[t+"-n"+k] = "नाम"; window[t+"-n-m"+k] = "name"; //n means new word, n-m means new word's meaning
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "hot";
window[t+"-o2"+k] = "is";
window[t+"-o3"+k] = "tea";
window[t+"-o4"+k] = "she";
window[t+"-o5"+k] = "my";
window[t+"-o6"+k] = "name";
window[t+"-o7"+k] = "water";
window[t+"-ans"+k] = [5,6];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "name"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "छोटा";
window[t+"-o2"+k] = "नाम";
window[t+"-o3"+k] = "है";
window[t+"-o4"+k] = "ठंडा";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "उसका नाम क्या है?"; window[t+"-m"+k] = "hin/level1/what-is-her-name.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "what";
window[t+"-o2"+k] = "small";
window[t+"-o3"+k] = "hot";
window[t+"-o4"+k] = "her";
window[t+"-o5"+k] = "is";
window[t+"-o6"+k] = "name";
window[t+"-ans"+k] = [1,5,4,6];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "उसका चाय ठंडी है"; window[t+"-m"+k] = "hin/level1/his-tea-is-cold.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "what";
window[t+"-o2"+k] = "is";
window[t+"-o3"+k] = "his";
window[t+"-o4"+k] = "big";
window[t+"-o5"+k] = "cold";
window[t+"-o6"+k] = "tea";
window[t+"-o7"+k] = "car";
window[t+"-o8"+k] = "name";
window[t+"-ans"+k] = [3,6,2,5];

k++;
window[t+"-type"+k] = "match";
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o-l-1"+k] = "is"; window[t+"-o-r-1"+k] = "है";
window[t+"-o-l-2"+k] = "water"; window[t+"-o-r-2"+k] = "पानी";
window[t+"-o-l-3"+k] = "big"; window[t+"-o-r-3"+k] = "बड़ा";
window[t+"-o-l-4"+k] = "name"; window[t+"-o-r-4"+k] = "नाम";
window[t+"-o-l-5"+k] = "house"; window[t+"-o-r-5"+k] = "घर";

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "hin/level1/his-name-is-john.mp3"; //file name
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "उसका";
window[t+"-o2"+k] = "जॉन";
window[t+"-o3"+k] = "गाड़ी";
window[t+"-o4"+k] = "छोटा";
window[t+"-o5"+k] = "है";
window[t+"-o6"+k] = "मेरा";
window[t+"-o7"+k] = "घर";
window[t+"-o8"+k] = "नाम";
window[t+"-ans"+k] = [1,8,2,5];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "her name"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "नाम";
window[t+"-o2"+k] = "उसकी";
window[t+"-o3"+k] = "पानी";
window[t+"-o4"+k] = "घर";
window[t+"-o5"+k] = "छोटा";
window[t+"-o6"+k] = "गरम";
window[t+"-ans"+k] = [2,1];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "His tea is cold"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "नाम";
window[t+"-o2"+k] = "चाय";
window[t+"-o3"+k] = "उसका";
window[t+"-o4"+k] = "छोटा";
window[t+"-o5"+k] = "है";
window[t+"-o6"+k] = "ठंडा";
window[t+"-o7"+k] = "गाड़ी";
window[t+"-o8"+k] = "तुम्हारा";
window[t+"-ans"+k] = [3,2,6,5];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "His name is John"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "नाम";
window[t+"-o2"+k] = "चाय";
window[t+"-o3"+k] = "उसका";
window[t+"-o4"+k] = "छोटा";
window[t+"-o5"+k] = "है";
window[t+"-o6"+k] = "ठंडा";
window[t+"-o7"+k] = "गाड़ी";
window[t+"-o8"+k] = "जॉन";
window[t+"-ans"+k] = [3,1,8,5];

lesson3Total = k;
k=0;t='d';

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "house"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "गाड़ी";
window[t+"-o2"+k] = "घर";
window[t+"-o3"+k] = "है";
window[t+"-o4"+k] = "नाम";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "उसका नाम क्या है"; window[t+"-m"+k] = "hin/level1/what-is-her-name.mp3"; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "big";
window[t+"-o2"+k] = "his";
window[t+"-o3"+k] = "tea";
window[t+"-o4"+k] = "name";
window[t+"-o5"+k] = "what";
window[t+"-o6"+k] = "is";
window[t+"-o7"+k] = "house";
window[t+"-ans"+k] = [5,6,2,4];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "car"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "है";
window[t+"-o2"+k] = "तुम्हारा";
window[t+"-o3"+k] = "गाड़ी";
window[t+"-o4"+k] = "नाम";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "तुम्हारा पानी गरम है"; window[t+"-m"+k] = "hin/level1/your-water-is-hot.mp3"; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "your";
window[t+"-o2"+k] = "she";
window[t+"-o3"+k] = "tea";
window[t+"-o4"+k] = "name";
window[t+"-o5"+k] = "water";
window[t+"-o6"+k] = "is";
window[t+"-o7"+k] = "hot";
window[t+"-ans"+k] = [1,5,6,7];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "my"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "है";
window[t+"-o2"+k] = "तुम्हारा";
window[t+"-o3"+k] = "गाड़ी";
window[t+"-o4"+k] = "मेरा";
window[t+"-ans"+k] = 4;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "उसका नाम क्या है"; window[t+"-m"+k] = "hin/level1/what-is-his-name.mp3"; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "big";
window[t+"-o2"+k] = "his";
window[t+"-o3"+k] = "tea";
window[t+"-o4"+k] = "name";
window[t+"-o5"+k] = "what";
window[t+"-o6"+k] = "is";
window[t+"-o7"+k] = "house";
window[t+"-ans"+k] = [5,6,2,4];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "hin/level1/my-house-is-small.mp3"; //file name
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "मेरा";
window[t+"-o2"+k] = "गरम";
window[t+"-o3"+k] = "घर";
window[t+"-o4"+k] = "उसकी";
window[t+"-o5"+k] = "छोटा";
window[t+"-o6"+k] = "और";
window[t+"-o7"+k] = "है";
window[t+"-ans"+k] = [1,3,5,7];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "तुम्हारी गाड़ी और मेरा घर"; window[t+"-m"+k] = "hin/level1/your-car-and-my-house.mp3"; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "small";
window[t+"-o2"+k] = "my";
window[t+"-o3"+k] = "what";
window[t+"-o4"+k] = "car";
window[t+"-o5"+k] = "is";
window[t+"-o6"+k] = "your";
window[t+"-o7"+k] = "house";
window[t+"-o8"+k] = "and";
window[t+"-ans"+k] = [6,4,8,2,7];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "hin/level1/her-tea-is-cold.mp3"; //file name
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "मेरा";
window[t+"-o2"+k] = "गरम";
window[t+"-o3"+k] = "चाय";
window[t+"-o4"+k] = "उसका";
window[t+"-o5"+k] = "ठंडी";
window[t+"-o6"+k] = "और";
window[t+"-o7"+k] = "है";
window[t+"-ans"+k] = [4,3,5,7];

