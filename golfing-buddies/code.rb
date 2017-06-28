golf_contacts = {
  jim: 'workerBee@example.com',
  samantha: 'golfCartRacer@example.com',
  jane: 'pro_golfer89@example.com',
  mike: 'alwaysAtTheBeach@example.com',
  olivia: 'didYouSeeWhereThatWent@example.com',
  joan: 'bestShortGameEver@example.com'
}

invitee = [:samantha,:jane,:olivia]
string1 = ""
invitee.each do |name|
  string1 << golf_contacts[name]
  string1 << ","
end
p string1
