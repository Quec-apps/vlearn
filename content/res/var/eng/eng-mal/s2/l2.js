//Lesson1 [New Words]

k=0;t='a';

k++;
window[t+"-type"+k] = "message";
window[t+"-ti"+k] = "സംഭാഷണം"; //title
window[t+"-msg"+k] = "ഒരു ഭക്ഷണശാലയിലെ ഒരു ഉപഭോക്താവിൻ്റെയും വെയിറ്ററുടെയും സംഭാഷണം നമുക്ക് നോക്കാം"; //message

k++;
window[t+"-type"+k] = "conversation"; xt=0;
xt++;window[t+"-q"+xt+"-l"+k] = "Can you please give the menu?"; window[t+"-t"+xt+"-l"+k] = "ദയവായി മെനു നൽകാമോ?"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit2/can-you-please-give-the-menu.mp3'; //l=left,r=right q=ques,t=translated, m=music
xt++;window[t+"-q"+xt+"-r"+k] = "Sure, Sir."; window[t+"-t"+xt+"-r"+k] = "തീർച്ചയായും, സർ."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit2/sure-sir.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Thank you"; window[t+"-t"+xt+"-l"+k] = "നന്ദി."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit2/thank-you.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "I can help you if you have any confusions."; window[t+"-t"+xt+"-r"+k] = "നിങ്ങൾക്ക് എന്തെങ്കിലും ആശയക്കുഴപ്പങ്ങൾ ഉണ്ടെങ്കിൽ ഞാൻ നിങ്ങളെ സഹായിക്കാം."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit2/i-can-help-you-if-you-have-any-confusions.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "I like to order the grilled salmon with roasted vegetables."; window[t+"-t"+xt+"-l"+k] = "വറുത്ത പച്ചക്കറികൾക്കൊപ്പം ഗ്രിൽ ചെയ്ത സാൽമൺ ഓർഡർ ചെയ്യാൻ ഞാൻ ആഗ്രഹിക്കുന്നു."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit2/i-like-to-order-the-grilled-salmon-with-roasted-vegetables.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "That's a great choice. It's one of our most popular dishes."; window[t+"-t"+xt+"-r"+k] = "അതൊരു മികച്ച തീരുമാനം ആണ്. ഞങ്ങളുടെ ഏറ്റവും ജനപ്രിയമായ വിഭവങ്ങളിൽ ഒന്നാണിത്."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit2/thats-a-great-choice-its-one-of-our-most-popular-dishes.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Good to know."; window[t+"-t"+xt+"-l"+k] = "അറിഞ്ഞത് നന്നായി."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit2/good-to-know.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "Would you like anything to drink with that?"; window[t+"-t"+xt+"-r"+k] = "അതിൻ്റെ കൂടെ എന്തെങ്കിലും കുടിക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നുണ്ടോ?"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit2/would-you-like-anything-to-drink-with-that.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "A glass of wine would be nice."; window[t+"-t"+xt+"-l"+k] = "ഒരു ഗ്ലാസ് വൈൻ നല്ലതായിരിക്കും."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit2/a-glass-of-wine-would-be-nice.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "Excellent choice. I will get it for you."; window[t+"-t"+xt+"-r"+k] = "മികച്ച തീരുമാനം. ഞാൻ അത് നിങ്ങൾക്കായി കൊണ്ട് വരാം."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit2/excellent-choice-i-will-get-it-for-you.mp3';
window[t+"-len"+k]=xt;

k++;
window[t+"-type"+k] = "mcq2";
window[t+"-q"+k] = "Can you please give the menu?"; window[t+"-m"+k] = 'eng/s2/unit2/can-you-please-give-the-menu.mp3'; //m is music
window[t+"-ans"+k] = "ദയവായി മെനു നൽകാമോ?";

k++;
window[t+"-type"+k] = "mcq2";
window[t+"-q"+k] = "Sure, Sir"; window[t+"-m"+k] = 'eng/s2/unit2/sure-sir.mp3'; //m is music
window[t+"-ans"+k] = "തീർച്ചയായും, സർ";

k++;
window[t+"-type"+k] = "mcq2";
window[t+"-q"+k] = "Thank you"; window[t+"-m"+k] = 'eng/s2/unit2/thank-you.mp3'; //m is music
window[t+"-ans"+k] = "നന്ദി";

