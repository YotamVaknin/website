---
title: מבוא לתורת השדות חלק ג׳
date: "2019-04-28T21:10:00.284Z"
abstract: בחלק זה נלמד כיצד ניתן להשתמש בקוונטיזציה שניה כדי לכתוב תורות קוונטיות יותר אלגנטיות, ואפילו מרובות חלקיקים. 
---

## חלק שלישי - קוונטיזציה שניה
בחלק הזה אנחנו נלמד על איך ניתן לסדר את מרחב ההילברט של מספר רב של בוזונים, כדי לכתוב תאוריות בצורה יותר אלגנטית. זה נשמע לא קשור לתורת השדות, ואכן לשיטת כתיבת התורות הקוונטית הזו יש שימושים בכל רחבי הפיסיקה התיאורתית - היא פשוט נוחה מכדי לא להשתמש בה. תורת השדות תמיד מנוסחת בשפה הזו, אז אנחנו נאלץ ללמוד להשתמש בה. כמו שכתבתי קודם, אני לא מתכוון לחדש פה למי שכבר נתקל בנושא, ואתם מוזמנים לדלג לחלק הבא.

### בוזונים 

בתורת הקוונטים, כאשר אנחנו רוצים להסתכל על האינטרקציה בין שתי מערכות עם מרחבי הילברט $\mathcal{ H _1}, \mathcal{ H _2}$ , אנחנו מסתכלים על מצבים במרחב המכפלה $\mathcal{ H _1}\otimes \mathcal{ H _2}$ . במצב המכפלה, כל צירוף לינארי של מכפלות של מצבים משני המרחבים הוא ווקטור מצב לגיטימי.

אבל ענין מיוחד מתרחש כאשר שתי המערכות הן בוזונים מאותו הסוג. נניח שיש לנו שתי בוזונים באוסילטור הרמוני, שמרחב המצבים שלו הוא $\left| n \right>$, כלומר מצבי המספר שמאפיינים אוסילטור הרמוני. נסמן ווקטור במרחב המכפלה כ-$\left| n _1, n _2 \right>$. לכאורה, כל צירוף של ווקטורים כאלה הוא מצב במרחב ההילברט של מכפלה של שני אוסילטורים הרמונים. אבל אף על פי שמרחב ההילברט מכיל את המצבים האלה, התורה הקוונטית מאלצת את המערכת להתחיל ולהתפתח רק בתת מרחב מאוד קטן של מרחב המצבים הזה.

עקרון הסימטריה הבוזוני, שהוא מעין מקבילה לעקרון האיסור של פאולי לפרמיונים, אומר שמערכת בוזונית תמצא רק במצבים ש**סימטרים להחלפה _בין חלקיקים_**. לדוגמה:

$$ \left| n _1, n _2 \right>+\left| n _2, n _1 \right>$$

החלפה בין החלקיקים במצב כזה לא תשנה ווקטור המצב. אם ההמילטוניאן גם הוא סימטרי להחלפות כאלו, מערכת שמתחילה במצב כזה תשאר במצב עם אותה הסימטריה. מרחב המצבים עם הסימטריה הזו מהווים תת מרחב של מרחב ההילברט שלנו.

תת המרחב הזה, שבו מתנהלת כל הפיזיקה, הוא בפני עצמו מרחב הילברט שעליו אפשר להגדיר תאוריה קוונטית. בעצם, יכולנו לכתחילה להגדיר את כל תורת הקוונטים בתת המרחב הזה, וכל הפיזיקה, משוואת שרדינגר וההסתברויות, הכל היה נותר כשהיה. אז למה לא לעשות את זה? למה לא להגדיר את כל הפיסיקה מלכתחילה במרחב המצבים המוגבל שבו היא ממילא מתרחשת?

אין שום סיבה לא לעשות את זה.

### הגדרה מחדש של הפיסיקה בתת המרחב בו היא ממילא מתרחשת

בדרך כלל מה שעושים בשלב הזה הוא להגדיר את מרחב המצבים ואת יחס החילוף בין אופרטורי סולם. אני אדבר מיד על המצבים ועל אופרטורי הסולם, אבל אני רוצה להעלות נקודה שזמן רב הטרידה אותי, ואני מקווה שנבין ביחד מנין היא מגיעה.

בקורסי מבוא לקוונטים לומדים על אופרטורי הסולם כדרך אלגנטית לפתור את משוואות התנועה של האוסילטור ההרמוני הקוונטי, משום שמאוד קל להראות איך הופכים את ההמילטוניאן ל-:

$$ H = \omega (a^\dagger a +\frac{1}{2}) $$

