# i18n

## What we will cover

* What is i18n?
* Why is it so hard to do right?
* What do you need to think about?
* How do you structure your application to support it?
* How do you maintain it over time?

## Notes

i18n or Internationalization (there are 18 characters between the i and n)
is when you build an application that supports multiple countries and
it is by far the biggest change an application can go through.

It is often very underestimated but let us remember that to core feature
of i18n is that every piece of text needs to be a variable that has
multiple translations, one for each language.

Let us think about that, that means that the amount of testing for almost
every feature goes up by the number of languages you support.

It means that you need to know which country the user is in and what language
they expect to be shown for everything from the page itself to emails being sent.

It means that you have to translate everything you release and this slows down
your release process.

You will have to hire people who can translate your text for you, this takes
a lot of time and resources.

Does it stop there? No!

What about money, the format of your currency, the time and date format,
which calendar is the region you are in using? Timezones?

How about the meaning of words in different languages and knowing when
you can use the same word for something or when you need different words
for each country, which changes the semantic meaning of the information?

Design, what happens when your design is perfect in English but breaks in
German, Danish and French?

What happens when you support a writing system that is read verticaly or when you read right to left instead of left to right?

How do you store the translations so you can update them?

Do you have support staff for dealing with customers who don't speak English?

Trust me when I say, this is a BIG deal for your company.
