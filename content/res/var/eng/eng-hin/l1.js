//Lesson1 [New Words]

k=0;t='a';

k++;
window[t+"-type"+k] = "message";
window[t+"-ti"+k] = "चलो शुरू करो!"; //title
window[t+"-msg"+k] = "हम सरल और सबसे अधिक उपयोग किए जाने वाले शब्दों को सीखकर शुरुआत कर सकते हैं।"; //message

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "House"; window[t+"-m"+k] = "eng/level1/house.mp3"; //m is music
window[t+"-n"+k] = "House"; window[t+"-n-m"+k] = "घर"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "पानी"; window[t+"-l1-"+k] = "/level1/water.png"; window[t+"-m1-"+k] = null;
window[t+"-o2"+k] = "चाय"; window[t+"-l2-"+k] = "/level1/tea.png"; window[t+"-m2-"+k] = null;
window[t+"-o3"+k] = "घर"; window[t+"-l3-"+k] = "/level1/house.png"; window[t+"-m3-"+k] = null;
window[t+"-o4"+k] = "गाड़ी"; window[t+"-l4-"+k] = "/level1/car.png"; window[t+"-m4-"+k] = null;
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Car"; window[t+"-m"+k] = "eng/level1/car.mp3"; //m is music
window[t+"-n"+k] = "Car"; window[t+"-n-m"+k] = "गाड़ी";
window[t+"-o1"+k] = "गरम"; window[t+"-l1-"+k] = "/level1/hot.png";
window[t+"-o2"+k] = "घर"; window[t+"-l2-"+k] = "/level1/house.png";
window[t+"-o3"+k] = "गाड़ी"; window[t+"-l3-"+k] = "/level1/car.png";
window[t+"-o4"+k] = "ठंडा"; window[t+"-l4-"+k] = "/level1/cold.png";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My car"; window[t+"-m"+k] = "eng/level1/my-car.mp3"; //m is music
window[t+"-n"+k] = "My"; window[t+"-n-m"+k] = "मेरी / मेरा";
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "गाड़ी";
window[t+"-o2"+k] = "क्या";
window[t+"-o3"+k] = "उसका";
window[t+"-o4"+k] = "छोटा";
window[t+"-o5"+k] = "मेरी";
window[t+"-o6"+k] = "ठंडा";
window[t+"-ans"+k] = [5,1];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Your car"; window[t+"-m"+k] = "eng/level1/your-car.mp3"; //m is music
window[t+"-n"+k] = "Your"; window[t+"-n-m"+k] = "तुम्हारी / तुम्हारा";
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "बड़ी";
window[t+"-o2"+k] = "ठंडा";
window[t+"-o3"+k] = "मेरी";
window[t+"-o4"+k] = "तुम्हारी";
window[t+"-o5"+k] = "गाड़ी";
window[t+"-o6"+k] = "चाय";
window[t+"-ans"+k] = [4,5];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "तुम्हारा"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "your";
window[t+"-o2"+k] = "big";
window[t+"-o3"+k] = "car";
window[t+"-o4"+k] = "tea";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My house"; window[t+"-m"+k] = "eng/level1/my-house.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "पानी";
window[t+"-o2"+k] = "तुम्हारा";
window[t+"-o3"+k] = "घर";
window[t+"-o4"+k] = "गरम";
window[t+"-o5"+k] = "मेरा";
window[t+"-o6"+k] = "छोटा";
window[t+"-ans"+k] = [5,3];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "है"; window[t+"-m"+k] = "hin/level1/is.mp3"; //m is music
window[t+"-n"+k] = "is"; window[t+"-n-m"+k] = "है";
window[t+"-o1"+k] = "house";
window[t+"-o2"+k] = "is";
window[t+"-o3"+k] = "car";
window[t+"-o4"+k] = "cold";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My car is big"; window[t+"-m"+k] = "eng/level1/my-car-is-big.mp3"; //m is music
window[t+"-n"+k] = "big"; window[t+"-n-m"+k] = "बड़ी / बड़ा";
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "है";
window[t+"-o2"+k] = "बड़ी";
window[t+"-o3"+k] = "गाड़ी";
window[t+"-o4"+k] = "मेरी";
window[t+"-o5"+k] = "घर";
window[t+"-o6"+k] = "उसका";
window[t+"-o7"+k] = "तुम्हारा";
window[t+"-o8"+k] = "ठंडा";
window[t+"-ans"+k] = [4,3,2,1];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "बड़ा"; window[t+"-m"+k] = "hin/level1/big.mp3"; //m is music
window[t+"-o1"+k] = "your";
window[t+"-o2"+k] = "big";
window[t+"-o3"+k] = "small";
window[t+"-o4"+k] = "is";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My car is small"; window[t+"-m"+k] = "eng/level1/my-car-is-small.mp3"; //m is music
window[t+"-n"+k] = "small"; window[t+"-n-m"+k] = "छोटी / छोटा";
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "है";
window[t+"-o2"+k] = "बड़ी";
window[t+"-o3"+k] = "उसका";
window[t+"-o4"+k] = "मेरी";
window[t+"-o5"+k] = "घर";
window[t+"-o6"+k] = "गाड़ी";
window[t+"-o7"+k] = "छोटी";
window[t+"-o8"+k] = "ठंडा";
window[t+"-ans"+k] = [4,6,7,1];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "छोटा"; window[t+"-m"+k] = "hin/level1/small.mp3"; //m is music
window[t+"-o1"+k] = "your";
window[t+"-o2"+k] = "big";
window[t+"-o3"+k] = "small";
window[t+"-o4"+k] = "is";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "match";
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o-l-1"+k] = "गाड़ी"; window[t+"-o-r-1"+k] = "car";
window[t+"-o-l-2"+k] = "बड़ा"; window[t+"-o-r-2"+k] = "big";
window[t+"-o-l-3"+k] = "मेरा"; window[t+"-o-r-3"+k] = "my";
window[t+"-o-l-4"+k] = "है"; window[t+"-o-r-4"+k] = "is";
window[t+"-o-l-5"+k] = "तुम्हारा"; window[t+"-o-r-5"+k] = "your";

