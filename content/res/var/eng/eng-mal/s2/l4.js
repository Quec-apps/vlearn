//library
k=0;t='a';

k++;
window[t+"-type"+k] = "message";
window[t+"-ti"+k] = "സംഭാഷണം"; //title
window[t+"-msg"+k] = "ഒരു ഉപഭോക്താവ് ബാങ്ക് അക്കൗണ്ട് തുറക്കാൻ ബാങ്കിൽ വന്നു"; //message

k++;
window[t+"-type"+k] = "conversation"; xt=0;
xt++;window[t+"-q"+xt+"-l"+k] = "How are you?"; window[t+"-t"+xt+"-l"+k] = "സുഖമാണോ?"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit4/how-are-you.mp3'; //l=left,r=right q=ques,t=translated, m=music
xt++;window[t+"-q"+xt+"-r"+k] = "I am great. Thanks."; window[t+"-t"+xt+"-r"+k] = "എനിക്ക് സുഖം ആണ്. നന്ദി."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit4/i-am-great-thanks.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Did you need something?"; window[t+"-t"+xt+"-l"+k] = "നിങ്ങൾക്ക് എന്തെങ്കിലും ആവിശ്യം ഉണ്ടോ?"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit4/did-you-need-something.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "I need your help."; window[t+"-t"+xt+"-r"+k] = "എനിക്ക് നിങ്ങളുടെ സഹായം വേണം."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit4/i-need-your-help.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "How may I help you?"; window[t+"-t"+xt+"-l"+k] = "എനിക്ക് നിങ്ങളെ എങ്ങനെ സഹായിക്കാനാകും?"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit4/how-may-i-help-you.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "I need to find this newspaper article."; window[t+"-t"+xt+"-r"+k] = "എനിക്ക് ഈ പത്രവാർത്ത കണ്ടെത്തണം."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit4/i-need-to-find-this-newspaper-article.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Have you checked the science section?"; window[t+"-t"+xt+"-l"+k] = "നിങ്ങൾ ശാസ്ത്ര വിഭാഗം പരിശോധിച്ചിട്ടുണ്ടോ?"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit4/have-you-checked-the-science-section.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "I forgot about that section."; window[t+"-t"+xt+"-r"+k] = "ഞാൻ ആ വിഭാഗത്തെക്കുറിച്ച് മറന്നു."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit4/i-forgot-about-that-section.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "I can show you where to find it."; window[t+"-t"+xt+"-l"+k] = "അത് എവിടെ കണ്ടെത്തണമെന്ന് ഞാൻ നിങ്ങൾക്ക് കാണിച്ചുതരാം."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit4/i-can-show-you-where-to-find-it.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Thank you for your help"; window[t+"-t"+xt+"-l"+k] = "നിങ്ങളുടെ സഹായത്തിന് നന്ദി"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit4/thank-you-for-your-help.mp3';
window[t+"-len"+k]=xt;

k++;
window[t+"-type"+k] = "mcq2";
window[t+"-q"+k] = "How are you?"; window[t+"-m"+k] = 'eng/s2/unit4/how-are-you.mp3'; //m is music
window[t+"-ans"+k] = "സുഖമാണോ?";

k++;
window[t+"-type"+k] = "mcq2";
window[t+"-q"+k] = "I am great. Thanks."; window[t+"-m"+k] = 'eng/s2/unit4/i-am-great-thanks.mp3'; //m is music
window[t+"-ans"+k] = "എനിക്ക് സുഖം ആണ്. നന്ദി.";

k++;
window[t+"-type"+k] = "opt_mcq";
window[t+"-q"+k] = "Did you need something?"; window[t+"-m"+k] = 'eng/s2/unit4/did-you-need-something.mp3'; //m is music
window[t+"-ans"+k] = "നിങ്ങൾക്ക് എന്തെങ്കിലും ആവിശ്യം ഉണ്ടോ?";

k++;
window[t+"-type"+k] = "opt_mcq";
window[t+"-q"+k] = "I need your help."; window[t+"-m"+k] = 'eng/s2/unit4/i-need-your-help.mp3'; //m is music
window[t+"-ans"+k] = "എനിക്ക് നിങ്ങളുടെ സഹായം വേണം.";

k++;
window[t+"-type"+k] = "opt_mcq";
window[t+"-q"+k] = "How may I help you?"; window[t+"-m"+k] = 'eng/s2/unit4/how-may-i-help-you.mp3'; //m is music
window[t+"-ans"+k] = "എനിക്ക് നിങ്ങളെ എങ്ങനെ സഹായിക്കാനാകും?";