ואז נהוג לבלבל קצת במוח על המשמעות של החצי ולומר דברים מטופשים כמו ״האנרגיה של הוואקום״.

אופרטורי הסולם מעבירים אותנו בין מצבים עם רמות אנרגיה שונות, ספציפית:

$$a ^\dagger \left| n\right> =\sqrt{n+1} \left| n+1 \right> \ \ \ (1)$$

התכונה הזו שקולה ליחס החילוף $[a, a^\dagger]=1$, וההוכחה הזו היא חלק סטנדרטי מהחינוך של תלמידי פיסיקה ולכן אדלג עליה פה. בקונטקסים מסויימים משתמע שיחס החילוף הזה הוא חלק מהותי מתורת השדות, וחשוב לי להעביר את המסר שהוא לא. אפשר לכתוב את תורת השדות בקוונטיזציה ״רגילה״, והכל היה עובד בסדר גמור. 

באופן אישי, החיבה המוזרה של פיסיקאים לאופרטורים האלה נראתה לי במבט ראשון מאוד מוזרה. מה שהטריד אותי במיוחד היה מקדם הנרמול, הרי יכולנו לדמיין עולם שבו:

$$ a ^\dagger \left| n\right> = \left| n+1 \right> \ \ \ (2)$$

ויכולנו אולי להשתמש דווקא באופרטור הזה כדי לתאר את הפיסיקה. אז חוץ מלעבור מהר על הפורמליזם הזה, אני אנסה לענות השאלה למה ההגדרה שאני מציע ב-$(2)$ היא רעיון גרוע. כדי לחדד בראש שלכם את השאלה, תזכרו שאלו סתם מטריצות! וזה לא משנה באיזו מטריצה אנחנו משתמשים כדי לכתוב את הפיסיקה. 

### מרחב פוק

פרדוקסלית, כדי להקטין את מרחב ההילברט שלנו, הדבר הראשון שנעשה יהיה להגדיל אותו מאוד. במקום להתסכל על מרחב הילברט שבו יש מספר מוגדר של חלקיקים, אנחנו נעבוד במרחב הילברט שבו יש ווקטור מצב לכל מספר אפשרי של חלקיקים. זה מפתיע שבכלל אפשר לעשות את זה, אבל מרחב הילברט זה קונספט מופשט שמגדיר בעיקר מכפלות פנימיות בין ווקטורים, אז אין שום בעיה להוסיף לו ווקטורים חדשים עם מספר חלקיקים גדול כרצוננו. 

במרחב הגדול הזה, נוכל גם לכתוב תאוריות שמייצרות ומשמידות חלקיקים, אבל לא חייבים.  אפשר להשתמש בו גם במערכות שיש בהן מספר קבוע של חלקיקים - צריך רק לוודא שההמילטוניאן לא משנה אף פעם את מספר החלקיקים.

נניח שאנחנו רוצים לתאר מרחב הילברט של חלקיקים עם תנע מוגדר. ווקטור מצב במרחב ההילברט ה״ישן״ היה ווקטור מהצורה $ \left\lvert p\right\rangle  $. המשמעות שלו היא שאם נמדוד את התנע של החלקיק שלנו, נקבל $p$ ולא שום דבר אחר. אם במערכת היו שני חלקיקים, המצב שלה היה:

$$ \frac{1}{\sqrt{2}}\left(\left\lvert p _{1}\right\rangle \left\lvert p _{2}\right\rangle +\left\lvert p _{2}\right\rangle \left\lvert p _{1}\right\rangle \right) $$

עבור תנעים מסויימים $p _1, p _2$. במרחב החדש שלנו, שנקרא גם מרחב פוק (Fock), אנחנו נסמן את המצבים האלה באופן הבא:

$$ \left\lvert 1:p _{1},1:p _{2}\right\rangle =\frac{1}{\sqrt{2}}\left(\left\lvert p _{1}\right\rangle \left\lvert p _{2}\right\rangle +\left\lvert p _{2}\right\rangle \left\lvert p _{1}\right\rangle \right) $$

$$ \left\lvert 1:p _{1}\right\rangle =\left\lvert p _{1}\right\rangle $$

המצבים רק סופרים כמה חלקיקים מאכלסים כל מצב, כי הרי בבוזונים אין שום דרך להבדיל בניהם. שימו לב שבגלל האופן שבו אנחנו כותבים את המצבים, אנחנו כבר לא מסוגלים לתאר שום מצב שאין לו את הסימטריה הבוזונית. נניח עכשיו, שלכל חלקיק יש את ההמילטוניאן החופשי:

 $$ H = \frac{P^2}{2m} $$ 