k++;
window[t+"-type"+k] = "match";
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o-l-1"+k] = "छोटा"; window[t+"-o-r-1"+k] = "Small";
window[t+"-o-l-2"+k] = "है"; window[t+"-o-r-2"+k] = "is";
window[t+"-o-l-3"+k] = "गाड़ी"; window[t+"-o-r-3"+k] = "car";
window[t+"-o-l-4"+k] = "बड़ा"; window[t+"-o-r-4"+k] = "big";
window[t+"-o-l-5"+k] = "घर"; window[t+"-o-r-5"+k] = "house";

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level1/your-house-is-small.mp3"; //file name
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "small";
window[t+"-o2"+k] = "is";
window[t+"-o3"+k] = "house";
window[t+"-o4"+k] = "his";
window[t+"-o5"+k] = "your";
window[t+"-o6"+k] = "cold";
window[t+"-o7"+k] = "and";
window[t+"-o8"+k] = "my";
window[t+"-ans"+k] = [5,3,2,1];

k++;
window[t+"-type"+k] = "match";
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o-l-1"+k] = "गाड़ी"; window[t+"-o-r-1"+k] = "car";
window[t+"-o-l-2"+k] = "बड़ा"; window[t+"-o-r-2"+k] = "big";
window[t+"-o-l-3"+k] = "मेरा"; window[t+"-o-r-3"+k] = "my";
window[t+"-o-l-4"+k] = "तुम्हारा"; window[t+"-o-r-4"+k] = "your";
window[t+"-o-l-5"+k] = "घर"; window[t+"-o-r-5"+k] = "house";

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Water"; window[t+"-m"+k] = "eng/level1/water.mp3"; //m is music
window[t+"-n"+k] = "Water"; window[t+"-n-m"+k] = "पानी";
window[t+"-o1"+k] = "चाय"; window[t+"-l1-"+k] = "/level1/tea.png";
window[t+"-o2"+k] = "पानी"; window[t+"-l2-"+k] = "/level1/water.png";
window[t+"-o3"+k] = "ठंडा"; window[t+"-l3-"+k] = "/level1/cold.png";
window[t+"-o4"+k] = "गरम"; window[t+"-l4-"+k] = "/level1/hot.png";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "पानी"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "my";
window[t+"-o2"+k] = "tea";
window[t+"-o3"+k] = "water";
window[t+"-o4"+k] = "cold";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Tea"; window[t+"-m"+k] = "eng/level1/tea.mp3"; //m is music
window[t+"-n"+k] = "Tea"; window[t+"-n-m"+k] = "चाय";
window[t+"-o1"+k] = "ठंडा"; window[t+"-l1-"+k] = "/level1/cold.png";
window[t+"-o2"+k] = "चाय"; window[t+"-l2-"+k] = "/level1/tea.png";
window[t+"-o3"+k] = "पानी"; window[t+"-l3-"+k] = "/level1/water.png";
window[t+"-o4"+k] = "गरम"; window[t+"-l4-"+k] = "/level1/hot.png";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "चाय"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "big";
window[t+"-o2"+k] = "tea";
window[t+"-o3"+k] = "house";
window[t+"-o4"+k] = "cold";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Cold"; window[t+"-m"+k] = "eng/level1/cold.mp3"; //m is music
window[t+"-n"+k] = "Cold"; window[t+"-n-m"+k] = "ठंडा";
window[t+"-o1"+k] = "चाय"; window[t+"-l1-"+k] = "/level1/tea.png";
window[t+"-o2"+k] = "गरम"; window[t+"-l2-"+k] = "/level1/hot.png";
window[t+"-o3"+k] = "ठंडा"; window[t+"-l3-"+k] = "/level1/cold.png";
window[t+"-o4"+k] = "पानी"; window[t+"-l4-"+k] = "/level1/water.png";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Cold water"; window[t+"-m"+k] = "eng/level1/cold-water.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "पानी";
window[t+"-o2"+k] = "मेरी";
window[t+"-o3"+k] = "क्या";
window[t+"-o4"+k] = "बड़ा";
window[t+"-o5"+k] = "गरम";
window[t+"-o6"+k] = "ठंडा";
window[t+"-ans"+k] = [6,1];

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Hot"; window[t+"-m"+k] = "eng/level1/hot.mp3"; //m is music
window[t+"-n"+k] = "Hot"; window[t+"-n-m"+k] = "गरम";
window[t+"-o1"+k] = "चाय"; window[t+"-l1-"+k] = "/level1/tea.png";
window[t+"-o2"+k] = "गरम"; window[t+"-l2-"+k] = "/level1/hot.png";
window[t+"-o3"+k] = "ठंडा"; window[t+"-l3-"+k] = "/level1/cold.png";
window[t+"-o4"+k] = "पानी"; window[t+"-l4-"+k] = "/level1/water.png";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Hot water"; window[t+"-m"+k] = "eng/level1/hot-water.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "पानी";
window[t+"-o2"+k] = "मेरी";
window[t+"-o3"+k] = "क्या";
window[t+"-o4"+k] = "बड़ा";
window[t+"-o5"+k] = "गरम";
window[t+"-o6"+k] = "ठंडा";
window[t+"-ans"+k] = [5,1];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Your car and my house"; window[t+"-m"+k] = "eng/level1/your-car-and-my-house.mp3"; //m is music
window[t+"-n"+k] = "and"; window[t+"-n-m"+k] = "और"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "घर";
window[t+"-o2"+k] = "गरम";
window[t+"-o3"+k] = "तुम्हारी";
window[t+"-o4"+k] = "मेरा";
window[t+"-o5"+k] = "चाय";
window[t+"-o6"+k] = "और";
window[t+"-o7"+k] = "उसका";
window[t+"-o8"+k] = "गाडी";
window[t+"-ans"+k] = [3,8,6,4,1];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "What?"; window[t+"-m"+k] = "eng/level1/what.mp3"; //m is music
window[t+"-n"+k] = "What"; window[t+"-n-m"+k] = "क्या";
window[t+"-o1"+k] = "और";
window[t+"-o2"+k] = "बड़ा";
window[t+"-o3"+k] = "क्या";
window[t+"-o4"+k] = "तुम्हारा";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "क्या"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "what";
window[t+"-o2"+k] = "small";
window[t+"-o3"+k] = "cold";
window[t+"-o4"+k] = "big";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Her car"; window[t+"-m"+k] = "eng/level1/her-car.mp3"; //m is music
window[t+"-n"+k] = "Her"; window[t+"-n-m"+k] = "उसकी";
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o1"+k] = "चाय";
window[t+"-o2"+k] = "ठंडा";
window[t+"-o3"+k] = "मेरा";
window[t+"-o4"+k] = "गाड़ी ";
window[t+"-o5"+k] = "उसकी";
window[t+"-ans"+k] = [5,4];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "उसकी"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "house";
window[t+"-o2"+k] = "her";
window[t+"-o3"+k] = "small";
window[t+"-o4"+k] = "my";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "उसका"; window[t+"-m"+k] = null; //m is music
window[t+"-n"+k] = "His"; window[t+"-n-m"+k] = "उसका";
window[t+"-o1"+k] = "house";
window[t+"-o2"+k] = "his";
window[t+"-o3"+k] = "my";
window[t+"-o4"+k] = "small";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Her tea is hot"; window[t+"-m"+k] = "eng/level1/her-tea-is-hot.mp3"; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "है";
window[t+"-o2"+k] = "चाय";
window[t+"-o3"+k] = "गरम";
window[t+"-o4"+k] = "गाड़ी";
window[t+"-o5"+k] = "आमिर";
window[t+"-o6"+k] = "उसकी";
window[t+"-o7"+k] = "पानी";
window[t+"-ans"+k] = [6,2,3,1];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My name"; window[t+"-m"+k] = "eng/level1/my-name.mp3"; //m is music
window[t+"-n"+k] = "name"; window[t+"-n-m"+k] = "नाम"; //n means new word, n-m means new word's meaning
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "गरम";
window[t+"-o2"+k] = "है";
window[t+"-o3"+k] = "चाय";
window[t+"-o4"+k] = "उसका";
window[t+"-o5"+k] = "मेरा";
window[t+"-o6"+k] = "नाम";
window[t+"-o7"+k] = "पानी";
window[t+"-ans"+k] = [5,6];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "नाम"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "small";
window[t+"-o2"+k] = "name";
window[t+"-o3"+k] = "is";
window[t+"-o4"+k] = "cold";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Girl"; window[t+"-m"+k] = "eng/level2/girl.mp3"; //m is music
window[t+"-n"+k] = "girl"; window[t+"-n-m"+k] = "लड़की"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "पानी"; window[t+"-l1-"+k] = "/level1/water.png";
window[t+"-o2"+k] = "छात्र"; window[t+"-l2-"+k] = "/level2/student.png";
window[t+"-o3"+k] = "लड़का"; window[t+"-l3-"+k] = "/level2/boy.png";
window[t+"-o4"+k] = "लड़की"; window[t+"-l4-"+k] = "/level2/girl.png";
window[t+"-ans"+k] = 4;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Student"; window[t+"-m"+k] = "eng/level2/student.mp3"; //m is music
window[t+"-n"+k] = "student"; window[t+"-n-m"+k] = "छात्र"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "गरम"; window[t+"-l1-"+k] = "/level1/hot.png";
window[t+"-o2"+k] = "छात्र"; window[t+"-l2-"+k] = "/level2/student.png";
window[t+"-o3"+k] = "लड़का"; window[t+"-l3-"+k] = "/level2/boy.png";
window[t+"-o4"+k] = "लड़की"; window[t+"-l4-"+k] = "/level2/girl.png";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "छात्र"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "cold";
window[t+"-o2"+k] = "house";
window[t+"-o3"+k] = "student";
window[t+"-o4"+k] = "a";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My student"; window[t+"-m"+k] = "eng/level2/my-student.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "वह";
window[t+"-o2"+k] = "छात्र";
window[t+"-o3"+k] = "ठंडा";
window[t+"-o4"+k] = "मेरा";
window[t+"-o5"+k] = "आपका";
window[t+"-o6"+k] = "क्या";
window[t+"-ans"+k] = [4,2];

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Boy"; window[t+"-m"+k] = "eng/level2/boy.mp3"; //m is music
window[t+"-n"+k] = "boy"; window[t+"-n-m"+k] = "लड़का"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "गरम"; window[t+"-l1-"+k] = "/level1/hot.png";
window[t+"-o2"+k] = "छात्र"; window[t+"-l2-"+k] = "/level2/student.png";
window[t+"-o3"+k] = "लड़का"; window[t+"-l3-"+k] = "/level2/boy.png";
window[t+"-o4"+k] = "लड़की"; window[t+"-l4-"+k] = "/level2/girl.png";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "A boy"; window[t+"-m"+k] = "eng/level2/a-boy.mp3"; //m is music
window[t+"-n"+k] = "a"; window[t+"-n-m"+k] = "एक"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "वह";
window[t+"-o2"+k] = "छात्र";
window[t+"-o3"+k] = "ठंडा";
window[t+"-o4"+k] = "एक";
window[t+"-o5"+k] = "आपका";
window[t+"-o6"+k] = "लड़का";
window[t+"-ans"+k] = [4,6];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "I am a boy"; window[t+"-m"+k] = "eng/level2/i-am-a-boy.mp3"; //m is music
window[t+"-n"+k] = "I मैं"; window[t+"-n-m"+k] = "am हूं"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "लड़का";
window[t+"-o2"+k] = "हूं";
window[t+"-o3"+k] = "और";
window[t+"-o4"+k] = "एक";
window[t+"-o5"+k] = "भारत";
window[t+"-o6"+k] = "मैं";
window[t+"-o7"+k] = "औरत";
window[t+"-o8"+k] = "आपका";
window[t+"-ans"+k] = [6,4,1,2];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "मैं"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "cold";
window[t+"-o2"+k] = "I";
window[t+"-o3"+k] = "name";
window[t+"-o4"+k] = "a";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "I am ____ student"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "an";
window[t+"-o2"+k] = "am";
window[t+"-o3"+k] = "a";
window[t+"-o4"+k] = "is";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "match";
window[t+"-l"+k] = 5; //how many options are there
window[t+"-o-l-1"+k] = "लड़की"; window[t+"-o-r-1"+k] = "girl";
window[t+"-o-l-2"+k] = "तुम्हारा"; window[t+"-o-r-2"+k] = "your";
window[t+"-o-l-3"+k] = "पानी"; window[t+"-o-r-3"+k] = "water";
window[t+"-o-l-4"+k] = "चाय"; window[t+"-o-r-4"+k] = "tea";
window[t+"-o-l-5"+k] = "नाम"; window[t+"-o-r-5"+k] = "name";