k++;
window[t+"-type"+k] = "opt_mcq";
window[t+"-q"+k] = "I can help you if you have any confusions."; window[t+"-m"+k] = 'eng/s2/unit2/i-can-help-you-if-you-have-any-confusions.mp3'; //m is music
window[t+"-ans"+k] = "നിങ്ങൾക്ക് എന്തെങ്കിലും ആശയക്കുഴപ്പങ്ങൾ ഉണ്ടെങ്കിൽ ഞാൻ നിങ്ങളെ സഹായിക്കാം.";
// window[t+"-ans2"+k] = "എന്തെങ്കിലും ആശയക്കുഴപ്പങ്ങൾ നിങ്ങൾക്ക് ഉണ്ടെങ്കിൽ ഞാൻ നിങ്ങളെ സഹായിക്കാം.";
// window[t+"-ans3"+k] = "നിങ്ങൾക്ക് എന്തെങ്കിലും ആശയക്കുഴപ്പങ്ങൾ ഉണ്ടെങ്കിൽ നിങ്ങളെ ഞാൻ സഹായിക്കാം.";

k++;
window[t+"-type"+k] = "opt_mcq";
window[t+"-q"+k] = "I like to order the grilled salmon with roasted vegetables."; window[t+"-m"+k] = 'eng/s2/unit2/i-like-to-order-the-grilled-salmon-with-roasted-vegetables.mp3'; //m is music
window[t+"-ans"+k] = "വറുത്ത പച്ചക്കറികൾക്കൊപ്പം ഗ്രിൽ ചെയ്ത സാൽമൺ ഓർഡർ ചെയ്യാൻ ഞാൻ ആഗ്രഹിക്കുന്നു.";
// window[t+"-ans2"+k] = "വറുത്ത പച്ചക്കറികൾക്കൊപ്പം ഗ്രിൽ ചെയ്ത സാൽമൺ ഞാൻ ഓർഡർ ചെയ്യാൻ ആഗ്രഹിക്കുന്നു.";
// window[t+"-ans3"+k] = "ഗ്രിൽ ചെയ്ത സാൽമൺ വറുത്ത പച്ചക്കറികൾക്കൊപ്പം ഓർഡർ ചെയ്യാൻ ഞാൻ ആഗ്രഹിക്കുന്നു.";

k++;
window[t+"-type"+k] = "opt_mcq";
window[t+"-q"+k] = "That's a great choice. It's one of our most popular dishes."; window[t+"-m"+k] = 'eng/s2/unit2/thats-a-great-choice-its-one-of-our-most-popular-dishes.mp3'; //m is music
window[t+"-ans"+k] = "അതൊരു മികച്ച തീരുമാനം ആണ്. ഞങ്ങളുടെ ഏറ്റവും ജനപ്രിയമായ വിഭവങ്ങളിൽ ഒന്നാണിത്.";

k++;
window[t+"-type"+k] = "mcq2";
window[t+"-q"+k] = "Good to know."; window[t+"-m"+k] = 'eng/s2/unit2/good-to-know.mp3'; //m is music
window[t+"-ans"+k] = "അറിഞ്ഞത് നന്നായി.";

k++;
window[t+"-type"+k] = "opt_mcq";
window[t+"-q"+k] = "Would you like anything to drink with that?"; window[t+"-m"+k] = 'eng/s2/unit2/would-you-like-anything-to-drink-with-that.mp3'; //m is music
window[t+"-ans"+k] = "അതിൻ്റെ കൂടെ എന്തെങ്കിലും കുടിക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നുണ്ടോ?";
// window[t+"-ans2"+k] = "അതിൻ്റെ കൂടെ കുടിക്കാൻ നിങ്ങൾ എന്തെങ്കിലും ആഗ്രഹിക്കുന്നുണ്ടോ?";
// window[t+"-ans3"+k] = "അതിൻ്റെ കൂടെ നിങ്ങൾ കുടിക്കാൻ എന്തെങ്കിലും ആഗ്രഹിക്കുന്നുണ്ടോ?";

