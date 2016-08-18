# What if you knew the gender split of your FBA customers?
This is a super simple tool that uses gender-prediction libraries to guess the gender of your customers. It's so simple, yet incredibly powerful for your copywriting, image selection, and product positioning.

---

## How to use
I will improve this readme over time. For now I'm assuming you have node setup on your computer. How do you check?

1. Open terminal or your shell client
2. Type `node -v` and it should give you a response. If it doesn't, you don't have node and should Google how to get that on your computer.

You're ready to go!

1. Clone or download this repository to your computer
2. 'cd' into the directory (or on a mac drop the folder into the terminal icon)
3. Type `npm install` to install the node_modules into the folder
4. Replace my `import.csv` file with your own (ensure you use the same headings or change the code to reflect your headings)
5. In terminal run `node index.js`

This will produce output.csv with the appended gender columns and it will print out the results in the terminal.

Note that the app currently outputs two files:

- `Recipient-output.csv` with a new column called RecipientGender
- `Buyer-output.csv` with a new column called BuyerGender

I would probably combine these in a polished app, but haven't yet done it.

If you're a complete newbie to this, don't worry I'll put some effort into making this an easier web app for you to use.

---

## Q&A

### Can I only use this on my FBA data?
Nope, you can use it on any dataset. You'll just need to modify the code. Go for it!

### Which columns do I need?
Your import.csv **only needs** to have a column named 'Buyer' and a column named 'Recipient'. They can be full of names or not. Either way it should work for the purpose of spitting out the result in the console. However if you want your output.csv to look right you'll need to also change the `var = headers` section in the code to reflect your dataset.

### Where do I get the customer data?
I used HelloProfit (thanks to Matt from [FBA Allstars](http://www.fbaallstars.com) for the recommendation). I couldn't find an easy way for Amazon Seller Central to provide the output of all customers so I grabbed what I could find. I hope to be more explicit in helping people get this data, for now I'll leave it up to you.

### Why do I see a friggin huge number of 'unknowns'?
Check that you don't have a lot of empty commas at the end of the CSV.

### Is this accurate?
I dunno. Check out the github link below. I intend to use multiple libraries in this project and will make an consensus guess, or perhaps even ethnicity detection and then individual name detection based on that. That would be cool.


## Credits
Thanks to the open source repositories that have allowed this project to come together to solve a practical problem for a lot of people.

[CSV to JSON](https://github.com/Keyang/node-csvtojson)

[JSON to CSV](https://github.com/zemirco/json2csv)

[Gender Detection](https://github.com/davidemiceli/gender-detection)