k++;
window[t+"-type"+k] = "message";
window[t+"-ti"+k] = "सीखे हुए शब्द"; //title
window[t+"-msg"+k] = "आइए देखें कि आपने अब तक क्या सीखा है।"; //message

k++;
window[t+"-type"+k] = "conversation"; xt=0;
xt++;window[t+"-q"+xt+"-l"+k] = "House"; window[t+"-t"+xt+"-l"+k] = "घर"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/house.mp3'; //l=left,r=right q=ques,t=translated, m=music
xt++;window[t+"-q"+xt+"-l"+k] = "Car"; window[t+"-t"+xt+"-l"+k] = "गाड़ी"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/car.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "My"; window[t+"-t"+xt+"-l"+k] = "मेरा"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/my.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Your"; window[t+"-t"+xt+"-l"+k] = "तुम्हारा/आपका"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/your.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "is"; window[t+"-t"+xt+"-l"+k] = "है"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/is.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "big"; window[t+"-t"+xt+"-l"+k] = "बड़ा"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/big.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "small"; window[t+"-t"+xt+"-l"+k] = "छोटा"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/small.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Water"; window[t+"-t"+xt+"-l"+k] = "पानी"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/water.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Tea"; window[t+"-t"+xt+"-l"+k] = "चाय"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/tea.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Cold"; window[t+"-t"+xt+"-l"+k] = "ठंडा"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/cold.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Hot"; window[t+"-t"+xt+"-l"+k] = "गरम"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/hot.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "and"; window[t+"-t"+xt+"-l"+k] = "और"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/and.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "What"; window[t+"-t"+xt+"-l"+k] = "क्या"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/what.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Her"; window[t+"-t"+xt+"-l"+k] = "उसकी"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/her.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "His"; window[t+"-t"+xt+"-l"+k] = "उसका"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/his.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "name"; window[t+"-t"+xt+"-l"+k] = "नाम"; window[t+"-q"+xt+"-m"+k] = 'eng/level1/name.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Girl"; window[t+"-t"+xt+"-l"+k] = "लड़की"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/girl.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Student"; window[t+"-t"+xt+"-l"+k] = "छात्र"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/student.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "boy"; window[t+"-t"+xt+"-l"+k] = "लड़का"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/boy.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "a"; window[t+"-t"+xt+"-l"+k] = "एक"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/a.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "I"; window[t+"-t"+xt+"-l"+k] = "मैं"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/i.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "am"; window[t+"-t"+xt+"-l"+k] = "हूँ"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/am.mp3';
window[t+"-len"+k]=xt;


