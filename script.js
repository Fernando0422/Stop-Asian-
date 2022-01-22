$(document).ready(function(){
  // Asia is a complex continent with so many different countries and cultures, yet large organizations condense over 18 million people simply into the term “Asian”. 
var complexSyn = ["complex", "vast", "diverse", "expansive"]
var manySyn = ["so many", "a number of", "a myriad of", "many", "several"]
var diffSyn = ["different", "diverse", "distinct", "distinctive"]
var bigSyn = ["large", "big", "major"]
var compSyn = ["companies", "corporations"]
var yetSyn = ["yet", "but", "though"]
var condenseSyn = ["condense", "minimize the identities of", "condense the identities of", "minimize"]
var simplySyn = ["simply", "plainly"]
var millSyn = ["18 million", "millions of", "18,000,000"]
var termSyn = ["word", "term", "label"]

var sentence1 = `Asia is a ${complexSyn[Math.floor(Math.random()*complexSyn.length)]} continent with ${manySyn[Math.floor(Math.random()*manySyn.length)]} ${diffSyn[Math.floor(Math.random()*diffSyn.length)]} countries and cultures, yet large organizations condense over 18 million people simply into the term Asian`
// Even then, it is almost exclusively used towards East Asians, preventing inclusive representation.
var evenThenSyn = ["Even so", "Even then", "However", "Although"]
var itsSyn = ["it is", "it's"]
var almostexclusivelySyn = ["almost exclusively", "always", "consistently", "constantly", "perpetually", "every time"]
var towardsSyn = ["toward", "directed", "aimed", "for"]
var preventingSyn = ["preventing", "blocking", "stopping", "warding off", "halting"]

var sentence2=`Even then, it is almost exclusively used towards East Asians, preventing inclusive representation`
//We all carry our own lived experiences and cultural individualities, yet the term “asian” extinguishes that. 
var weSyn = ["Everyone carries their own lived experiences and cultural individualities, yet the term \"Asian\" extinguishes that"]
var carrySyn = ["carry", "bring", "have"]
var yetSyn = ["yet", "but", "however"]
var extinguishesSyn = ["extinguishes", "discounts", "erases", "disregards"]
var individualitiesSyn = ["individualities", "identities"]

var sentence3 = `We all ${carrySyn[Math.floor(Math.random()*carrySyn.length)]} our own lived experiences and cultural ${individualitiesSyn[Math.floor(Math.random()*individualitiesSyn.length)]}, ${yetSyn[Math.floor(Math.random()*yetSyn.length)]} the term “Asian” ${extinguishesSyn[Math.floor(Math.random()*extinguishesSyn.length)]} that`

// Performative movements like “Stop Asian Hate” only provide temporary hope--amounting to nothing more than a few hashtags and colorful infographic displays.
var movementsSyn = ["movements", "activism"]
var provideSyn = ["provide", "create"]
var hopeSyn = ["hope", "solvency"]

var sentence4 = `Performative ${movementsSyn[Math.floor(Math.random()*movementsSyn.length)]} like “Stop Asian Hate” only ${provideSyn[Math.floor(Math.random()*provideSyn.length)]} temporary ${hopeSyn[Math.floor(Math.random()*hopeSyn.length)]}--amounting to nothing more than a few hashtags and colorful infographic displays`
// We refuse to be defined by this restrictive label.
var restrictiveSyn = ["suffocating","confining","racist", "restrictive"]
var labelSyn = ["category", "classification", "grouping", "label"]

var sentence5 = `We refuse to be defined by this ${restrictiveSyn[Math.floor(Math.random()*restrictiveSyn.length)]} ${labelSyn[Math.floor(Math.random()*labelSyn.length)]}`
// Stop “Asian” does not stand for ignorance and empty movements.

var doesnotSyn = ["does not stand for", "will not support", "abtains from", "denounces", "doesn't stand for", "prohibits"]
var empty = ["empty", "unintelligent", "empty-headed", "meaningless", "senseless"]

var sentence6 = `Stop “Asian” ${doesnotSyn[Math.floor(Math.random()*doesnotSyn.length)]} stand for ignorance and ${empty[Math.floor(Math.random()*empty.length)]} movements`

//We stand for truth and speak up for solvency. 
var westandSyn = ["We protest", "We promote", "We stand by", "We support"]
var speakupfor = ["demand", "encourage", "hope for", "applaud for", "push for"]

var sentence7 = `${westandSyn[Math.floor(Math.random()*westandSyn.length)]} for truth and ${speakupfor[Math.floor(Math.random()*speakupfor.length)]} solvency`
// We demand that [College Board] creates equity through their college application process.
var entityArray = ["The College Board", "The Common Application"]
var entity= entityArray[0]
var createsSyn = ["creates", "enforces", "establishes", "implements"]

var sentence8 = `We demand that ${entity} ${createsSyn[Math.floor(Math.random()*createsSyn.length)]} equity through their college application process`

// Stop Asian has created a new opportunity for students to express their unique identities by implementing a prompt in the college application process.
var hascreatedSyn = ["has created","curated", "initiated", "formulated"]
var expressSyn = ["to express their", "to convey their", "to voice their"]
var uniqueSyn = ["unique identities", "distinctive identities", "individual identities"]

var sentence9 = `Stop Asian ${hascreatedSyn[Math.floor(Math.random()*hascreatedSyn.length)]} a new opportunity for students ${expressSyn[Math.floor(Math.random()*expressSyn.length)]} ${uniqueSyn[Math.floor(Math.random()*uniqueSyn.length)]} by implementing a prompt in the college application process`

// Please refer to the website link for the updated [application/form].

/// JUST COLLEGE BOARD FORM ///
var fullLetter = `${sentence1}. ${sentence2}. ${sentence3}. ${sentence4}. ${sentence5}. ${sentence6}. ${sentence7}. ${sentence8}. ${sentence9}.`
console.log(fullLetter)

var linkLetter = encodeURIComponent(fullLetter)

var link = `https://collegeboard.tfaforms.net/21?&tfa_1893=tfa_1908&tfa_1892=${linkLetter}`

console.log(link)
  $('#collegeBoardForm').attr("href", link)
  
  /// BEGINNING OF THE EMAIL DISASTER LOL ///
  /// JUST COLLEGE BOARD EMAIL ///

  
  var collegeBoardEmails = [
    "dcoleman@collegeboard.org", "kkukrer@collegeboard.org", "ngamboa@collegeboard.org", "wmihoulides@collegeboard.org","ssinha@collegeboard.org", "miwilliams@collegeboard.org", "bglismann@collegeboard.org", "nadler@collegeboard.org", "bglismann@collegeboard.org", "ssanford@collegeboard.org", "jzika@collegeboard.org", "kfusco@collegeboard.org", "dcoleman@collegeboard.org", "kkukrer@collegeboard.org", "ngamboa@collegeboard.org", "wmihoulides@collegeboard.org","ssinha@collegeboard.org", "miwilliams@collegeboard.org", "bglismann@collegeboard.org", "nadler@collegeboard.org", "bglismann@collegeboard.org", "ssanford@collegeboard.org", "jzika@collegeboard.org", "kfusco@collegeboard.org"]
  var cbEmails = collegeBoardEmails.join(",")
  var emailLetter = encodeURIComponent(fullLetter)
  var emailLink=`mailto:?bcc=${cbEmails}&subject=stop+asian&body=${emailLetter}`
  $('#collegeBoardEmails').attr("href", emailLink) 
     
//   $('#collegeBoardEmails, #commonAppEmails').click(function () {
//    if (this.id == 'collegeBoardEmails') {
//      entity = entityArray[0]
//      var cbEmails = collegeBoardEmails.join(",")
//      var emailLetter = encodeURIComponent(fullLetter)
//      var emailLink=`mailto:?bcc=${cbEmails}&subject=stop+asian&body=${emailLetter}`
//      window.open(emailLink);
//    }
//    if (this.id == 'commonAppEmails') {
//      entity = entityArray[1]
//      var caEmails = commonAppEmails.join(",")
//      var emailLetter = encodeURIComponent(fullLetter)
//      var emailLink=`mailto:?bcc=${caEmails}&subject=stop+asian&body=${emailLetter}`
//      window.open(emailLink);
//    }
// })
  
  /// JUST COMMON APP TINGS ///
  var fullLetter2 = `${sentence1}. ${sentence2}. ${sentence3}. ${sentence4}. ${sentence5}. ${sentence6}. ${sentence7}. ${sentence8}. ${sentence9}.`
    var commonAppEmails = [
    "commonappsupport@commonapp.net", "dtiss@commonapp.org", "aortega@commonapp.org","tfox@commonapp.org", "akumar@commonapp.org", "atate@commonapp.org", "msunderland@commonapp.org", "dtiss@commonapp.org", "jdavis@commonapp.org", "wkifle@commonapp.org", "aortega@commonapp.org","mhalterman@commonapp.org","cburger@commonapp.org","sgiede@commonapp.org","mhancock@commonapp.org","kleahey@commonapp.org","sanderson@commonapp.org","tshaup@commonapp.org","jrickard@commonapp.org","vrao@commonapp.org","kkennedy@commonapp.org","amerhige@commonapp.org","yazdani@commonapp.org"]
    var caEmails = commonAppEmails.join(",")
  var emailLetter2 = encodeURIComponent(fullLetter2.replace("The College Board", "The Common Application"))
  var emailLink2=`mailto:?bcc=${caEmails}&subject=stop+asian&body=${emailLetter2}`
  $('#commonAppEmails').attr("href", emailLink2) 
  
})

// mailto:yoyo@google.co?bcc=hi@hi.com,hi@me.com&?subject=hiiiii&body=heyyyyy