מה הדרך האלגנטית ביותר לכתוב את ההמילטוניאן המלא בכתיב החדש שלנו? נשים לב לדוגמה ש:

 $$ H = \sum _i \frac{P _i^2}{2m} $$ 

כאשר הסכום הוא על חלקיקים (ולא על מצבי תנע!), פותר לכאורה את הבעיה. אבל, כדי לעשות איתו חישובים אנחנו צריכים לחזור שוב לפורמליזם הישן. אז מה יהיה הפתרון? ניחשתם נכון.

### אופרטורי סולם

במערכת הזו אנחנו נגדיר את אופרטורי הסולם באופן הבא. עבור ווקטור כללי עם מספר מצבים כללי:

$$ \left\lvert n _{1}:p _{1},n _{2}:p _{2}....\right\rangle  $$

האופרטור $a^\dagger _ {p_i}$ מוסיף חלקיק עם תנע $p _i$ למערכת, כלומר הוא משנה את מספר החלקיקים (!). בנוסף הוא משנה את הנרמול של הווקטור עם ה-$\sqrt{n+1}$ שאנחנו אמורים להיות מוטרדים ממנו:

$$ a _{p _{2}}^{\dagger}\left\lvert n _{1}:p _{1},n _{2}:p _{2}...\right\rangle =\sqrt{n _{2}+1}\left\lvert n _{1}:p _{1},\left(n _{2}+1\right):p _{2}...\right\rangle  $$

התפקיד שלנו עכשיו הוא להבין אם אנחנו יכולים להשתמש באופרטורים האלה כדי לכתוב את ההמילטוניאן של המערכת שלנו בצורה אלגנטית, והאם נוכל לכתוב כל אופרטור ככה.

### איברי מטריצות

אנחנו ננסה עכשיו להמיר אופרטור ממרחב המכפלה של $n$ חלקיקים, לאופרטורי סולם בלבד. יחידת הבסיס של אופרטורים בקוונטים הם איברי מטריצה, כלומר ביטויים מהצורה:

$$ \left\lvert p^i _{1}\right\rangle \left\langle p^i _{2}\right\rvert $$

כאשר אני משתמש ב-$i$ כדי לסמן את מרחב ההילברט של החלקיק, וסתם בחרתי את המספרים $1,2$. מכיוון שהחלקיקים שלנו הם בוזונים, שום אינטרקציה בטבע לא תכיל איבר כזה, משום שלא יכול להיות שהיא מייחדת חלקיק מסויים. איבר המטריצה היסודי יהיה משהו שסימטרי לכל החלקיקים, כלומר:

$$ \sum _i\left\lvert p _{1}^{i}\right\rangle \left\langle p _{2}^{i}\right\rvert  $$

לדוגמה, האופרטור הזה יעביר אותנו בין המצבים:

$$ \left(\sum\left\lvert p _{1}^{i}\right\rangle \left\langle p _{2}^{i}\right\rvert \right)\left\lvert 3:p _{1},2:p _{2}\right\rangle =N\left\lvert 4:p _{1},1:p _{2}\right\rangle  $$

כאשר $N$ הוא מקדם נרמול שנרצה למצוא עכשיו באמצעות קצת קומבינטוריקה, שהתשובה הסופית שלה היא שאנחנו זקוקים באופן מפתיע ל-$\sqrt{n+1}$ שרודף אותנו. 

### קצת קומבינטוריקה

אחרי חיפושים ארוכים, לא הצלחתי למצוא שום דרך אלגנטית לתאר את מה שעתיד להגיע. אנחנו נעשה קצת קומבינטוריקה כדי להבין איך בערך ההוכחה הולכת, ויהיה לכם מאוד קל להשלים את הפרטים לבד אם תרצו. 

הווקטור שאנחנו כותבים באמצעות $\left\lvert 3:p _{1},2:p _{2}\right\rangle $ הוא בעצם ווקטור במרחב מכפלה של חמישה חלקיקים. הוא יראה בערך כמו:

$$ \left\lvert 3:p _{1},2:p _{2}\right\rangle =\frac{\left\lvert p _{1}\right\rangle \left\lvert p _{1}\right\rangle \left\lvert p _{1}\right\rangle \left\lvert p _{2}\right\rangle \left\lvert p  _{2}\right\rangle +...}{\sqrt{M}} $$

כאשר במונה יש את כל האפשרויות לחלק את התנעים שלנו בין החלקיקים, ובמכנה יש מקדם נרמול $M$ שהוא מספר האפשרויות השונות לעשות חלוקה כזו. כמה שווה $M$? זו שאלה חביבה בקומבינטוריקה. שהתשובה אליה היא:

$$ M = \frac{(2 + 3)!}{2!\cdot3!}$$

ומה יהיה מקדם הנרמול של $\left\lvert 4:p _{1},1:p _{2}\right\rangle  $? כמובן ש- $.\frac{5!}{4!\cdot 1!} $ כלומר שכדי לעבור בין המצבים, אנחנו צריכים לא רק לשנות את הווקטורים, אלא גם להוסיף פקטור נרמול שישאיר אותם מנורמלים. כל הדברים האלה ישפיעו על $N$ שאותו אנחנו מחפשים, אבל לא רק. בגלל הסימטריה של האופרטור והמצבים, אנחנו נקבל שיש 4 דרכים שונות להגיע לכל מצב סופי ב-$\left\lvert 4:p _{1},1:p _{2}\right\rangle  $, מה שיגדיל את $N$. אם אוספים את כל הפרטים האלו יחדיו, מגלים ש-$N=\sqrt{2}\sqrt{4}$, או באופן כללי יותר, שכאשר עוברים ממצב עם $n$ חלקיקים למצב אחר עם שהיו ב-$m$ חלקיקים, נדרש פקטור נרמול ששווה ל-$\sqrt{n}\sqrt{m+1}$. זה כבר נראה כמו משהו שאנחנו מזהים, וזה אומר לנו שמתקיים באופן מפתיע:

$$ \sum _i\left\lvert p _{1}^{i}\right\rangle \left\langle p _{2}^{i}\right\rvert = a _{p _1} ^\dagger a _{p _2} $$

אז בעצם, איברי המטריצה היסודיים שלנו הם צימודים של אופרטור יצירה והשמדה! הם באמת הדרך הטבעית לתאר מעברים בתאוריה שלנו. 

### כמה הערות אחרונות

בגלל שאופרטורי הסולם מאפשרים לנו לתאר כל איבר מטריצה, זוגות שלהם פורסים את מרחב האופרטורים של מרחב ההילברט שלנו. אנחנו נוכל לכן לכתוב כל אופרטור, ובפרט את ההמילטוניאן, רק באמצעותם. בואו נתרגל את זה לרגע. קודם שאלתי מה הדרך ההגיונית לכתוב את ההמילטוניאן החופשי של חלקיקים חופשיים. באמצעות האופרטורים שלנו, התשובה היא פשוטה מאוד:

$$H=  \sum _i\frac{\left(P^{i}\right)^{2}}{2m}=\sum _i\frac{\left(p _{1}^{2}\left\lvert p _{1}^{i}\right\rangle \left\langle p^i _{1}\right\rvert +p _{2}^{2}\left\lvert p _{2}^{i}\right\rangle \left\langle p _{2}^{i}\right\rvert +… \right)}{2m}=\sum _{i}\frac{p _{i}^{2}}{2m}a _{i}^{\dagger}a _{i} $$

כלומר יש לנו אופרטור ש״סופר״ את כמות החלקיקים בכל תנע אפשרי. בהמילטוניאן הזה אני ״סוכם״ על תנעים האפשריים, מה שמציע שהם לא רציפים. אותו הפורמליזם בדיוק מאפשר לעבוד גם עם תנעים רציפים, וכל מה שצריך כדי לעשות את זה הוא להגדיר יחסי חילוף קצת שונים שיסדרו את היחידות, ספציפית:

$$ [a _p, a^\dagger _{p'}] = \delta(p - p') $$

ואז ההמילטוניאן יהיה אינטגל במקום סכום. אני זורק את הנקודה הזו ברגע האחרון, אבל דווקא אלו הם יחסי החילוף שנעשה בהם שימוש בפעם הבאה. ככה זה בתורת השדות, יש המון פרטים ורק 2000 מילה לפוסט.

### סיכום

קוונטיזציה שניה זו לא צורה של קוונטיזציה, אני מקווה ששוכנעתם לפחות בנקודה הקטנה הזו. אנחנו לא לקחנו תאוריה קלאסית והפכנו אותה לקוונטית, אלא סתם לקחנו תאוריה שכבר הייתה קוונטית, וכתבנו אותה בצורה יותר בריאה. במבט ראשון זה לא נראה מאוד שימושי, והאמת היא שצריך קצת ניסיון עם הכלים האלה כדי לראות את הכוח המלא שלהם, אבל כבר בכתבה הבאה אני מבטיח להסיק מסקנות לא טריוויאליות באמצעות השיטה שפיתחנו פה.

בפעם הבאה אנחנו סוף כל סוף נכתוב תורת שדות קוונטית, ונפתור את משוואות התנועה שלה, ואפילו נגלה שיצאה לנו תורה מאוד משעממת.