//Lesson2

lesson1Total = k;
k=0;t='b';

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "India"; window[t+"-m"+k] = "eng/level2/india.mp3"; //m is music
window[t+"-n"+k] = "India"; window[t+"-n-m"+k] = "भारत"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "छात्र"; window[t+"-l1-"+k] = "/level2/student.png";
window[t+"-o2"+k] = "लड़का"; window[t+"-l2-"+k] = "/level2/boy.png";
window[t+"-o3"+k] = "भारत"; window[t+"-l3-"+k] = "/level2/india.png";
window[t+"-o4"+k] = "लड़की"; window[t+"-l4-"+k] = "/level2/girl.png";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "My student is from india"; window[t+"-m"+k] = "eng/level2/my-student-is-from-india.mp3"; //m is music
window[t+"-n"+k] = "From"; window[t+"-n-m"+k] = "से"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 9; //how many options are there
window[t+"-o1"+k] = "भारत";
window[t+"-o2"+k] = "मेरा";
window[t+"-o3"+k] = "से";
window[t+"-o4"+k] = "है";
window[t+"-o5"+k] = "घर";
window[t+"-o6"+k] = "नाम";
window[t+"-o7"+k] = "उसका";
window[t+"-o8"+k] = "छात्र";
window[t+"-o9"+k] = "एक";
window[t+"-ans"+k] = [2,8,1,3,4];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "I am from delhi"; window[t+"-m"+k] = "eng/level2/i-am-from-delhi.mp3"; //m is music
window[t+"-n"+k] = "delhi"; window[t+"-n-m"+k] = "दिल्ली"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "आदमी";
window[t+"-o2"+k] = "तुम्हारा";
window[t+"-o3"+k] = "से";
window[t+"-o4"+k] = "हूँ";
window[t+"-o5"+k] = "मैं";
window[t+"-o6"+k] = "छात्र";
window[t+"-o7"+k] = "दिल्ली";
window[t+"-ans"+k] = [5,7,3,4];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "दिल्ली"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "car";
window[t+"-o2"+k] = "Delhi";
window[t+"-o3"+k] = "cold";
window[t+"-o4"+k] = "hot";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "You are from india"; window[t+"-m"+k] = "eng/level2/you-are-from-india.mp3"; //m is music
window[t+"-n"+k] = "you : तुम  , आप"; window[t+"-n-m"+k] = "are: हो , हैं"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "भारत";
window[t+"-o2"+k] = "तुम्हारा";
window[t+"-o3"+k] = "एक";
window[t+"-o4"+k] = "तुम";
window[t+"-o5"+k] = "हो";
window[t+"-o6"+k] = "मैं";
window[t+"-o7"+k] = "से";
window[t+"-ans"+k] = [4,1,7,5];

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level2/are-you-from-india.mp3"; //file name
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "from";
window[t+"-o2"+k] = "boy";
window[t+"-o3"+k] = "student";
window[t+"-o4"+k] = "she";
window[t+"-o5"+k] = "you";
window[t+"-o6"+k] = "are";
window[t+"-o7"+k] = "happy";
window[t+"-o8"+k] = "india";
window[t+"-ans"+k] = [6,5,1,8];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "You ____ from Delhi."; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "am";
window[t+"-o2"+k] = "is";
window[t+"-o3"+k] = "a";
window[t+"-o4"+k] = "are";
window[t+"-ans"+k] = 4;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "You are from india"; window[t+"-m"+k] = "eng/level2/you-are-from-india.mp3"; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "से";
window[t+"-o2"+k] = "दिल्ली";
window[t+"-o3"+k] = "भारत";
window[t+"-o4"+k] = "एक";
window[t+"-o5"+k] = "हो";
window[t+"-o6"+k] = "खुश";
window[t+"-o7"+k] = "तुम";
window[t+"-ans"+k] = [7,3,1,5];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "You are happy"; window[t+"-m"+k] = "eng/level2/you-are-happy.mp3"; //m is music
window[t+"-n"+k] = "happy"; window[t+"-n-m"+k] = "खुश"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "तुम्हारा";
window[t+"-o2"+k] = "औरत";
window[t+"-o3"+k] = "हो";
window[t+"-o4"+k] = "और";
window[t+"-o5"+k] = "तुम";
window[t+"-o6"+k] = "एक";
window[t+"-o7"+k] = "खुश";
window[t+"-ans"+k] = [5,7,3];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "खुश"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "india";
window[t+"-o2"+k] = "happy";
window[t+"-o3"+k] = "a";
window[t+"-o4"+k] = "is";
window[t+"-ans"+k] = 2;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Man"; window[t+"-m"+k] = "eng/level2/man.mp3"; //m is music
window[t+"-n"+k] = "man"; window[t+"-n-m"+k] = "आदमी"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "औरत"; window[t+"-l1-"+k] = "/level2/woman.png";
window[t+"-o2"+k] = "लड़की"; window[t+"-l2-"+k] = "/level2/girl.png";
window[t+"-o3"+k] = "आदमी"; window[t+"-l3-"+k] = "/level2/man.png";
window[t+"-o4"+k] = "छात्र"; window[t+"-l4-"+k] = "/level2/student.png";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "आदमी"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "is";
window[t+"-o2"+k] = "name";
window[t+"-o3"+k] = "man";
window[t+"-o4"+k] = "your";
window[t+"-ans"+k] = 3;

