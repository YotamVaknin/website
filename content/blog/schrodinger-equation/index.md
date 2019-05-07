---
title: על הסימטריה לשיקוף בזמן של משוואת שרדינגר
date: "2019-05-29T21:00:00.284Z"
abstract: דיון לא מאוד מסודר על סימטריה לשיקוף בזמן, על החוק השני של התרמודינאמיקה, ועל משוואת שרדינגר.
---

##  על הסימטריה לשיקוף בזמן של משוואת שרדינגר

### סימטריה בזמן

פרדוקס לוכשמיטד שואל את השאלה התמימה: ״אם חוקי הטבע סימטרים בזמן, איך ייתכן שהחוק השני של התרמודינאמיקה לא סימטרי בזמן?״. זו שאלה מצויינת, והתשובה אליה היא שהיקום לא סימטרי בזמן, ושהחוק השני דווקא כן. 

אבל מה זו בכלל סימטריה בזמן? הרי אם נקח מערכת ונקדם אותה אחורה בזמן, ההתקדמות שלה תהיה שונה לגמרי. אם לכתוב לרגע את המשוואות, נניח שיש לנו מערכת עם סט פרמטרים $q^i(t)$, הם כמעט אף פעם לא יקיימו:

$$ q^i(t) = q^i(-t) $$

ביקום שבו התנאי הזה דווקא כן מתקיים, החוק שני של התרמודינאמיקה לא קיים. האנטרופיה בכל רגע קבועה. נוכיח את הטענה החמודה הזו:

$$ \frac{dS(q^i(t))}{dt}=\frac{\partial S}{\partial q^{i}}\frac{d q^{i}}{d t}=\frac{\partial S}{\partial q^{i}}\lim _{h\to0}\frac{q^i\left(h\right)-q^i\left(-h\right)}{2h}=\frac{\partial S}{\partial q^{i}}\lim _{h\to0}\frac{0}{2h}=0$$

אז מה כן המשמעות של סימטריה בזמן? סימטריה בזמן אומרת שאם יש לנו פתרון של משוואות התנועה $q^i(t)$, אז גם הפונקציה $q^i(-t)$ מהווה פתרון של משוואות התנועה. 

לפני שנוכיח את הטענה הזו לגבי החוק השני של ניוטון, ואחר כך למשוואת שרדינגר, אני רוצה שנבין למה התנאי הזה לכאורה סותר את החוק השני. המשמעות של קיום פתרון הפוך בדיוק של משוואות התנועה, הוא שיש יקום אחר שבו כל החלקיקים מתקדמים באותם מסלולים אבל הפוך. מה יקרה לאנטרופיה באותו יקום? היא כמובן תרד, כי אנחנו פשוט מריצים את הסרט לאחור. אבל בגלל שיש ליקום ההוא את אותם חוקי טבע שלנו, אז איך ייתכן שהאנטרופיה בו דווקא יורדת?

בכתבה הזו אני רק רוצה להוכיח את הטענה שחוקי הטבע סימטרים בזמן. אני לא מתכוון לומר כמעט שום דבר על פרדוקס לוכשמיטד, אלא רק להוכיח שהוא באמת פרדוקס באופן שתארנו עד עתה.  

### החוק השני של ניוטון סימטרי בזמן

נניח שיש לנו חלקיק שנע בפוטנציאל $V(\mathbf{x})$, ויש לנו פתרון של משוואות התנועה שלו $\textbf{x}(t)$, אז לפי החוק השני של ניוטון מתקיים בכל רגע:

$$m \ddot{\mathbf{x}} =\nabla V(\mathbf{x})$$

זו המשמעות של להיות פתרון של משוואות התנועה. כל פונקציה שמקיימת את המשוואה הזו מקיימת את משוואות התנועה. השאלה שלנו היא בעצם, האם הפונקציה $\mathbf{x}(-t)$ מקיימת גם היא את משוואת התנועה הזו. קל מאוד לראות שכן. כל גזירה של $\mathbf{x}(-t)$ בזמן תתן לנו סימן מינוס בגלל כלל השרשרת, ובגלל שיש לנו רק נגזרת שניה, נקבל שהסימנים האלו מתבטלים. מכאן שהחוק השני של ניוטון מתקיים בכל רגע, והפתרון ההפוך בזמן מהווה פתרון של משוואות התנועה.

#### הערה על מגנטיות

״אבל מגנטיות נותנת לנו איבר עם נגזרת מסדר ראשון!״ אני שומע אתכם צועקים מיד ״אז כל הכבוד לניוטון שהיקום הפשטני שלו סימטרי בזמן. אבל בעולם שלנו, משוואות התנועה דווקא בכלל לא סימטריות, והחוק השני בסדר גמור״. אז זה נכון, החלק המגנטי של כוח לורנץ אכן יתן לנו איבר כוח מהצורה:

$$ q \dot{\mathbf{x}} \times\mathbf{B}$$ 

שלכאורה אומר שהכוח המגנטי אינו סמטרי לשיקוף בזמן. ויותר מזה! אפילו משוואת השדה של השדה המגנטי לא סימטריות בזמן! אם נסתכל על חוק אמפר:

$$ \nabla \times \mathbf{B} = \mu_0 \left( \mathbf{J} +\epsilon _0 \frac{\partial \textbf{E}}{\partial t}\right)$$

שני האיברים בצידה הימני של המשוואה משנים את הסימן שלהם! הזרם משנה את הסימן כי כל החלקיקים נעים עכשיו בכיוון הנגדי, והנגזרת הזמנית של השדה החשמלי הפוכה כי הפכנו את כיוון הזמן. לרגע נראה שלהפוך את כיוון הזמן באמת הורס הכל.

אבל הבנתם מה קורה פה? 

ביקום שבו הפכנו את משוואות התנועה, השדה המגנטי מקבל סימן מינוס. הערך של השדה המגנטי ביקום ההפוך שלנו הוא בדיוק מינוס הערך המקורי שלו. אנחנו רואים את זה ישירות ממשוואת אמפר. ולכן, הכוח המגנטי מקבל סימן מינוס בגלל השדה המגנטי, ועוד  סימן מינוס בגלל הנגזרת הזמנית של $\textbf{x}(-t)$, כך שבסך הכל החוק השני של ניוטון עדיין מתקיים. 

בכל התורות הקלאסיות, היקום סימטרי לשיקוף בזמן. 

### עוד נגזרות ראשונות בזמן

עם רצון תמים להציל את החוק השני, אנחנו עלולים לחפש כל תאוריה שיש בה נגזרת ראשונה בזמן, ולהכריז שהיא המקור לחוסר הסימטריה בזמן ובתורו לחוק השני של התרמודינאמיקה. לדוגמה אם נסתכל על משוואת החום:

$$ \dot{u} =D \nabla^2 u $$

היפוך בזמן של פתרונות לא נותן לנו פתרונות, חום מתפשט ואף פעם לא להפך. ואין ספק שהאנטרופיה עולה בכל מערכת שמתקדמת לפי משוואת החום. אבל זה לא פתרון את הסוגיה שהטרידה אותנו. משוואת החום היא לא חוק טבע יסודי ״אמיתי״, אלא קירוב, שמשתמש בין השאר בחוק השני של התרמודינאמיקה, שכאמור אנחנו מתחילים לחשוד שבכלל לא יכול להתקיים ביקום שלנו. 

תאוריה יסודית שיש בה נגזרת מסדר ראשון היא תורת הקוונטים, והנגזרת הזו נמצאת במשוואת שרדינגר, שכמו שהזכרתי ב-4 הפרקים על QFT, שומרת על הצורה המקורית שלה אפילו בתורת השדות - ווקטורי מצב צוברים פאזה לפי האנרגיה שלהם. בשביל הדיון הזה, משוואת שרדינגר תהיה עבורנו:

$$-i \dot{\psi} = H\psi $$

ויסלח לי $\hbar$ שלא הזמנתי אותו. פתרון הפוך בזמן של משוואת שרדינגר, כלומר $\psi(-t)$, צובר פאזה בכיוון הלא נכון, ולכן הוא לא פתרון ביקום שלנו, ושום סימן מינוס שאני אשלוף מתוך ההמילטוניאן עכשיו לא ישנה את זה. אבל, אף על פי שמשוואת שרדינגר לא סימטרית לשיקוף בזמן, אני אטען שמכניקת הקוונטים דווקא כן.  

### פאזה בין מצבים

בתורת הקוונטים, ווקטורי מצב צוברים פאזה לפי האנרגיה שלהם. נניח שאני מעביר אתכם עכשיו לקיום חדש, בדיוק כמו שלנו, אבל שבו ווקטורי מצב צוברים פאזה הפוכה לפי האנרגיה שלהם, כלומר מצבים עם אנרגיה מוגדרת $E$ מתקדמים בזמן לפי:

$$ e^{iEt} \left| E \right>$$ 

בניגוד למצב ביקום שלנו, שבו הם צוברים פאזה לפי $(-iEt)$. איך היינו מודדים את התופעה הזו? איזה ניסוי היה משתנה ביקום החדש הזה?

אז האמת היא ששום ניסוי לא היה משתנה.

### משהו על Two-State Vector Formalism