k++;
window[t+"-type"+k] = "mcq2";
window[t+"-q"+k] = "A glass of wine would be nice."; window[t+"-m"+k] = 'eng/s2/unit2/a-glass-of-wine-would-be-nice.mp3'; //m is music
window[t+"-ans"+k] = "ഒരു ഗ്ലാസ് വൈൻ നല്ലതായിരിക്കും.";

k++;
window[t+"-type"+k] = "opt_mcq";
window[t+"-q"+k] = "Excellent choice. I will get it for you."; window[t+"-m"+k] = 'eng/s2/unit2/excellent-choice-i-will-get-it-for-you.mp3'; //m is music
window[t+"-ans"+k] = "മികച്ച തീരുമാനം. ഞാൻ അത് നിങ്ങൾക്കായി കൊണ്ട് വരാം.";
// window[t+"-ans2"+k] = "മികച്ച തീരുമാനം. അത് നിങ്ങൾക്കായി ഞാൻ കൊണ്ട് വരാം.";
// window[t+"-ans3"+k] = "മികച്ച തീരുമാനം. നിങ്ങൾക്കായി ഞാൻ അത് കൊണ്ട് വരാം.";

k++;
window[t+"-type"+k] = "message";
window[t+"-ti"+k] = "സംഭാഷണം"; //title
window[t+"-msg"+k] = "പഠിച്ച സംഭാഷണം പുനഃപരിശോധിക്കാം"; //message

k++;
window[t+"-type"+k] = "conversation"; xt=0;
xt++;window[t+"-q"+xt+"-l"+k] = "Can you please give the menu?"; window[t+"-t"+xt+"-l"+k] = "ദയവായി മെനു നൽകാമോ?"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit2/can-you-please-give-the-menu.mp3'; //l=left,r=right q=ques,t=translated, m=music
xt++;window[t+"-q"+xt+"-r"+k] = "Sure, Sir."; window[t+"-t"+xt+"-r"+k] = "തീർച്ചയായും, സർ."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit2/sure-sir.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Thank you"; window[t+"-t"+xt+"-l"+k] = "നന്ദി."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit2/thank-you.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "I can help you if you have any confusions."; window[t+"-t"+xt+"-r"+k] = "നിങ്ങൾക്ക് എന്തെങ്കിലും ആശയക്കുഴപ്പങ്ങൾ ഉണ്ടെങ്കിൽ ഞാൻ നിങ്ങളെ സഹായിക്കാം."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit2/i-can-help-you-if-you-have-any-confusions.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "I like to order the grilled salmon with roasted vegetables."; window[t+"-t"+xt+"-l"+k] = "വറുത്ത പച്ചക്കറികൾക്കൊപ്പം ഗ്രിൽ ചെയ്ത സാൽമൺ ഓർഡർ ചെയ്യാൻ ഞാൻ ആഗ്രഹിക്കുന്നു."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit2/i-like-to-order-the-grilled-salmon-with-roasted-vegetables.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "That's a great choice. It's one of our most popular dishes."; window[t+"-t"+xt+"-r"+k] = "അതൊരു മികച്ച തീരുമാനം ആണ്. ഞങ്ങളുടെ ഏറ്റവും ജനപ്രിയമായ വിഭവങ്ങളിൽ ഒന്നാണിത്."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit2/thats-a-great-choice-its-one-of-our-most-popular-dishes.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Good to know."; window[t+"-t"+xt+"-l"+k] = "അറിഞ്ഞത് നന്നായി."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit2/good-to-know.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "Would you like anything to drink with that?"; window[t+"-t"+xt+"-r"+k] = "അതിൻ്റെ കൂടെ എന്തെങ്കിലും കുടിക്കാൻ നിങ്ങൾ ആഗ്രഹിക്കുന്നുണ്ടോ?"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit2/would-you-like-anything-to-drink-with-that.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "A glass of wine would be nice."; window[t+"-t"+xt+"-l"+k] = "ഒരു ഗ്ലാസ് വൈൻ നല്ലതായിരിക്കും."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit2/a-glass-of-wine-would-be-nice.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "Excellent choice. I will get it for you."; window[t+"-t"+xt+"-r"+k] = "മികച്ച തീരുമാനം. ഞാൻ അത് നിങ്ങൾക്കായി കൊണ്ട് വരാം."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit2/excellent-choice-i-will-get-it-for-you.mp3';
window[t+"-len"+k]=xt;

lesson1Total = k;