k++;
window[t+"-type"+k] = "image";
window[t+"-q"+k] = "Woman"; window[t+"-m"+k] = "eng/level2/woman.mp3"; //m is music
window[t+"-n"+k] = "woman"; window[t+"-n-m"+k] = "औरत"; //n means new words, n-m means new word's meaning
window[t+"-o1"+k] = "औरत"; window[t+"-l1-"+k] = "/level2/woman.png";
window[t+"-o2"+k] = "लड़की"; window[t+"-l2-"+k] = "/level2/girl.png";
window[t+"-o3"+k] = "आदमी"; window[t+"-l3-"+k] = "/level2/man.png";
window[t+"-o4"+k] = "छात्र"; window[t+"-l4-"+k] = "/level2/student.png";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "He is a man"; window[t+"-m"+k] = "eng/level2/he-is-a-man.mp3"; //m is music
window[t+"-n"+k] = "he"; window[t+"-n-m"+k] = "वह"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "आदमी";
window[t+"-o2"+k] = "उसका";
window[t+"-o3"+k] = "मैं";
window[t+"-o4"+k] = "है";
window[t+"-o5"+k] = "एक";
window[t+"-o6"+k] = "क्या";
window[t+"-o7"+k] = "वह";
window[t+"-o8"+k] = "मेरा";
window[t+"-ans"+k] = [7,5,1,4];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "She is a girl"; window[t+"-m"+k] = "eng/level2/she-is-a-girl.mp3"; //m is music
window[t+"-n"+k] = "she"; window[t+"-n-m"+k] = "वह"; //n means new words, n-m means new word's meaning
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "लड़का";
window[t+"-o2"+k] = "उसका";
window[t+"-o3"+k] = "मैं";
window[t+"-o4"+k] = "है";
window[t+"-o5"+k] = "एक";
window[t+"-o6"+k] = "क्या";
window[t+"-o7"+k] = "वह";
window[t+"-o8"+k] = "लड़की";
window[t+"-ans"+k] = [7,5,8,4];

