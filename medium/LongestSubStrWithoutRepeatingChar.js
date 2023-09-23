let s = "aab"


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    debugger;
    let ss = "";
    let t = "";
    let f = false;

    for (let i = 0; i < s.length; i++) {


        if (t.includes(s[i])) {
            if (t.length > ss.length) {
                ss = t
                f = true;
            }
            t = t.substring(i + 1)
        }
        t += s[i];
        if (!f) ss = t;
    }

    return ss.length;

};

const l = lengthOfLongestSubstring(s)
console.log("Length is: ", l)