k++;
window[t+"-type"+k] = "opt_mcq";
window[t+"-q"+k] = "I need to find this newspaper article."; window[t+"-m"+k] = 'eng/s2/unit4/i-need-to-find-this-newspaper-article.mp3'; //m is music
window[t+"-ans"+k] = "എനിക്ക് ഈ പത്രവാർത്ത കണ്ടെത്തണം.";

k++;
window[t+"-type"+k] = "opt_mcq";
window[t+"-q"+k] = "Have you checked the science section?"; window[t+"-m"+k] = 'eng/s2/unit4/have-you-checked-the-science-section.mp3'; //m is music
window[t+"-ans"+k] = "നിങ്ങൾ ശാസ്ത്ര വിഭാഗം പരിശോധിച്ചിട്ടുണ്ടോ?";

k++;
window[t+"-type"+k] = "opt_mcq";
window[t+"-q"+k] = "I forgot about that section."; window[t+"-m"+k] = 'eng/s2/unit4/i-forgot-about-that-section.mp3'; //m is music
window[t+"-ans"+k] = "ഞാൻ ആ വിഭാഗത്തെക്കുറിച്ച് മറന്നു.";

k++;
window[t+"-type"+k] = "opt_mcq";
window[t+"-q"+k] = "I can show you where to find it."; window[t+"-m"+k] = 'eng/s2/unit4/i-can-show-you-where-to-find-it.mp3'; //m is music
window[t+"-ans"+k] = "അത് എവിടെ കണ്ടെത്തണമെന്ന് ഞാൻ നിങ്ങൾക്ക് കാണിച്ചുതരാം.";

k++;
window[t+"-type"+k] = "opt_mcq";
window[t+"-q"+k] = "Thank you for your help"; window[t+"-m"+k] = 'eng/s2/unit4/thank-you-for-your-help.mp3'; //m is music
window[t+"-ans"+k] = "നിങ്ങളുടെ സഹായത്തിന് നന്ദി";

k++;
window[t+"-type"+k] = "message";
window[t+"-ti"+k] = "സംഭാഷണം"; //title
window[t+"-msg"+k] = "പഠിച്ച സംഭാഷണം പുനഃപരിശോധിക്കാം"; //message

k++;
window[t+"-type"+k] = "conversation"; xt=0;
xt++;window[t+"-q"+xt+"-l"+k] = "How are you?"; window[t+"-t"+xt+"-l"+k] = "സുഖമാണോ?"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit4/how-are-you.mp3'; //l=left,r=right q=ques,t=translated, m=music
xt++;window[t+"-q"+xt+"-r"+k] = "I am great. Thanks."; window[t+"-t"+xt+"-r"+k] = "എനിക്ക് സുഖം ആണ്. നന്ദി."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit4/i-am-great-thanks.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Did you need something?"; window[t+"-t"+xt+"-l"+k] = "നിങ്ങൾക്ക് എന്തെങ്കിലും ആവിശ്യം ഉണ്ടോ?"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit4/did-you-need-something.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "I need your help."; window[t+"-t"+xt+"-r"+k] = "എനിക്ക് നിങ്ങളുടെ സഹായം വേണം."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit4/i-need-your-help.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "How may I help you?"; window[t+"-t"+xt+"-l"+k] = "എനിക്ക് നിങ്ങളെ എങ്ങനെ സഹായിക്കാനാകും?"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit4/how-may-i-help-you.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "I need to find this newspaper article."; window[t+"-t"+xt+"-r"+k] = "എനിക്ക് ഈ പത്രവാർത്ത കണ്ടെത്തണം."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit4/i-need-to-find-this-newspaper-article.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Have you checked the science section?"; window[t+"-t"+xt+"-l"+k] = "നിങ്ങൾ ശാസ്ത്ര വിഭാഗം പരിശോധിച്ചിട്ടുണ്ടോ?"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit4/have-you-checked-the-science-section.mp3';
xt++;window[t+"-q"+xt+"-r"+k] = "I forgot about that section."; window[t+"-t"+xt+"-r"+k] = "ഞാൻ ആ വിഭാഗത്തെക്കുറിച്ച് മറന്നു."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit4/i-forgot-about-that-section.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "I can show you where to find it."; window[t+"-t"+xt+"-l"+k] = "അത് എവിടെ കണ്ടെത്തണമെന്ന് ഞാൻ നിങ്ങൾക്ക് കാണിച്ചുതരാം."; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit4/i-can-show-you-where-to-find-it.mp3';
xt++;window[t+"-q"+xt+"-l"+k] = "Thank you for your help"; window[t+"-t"+xt+"-l"+k] = "നിങ്ങളുടെ സഹായത്തിന് നന്ദി"; window[t+"-q"+xt+"-m"+k] = 'eng/s2/unit4/thank-you-for-your-help.mp3';
window[t+"-len"+k]=xt;

lesson1Total = k;