k++;
window[t+"-type"+k] = "word";
window[t+"-q"+k] = "वह"; window[t+"-m"+k] = null; //m is music
window[t+"-o1"+k] = "she";
window[t+"-o2"+k] = "what";
window[t+"-o3"+k] = "student";
window[t+"-o4"+k] = "your";
window[t+"-ans"+k] = 1;

k++;
window[t+"-type"+k] = "voice-mcq";
window[t+"-q"+k] = "eng/level1/hot-and-cold.mp3"; //file name
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "my";
window[t+"-o2"+k] = "hot";
window[t+"-o3"+k] = "cold";
window[t+"-o4"+k] = "her";
window[t+"-o5"+k] = "small";
window[t+"-o6"+k] = "and";
window[t+"-o7"+k] = "tea";
window[t+"-ans"+k] = [2,6,3];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "Hot tea"; window[t+"-m"+k] = "eng/level1/hot-tea.mp3"; //m is music
window[t+"-l"+k] = 6; //how many options are there
window[t+"-o1"+k] = "चाय";
window[t+"-o2"+k] = "पानी";
window[t+"-o3"+k] = "क्या";
window[t+"-o4"+k] = "तुम्हारा";
window[t+"-o5"+k] = "गरम";
window[t+"-o6"+k] = "ठंडा";
window[t+"-ans"+k] = [5,1];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "गरम चाय और ठंडा पानी"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 9; //how many options are there
window[t+"-o1"+k] = "your";
window[t+"-o2"+k] = "hot";
window[t+"-o3"+k] = "name";
window[t+"-o4"+k] = "tea";
window[t+"-o5"+k] = "big";
window[t+"-o6"+k] = "her";
window[t+"-o7"+k] = "water";
window[t+"-o8"+k] = "cold";
window[t+"-o9"+k] = "and";
window[t+"-ans"+k] = [2,4,9,8,7];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "गरम और ठंडा"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 7; //how many options are there
window[t+"-o1"+k] = "her";
window[t+"-o2"+k] = "name";
window[t+"-o3"+k] = "hot";
window[t+"-o4"+k] = "my";
window[t+"-o5"+k] = "and";
window[t+"-o6"+k] = "big";
window[t+"-o7"+k] = "cold";
window[t+"-ans"+k] = [3,5,7];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "मेरी चाय गरम है"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 8; //how many options are there
window[t+"-o1"+k] = "tea";
window[t+"-o2"+k] = "house";
window[t+"-o3"+k] = "hot";
window[t+"-o4"+k] = "is";
window[t+"-o5"+k] = "big";
window[t+"-o6"+k] = "car";
window[t+"-o7"+k] = "my";
window[t+"-o8"+k] = "his";
window[t+"-ans"+k] = [7,1,4,3];

k++;
window[t+"-type"+k] = "mcq";
window[t+"-q"+k] = "तुम्हारी गाड़ी और मेरा घर"; window[t+"-m"+k] = null; //m is music
window[t+"-l"+k] = 9; //how many options are there
window[t+"-o1"+k] = "house";
window[t+"-o2"+k] = "car";
window[t+"-o3"+k] = "his";
window[t+"-o4"+k] = "my";
window[t+"-o5"+k] = "and";
window[t+"-o6"+k] = "her";
window[t+"-o7"+k] = "cold";
window[t+"-o8"+k] = "tea";
window[t+"-o9"+k] = "your";
window[t+"-ans"+k] = [9,2,5,4,1];

k++;
window[t+"-type"+k] = "message";
window[t+"-ti"+k] = "सीखे हुए शब्द"; //title
window[t+"-msg"+k] = "आइए देखें कि आपने अब तक क्या सीखा है।"; //message

k++;
window[t+"-type"+k] = "conversation"; xt=0;
xt++;window[t+"-q"+xt+"-l"+k] = "from"; window[t+"-t"+xt+"-l"+k] = "से"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/from.mp3'; //l=left,r=right q=ques,t=translated, m=music
xt++;window[t+"-q"+xt+"-l"+k] = "delhi"; window[t+"-t"+xt+"-l"+k] = "दिल्ली"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/delhi.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "you"; window[t+"-t"+xt+"-l"+k] = "तुम"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/you.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "are"; window[t+"-t"+xt+"-l"+k] = "हैं"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/are.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "and"; window[t+"-t"+xt+"-l"+k] = "और"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/and.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "happy"; window[t+"-t"+xt+"-l"+k] = "खुश"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/happpy.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "man"; window[t+"-t"+xt+"-l"+k] = "आदमी"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/man.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "woman"; window[t+"-t"+xt+"-l"+k] = "ओरत"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/woman.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "he"; window[t+"-t"+xt+"-l"+k] = "वह"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/he.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "she"; window[t+"-t"+xt+"-l"+k] = "वह"; window[t+"-q"+xt+"-m"+k] = 'eng/level2/she.mp3';
window[t+"-len"+k]=xt;

k++;
window[t+"-type"+k] = "message";
window[t+"-ti"+k] = "अपनी बुद्धि जाचें"; //title
window[t+"-msg"+k] = "आइए अध्यायों का पुनरीक्षण करें"; //message

k++;
window[t+"-type"+k] = "conversation"; xt=0;
xt++;window[t+"-q"+xt+"-l"+k] = "What is your name?"; window[t+"-t"+xt+"-l"+k] = "तुम्हारा नाम क्या है?"; window[t+"-q"+xt+"-m"+k] = 'eng/level3/what-is-your-name.mp3'; //l=left,r=right q=ques,t=translated, m=music
xt++;window[t+"-q"+xt+"-r"+k] = "My name is Ramesh."; window[t+"-t"+xt+"-r"+k] = "मेरा नाम रमेश हे।"; window[t+"-q"+xt+"-m"+k] = 'eng/level3/my-name-is-ramesh.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Are you a student?"; window[t+"-t"+xt+"-l"+k] = "क्या तुम छात्र है?"; window[t+"-q"+xt+"-m"+k] = 'eng/level3/are-you-a-student.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "No, I am not a student."; window[t+"-t"+xt+"-r"+k] = "नहीं, मैं छात्र नहीं हूं"; window[t+"-q"+xt+"-m"+k] = 'eng/level3/no-i-am-not-a-student.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Are you from India?"; window[t+"-t"+xt+"-l"+k] = "क्या तुम भारत से हो?"; window[t+"-q"+xt+"-m"+k] = 'eng/level3/are-you-from-india.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "Yes, I am from India."; window[t+"-t"+xt+"-r"+k] = "हां, मैं भारत से हूं"; window[t+"-q"+xt+"-m"+k] = 'eng/level3/yes-i-am-from-india.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Are you sad?"; window[t+"-t"+xt+"-l"+k] = "क्या तुम दुखी हो?"; window[t+"-q"+xt+"-m"+k] = 'eng/level3/are-you-sad.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "No, I am happy."; window[t+"-t"+xt+"-r"+k] = "नहीं, मैं खुश हूं"; window[t+"-q"+xt+"-m"+k] = 'eng/level3/no-i-am-happy.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "My house is big."; window[t+"-t"+xt+"-l"+k] = "मेरा घर बड़ा है।"; window[t+"-q"+xt+"-m"+k] = 'eng/level3/my-house-is-big.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "My car is small."; window[t+"-t"+xt+"-r"+k] = "मेरी गाड़ी छोटी है"; window[t+"-q"+xt+"-m"+k] = 'eng/level3/my-car-is-small.mp3';
window[t+"-len"+k]=a;

lesson2Total = k;