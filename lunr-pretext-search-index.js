var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-intro-ftoc",
  "level": "1",
  "url": "sec-intro-ftoc.html",
  "type": "Section",
  "number": "1.1",
  "title": "The integral of a derivative",
  "body": " The integral of a derivative  In a first real analysis course, or indeed a first calculus course, students are presented with two theorems grandly named The Fundamental Theorem of Calculus . Fundamental Theorem of Calculus We will focus on the first of these here (though both will be addressed later in the course).   The Fundamental Theorem of Calculus I  Fundamental Theorem of Calculus Suppose   is a continuous function which is differentiable on and has continuous bounded derivative on . Then    This is clearly a useful, strong theorem. However, it does leave a number of questions unanswered. Is there a class of functions so that the differentiability of is automatic? Do we need to be continuous everywhere in for the theorem to hold? Do we need to be defined everywhere in for the theorem to hold?  The following simple example shows that there are functions where the conclusion of the first fundamental theorem holds, but is not defined on all of the interval .   Let be the function on the interval , where . Then is differentiable at every point in except at . Indeed,   We can choose any value for , but we can not choose a value so that is continuous at . However, we can still calculate the Riemann integral , since a Riemann integral is not changed by the value at a single point. We have that    Example shows that we can get away with not being defined everywhere, and still satisfy the conclusion of the first fundamental theorem, Theorem . Similar to Example , we can easily construct examples of continuous functions which are not differentiable at finitely many points. With a little thought, we can construct an example of a continuous function which is continuous and not differentiable at countably many points. We give one such example below.   Define a function on by   By construction, is continuous. However, is not differentiable at for each integer ; is differentiable at all other (where or ).    A continuous function which is not differentiable at each . Example    One can further show that    for each Thus    Example shows that the conclusion of the Fundamental Theorem of Calculus holds for some functions where the derivative is undefined at infinitely many points. Can we classify\/describe the functions where the Fundamental Theorem of Calculus applies?  These questions are closely related to another question which many 19th century mathematicians struggled with. What is the relationship between continuity and differentiability? If is a continuous function, how non-differentiable can it be? Is a continuous function necessarily differentiable at some points? On some intervals? Is a continuous function differentiable `enough' to apply the first fundamental theorem of calculus?  In Example , the function is not differentiable at each . Whilst this gives (countably) infinite points where is not differentiable, each point where is not differentiable is isolated (meaning if is not differentiable at then there is an interval around in which is differentiable at all ). In the early 1800s, it was widely believed (or suspected, at least) that all examples would satisfy this. That is, it was conjectured that if was continuous on a closed interval then each point where is not differentiable is isolated). André-Marie Ampère (1775–1836) Ampère, André-Marie went so far as to present a `proof' of this statement. All mathematicians make mistakes. Most mathematicians go as far to publish mistakes. If you are to remember Ampère Ampère, André-Marie for anything it should not be for this. Augustin-Louis Cauchy (1789 - 1857) Cauchy, Augustin-Louis credits Ampère in influencing his work on the formalization of calculus.  The question of the relationship between continuity and differentiability was settled by Karl Weierstrass (1815–1897) Weierstrass, Karl and Hermann Schwarz (1843–1921) Schwarz, Hermann Schwarz's example in the 1870s. Weierstrass published the first example of a continuous function which is differentiable nowhere.  Schwarz gave an example of a continuous function which is differentiable at all but countably many points; but the points where is not differentiable are not isolated. Schwarz's example has an unbounded derivative which is not Riemann integrable. Schwarz's example  The history is more complicated than alluded to here. As earlier as the 1830s Bernard Bolzano (1781-1848) gave an example of a nowhere differentiable function. This work was not published at the time. In Bolzano's work he exhibited the continuity of the function and that it was not differentiable on a dense set. That Bolzano's function is nowhere differentiable was not proved until after Bolzano's manuscript was published in the 1920s. Charles Cellérier (1818-1889) gave an example of a nowhere differentiable continuous function in the 1860s. This was not published until after Cellérier's death, and after Weierstrass's work, in 1890.  The existence of nowhere differentiable functions means that there are continuous functions for which the first fundamental theorem does not apply. But for which functions does it apply? Which continuous functions are differentiable `enough' to apply the fundamental theorem?  Here is where we run into some shortcomings of the Riemann integral. Consider the following two examples.   Thomae's function Riemann's function popcorn function Riemann's function Riemann's function Let . Define a function on by   This is function goes by several names, including Riemann's function , Thomae's function , and the popcorn function .    Riemann's function, which is Riemann integrable and has a dense set of discontinuities. Example    Bernhard Riemann (1826 - 1866) Riemann, Bernhard introduced this function in his doctoral thesis in 1854, in which he also introduced the method of integration which bears his name. Riemann showed that this function was continuous at each irrational, , and discontinuous at the rational points, . He further showed that is Riemann integrable and      Let . Consider the characteristic function . That is   As is dense in , it follows that the lower integral   and the upper integral   Hence is not Riemann integral.   Examples ~and show that Riemann integration can sometimes work well with countable dense subsets, but not always. Hence Riemann integration may not work well when dealing with the derivative of Schwarz's example. Vito Volterra (1860 - 1940) Volterra, Vito gave an example in 1881 which gives a further complication to the theory. Volterra's function Volterra's function is continuous, with bounded and defined for all . However, is not Riemann integrable. Hence, we can not apply Theorem to .  These failures of the Riemann integral necessitate defining a new type of integral: the Lebesgue integral . Henri Lebesgue (1875 - 1941) Lebesgue, Henri introduced this more robust way integrating functions. For Riemann integrable functions, the Lebesgue integral and the Riemann integral coincide. However, the Lebesgue integral allows us to integrate many functions which are not Riemann integrable, including from Example and the derivative of Volterra's function .  Lebesgue also worked on the theory of differentiation, and its relationship to (both Riemann and Lebesgue) integration. Lebesgue showed that every increasing function is differentiable almost everywhere. This, in turn, can be used to show that a class of continuous functions called absolutely continuous functions absolutely continuous function , are differentiable almost everywhere. The term `almost everywhere' is not a vague colloquialism; it has an exact technical definition that we will see later in this course. In Chapter we will study measure spaces. In Chapter we will introduce the Lebesgue measure on subsets the real line, a generalization of the length function on intervals in . In Chapter we use these ideas to introduce Lebesgue integration (and generalizations thereof). In Chapter we will study absolutely continuous functions and complete our story on the relationship between (Lebesgue) integration and differentiation. In Theorem we give Lebesgue's version of the fundamental theorem of calculus:   for all absolutely continuous functions (where we use the Lebesgue integral to integrate ).  "
},
{
  "id": "thm-FTOCI",
  "level": "2",
  "url": "sec-intro-ftoc.html#thm-FTOCI",
  "type": "Theorem",
  "number": "1.1.1",
  "title": "The Fundamental Theorem of Calculus I.",
  "body": " The Fundamental Theorem of Calculus I  Fundamental Theorem of Calculus Suppose   is a continuous function which is differentiable on and has continuous bounded derivative on . Then   "
},
{
  "id": "exam-ftoc",
  "level": "2",
  "url": "sec-intro-ftoc.html#exam-ftoc",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": " Let be the function on the interval , where . Then is differentiable at every point in except at . Indeed,   We can choose any value for , but we can not choose a value so that is continuous at . However, we can still calculate the Riemann integral , since a Riemann integral is not changed by the value at a single point. We have that   "
},
{
  "id": "exam-ftoc2",
  "level": "2",
  "url": "sec-intro-ftoc.html#exam-ftoc2",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": " Define a function on by   By construction, is continuous. However, is not differentiable at for each integer ; is differentiable at all other (where or ).    A continuous function which is not differentiable at each . Example    One can further show that    for each Thus   "
},
{
  "id": "exam-popcorn",
  "level": "2",
  "url": "sec-intro-ftoc.html#exam-popcorn",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": " Thomae's function Riemann's function popcorn function Riemann's function Riemann's function Let . Define a function on by   This is function goes by several names, including Riemann's function , Thomae's function , and the popcorn function .    Riemann's function, which is Riemann integrable and has a dense set of discontinuities. Example    Bernhard Riemann (1826 - 1866) Riemann, Bernhard introduced this function in his doctoral thesis in 1854, in which he also introduced the method of integration which bears his name. Riemann showed that this function was continuous at each irrational, , and discontinuous at the rational points, . He further showed that is Riemann integrable and    "
},
{
  "id": "exam-char-Q",
  "level": "2",
  "url": "sec-intro-ftoc.html#exam-char-Q",
  "type": "Example",
  "number": "1.1.7",
  "title": "",
  "body": " Let . Consider the characteristic function . That is   As is dense in , it follows that the lower integral   and the upper integral   Hence is not Riemann integral.  "
},
{
  "id": "sec-int-lim-swap",
  "level": "1",
  "url": "sec-int-lim-swap.html",
  "type": "Section",
  "number": "1.2",
  "title": "More shortcomings of Riemann integration",
  "body": " More shortcomings of Riemann integration  The following theorem should be familiar.   Let be a sequence of continuous functions on a closed interval which converge uniformly to a (necessarily continuous) function . Then    Put another way, Theorem says that   That is, when converges to uniformly, the limit passes under the integral sign.  A short-coming of this theorem is in the need for uniform convergence. Uniform convergence is a strong condition, that is not always easy to check. A much easier condition to check is pointwise convergence. However, Theorem does not necessarily hold when uniform convergence is replaced by pointwise convergence. We will see an example of this in Exercise .  Enter, again, Lebesgue integration. We will see that pointwise limits of Lebesgue integral functions are again Lebesgue integrable. Further, we will show that, with some reasonable conditions (less than those implicitly in Theorem ), pointwise limits will pass under the (Lebesgue) integral sign. Several theorems of this type will be proved. The most famous of these is the Lebesgue Dominated Convergence Theorem, Theorem . As the name suggests, this was originally proved by Lebesgue.  "
},
{
  "id": "thm-lim-int",
  "level": "2",
  "url": "sec-int-lim-swap.html#thm-lim-int",
  "type": "Theorem",
  "number": "1.2.1",
  "title": "",
  "body": " Let be a sequence of continuous functions on a closed interval which converge uniformly to a (necessarily continuous) function . Then   "
},
{
  "id": "chap-intro-5",
  "level": "1",
  "url": "chap-intro-5.html",
  "type": "Section",
  "number": "1.3",
  "title": "On beyond",
  "body": " On beyond  With the framework set forth by Lebesgue, mathematicians found that they could define measures (and integrals) in a wide array of settings. Rather than develop Lebesgue measure on and then generalize, we will develop both theories in tandem. This saves a considerable amount of repetition.  The following, non-exhaustive, list of applications of measure theory gives some idea as to its value in mathematics, beyond the study of functions on the real line:   series;   probability theory;   formal definitions of the Dirac delta function ;   topological groups (i.e. abstract harmonic analysis);   Hausdorff dimension (e.g. to study fractals).    "
},
{
  "id": "chap-measure-space-3",
  "level": "1",
  "url": "chap-measure-space-3.html",
  "type": "Section",
  "number": "2.1",
  "title": "Measure spaces",
  "body": " Measure spaces  There will be a scarcity of examples in this section. In Section we will develop tools to construct measures. After that, we will have access to a plethora of examples. Let be a non-empty set. A measure will assign a non-negative value to subsets of , but not necessarily all subsets. We need the following definition(s) to describe the domain of a measure.   Let be a non-empty set, and let be the power set of . A collection of sets is a -algebra The suffix ` -' is usually used to denote a countably infinite version of whatever word comes after the ` -'. With that information you can probably infer what an algebra of sets is. if   ;   if then ;   if is a countable collection of sets in , then .      Let be a non-empty set, and let be a -algebra of subsets of . The pair is called a measurable space . measurable space   We record some basic properties of -algebras which we will need frequently.   Let be a measurable space. Then   ;   is closed under countable intersections, i.e. if then    is closed under finite unions and finite intersections;   if then .      SInce , it follows from conditions (i) and (ii) of Definition , that .  Let is a countable collection sets in . Then, it follows from conditions (ii) and (iii) of Definition the . Using De Morgan's Identity, and condition (ii) again, we have   Suppose is a finite collection of sets in . For , let . Then, by condition (i) of Defintion , is a countable collection of subsets in . By condition (iii),   Thus is also closed under finite unions. Similarly, we can show that .  Finally, take . Note   As is closed under complements and finite intersections, it follows that .    Let be a non-empty set, and let be the power-set of subsets of . Then is a -algebra, and thus is a measurable space.   There are occasions when we will consider measurable spaces of the form , (particularly if is countable). However, in most cases we will consider -algebras which are strictly contained in .   Let be a non-empty set. Let be a non-empty collection of sets. Then there is a unique -algebra such that , and if is a -algebra containing , then .  That is, there is a unique smallest -algebra containing .    Let be the collection of all -algebras of that contain . Note that is non-empty, as . Let   That is a -algebra with the desired properties follows readily.    Let be a non-empty set, and let be a non-empty collection of subsets of . Let be the unique, smallest -algebra containing (in the sense of Proposition ). We call the -algebra generated by .    Let be a topological space. Denote by the -algebra generated by the open sets in . We call the Borel sets of . Borel sets If we say that is a Borel set in X .  When , we will denote the Borel sets by .    Recall that every open set is a countable union of open intervals. Thus, the open sets in are in the -algebra generated by the open intervals. Hence, the Borel sets is the -algebra generated by the open intervals in .   We will now (finally) give the definition of a measure and a measure space.   Let be a measure space. A function is a measure measure on if   ; and   if is a countable collection of disjoint sets in then     If is a measure on a measurable space , we call the triple a measure space . measure space The sets are called measurable sets measurable set in the measure space .    A function which satisfies condition (ii) in Definition is said to be countable additive on disjoint sets countable additivity . This property is frequently abbreviated to simply `countably additive' . We must be careful to remember that countable additivity only applies to disjoint sets.   The condition of countable additivity implies finite additivity. If is a finite collection of disjoint sets in a -algebra , we can extend to a countably infinite collection by letting for , as we did in Proposition . Then, we have   Note that the definition of a measure does not assume that only takes finite values, i.e. is an allowed value, and there is no assumption that the series in condition (ii) of Definition are convergent. We use the usual rules of addition with and :   However, we must be careful to avoid , as is undefined.   measure space -finite A measure space is -finite if there is a countable collection of sets in such that   for each ;      If then is a finite measure space . measure space finite    A measure space is complete if, for each with , if then . measure space complete    We will pause here to assess where we are going. One of our main motivations for developing measure theory, as discussed in Sections ~and , is to develop a theory of integration on the real line that is more robust than Riemann integration.  For an interval let denote the length of . To form a Riemann sum for a function , we partition an interval into subintervals   and the Riemann sum is given by   where is some element of .  The main idea of Lebesgue integration is to define a measure on (a -algebra of) subsets of , so that for intervals . With in hand, we can then decompose using sets other than intervals. I.e., the idea is to use, instead of just Riemann sums, sums of the form   where , and is a disjoint collection of measurable sets such that . Broadening the scope of the sets we can `measure', i.e. using to measure sets that are not necessarily intervals, we will develop a theory of integration stronger than Riemann integration.  The exact definition of , and the -algebra it acts on, will have to wait until we have some more tools in our belt. We can see now, however, that if is to do what we want it to do, then will have to contain all intervals in (and hence will have to contain all the Borel sets ).    Let be any non-empty set and let be the -algebra of all subsets of . Define by   if contains infinitely many elements, and if has elements, for finite. Then is a measure space. We call the counting measure on . measure counting measure  The measure space is always complete; it is -finite if and only if is countable; it is finite if and only if is finite.    Let be a measurable space. Fix . Define on by measure Dirac measure   Then is a measure on called the Dirac measure at . measure Dirac measure    Let be a topological space. A measure on the Borel sets is a Borel measure Borel measure if for all compact subsets .   We will rarely want to define a measure on a set which does not have some natural topology on it. Indeed, most examples of measures that we will see will be Borel measures. The Dirac measure of Example is Borel measure when is a topological space and is the Borel sets (see Exercise ). Even the counting measure of Example is a Borel measure if we endow with the discrete topology (see Exercise ).  Probability theory can be naturally described in terms of measure theory. Probability theory is a subject in its own right and has led to some differences in naming and notation conventions.   A probability space probability space sample space probability space is a finite measure space where . The measure is called a probability measure . measure probability measure   We will forgo any further direct mention of probabilty theory until later,  though it has had an influence on some of the theory we will see along the way.  We end this section with an important piece of verbiage.   Let be a measure space. A property is said to hold for almost all almost all (abbreviated as a.a.  ) a.a. almost all or almost everywhere almost everywhere (abbreviate e.e. ) a.e. almost everywhere if there is a measurable set with such that holds on .   "
},
{
  "id": "def-sigma-alg",
  "level": "2",
  "url": "chap-measure-space-3.html#def-sigma-alg",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": " Let be a non-empty set, and let be the power set of . A collection of sets is a -algebra The suffix ` -' is usually used to denote a countably infinite version of whatever word comes after the ` -'. With that information you can probably infer what an algebra of sets is. if   ;   if then ;   if is a countable collection of sets in , then .    "
},
{
  "id": "def-measurable-space",
  "level": "2",
  "url": "chap-measure-space-3.html#def-measurable-space",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": " Let be a non-empty set, and let be a -algebra of subsets of . The pair is called a measurable space . measurable space  "
},
{
  "id": "prop-sigma-alg-props",
  "level": "2",
  "url": "chap-measure-space-3.html#prop-sigma-alg-props",
  "type": "Proposition",
  "number": "2.1.3",
  "title": "",
  "body": " Let be a measurable space. Then   ;   is closed under countable intersections, i.e. if then    is closed under finite unions and finite intersections;   if then .    "
},
{
  "id": "chap-measure-space-3-7",
  "level": "2",
  "url": "chap-measure-space-3.html#chap-measure-space-3-7",
  "type": "Proof",
  "number": "2.1.1",
  "title": "",
  "body": " SInce , it follows from conditions (i) and (ii) of Definition , that .  Let is a countable collection sets in . Then, it follows from conditions (ii) and (iii) of Definition the . Using De Morgan's Identity, and condition (ii) again, we have   Suppose is a finite collection of sets in . For , let . Then, by condition (i) of Defintion , is a countable collection of subsets in . By condition (iii),   Thus is also closed under finite unions. Similarly, we can show that .  Finally, take . Note   As is closed under complements and finite intersections, it follows that .  "
},
{
  "id": "exam-P-X-measurable-space",
  "level": "2",
  "url": "chap-measure-space-3.html#exam-P-X-measurable-space",
  "type": "Example",
  "number": "2.1.4",
  "title": "",
  "body": " Let be a non-empty set, and let be the power-set of subsets of . Then is a -algebra, and thus is a measurable space.  "
},
{
  "id": "prop-gen-sig-alg",
  "level": "2",
  "url": "chap-measure-space-3.html#prop-gen-sig-alg",
  "type": "Proposition",
  "number": "2.1.5",
  "title": "",
  "body": " Let be a non-empty set. Let be a non-empty collection of sets. Then there is a unique -algebra such that , and if is a -algebra containing , then .  That is, there is a unique smallest -algebra containing .  "
},
{
  "id": "chap-measure-space-3-11",
  "level": "2",
  "url": "chap-measure-space-3.html#chap-measure-space-3-11",
  "type": "Proof",
  "number": "2.1.2",
  "title": "",
  "body": " Let be the collection of all -algebras of that contain . Note that is non-empty, as . Let   That is a -algebra with the desired properties follows readily.  "
},
{
  "id": "chap-measure-space-3-12",
  "level": "2",
  "url": "chap-measure-space-3.html#chap-measure-space-3-12",
  "type": "Definition",
  "number": "2.1.6",
  "title": "",
  "body": " Let be a non-empty set, and let be a non-empty collection of subsets of . Let be the unique, smallest -algebra containing (in the sense of Proposition ). We call the -algebra generated by .  "
},
{
  "id": "exam-Borel-sets",
  "level": "2",
  "url": "chap-measure-space-3.html#exam-Borel-sets",
  "type": "Definition",
  "number": "2.1.7",
  "title": "",
  "body": " Let be a topological space. Denote by the -algebra generated by the open sets in . We call the Borel sets of . Borel sets If we say that is a Borel set in X .  When , we will denote the Borel sets by .  "
},
{
  "id": "chap-measure-space-3-14",
  "level": "2",
  "url": "chap-measure-space-3.html#chap-measure-space-3-14",
  "type": "Remark",
  "number": "2.1.8",
  "title": "",
  "body": " Recall that every open set is a countable union of open intervals. Thus, the open sets in are in the -algebra generated by the open intervals. Hence, the Borel sets is the -algebra generated by the open intervals in .  "
},
{
  "id": "def-measure",
  "level": "2",
  "url": "chap-measure-space-3.html#def-measure",
  "type": "Definition",
  "number": "2.1.9",
  "title": "",
  "body": " Let be a measure space. A function is a measure measure on if   ; and   if is a countable collection of disjoint sets in then     If is a measure on a measurable space , we call the triple a measure space . measure space The sets are called measurable sets measurable set in the measure space .  "
},
{
  "id": "chap-measure-space-3-17",
  "level": "2",
  "url": "chap-measure-space-3.html#chap-measure-space-3-17",
  "type": "Remark",
  "number": "2.1.10",
  "title": "",
  "body": " A function which satisfies condition (ii) in Definition is said to be countable additive on disjoint sets countable additivity . This property is frequently abbreviated to simply `countably additive' . We must be careful to remember that countable additivity only applies to disjoint sets.  "
},
{
  "id": "chap-measure-space-3-23",
  "level": "2",
  "url": "chap-measure-space-3.html#chap-measure-space-3-23",
  "type": "Definition",
  "number": "2.1.11",
  "title": "",
  "body": " measure space -finite A measure space is -finite if there is a countable collection of sets in such that   for each ;      If then is a finite measure space . measure space finite  "
},
{
  "id": "chap-measure-space-3-24",
  "level": "2",
  "url": "chap-measure-space-3.html#chap-measure-space-3-24",
  "type": "Definition",
  "number": "2.1.12",
  "title": "",
  "body": " A measure space is complete if, for each with , if then . measure space complete  "
},
{
  "id": "chap-measure-space-3-25",
  "level": "2",
  "url": "chap-measure-space-3.html#chap-measure-space-3-25",
  "type": "Remark",
  "number": "2.1.13",
  "title": "",
  "body": " We will pause here to assess where we are going. One of our main motivations for developing measure theory, as discussed in Sections ~and , is to develop a theory of integration on the real line that is more robust than Riemann integration.  For an interval let denote the length of . To form a Riemann sum for a function , we partition an interval into subintervals   and the Riemann sum is given by   where is some element of .  The main idea of Lebesgue integration is to define a measure on (a -algebra of) subsets of , so that for intervals . With in hand, we can then decompose using sets other than intervals. I.e., the idea is to use, instead of just Riemann sums, sums of the form   where , and is a disjoint collection of measurable sets such that . Broadening the scope of the sets we can `measure', i.e. using to measure sets that are not necessarily intervals, we will develop a theory of integration stronger than Riemann integration.  The exact definition of , and the -algebra it acts on, will have to wait until we have some more tools in our belt. We can see now, however, that if is to do what we want it to do, then will have to contain all intervals in (and hence will have to contain all the Borel sets ).  "
},
{
  "id": "exam-counting",
  "level": "2",
  "url": "chap-measure-space-3.html#exam-counting",
  "type": "Example",
  "number": "2.1.14",
  "title": "",
  "body": " Let be any non-empty set and let be the -algebra of all subsets of . Define by   if contains infinitely many elements, and if has elements, for finite. Then is a measure space. We call the counting measure on . measure counting measure  The measure space is always complete; it is -finite if and only if is countable; it is finite if and only if is finite.  "
},
{
  "id": "exam-dirac-measure",
  "level": "2",
  "url": "chap-measure-space-3.html#exam-dirac-measure",
  "type": "Example",
  "number": "2.1.15",
  "title": "",
  "body": " Let be a measurable space. Fix . Define on by measure Dirac measure   Then is a measure on called the Dirac measure at . measure Dirac measure  "
},
{
  "id": "def-borel-meas",
  "level": "2",
  "url": "chap-measure-space-3.html#def-borel-meas",
  "type": "Definition",
  "number": "2.1.16",
  "title": "",
  "body": " Let be a topological space. A measure on the Borel sets is a Borel measure Borel measure if for all compact subsets .  "
},
{
  "id": "chap-measure-space-3-31",
  "level": "2",
  "url": "chap-measure-space-3.html#chap-measure-space-3-31",
  "type": "Definition",
  "number": "2.1.17",
  "title": "",
  "body": " A probability space probability space sample space probability space is a finite measure space where . The measure is called a probability measure . measure probability measure  "
},
{
  "id": "chap-measure-space-3-35",
  "level": "2",
  "url": "chap-measure-space-3.html#chap-measure-space-3-35",
  "type": "Definition",
  "number": "2.1.18",
  "title": "",
  "body": " Let be a measure space. A property is said to hold for almost all almost all (abbreviated as a.a.  ) a.a. almost all or almost everywhere almost everywhere (abbreviate e.e. ) a.e. almost everywhere if there is a measurable set with such that holds on .  "
},
{
  "id": "chap-measure-space-4",
  "level": "1",
  "url": "chap-measure-space-4.html",
  "type": "Section",
  "number": "2.2",
  "title": "Properties of measures",
  "body": " Properties of measures   Let be a measure space. Then the following hold   (Monotonicity) If with , then ; measure monotonicity   (Excision) If with and , then ; measure excision property   (Countable monotonicity) If is a countable collection of measurable sets, and is a measurable set such that , then measure countable monotonicity      Take with . Note we can write as a disjoint union   Thus   Thus, . If , then it follows that and . Hence, it follows from that   Now let be a countable collection of sets in . Let . Let . Continuing in this way, we let   In this way, we get a countable family of disjoint measurable sets, which satisfies   and for each . Thus, if we have    The next theorem is called the continuity of measure .   Continuity of measure  measure continuity Let be a measure space.   If is a countable collection of measurable sets satisfying (i.e. ascending measurable sets), then    If is a countable collection of measurable sets satisfying (i.e. descending measurable sets) and , then       Let be an countable collection of ascending measurable sets, and let . If for some index , then since (by the monotonicity of ). Hence   Assume now that for all . Let and let   Then is a countable collection of disjoint measurable sets satisfying   Hence is the disjoint union . Thus   Thus (i) holds.  Now assume is a descending collection of measurable sets, with . For each , let . Then is an ascending sequence of measurable sets. By part (i), we have that   Note that we have used the fact that in order to use the excision property in . By De Morgan's identities   Hence   Combining and we get    Not all measure spaces that we encounter will be complete. Indeed, we will see that Borel measures need not be complete. We will see an important example of this in the real line later.  However, the next theorem shows that a measure space that is not complete can always be extended to be complete.   measure space completion Let be a measure space. Define to be the collection of subset of   For in where and with , define . Then is a -algebra and is a complete measure space. measure space complete    Let be a measure space, and let be the complete measure space constructed from in Theorem . Then is the completion of . measure space completion   "
},
{
  "id": "prop-measure-properties",
  "level": "2",
  "url": "chap-measure-space-4.html#prop-measure-properties",
  "type": "Proposition",
  "number": "2.2.1",
  "title": "",
  "body": " Let be a measure space. Then the following hold   (Monotonicity) If with , then ; measure monotonicity   (Excision) If with and , then ; measure excision property   (Countable monotonicity) If is a countable collection of measurable sets, and is a measurable set such that , then measure countable monotonicity    "
},
{
  "id": "chap-measure-space-4-3",
  "level": "2",
  "url": "chap-measure-space-4.html#chap-measure-space-4-3",
  "type": "Proof",
  "number": "2.2.1",
  "title": "",
  "body": " Take with . Note we can write as a disjoint union   Thus   Thus, . If , then it follows that and . Hence, it follows from that   Now let be a countable collection of sets in . Let . Let . Continuing in this way, we let   In this way, we get a countable family of disjoint measurable sets, which satisfies   and for each . Thus, if we have   "
},
{
  "id": "thm-continuity-of-measure",
  "level": "2",
  "url": "chap-measure-space-4.html#thm-continuity-of-measure",
  "type": "Theorem",
  "number": "2.2.2",
  "title": "Continuity of measure.",
  "body": " Continuity of measure  measure continuity Let be a measure space.   If is a countable collection of measurable sets satisfying (i.e. ascending measurable sets), then    If is a countable collection of measurable sets satisfying (i.e. descending measurable sets) and , then     "
},
{
  "id": "chap-measure-space-4-6",
  "level": "2",
  "url": "chap-measure-space-4.html#chap-measure-space-4-6",
  "type": "Proof",
  "number": "2.2.2",
  "title": "",
  "body": " Let be an countable collection of ascending measurable sets, and let . If for some index , then since (by the monotonicity of ). Hence   Assume now that for all . Let and let   Then is a countable collection of disjoint measurable sets satisfying   Hence is the disjoint union . Thus   Thus (i) holds.  Now assume is a descending collection of measurable sets, with . For each , let . Then is an ascending sequence of measurable sets. By part (i), we have that   Note that we have used the fact that in order to use the excision property in . By De Morgan's identities   Hence   Combining and we get   "
},
{
  "id": "thm-completion-of-meas-space",
  "level": "2",
  "url": "chap-measure-space-4.html#thm-completion-of-meas-space",
  "type": "Theorem",
  "number": "2.2.3",
  "title": "",
  "body": " measure space completion Let be a measure space. Define to be the collection of subset of   For in where and with , define . Then is a -algebra and is a complete measure space. measure space complete  "
},
{
  "id": "chap-measure-space-4-10",
  "level": "2",
  "url": "chap-measure-space-4.html#chap-measure-space-4-10",
  "type": "Definition",
  "number": "2.2.4",
  "title": "",
  "body": " Let be a measure space, and let be the complete measure space constructed from in Theorem . Then is the completion of . measure space completion  "
},
{
  "id": "sec-construction",
  "level": "1",
  "url": "sec-construction.html",
  "type": "Section",
  "number": "2.3",
  "title": "Constructing measures",
  "body": " Constructing measures  The reason for the dearth of examples of measures thus far is simple: measures are complicated. Let be a measure space. Given one may ask   Is measurable? That is, is ?   If is measurable, what is the value of ?    In general, neither of these questions are easy to answer. However, as we will see, we can make do without having a full answer to these questions. More commonly, we will want to take some prescribed values on a subset of , where is not necessarily a -algebra. In this section we will see how to construct a measure by defining on (when and are sufficiently well behaved).  The process for constructing measures will involve several steps. Starting with a function on a set of sets we will construct a function , called an outer measure , on all of . We will then restrict two a smaller -algebra on which it is a measure.  We begin with the definition of an outer measure.   Let be a non-empty set. A function   is an outer measure outer measure on if   ;   if is a countable collection of subsets of , and then  I.e. is countably monotone. countably monotone      Outer measures are not as well behaved as measures. However, they have two significant advantages: they are defined on all subsets of , and they are easy to construct.   outer measure induced Let be a nonempty set, let be a non-empty collection of subsets of , and let be any function. Define a function by   ;   if , and there exists a countable collection of sets in such that , then    if and can not be covered by a countably infinite family in , then    Then is an outer measure on .    By definition, , so we only need to show that is countably monotone. Take subsets , and of with . If for some , then   Suppose now that for all . Fix . For each , choose a countable collection of subsets of such that   Since , the collection covers . Thus   Hence , and so is countably monotone.    Let be a non-empty set, and let be a non-empty collection of subsets. Let be a function and let be the outer measure constructed in Theorem . We call the outer measure induced by . outer measure induced   Let be the outer measure induced from a set function In general, there is no reason to expect to be well-behaved, beyond being an outer measure. We may not even have for . We will see that whether or not preserves nice properties of (if there are any) will depend on both  and  . The following two examples give instances when the induced outer measure does end up being useful.   Let be an infinite set, and let be the collection of all finite subsets of . Let be the counting function. I.e. for , is the (necessarily finite) number of elements of . If is the outer measure induced by , then is the counting measure (Exercise ).    Let be the collection of all open intervals in the real line. Let be the length function on , i.e. for all . Let be the outer measure induced by . Then for all intervals in (Exercised ). The outer measure is called the Lebesgue outer measure on . outer measure Lebesgue outer measure We will see (much!) more on this later.   Having constructed an outer measure from an arbitrary (set) function, we will now restrict outer measures to measures.   measurable set with respect to an outer measure Let be a non-empty set and let be an outer measure on . A set is measurable with respect to if   for all  The term -measurable is also used for sets which are measurable with respect to .    Let be a non-empty set, let be an outer measure on , and let be the collection of all subsets of which are measurable with respect to . Then is a -algebra and the restriction of to is a measure. That is, is a measure space, where . Further, is a complete measure space.    Clearly . Also, if is measurable with respect to , then is also in . To show that is a -algebra it remains to show that is closed under countable unions. We will do this in tandem with showing that is a measure.  Let and be two -measurable sets. Take any . Then, since and are measurable, we have   Note that   and   Hence   Therefore, is -measurable. It follows inductively that if is a finite collection of measurable sets, then is measurable.  Let be a finite collection of disjoint measurable sets. Take any set . Since the sets are disjoint and measurable, we have   In particular,   Thus far, we have shown that is closed under finite unions, and is additive on finite collections of disjoint sets in . As is closed under taking complements, it follows that is also closed under finite intersections. We need to extend finite to infinite in both instances. Let be a countable collection of measurable sets and let We will use our favorite trick to ``disjointize\" this collection. Though we have used this method before, we will go through the steps carefully to make sure that at each step we remain with a set in . Let , and . Note that Continuing in this way, for each let   Again, we have that for each . Thus is a countable collection of disjoint measurable sets. Further for .  Fix , and take any . Let . Then, by the measurability of ,   where the second inequality comes from and the last inequality holds since . As this holds for all , the countable monotonicity of the outer measure gives   It follows that is measurable.  We have thus shown that is a -algebra. It remains to complete the proof that is a measure when restricted to . It only remains to show that is countably additive on disjoint measurable sets. Let be a disjoint collection of measurable sets and let . If , then   and so . Suppose now that . For every we have, by the measurability of and the finite additivity of on disjoint sets,   As this holds for all , we have that . Hence . Thus is a measure space. That this measure space is complete is left as an exercise (Exercise ).   Starting we a function on some set we can now construct a measure.   Start with on ;   let be the outer-measure induced by (Theorem );   let be the measure we get by restricting to the -measurable sets (Theorem ).    We call the Carathéodory measure induced by . measure Carathéodory measure  Now that we can construct the Carathéodory measure induced by a set function , we can ask how and relate. In particular, when are we guaranteed that each set is measurable with respect to ? And if the sets in are measurable, is ? As stated earlier, the answers to these questions rely both on and .   Let be a non-empty set and let be a non-empty collection of subsets of . A function is a premeasure premeasure if   is finitely additive, i.e. if is a disjoint collection of sets in whose union is also in , then ;   is countably monotone, i.e. if are in and , then ;   if , then .     Let . As any measure is a premeasure, in necessary condition for the Carathéodory measure induced by to agree with on is for to be a premeasure. With some additional structure on , we can show that the Carathéodory measure is an extension of a premeasure. When this happens, we call the Carathéodory measure a Carathéodory extension . Carathéodory extension It may be the case that there are more measures than the Carathéodory extension which extend a premeasure . However, we will see in Theorem that Carathéodory is sometimes unique.   Let be a non-empty set. Let be a non-empty collection of subseteq which is closed under relative complements relative complement . That is, if , then . Let be a premeasure, and let be the Carathéodory measure induced by . Then each is -measurable, and . That is, is the Carathéodory extenion on .    Take . We will show that is -measurable, where is the outer measure induced by . Take any . We need to show that   If then this equality clearly holds. Thus we will suppose that It suffices to show that   Fix a . By the definition of , and since , there exists a countable collection such that and   Note that, , and hence for each . Further, , and so for each . By the countable additivity of we thus have   Thus   As covers and covers we have that   Thus   As this holds for all , it follows that   Thus is -measurable.  That for all follows since is countably monotone. Thus the Carathéodory measure induced by is an extension of .   The conditions on in Theorem are not quite what we will have practical use for. We instead will look at semirings of subsets .   Let be a non-empty set and let be a non-empty collection of subsets of . The collection is a semiring (of subsets of ) semiring if for each   ; and   there exists a finite disjoint collection of sets in such that      Note that if is a semiring, then . Indeed, if then can be written as a disjoint union of sets in . These sets are necessarily the empty set.   Let be the collection of all intervals in ; let be the collection of all intervals of finite length in ; and let be the collection of intervals of the form   Then each of , , and are semirings of subsets of .    Let and be two measure spaces. Let be the collection of subsets of given by   Then is a semiring. The elements of are called measurable rectangles. measurable rectangle More on this later, when we look at product measures.    Let be a semiring of subsets of a non-empty subset and let   Then is closed under relative complements. Further, if is a premeasure on then extends uniquely to a premeasure on .    Note that is closed under finite intersections. It follows that is also closed under finite intersections. Now take . We can write as the disjoint union   As each of the three terms can be written as disjoint unions of sets in , it follows that . Inductively, it can be shown that is closed under finite unions.  Let and be finite disjoint collections of sets from . We have that   Thus, relative complements of sets in can be written as finite unions of finite intersections of sets in . As is closed under finite unions and finite intersections, it follows that is closed under relative complements.  Suppose now that is a premeasure on . For disjoint sets in define   We must first show that is well-defined on . To this end, suppose and are finite disjoint collections in with . Note that, for each , is a disjoint union of sets in . By the finite additivity of ,   Similarly, for each ,   Thus,   Hence is a well-defined function on .  That is finitely additive is clear. To show that is a premeasure, it remains to show countable monotonicity. To this end, take a countable collection in , and such that   Note that, since is closed under finite unions and relative complements, we can assume that the collection is disjoint. As sets in are disjoint unions of sets in , can further assume that the sets are in . Let be disjoint sets in such that . By the countable monotonicity of we have   for each . Hence   Hence is a premeasure on .  The uniqueness of follows from the definition of .   Let be a function on a collection of subsets of . Denote by the collection of all countable unions of sets in ; and denote by the collection of all countable intersections of sets in . Note that, if the sets in are measurable with respect to the Carathéodory measure induced by (in particular, if is an extension of ), then the sets in are also measurable. The following proposition tells us that the sets in can often be used to approximate the outer measure (and indeed the measure ).   The -notation used above is supposed to be reminiscent of and notation used in topology: -sets are countable unions of open sets; -sets are countable intersections of closed sets. `G' for `open' comes from the German word geöffnet; `F' for `closed' comes from the French word fermé. When working with measures on topological spaces we will often use and sets in the way sets are used in the following proposition.    Let be a set function on a collection of subsets of , and let be the induced outer measure, and let be the induced Carathéodory measure.  If satisfies then there exists an such that and . If is -measurable and each set in is -measurable, then is -measurable and .    Suppose . By the definition of , for each there exists a countable collection such that and   Let . Then and   Now let . Then , and . Further, for each ,   As this holds for all , it follows that .  Finally, if extends then every set in is measurable, and thus every set in and is measurable. If is also measurable, then by the excision property   \\qedhere   We are now ready for the main theorem of this section: our main tool for constructing measures. The uniqueness in the following theorem is important and will be used frequently. Before stating the theorem we need one more definition. If is a collection of subsets of , and is a function, we say that is -finite -finite set function if there is a countable collection of sets in with for all , and . Note that this definition is consistent with the definition of a -finite measure.   Carathéodory-Hahn Theorem  Carathéodory-Hahn Theorem Carathéodory extension Let be a premeasure on a semiring of subsets of a non-empty set . Then the Carathéodory measure induced by is an extension of . Furthermore, if is -finite, then is -finite and is the unique measure on the set of -measurable subsets extending .    That extends follows from Theorem and Lemma . If is -finite, then is -finite since extends .  It remains to show that is unique when is -finite. Suppose that is another measure on the -measurable sets which extends . Suppose satisfies . By the definition of the out measure , if we fix there exists in such that and   Noting that for each , the countable monotonicity of implies that .  Take any (i.e. is a countable union of sets in ). As is a semiring, we can write as a disjoint countable union of sets in . Since and are countably additive and agree on , it follows that . If (i.e. is a countable intersection of sets in ), and , then by the continuity of measure, for both and , we have that .  Now take with . Take any . We will show that . By Proposition , there is an such that and . We can further assume that . By the excision property   We have already shown that and . And hence .  Finally, if is -finite, there are sets in which cover all of and satisfy . We can further assume that the sets are disjoint. Thus, if is measurable then   thus proving the uniqueness of .   "
},
{
  "id": "sec-construction-7",
  "level": "2",
  "url": "sec-construction.html#sec-construction-7",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": " Let be a non-empty set. A function   is an outer measure outer measure on if   ;   if is a countable collection of subsets of , and then  I.e. is countably monotone. countably monotone     "
},
{
  "id": "thm-outer-measure",
  "level": "2",
  "url": "sec-construction.html#thm-outer-measure",
  "type": "Theorem",
  "number": "2.3.2",
  "title": "",
  "body": " outer measure induced Let be a nonempty set, let be a non-empty collection of subsets of , and let be any function. Define a function by   ;   if , and there exists a countable collection of sets in such that , then    if and can not be covered by a countably infinite family in , then    Then is an outer measure on .  "
},
{
  "id": "sec-construction-10",
  "level": "2",
  "url": "sec-construction.html#sec-construction-10",
  "type": "Proof",
  "number": "2.3.1",
  "title": "",
  "body": " By definition, , so we only need to show that is countably monotone. Take subsets , and of with . If for some , then   Suppose now that for all . Fix . For each , choose a countable collection of subsets of such that   Since , the collection covers . Thus   Hence , and so is countably monotone.  "
},
{
  "id": "sec-construction-11",
  "level": "2",
  "url": "sec-construction.html#sec-construction-11",
  "type": "Definition",
  "number": "2.3.3",
  "title": "",
  "body": " Let be a non-empty set, and let be a non-empty collection of subsets. Let be a function and let be the outer measure constructed in Theorem . We call the outer measure induced by . outer measure induced  "
},
{
  "id": "ex-induced-counting-outer-measure",
  "level": "2",
  "url": "sec-construction.html#ex-induced-counting-outer-measure",
  "type": "Example",
  "number": "2.3.4",
  "title": "",
  "body": " Let be an infinite set, and let be the collection of all finite subsets of . Let be the counting function. I.e. for , is the (necessarily finite) number of elements of . If is the outer measure induced by , then is the counting measure (Exercise ).  "
},
{
  "id": "ex-induced-length-outer-measure",
  "level": "2",
  "url": "sec-construction.html#ex-induced-length-outer-measure",
  "type": "Example",
  "number": "2.3.5",
  "title": "",
  "body": " Let be the collection of all open intervals in the real line. Let be the length function on , i.e. for all . Let be the outer measure induced by . Then for all intervals in (Exercised ). The outer measure is called the Lebesgue outer measure on . outer measure Lebesgue outer measure We will see (much!) more on this later.  "
},
{
  "id": "sec-construction-16",
  "level": "2",
  "url": "sec-construction.html#sec-construction-16",
  "type": "Definition",
  "number": "2.3.6",
  "title": "",
  "body": " measurable set with respect to an outer measure Let be a non-empty set and let be an outer measure on . A set is measurable with respect to if   for all  The term -measurable is also used for sets which are measurable with respect to .  "
},
{
  "id": "thm-measure-space-from-outer-measure",
  "level": "2",
  "url": "sec-construction.html#thm-measure-space-from-outer-measure",
  "type": "Theorem",
  "number": "2.3.7",
  "title": "",
  "body": " Let be a non-empty set, let be an outer measure on , and let be the collection of all subsets of which are measurable with respect to . Then is a -algebra and the restriction of to is a measure. That is, is a measure space, where . Further, is a complete measure space.  "
},
{
  "id": "sec-construction-18",
  "level": "2",
  "url": "sec-construction.html#sec-construction-18",
  "type": "Proof",
  "number": "2.3.2",
  "title": "",
  "body": " Clearly . Also, if is measurable with respect to , then is also in . To show that is a -algebra it remains to show that is closed under countable unions. We will do this in tandem with showing that is a measure.  Let and be two -measurable sets. Take any . Then, since and are measurable, we have   Note that   and   Hence   Therefore, is -measurable. It follows inductively that if is a finite collection of measurable sets, then is measurable.  Let be a finite collection of disjoint measurable sets. Take any set . Since the sets are disjoint and measurable, we have   In particular,   Thus far, we have shown that is closed under finite unions, and is additive on finite collections of disjoint sets in . As is closed under taking complements, it follows that is also closed under finite intersections. We need to extend finite to infinite in both instances. Let be a countable collection of measurable sets and let We will use our favorite trick to ``disjointize\" this collection. Though we have used this method before, we will go through the steps carefully to make sure that at each step we remain with a set in . Let , and . Note that Continuing in this way, for each let   Again, we have that for each . Thus is a countable collection of disjoint measurable sets. Further for .  Fix , and take any . Let . Then, by the measurability of ,   where the second inequality comes from and the last inequality holds since . As this holds for all , the countable monotonicity of the outer measure gives   It follows that is measurable.  We have thus shown that is a -algebra. It remains to complete the proof that is a measure when restricted to . It only remains to show that is countably additive on disjoint measurable sets. Let be a disjoint collection of measurable sets and let . If , then   and so . Suppose now that . For every we have, by the measurability of and the finite additivity of on disjoint sets,   As this holds for all , we have that . Hence . Thus is a measure space. That this measure space is complete is left as an exercise (Exercise ).  "
},
{
  "id": "sec-construction-23",
  "level": "2",
  "url": "sec-construction.html#sec-construction-23",
  "type": "Definition",
  "number": "2.3.8",
  "title": "",
  "body": " Let be a non-empty set and let be a non-empty collection of subsets of . A function is a premeasure premeasure if   is finitely additive, i.e. if is a disjoint collection of sets in whose union is also in , then ;   is countably monotone, i.e. if are in and , then ;   if , then .    "
},
{
  "id": "thm-Car-ext-1",
  "level": "2",
  "url": "sec-construction.html#thm-Car-ext-1",
  "type": "Theorem",
  "number": "2.3.9",
  "title": "",
  "body": " Let be a non-empty set. Let be a non-empty collection of subseteq which is closed under relative complements relative complement . That is, if , then . Let be a premeasure, and let be the Carathéodory measure induced by . Then each is -measurable, and . That is, is the Carathéodory extenion on .  "
},
{
  "id": "sec-construction-26",
  "level": "2",
  "url": "sec-construction.html#sec-construction-26",
  "type": "Proof",
  "number": "2.3.3",
  "title": "",
  "body": " Take . We will show that is -measurable, where is the outer measure induced by . Take any . We need to show that   If then this equality clearly holds. Thus we will suppose that It suffices to show that   Fix a . By the definition of , and since , there exists a countable collection such that and   Note that, , and hence for each . Further, , and so for each . By the countable additivity of we thus have   Thus   As covers and covers we have that   Thus   As this holds for all , it follows that   Thus is -measurable.  That for all follows since is countably monotone. Thus the Carathéodory measure induced by is an extension of .  "
},
{
  "id": "sec-construction-28",
  "level": "2",
  "url": "sec-construction.html#sec-construction-28",
  "type": "Definition",
  "number": "2.3.10",
  "title": "",
  "body": " Let be a non-empty set and let be a non-empty collection of subsets of . The collection is a semiring (of subsets of ) semiring if for each   ; and   there exists a finite disjoint collection of sets in such that     "
},
{
  "id": "exam-interval-semiring",
  "level": "2",
  "url": "sec-construction.html#exam-interval-semiring",
  "type": "Example",
  "number": "2.3.11",
  "title": "",
  "body": " Let be the collection of all intervals in ; let be the collection of all intervals of finite length in ; and let be the collection of intervals of the form   Then each of , , and are semirings of subsets of .  "
},
{
  "id": "exam-product-semiring",
  "level": "2",
  "url": "sec-construction.html#exam-product-semiring",
  "type": "Example",
  "number": "2.3.12",
  "title": "",
  "body": " Let and be two measure spaces. Let be the collection of subsets of given by   Then is a semiring. The elements of are called measurable rectangles. measurable rectangle More on this later, when we look at product measures.  "
},
{
  "id": "lem-Car-ext-2",
  "level": "2",
  "url": "sec-construction.html#lem-Car-ext-2",
  "type": "Lemma",
  "number": "2.3.13",
  "title": "",
  "body": " Let be a semiring of subsets of a non-empty subset and let   Then is closed under relative complements. Further, if is a premeasure on then extends uniquely to a premeasure on .  "
},
{
  "id": "sec-construction-33",
  "level": "2",
  "url": "sec-construction.html#sec-construction-33",
  "type": "Proof",
  "number": "2.3.4",
  "title": "",
  "body": " Note that is closed under finite intersections. It follows that is also closed under finite intersections. Now take . We can write as the disjoint union   As each of the three terms can be written as disjoint unions of sets in , it follows that . Inductively, it can be shown that is closed under finite unions.  Let and be finite disjoint collections of sets from . We have that   Thus, relative complements of sets in can be written as finite unions of finite intersections of sets in . As is closed under finite unions and finite intersections, it follows that is closed under relative complements.  Suppose now that is a premeasure on . For disjoint sets in define   We must first show that is well-defined on . To this end, suppose and are finite disjoint collections in with . Note that, for each , is a disjoint union of sets in . By the finite additivity of ,   Similarly, for each ,   Thus,   Hence is a well-defined function on .  That is finitely additive is clear. To show that is a premeasure, it remains to show countable monotonicity. To this end, take a countable collection in , and such that   Note that, since is closed under finite unions and relative complements, we can assume that the collection is disjoint. As sets in are disjoint unions of sets in , can further assume that the sets are in . Let be disjoint sets in such that . By the countable monotonicity of we have   for each . Hence   Hence is a premeasure on .  The uniqueness of follows from the definition of .  "
},
{
  "id": "sec-construction-35",
  "level": "2",
  "url": "sec-construction.html#sec-construction-35",
  "type": "Remark",
  "number": "2.3.14",
  "title": "",
  "body": " The -notation used above is supposed to be reminiscent of and notation used in topology: -sets are countable unions of open sets; -sets are countable intersections of closed sets. `G' for `open' comes from the German word geöffnet; `F' for `closed' comes from the French word fermé. When working with measures on topological spaces we will often use and sets in the way sets are used in the following proposition.  "
},
{
  "id": "prop-sigma-delta-sets",
  "level": "2",
  "url": "sec-construction.html#prop-sigma-delta-sets",
  "type": "Proposition",
  "number": "2.3.15",
  "title": "",
  "body": " Let be a set function on a collection of subsets of , and let be the induced outer measure, and let be the induced Carathéodory measure.  If satisfies then there exists an such that and . If is -measurable and each set in is -measurable, then is -measurable and .  "
},
{
  "id": "sec-construction-37",
  "level": "2",
  "url": "sec-construction.html#sec-construction-37",
  "type": "Proof",
  "number": "2.3.5",
  "title": "",
  "body": " Suppose . By the definition of , for each there exists a countable collection such that and   Let . Then and   Now let . Then , and . Further, for each ,   As this holds for all , it follows that .  Finally, if extends then every set in is measurable, and thus every set in and is measurable. If is also measurable, then by the excision property   \\qedhere  "
},
{
  "id": "thm-Car-ext-2",
  "level": "2",
  "url": "sec-construction.html#thm-Car-ext-2",
  "type": "Theorem",
  "number": "2.3.16",
  "title": "Carathéodory-Hahn Theorem.",
  "body": " Carathéodory-Hahn Theorem  Carathéodory-Hahn Theorem Carathéodory extension Let be a premeasure on a semiring of subsets of a non-empty set . Then the Carathéodory measure induced by is an extension of . Furthermore, if is -finite, then is -finite and is the unique measure on the set of -measurable subsets extending .  "
},
{
  "id": "sec-construction-40",
  "level": "2",
  "url": "sec-construction.html#sec-construction-40",
  "type": "Proof",
  "number": "2.3.6",
  "title": "",
  "body": " That extends follows from Theorem and Lemma . If is -finite, then is -finite since extends .  It remains to show that is unique when is -finite. Suppose that is another measure on the -measurable sets which extends . Suppose satisfies . By the definition of the out measure , if we fix there exists in such that and   Noting that for each , the countable monotonicity of implies that .  Take any (i.e. is a countable union of sets in ). As is a semiring, we can write as a disjoint countable union of sets in . Since and are countably additive and agree on , it follows that . If (i.e. is a countable intersection of sets in ), and , then by the continuity of measure, for both and , we have that .  Now take with . Take any . We will show that . By Proposition , there is an such that and . We can further assume that . By the excision property   We have already shown that and . And hence .  Finally, if is -finite, there are sets in which cover all of and satisfy . We can further assume that the sets are disjoint. Thus, if is measurable then   thus proving the uniqueness of .  "
},
{
  "id": "chap-measure-space-6",
  "level": "1",
  "url": "chap-measure-space-6.html",
  "type": "Section",
  "number": "2.4",
  "title": "Exercises",
  "body": " Exercises   Let be an uncountable set. A set is cocountable if its complement is countable.   Show that the collection of all subsets of which are either countable or cocountable forms a -algebra. -algebra countable-cocountable -algebra   Define a function by if is countable, and if is cocountable. Show that is a measure.      Prove the claims in Example . That is, show that the counting measure measure counting measure  on a non-empty set defines a complete measure.  Show that is -finite if and only if is countable. Show that is a finite measure space if and only if is finite.    Let be a non-empty set with the discrete topology. Let be the counting measure on . Show that is a Borel measure.    Let be a measurable space. Fix , and let be the Dirac measure defined in Example . Show that is a measure.  Suppose is a topological space, and is the Borel sets. Show that is a Borel measure.    Borel sets in the extended real line extended real line Let be the extended real line. Let be the collection of sets in given by   where is the collection of Borel sets in . Show that is a -algebra.    Let be the extended real line. extended real line For we say is open in if it satisfies the following conditions   is open in ;   if , then there exists such that ;   , then there exists such that .    Show that this defines a topology on .    Let . extended real line Let be the -algebra from Exercise . Endow with the topology from Exercise . Show that the -algebra of Borel sets in , , conincides with .    Prove Theorem .    Let be a measure space, and let be a measurable space. Let be a function satisfying for all . Define a function on by    Show that is a measure on .   Show that .      Prove the claim in Example : Let be an infinite set, and let be the collection of all finite subsets of . Let be the counting function. Let be the outer measure induced by . Show that , the counting measure on .    Prove the claim in Example : Let be the collection of all open intervals in the real line. Let be the length function on , i.e. for all . Let be the outer measure induced by . Show that for all intervals in .    Let be an outer measure on a non-empty set . Show that if then is -measurable. (Note that this completes the proof of Theorem ).    Show that the collections , and from Example form a semirings of subsets of . That is show that the collection of all intervals in ; the colletion of all intervals of finite length; and of all intervals of the form , , for semirings.    measurable rectangle Show that the collection from Example forms a semiring. That is, if and are two measure spaces and   show that is a semiring of subsets of .    Let be an uncountable set and let be the collection of all countable subsets of . Define a function on by for all . Let be the outer measure induced by . Determine for each . Determine which sets are -measurable. Note that the measure for all is also an extension of . Why does this not contradict the Carathéodory-Hahn Theorem (Theorem )?    Let , and be the semirings of intervals from Exercise . Show that the length function when restricted to each is a premeasure of , for .   "
},
{
  "id": "exer-cocount-measure",
  "level": "2",
  "url": "chap-measure-space-6.html#exer-cocount-measure",
  "type": "Checkpoint",
  "number": "2.4.1",
  "title": "",
  "body": " Let be an uncountable set. A set is cocountable if its complement is countable.   Show that the collection of all subsets of which are either countable or cocountable forms a -algebra. -algebra countable-cocountable -algebra   Define a function by if is countable, and if is cocountable. Show that is a measure.    "
},
{
  "id": "chap-measure-space-6-3",
  "level": "2",
  "url": "chap-measure-space-6.html#chap-measure-space-6-3",
  "type": "Checkpoint",
  "number": "2.4.2",
  "title": "",
  "body": " Prove the claims in Example . That is, show that the counting measure measure counting measure  on a non-empty set defines a complete measure.  Show that is -finite if and only if is countable. Show that is a finite measure space if and only if is finite.  "
},
{
  "id": "exer-counting-Borel",
  "level": "2",
  "url": "chap-measure-space-6.html#exer-counting-Borel",
  "type": "Checkpoint",
  "number": "2.4.3",
  "title": "",
  "body": " Let be a non-empty set with the discrete topology. Let be the counting measure on . Show that is a Borel measure.  "
},
{
  "id": "exer-dirac-meas",
  "level": "2",
  "url": "chap-measure-space-6.html#exer-dirac-meas",
  "type": "Checkpoint",
  "number": "2.4.4",
  "title": "",
  "body": " Let be a measurable space. Fix , and let be the Dirac measure defined in Example . Show that is a measure.  Suppose is a topological space, and is the Borel sets. Show that is a Borel measure.  "
},
{
  "id": "exer-borel-on-extended",
  "level": "2",
  "url": "chap-measure-space-6.html#exer-borel-on-extended",
  "type": "Checkpoint",
  "number": "2.4.5",
  "title": "",
  "body": " Borel sets in the extended real line extended real line Let be the extended real line. Let be the collection of sets in given by   where is the collection of Borel sets in . Show that is a -algebra.  "
},
{
  "id": "exer-top-on-extended",
  "level": "2",
  "url": "chap-measure-space-6.html#exer-top-on-extended",
  "type": "Checkpoint",
  "number": "2.4.6",
  "title": "",
  "body": " Let be the extended real line. extended real line For we say is open in if it satisfies the following conditions   is open in ;   if , then there exists such that ;   , then there exists such that .    Show that this defines a topology on .  "
},
{
  "id": "exer-borel-on-extended-2",
  "level": "2",
  "url": "chap-measure-space-6.html#exer-borel-on-extended-2",
  "type": "Checkpoint",
  "number": "2.4.7",
  "title": "",
  "body": " Let . extended real line Let be the -algebra from Exercise . Endow with the topology from Exercise . Show that the -algebra of Borel sets in , , conincides with .  "
},
{
  "id": "chap-measure-space-6-9",
  "level": "2",
  "url": "chap-measure-space-6.html#chap-measure-space-6-9",
  "type": "Checkpoint",
  "number": "2.4.8",
  "title": "",
  "body": " Prove Theorem .  "
},
{
  "id": "chap-measure-space-6-10",
  "level": "2",
  "url": "chap-measure-space-6.html#chap-measure-space-6-10",
  "type": "Checkpoint",
  "number": "2.4.9",
  "title": "",
  "body": " Let be a measure space, and let be a measurable space. Let be a function satisfying for all . Define a function on by    Show that is a measure on .   Show that .    "
},
{
  "id": "exer-induced-counting-outer-measure",
  "level": "2",
  "url": "chap-measure-space-6.html#exer-induced-counting-outer-measure",
  "type": "Checkpoint",
  "number": "2.4.10",
  "title": "",
  "body": " Prove the claim in Example : Let be an infinite set, and let be the collection of all finite subsets of . Let be the counting function. Let be the outer measure induced by . Show that , the counting measure on .  "
},
{
  "id": "exer-induced-length-outer-measure",
  "level": "2",
  "url": "chap-measure-space-6.html#exer-induced-length-outer-measure",
  "type": "Checkpoint",
  "number": "2.4.11",
  "title": "",
  "body": " Prove the claim in Example : Let be the collection of all open intervals in the real line. Let be the length function on , i.e. for all . Let be the outer measure induced by . Show that for all intervals in .  "
},
{
  "id": "exer-zero-measurable",
  "level": "2",
  "url": "chap-measure-space-6.html#exer-zero-measurable",
  "type": "Checkpoint",
  "number": "2.4.12",
  "title": "",
  "body": " Let be an outer measure on a non-empty set . Show that if then is -measurable. (Note that this completes the proof of Theorem ).  "
},
{
  "id": "exer-interval-semiring",
  "level": "2",
  "url": "chap-measure-space-6.html#exer-interval-semiring",
  "type": "Checkpoint",
  "number": "2.4.13",
  "title": "",
  "body": " Show that the collections , and from Example form a semirings of subsets of . That is show that the collection of all intervals in ; the colletion of all intervals of finite length; and of all intervals of the form , , for semirings.  "
},
{
  "id": "exer-product-semiring",
  "level": "2",
  "url": "chap-measure-space-6.html#exer-product-semiring",
  "type": "Checkpoint",
  "number": "2.4.14",
  "title": "",
  "body": " measurable rectangle Show that the collection from Example forms a semiring. That is, if and are two measure spaces and   show that is a semiring of subsets of .  "
},
{
  "id": "chap-measure-space-6-16",
  "level": "2",
  "url": "chap-measure-space-6.html#chap-measure-space-6-16",
  "type": "Checkpoint",
  "number": "2.4.15",
  "title": "",
  "body": " Let be an uncountable set and let be the collection of all countable subsets of . Define a function on by for all . Let be the outer measure induced by . Determine for each . Determine which sets are -measurable. Note that the measure for all is also an extension of . Why does this not contradict the Carathéodory-Hahn Theorem (Theorem )?  "
},
{
  "id": "exer-length-premeasure",
  "level": "2",
  "url": "chap-measure-space-6.html#exer-length-premeasure",
  "type": "Checkpoint",
  "number": "2.4.16",
  "title": "",
  "body": " Let , and be the semirings of intervals from Exercise . Show that the length function when restricted to each is a premeasure of , for .  "
},
{
  "id": "sec-Lebesgue",
  "level": "1",
  "url": "sec-Lebesgue.html",
  "type": "Section",
  "number": "3.1",
  "title": "Lebesgue measure on <span class=\"process-math\">\\(\\mathbb{R}\\)<\/span>",
  "body": " Lebesgue measure on  We will now apply the Carathéodory-Hahn Theorem, Theorem , to define the promised Lebesgue measure. Our goal is to extend the length function to a measure. In Example (see Exercise ) we saw three different semirings of intervals. Exercise tells us that is a premeasure when restricted to each of these semirings. This gives three possibilities of where to apply the Carathéodory-Hahn theorem. The next proposition shows that this choice does not matter. We get the same outer measure no matter the choice.   Let be the semiring of all intervals in ; let be the semiring of all finite length intervals; and let be the semiring of intervals of the form , where with . Let be the outer measure induced by on ; let be the outer measure induced by restricted to ; and let be the outer measure induced by restricted to . Then for each     Since it follows that   for all . Take any . If , then by the above inequalities, and . Suppose . Fix . There exist intervals such that and   As it follows that , and so is of finite length for each . Thus   As this holds for all , it follows that . Hence .  We will now show that   Let denote the function   Since is an infimum over all covers by intervals of finite length, and is an infimum over all covers by open intervals of finite length, it follows that for all .  Now take any . If , then . Suppose that . Fix . Let be a countable collection of finite length intervals such that and   For each , let and let . Then   That is, is a cover of by open intervals of finite length. Thus   As the above inequality holds for all , it follows that . Hence . A similar argument shows that .    The function defined by   is call the Lebesgue outer measure on . outer measure Lebesgue outer measure  The elements of the -algebra of -measurable sets are called Lebesgue measurable sets . measurable set Lebesgue measurable set  The Carathéodory measure got by restricting to is called the Lebesgue measure on . Lebesgue measure   Proposition shows that the Lebesgue outer measure is the outer measure induced by the length function . Thus by the Carathéodory-Hahn theorem, Theorem , all intervals are Lebesgue measurable, and . Further, since is -finite, the measure space is a complete -finite measure space, and is the unique extennsion of to a measure on .   If is a countable set, then is Lebesgue measurable and .    Take any . Then can be written as a closed interval of length   Hence all singleton sets are Lebesgue measurable with Lebesgue measure . Let be a countable set. If has elements then we can write as ; if is countably infinite we can write as . Thus   In either case, is a countable union of disjoint sets of measure . Hence by the countable additivity of .    Theorem says that all countable sets have Lebesgue measure . It does not say that if then is countable. We will see examples of uncountable sets of zero Lebesgue measure later.    All Borel sets in are Lebesgue measurable. That is, .    By the construction of (i.e. the Carathéodory-Hahn theorem), all open intervals are Lebesgue measurable. Any open set can be written as a disjoint union of countably many open sets (Proposition ), and hence is also Lebesgue measurable. As the Borel sets are the sets in the -algebra generated by the open sets, and each open set is in , it follows that .    Finite sets, countably infinite sets, and intervals are all examples of Borel sets in . Theorem says that all Borel sets are Lebesgue measurable, but we have not exhibited any sets which are Lebesgue measurable but not Borel.  In the other direction, we know that , but we have not exhibited any subsets of which are not Lebesgue measurable. That is, we have   but it is not clear if these inclusions are strict. We will see in Section that each inclusion is indeed strict: there are Lebesgue measurable sets which are not Borel sets; and there are subsets of which are not Lebesgue measurable.   We will now look at some approximation and regularity properties of the Lebesgue measure. By Proposition the Lebesgue outer measure is an induced outer measure: is the outer measure induced by the length function on the collection of all intervals in the real line. We can thus apply Proposition to . That is, letting be the countable intersections of countable unions of intervals, if then there is a set such that and . Further, if is Lebesgue measurable then (noting here that all the sets in are Lebesgue measurable since every interval is Lebesgue measurable). The following result is a strengthening of Proposition for the Lebesgue measure.   Outer and inner approximation of Lebesgue measure  Lebesgue measure inner approximation Lebesgue measure outer approximation Let . The following are equivalent.   is Lebesgue measurable;   for every there exists an open set containing such that ;   there is a -set contraing such that ;   for every there exists a closed set contained in such that ;   there is an -set contained in such that .      The complement of an open set is a closed set, hence the complement of a set is an set. Since the -algebra of Lebesgue measurable sets is closed under complements, it follows that (ii) is equivalent to (iv) and (iii) is equivalent to (v).  Suppose that is Lebesgue measurable. We will show that (ii) holds. Assume . Fix . By the definition of the Lebesgue outer measure , there exists open intervals such that and   Let . Then is open, , and   Since we can apply the excision property (Proposition ), to get . Thus (ii) holds. The case when is left as an exercise (Exercise ).  Now assume (ii) holds. To show (iii) holds is a similar argument to that in Proposition . For each there is an open set such that . Let be the set . Then and   for all . Hence  Finally, suppose that (iii) holds for a set . Take a set containing with . Since is a set, is Lebesgue measurbale; and since , is also Lebesgue measurable (Exercise ). Noting that   it follows that is Lebesgue measurable.   The following theorem is similar to Theorem . We record it however, as we will be interested in generalizations of this result in the sequel. The result describes regularity conditions for the Lebesgue measure.   Let be Lebesgue measurable, then   (outer regularity) regularity of a measure outer regularity of Lebesgue measure     (inner regularity) regularity of a measure inner regularity of Lebesgue measure        Condition (i) follows immediately from the definition of the Lebesgue outer measure. We will use condition (i) to prove (ii).  Take measurable . Assume first that is bounded, so that for some closed interval . Let . Fix . By (i), there is an open set such that and . Let . Since is open, is closed. Thus, is a compact set by the Heine-Borel theorem (Theorem ). Further, since , . By repeated application of the excision property and monotonicity of , we have   Hence   The case when is left as an exercise (Exercise ).   We end this section with a result (due to Lebesgue) showing the connection between the Lebesgue measure and Riemann integration. Riemann integration We first establish\/recall some notation and concepts to do with Riemann integration.  Let be a closed interval in , and let be a bounded function. Let be a partition of , where   We define as   The function is Riemann integrable integrable Riemann integrable if for all there exists a partition of such that . You may have seen other definitions of Riemann integrable . Can you prove that your definition of Riemann integrable is equivalent to the definition given here?   integrable Riemann integrable \\label{thm: Riemann int} Let be a bounded function on the closed interval , and let . Then is Riemann integrable if and only if has Lebesgue measure .    Suppose that is Riemann integrable. Take . The function is not continuous at , if there exists such that for all there exists such that . Thus, if we set   then   That that, if , then Thus, we can write as a countable union   Fix . We will show that . Take any . Since is Riemann integrable, there exists a partition   such that . Let Then   Since it follows that   The above inequality holds for all , and so . It follows that is Lebesgue measurable and (see Exercise ). We have now that   and so is also Lebesgue measurable with .  Suppose now that has Lebesgue measure . Given , there exists open intervals such that   Let and . The set is a union of open intervals, and so is open in . Thus, is closed. As , is both closed and bounded, and so is compact by the Heine-Borel Theorem, Theorem .  The function is continuous on .  Hence, for each there exists such that, for if and then . The open intervals form an open cover of . Since is compact, there are is a finite set such that   Let   The set is finite, and contains both and , we can thus order and view as a partition of . Let the ordered elements of be denoted by   Note that, if there are and such that then . Let   and   Note, if , and then   for some , by the choice of . Further   and so   Let . Then   Hence is Riemann integrable.   "
},
{
  "id": "prop-Lebesgue-outer-measure",
  "level": "2",
  "url": "sec-Lebesgue.html#prop-Lebesgue-outer-measure",
  "type": "Proposition",
  "number": "3.1.1",
  "title": "",
  "body": " Let be the semiring of all intervals in ; let be the semiring of all finite length intervals; and let be the semiring of intervals of the form , where with . Let be the outer measure induced by on ; let be the outer measure induced by restricted to ; and let be the outer measure induced by restricted to . Then for each   "
},
{
  "id": "sec-Lebesgue-4",
  "level": "2",
  "url": "sec-Lebesgue.html#sec-Lebesgue-4",
  "type": "Proof",
  "number": "3.1.1",
  "title": "",
  "body": " Since it follows that   for all . Take any . If , then by the above inequalities, and . Suppose . Fix . There exist intervals such that and   As it follows that , and so is of finite length for each . Thus   As this holds for all , it follows that . Hence .  We will now show that   Let denote the function   Since is an infimum over all covers by intervals of finite length, and is an infimum over all covers by open intervals of finite length, it follows that for all .  Now take any . If , then . Suppose that . Fix . Let be a countable collection of finite length intervals such that and   For each , let and let . Then   That is, is a cover of by open intervals of finite length. Thus   As the above inequality holds for all , it follows that . Hence . A similar argument shows that .  "
},
{
  "id": "sec-Lebesgue-5",
  "level": "2",
  "url": "sec-Lebesgue.html#sec-Lebesgue-5",
  "type": "Definition",
  "number": "3.1.2",
  "title": "",
  "body": " The function defined by   is call the Lebesgue outer measure on . outer measure Lebesgue outer measure  The elements of the -algebra of -measurable sets are called Lebesgue measurable sets . measurable set Lebesgue measurable set  The Carathéodory measure got by restricting to is called the Lebesgue measure on . Lebesgue measure  "
},
{
  "id": "thm-countable-L-measurable",
  "level": "2",
  "url": "sec-Lebesgue.html#thm-countable-L-measurable",
  "type": "Theorem",
  "number": "3.1.3",
  "title": "",
  "body": " If is a countable set, then is Lebesgue measurable and .  "
},
{
  "id": "sec-Lebesgue-8",
  "level": "2",
  "url": "sec-Lebesgue.html#sec-Lebesgue-8",
  "type": "Proof",
  "number": "3.1.2",
  "title": "",
  "body": " Take any . Then can be written as a closed interval of length   Hence all singleton sets are Lebesgue measurable with Lebesgue measure . Let be a countable set. If has elements then we can write as ; if is countably infinite we can write as . Thus   In either case, is a countable union of disjoint sets of measure . Hence by the countable additivity of .  "
},
{
  "id": "sec-Lebesgue-9",
  "level": "2",
  "url": "sec-Lebesgue.html#sec-Lebesgue-9",
  "type": "Remark",
  "number": "3.1.4",
  "title": "",
  "body": " Theorem says that all countable sets have Lebesgue measure . It does not say that if then is countable. We will see examples of uncountable sets of zero Lebesgue measure later.  "
},
{
  "id": "thm-Borel-Lebesgue-meas",
  "level": "2",
  "url": "sec-Lebesgue.html#thm-Borel-Lebesgue-meas",
  "type": "Theorem",
  "number": "3.1.5",
  "title": "",
  "body": " All Borel sets in are Lebesgue measurable. That is, .  "
},
{
  "id": "sec-Lebesgue-11",
  "level": "2",
  "url": "sec-Lebesgue.html#sec-Lebesgue-11",
  "type": "Proof",
  "number": "3.1.3",
  "title": "",
  "body": " By the construction of (i.e. the Carathéodory-Hahn theorem), all open intervals are Lebesgue measurable. Any open set can be written as a disjoint union of countably many open sets (Proposition ), and hence is also Lebesgue measurable. As the Borel sets are the sets in the -algebra generated by the open sets, and each open set is in , it follows that .  "
},
{
  "id": "sec-Lebesgue-12",
  "level": "2",
  "url": "sec-Lebesgue.html#sec-Lebesgue-12",
  "type": "Remark",
  "number": "3.1.6",
  "title": "",
  "body": " Finite sets, countably infinite sets, and intervals are all examples of Borel sets in . Theorem says that all Borel sets are Lebesgue measurable, but we have not exhibited any sets which are Lebesgue measurable but not Borel.  In the other direction, we know that , but we have not exhibited any subsets of which are not Lebesgue measurable. That is, we have   but it is not clear if these inclusions are strict. We will see in Section that each inclusion is indeed strict: there are Lebesgue measurable sets which are not Borel sets; and there are subsets of which are not Lebesgue measurable.  "
},
{
  "id": "thm-Leb-meas-sets-G-delta-F-sigma",
  "level": "2",
  "url": "sec-Lebesgue.html#thm-Leb-meas-sets-G-delta-F-sigma",
  "type": "Theorem",
  "number": "3.1.7",
  "title": "Outer and inner approximation of Lebesgue measure.",
  "body": " Outer and inner approximation of Lebesgue measure  Lebesgue measure inner approximation Lebesgue measure outer approximation Let . The following are equivalent.   is Lebesgue measurable;   for every there exists an open set containing such that ;   there is a -set contraing such that ;   for every there exists a closed set contained in such that ;   there is an -set contained in such that .    "
},
{
  "id": "sec-Lebesgue-15",
  "level": "2",
  "url": "sec-Lebesgue.html#sec-Lebesgue-15",
  "type": "Proof",
  "number": "3.1.4",
  "title": "",
  "body": " The complement of an open set is a closed set, hence the complement of a set is an set. Since the -algebra of Lebesgue measurable sets is closed under complements, it follows that (ii) is equivalent to (iv) and (iii) is equivalent to (v).  Suppose that is Lebesgue measurable. We will show that (ii) holds. Assume . Fix . By the definition of the Lebesgue outer measure , there exists open intervals such that and   Let . Then is open, , and   Since we can apply the excision property (Proposition ), to get . Thus (ii) holds. The case when is left as an exercise (Exercise ).  Now assume (ii) holds. To show (iii) holds is a similar argument to that in Proposition . For each there is an open set such that . Let be the set . Then and   for all . Hence  Finally, suppose that (iii) holds for a set . Take a set containing with . Since is a set, is Lebesgue measurbale; and since , is also Lebesgue measurable (Exercise ). Noting that   it follows that is Lebesgue measurable.  "
},
{
  "id": "thm-Lebesgue-regular",
  "level": "2",
  "url": "sec-Lebesgue.html#thm-Lebesgue-regular",
  "type": "Theorem",
  "number": "3.1.8",
  "title": "",
  "body": " Let be Lebesgue measurable, then   (outer regularity) regularity of a measure outer regularity of Lebesgue measure     (inner regularity) regularity of a measure inner regularity of Lebesgue measure      "
},
{
  "id": "sec-Lebesgue-18",
  "level": "2",
  "url": "sec-Lebesgue.html#sec-Lebesgue-18",
  "type": "Proof",
  "number": "3.1.5",
  "title": "",
  "body": " Condition (i) follows immediately from the definition of the Lebesgue outer measure. We will use condition (i) to prove (ii).  Take measurable . Assume first that is bounded, so that for some closed interval . Let . Fix . By (i), there is an open set such that and . Let . Since is open, is closed. Thus, is a compact set by the Heine-Borel theorem (Theorem ). Further, since , . By repeated application of the excision property and monotonicity of , we have   Hence   The case when is left as an exercise (Exercise ).  "
},
{
  "id": "sec-Lebesgue-25",
  "level": "2",
  "url": "sec-Lebesgue.html#sec-Lebesgue-25",
  "type": "Theorem",
  "number": "3.1.9",
  "title": "",
  "body": " integrable Riemann integrable \\label{thm: Riemann int} Let be a bounded function on the closed interval , and let . Then is Riemann integrable if and only if has Lebesgue measure .  "
},
{
  "id": "sec-Lebesgue-26",
  "level": "2",
  "url": "sec-Lebesgue.html#sec-Lebesgue-26",
  "type": "Proof",
  "number": "3.1.6",
  "title": "",
  "body": " Suppose that is Riemann integrable. Take . The function is not continuous at , if there exists such that for all there exists such that . Thus, if we set   then   That that, if , then Thus, we can write as a countable union   Fix . We will show that . Take any . Since is Riemann integrable, there exists a partition   such that . Let Then   Since it follows that   The above inequality holds for all , and so . It follows that is Lebesgue measurable and (see Exercise ). We have now that   and so is also Lebesgue measurable with .  Suppose now that has Lebesgue measure . Given , there exists open intervals such that   Let and . The set is a union of open intervals, and so is open in . Thus, is closed. As , is both closed and bounded, and so is compact by the Heine-Borel Theorem, Theorem .  The function is continuous on .  Hence, for each there exists such that, for if and then . The open intervals form an open cover of . Since is compact, there are is a finite set such that   Let   The set is finite, and contains both and , we can thus order and view as a partition of . Let the ordered elements of be denoted by   Note that, if there are and such that then . Let   and   Note, if , and then   for some , by the choice of . Further   and so   Let . Then   Hence is Riemann integrable.  "
},
{
  "id": "sec-nonmeasurable",
  "level": "1",
  "url": "sec-nonmeasurable.html",
  "type": "Section",
  "number": "3.2",
  "title": "Borel sets, Lebesgue measurable sets, and subsets of <span class=\"process-math\">\\(\\mathbb{R}\\text{.}\\)<\/span>",
  "body": " Borel sets, Lebesgue measurable sets, and subsets of .  Let be the Borel sets of , and let be the Lebesgue measurable sets of . We have seen that the following inclusions hold:   In this section we will see that both these inclusions are strict. I.e. we will see that there exist Lebesgue measurable sets which are not Borel; and there exists subsets of which are not Lebesgue measurable.  Another question arising from Section is the following: are there any uncountable Lebesgue measurable sets with Lebesgue measure? We know that countable sets have measure , but are the countable sets all of the Lebesgue measure sets? We will see presently, that there are uncountable sets with Lebesgue measure .  We will begin with proving the existence of subsets of which are not Lebesgue measurable. The following theorem was published by Giuseppe Vitali (1875 - 1932) Vitali, Giuseppe in 1905.   Vitali  Let satisfy . Then there exists such that is not Lebesgue measurable.    By the countable monotonicity of ,   Thus, contains a bounded subset with positive Lebesgue outer measure. We can thus assume that is bounded.  Define a relation on by the following rule: if then if and only if there is a rational number such that . It is not hard to see that is an equivalence relation on (Exercise ). Create a set by choosing a representative element from each equivalence class of the equivalence relation . Thus satisfies: if then there exists a unique such that . It follows that the collection of sets are disjoint and cover . Further, as is bounded (and there are infinitely many rational numbers between any two rational numbers), there is a bounded, infinite set such that   Suppose now that is Lebesgue measurable. Then, since , . Further, is Lebesgue measurable for each , and (Exercise ). Thus, Lebesgue measurable, as it is a countable union of Lebesgue measurable sets. We also, have that is bounded, since and are bounded. Thus   Since is an infinite set, it follows that .  Now, by the countable submonotonicity of the Lebesgue outer measure we have   This contradicts, , and so is not Lebesgue measurable.    Theorem tells us that there are many subsets off which are not Lebesgue measurable. Still, there is something unsatisfactory about the proof. In the proof we construct a set which is not Lebesgue measurable, but what does look like? It is important to note that the construction of given here relies on the axiom of choice. We choose and element from each equivalence class of . This is not, however, a shortcoming of the proof. It is a necessity. There are models of set theory where the axiom of choice is not assumed, where it can be shown that all subsets of the real line are Lebesgue measurable. This is an interesting topic, but is too far into the weeds of set theory for what we are trying to do. We will (happily!) stick to the standard Zermelo–Fraenkel axioms of set theory plus the axiom of choice (ZFC). Thus, we are living in a world where Theorem holds. This won't be the last time that the axiom of choice plays a significant role in these notes; but it is perhaps the most famous and consequential.   We will now embark on the construction of an uncountable subset of which is Lebesgue measurable with Lebesgue measure .   Cantor set Let . Let . Note, that is . I.e. is with the middle third of its interval removed. To construct we remove the (open) middle third from each of the two disjoint intervals in . That is   We construct by removing the open middle thirds from each of the 4 intervals in . We continue in this way: is constructed from by removing the open middle thirds from each of the closed intervals in .     Illustration of the sets (top), used to construct the Cantor set .     Let . We call the Cantor set . Cantor set The set is also referred to as the Cantor middle-third set . Since each is a closed set, is also a closed set (as intersections of closed sets are closed sets). It follows that is a Borel set, and hence is Lebesgue measurable.  Let be the open set which is removed from to get . Thus, , , etc. Let . Note that   As the sets are disjoint, we have that   Now, as , and , it follows that .  We will now look at the cardinality of . Every number in has a binary expansion. If we do not consider finite binary expansions, and only consider infinite expansions, the binary expansions are unique. That is we will write the binary expansion as . Suppose . Construct be the following algorithm: if is in the left half , then the first digit in the binary expansion of is ; if is in the right interval of then the first digit of the binary expansion of is . Now, in , is in either the left subinterval, or the right subinterval of the interval is in . Let be the second digit of if is to the left, be the second digit if is to the right. Continuing in this way we get as a binary expansion. The map is a bijection from to , hence and have the same cardinality. As is uncountable This is traditionally proved using the famed diagonal argument of Cantor. We also know that is uncountable since and countable sets have Lebesgue measure by Theorem . , it follows that is uncountable.   We thus shown have that the Cantor set has Lebesgue measure and is uncountable. Cantor set Hence the converse of Theorem does not hold. All countable sets have Lebesgue measure , but not all Lebesgue measure sets are countable.  We want to prove the existence of Lebesgue measurable sets which are not Borel sets. In order to do this we first introduce a function, the Cantor-Lebesgue function . Cantor-Lebesgue function Whilst we introduce it now for the purpose of finding a set which is not Borel, the Cantor-Lebesgue function is of interest in its own right.   Let be the Cantor set, from Example , and let . We first define a function on . Recall that where is the open set removed from at the step of the construction of the Cantor set .  Let for . For define by   Continue in this way, so that for   when is in the th interval in (See Figure ).     The Cantor-Lebesgue function on the set .     We extend to all of by setting , and for ,   We call the Cantor-Lebesgue function Cantor-Lebesgue function Note that is continuous. Indeed, is clearly continuous on , since is constant on open intervals in . For , and large enough, we can find such that   for all . It follows that does not have a jump discontinuity at . As is increasing, this shows that is continuous at .    Let be the Cantor set. Then there is a set such that is Lebesgue measurable but is not a Borel set.    Let be the Cantor-Lebesgue function from Example . Cantor-Lebesgue function The function is an increasing, continuous function with and . It follows from the Intermediate Value Theorem that maps surjectively onto . Define a function by   Then is a continuous, strictly increasing function with .  Let be the Cantor set, and let . By Example , , and hence . Applying to and we get disjoint sets and satisfying   Recall that is constructed so that there are disjoint open intervals such that and is constant on each . Let when . Then, . Hence is a countable union of intervals, and hence is Lebesgue measurable. Further   As and are Lebesgue measurable, it follows that is Lebesgue measurable, and  Theorem tells us that there is a set which is not Lebesgue measurable.  Since is strictly increasing bijection from to it has a continuous inverse (Exercise ). Let . As is not Lebesgue measurable, and hence not a Borel set, it follows from Exercise that is not a Borel set. As and , is a Lebesgue measurable since is a complete measure space.    The -algebra of Borel subsets of is strictly contained in the -algebra of Lebesgue measurable subsets of .    That the Borel sets are contained in the Lebesgue measurable sets is Theorem . Lemma gives the existence of a Lebesgue measurable set which is not Borel.    The measure space of the Lebesgue measure restricted to the Borel sets of is not a complete measure space.    The Cantor set is closed, and hence a Borel set. Further . Lemma shows that there is a set which is not a Borel set, hence is not a complete measure space.   "
},
{
  "id": "thm-Vitali-non-meas",
  "level": "2",
  "url": "sec-nonmeasurable.html#thm-Vitali-non-meas",
  "type": "Theorem",
  "number": "3.2.1",
  "title": "Vitali.",
  "body": " Vitali  Let satisfy . Then there exists such that is not Lebesgue measurable.  "
},
{
  "id": "sec-nonmeasurable-8",
  "level": "2",
  "url": "sec-nonmeasurable.html#sec-nonmeasurable-8",
  "type": "Proof",
  "number": "3.2.1",
  "title": "",
  "body": " By the countable monotonicity of ,   Thus, contains a bounded subset with positive Lebesgue outer measure. We can thus assume that is bounded.  Define a relation on by the following rule: if then if and only if there is a rational number such that . It is not hard to see that is an equivalence relation on (Exercise ). Create a set by choosing a representative element from each equivalence class of the equivalence relation . Thus satisfies: if then there exists a unique such that . It follows that the collection of sets are disjoint and cover . Further, as is bounded (and there are infinitely many rational numbers between any two rational numbers), there is a bounded, infinite set such that   Suppose now that is Lebesgue measurable. Then, since , . Further, is Lebesgue measurable for each , and (Exercise ). Thus, Lebesgue measurable, as it is a countable union of Lebesgue measurable sets. We also, have that is bounded, since and are bounded. Thus   Since is an infinite set, it follows that .  Now, by the countable submonotonicity of the Lebesgue outer measure we have   This contradicts, , and so is not Lebesgue measurable.  "
},
{
  "id": "sec-nonmeasurable-9",
  "level": "2",
  "url": "sec-nonmeasurable.html#sec-nonmeasurable-9",
  "type": "Remark",
  "number": "3.2.2",
  "title": "",
  "body": " Theorem tells us that there are many subsets off which are not Lebesgue measurable. Still, there is something unsatisfactory about the proof. In the proof we construct a set which is not Lebesgue measurable, but what does look like? It is important to note that the construction of given here relies on the axiom of choice. We choose and element from each equivalence class of . This is not, however, a shortcoming of the proof. It is a necessity. There are models of set theory where the axiom of choice is not assumed, where it can be shown that all subsets of the real line are Lebesgue measurable. This is an interesting topic, but is too far into the weeds of set theory for what we are trying to do. We will (happily!) stick to the standard Zermelo–Fraenkel axioms of set theory plus the axiom of choice (ZFC). Thus, we are living in a world where Theorem holds. This won't be the last time that the axiom of choice plays a significant role in these notes; but it is perhaps the most famous and consequential.  "
},
{
  "id": "ex-Cantor",
  "level": "2",
  "url": "sec-nonmeasurable.html#ex-Cantor",
  "type": "Example",
  "number": "3.2.3",
  "title": "",
  "body": " Cantor set Let . Let . Note, that is . I.e. is with the middle third of its interval removed. To construct we remove the (open) middle third from each of the two disjoint intervals in . That is   We construct by removing the open middle thirds from each of the 4 intervals in . We continue in this way: is constructed from by removing the open middle thirds from each of the closed intervals in .     Illustration of the sets (top), used to construct the Cantor set .     Let . We call the Cantor set . Cantor set The set is also referred to as the Cantor middle-third set . Since each is a closed set, is also a closed set (as intersections of closed sets are closed sets). It follows that is a Borel set, and hence is Lebesgue measurable.  Let be the open set which is removed from to get . Thus, , , etc. Let . Note that   As the sets are disjoint, we have that   Now, as , and , it follows that .  We will now look at the cardinality of . Every number in has a binary expansion. If we do not consider finite binary expansions, and only consider infinite expansions, the binary expansions are unique. That is we will write the binary expansion as . Suppose . Construct be the following algorithm: if is in the left half , then the first digit in the binary expansion of is ; if is in the right interval of then the first digit of the binary expansion of is . Now, in , is in either the left subinterval, or the right subinterval of the interval is in . Let be the second digit of if is to the left, be the second digit if is to the right. Continuing in this way we get as a binary expansion. The map is a bijection from to , hence and have the same cardinality. As is uncountable This is traditionally proved using the famed diagonal argument of Cantor. We also know that is uncountable since and countable sets have Lebesgue measure by Theorem . , it follows that is uncountable.  "
},
{
  "id": "ex-cantor-lebesgue",
  "level": "2",
  "url": "sec-nonmeasurable.html#ex-cantor-lebesgue",
  "type": "Example",
  "number": "3.2.5",
  "title": "",
  "body": " Let be the Cantor set, from Example , and let . We first define a function on . Recall that where is the open set removed from at the step of the construction of the Cantor set .  Let for . For define by   Continue in this way, so that for   when is in the th interval in (See Figure ).     The Cantor-Lebesgue function on the set .     We extend to all of by setting , and for ,   We call the Cantor-Lebesgue function Cantor-Lebesgue function Note that is continuous. Indeed, is clearly continuous on , since is constant on open intervals in . For , and large enough, we can find such that   for all . It follows that does not have a jump discontinuity at . As is increasing, this shows that is continuous at .  "
},
{
  "id": "lem-non-Borel",
  "level": "2",
  "url": "sec-nonmeasurable.html#lem-non-Borel",
  "type": "Lemma",
  "number": "3.2.7",
  "title": "",
  "body": " Let be the Cantor set. Then there is a set such that is Lebesgue measurable but is not a Borel set.  "
},
{
  "id": "sec-nonmeasurable-16",
  "level": "2",
  "url": "sec-nonmeasurable.html#sec-nonmeasurable-16",
  "type": "Proof",
  "number": "3.2.2",
  "title": "",
  "body": " Let be the Cantor-Lebesgue function from Example . Cantor-Lebesgue function The function is an increasing, continuous function with and . It follows from the Intermediate Value Theorem that maps surjectively onto . Define a function by   Then is a continuous, strictly increasing function with .  Let be the Cantor set, and let . By Example , , and hence . Applying to and we get disjoint sets and satisfying   Recall that is constructed so that there are disjoint open intervals such that and is constant on each . Let when . Then, . Hence is a countable union of intervals, and hence is Lebesgue measurable. Further   As and are Lebesgue measurable, it follows that is Lebesgue measurable, and  Theorem tells us that there is a set which is not Lebesgue measurable.  Since is strictly increasing bijection from to it has a continuous inverse (Exercise ). Let . As is not Lebesgue measurable, and hence not a Borel set, it follows from Exercise that is not a Borel set. As and , is a Lebesgue measurable since is a complete measure space.  "
},
{
  "id": "sec-nonmeasurable-17",
  "level": "2",
  "url": "sec-nonmeasurable.html#sec-nonmeasurable-17",
  "type": "Theorem",
  "number": "3.2.8",
  "title": "",
  "body": " The -algebra of Borel subsets of is strictly contained in the -algebra of Lebesgue measurable subsets of .  "
},
{
  "id": "sec-nonmeasurable-18",
  "level": "2",
  "url": "sec-nonmeasurable.html#sec-nonmeasurable-18",
  "type": "Proof",
  "number": "3.2.3",
  "title": "",
  "body": " That the Borel sets are contained in the Lebesgue measurable sets is Theorem . Lemma gives the existence of a Lebesgue measurable set which is not Borel.  "
},
{
  "id": "sec-nonmeasurable-19",
  "level": "2",
  "url": "sec-nonmeasurable.html#sec-nonmeasurable-19",
  "type": "Corollary",
  "number": "3.2.9",
  "title": "",
  "body": " The measure space of the Lebesgue measure restricted to the Borel sets of is not a complete measure space.  "
},
{
  "id": "sec-nonmeasurable-20",
  "level": "2",
  "url": "sec-nonmeasurable.html#sec-nonmeasurable-20",
  "type": "Proof",
  "number": "3.2.4",
  "title": "",
  "body": " The Cantor set is closed, and hence a Borel set. Further . Lemma shows that there is a set which is not a Borel set, hence is not a complete measure space.  "
},
{
  "id": "sec-borel-on-R",
  "level": "1",
  "url": "sec-borel-on-R.html",
  "type": "Section",
  "number": "3.3",
  "title": "Borel measures on <span class=\"process-math\">\\(\\mathbb{R}\\)<\/span>",
  "body": " Borel measures on  The Lebesgue measure is induced by the length function on intervals: . Given an increasing function on we can define a weighted length on intervals by . We in this section we show how, with some reasonable constraints on , this gives rise to a Borel measure. Conversely, we show how Borel measures on give rise to functions. These processes will be, up to the addition of a constant, inverses of each other.  We will begin with constructing functions from Borel measures.   Let be a closed interval in . Let be a finite Borel measure on . Define a function by   The function is called the cumulative distribution function for . cumulative distribution function    The term cumulative distribution function is borrowed from probability theory.    distribution Gaussian distribution Let be the Gaussian distribution. The cumulative distribution function of is usually denoted by . By definition is given by   Note that is continuous on every closed interval in . Further,        A cumulative distribution functions need not be continuous, but they will satisfy a one-sided version of continuity. We define this formally now, before showing all cumulative distribution functions satisfy it in Theorem .   Let be a closed interval. A function is right-continuous on continuous function right-continuous if given such that there exists such that (i.e. is not a right end-point of ), then     cumulative distribution function Let be a closed interval and let be a finite Borel measure on . Then the cumulative distribution function for is increasing and right-continuous.    Let be a finite Borel measure on and let be the corresponding cumulative distribution function. Note that, if with then   Thus, is an increasing function.  We will now show that is right-continuous. Take , such that there is a such that . Let be a sequence in converging to , with for each . Then   Hence, since is a finite measure, continuity of measure, Theorem , gives   Hence is right-continuous.   We will now show how a Borel measure can be recovered from its cumulative distribution function. More generally, we show that any increasing, right-continuous function defines a Borel measure.   Let be a closed interval, and let be a non-negative, increasing, right-continuous function. If has a minimal element we will also assume that is non-negative. Then there is a unique Borel measure on satisfying    First assume that does not have a minimal element. That is, assume for some , or . Let be the semiring of subsets of ,   Define on by and We will show that is a premeasure on . It is straightforward to show that   if are disjoint intervals in with .  It remains to show that is countably monotonic. Suppose and are in and satisfy   Fix such that . For each , choose such that and   (if is the end-point of for some we can extend so that for ). Note that we can by the right continuity of . We now have the following inclusions   Thus, is an open cover of . By the Heine-Borel Theorem, is compact, thus there is a finite subcover of . We (relabelling if necessary) denote the sets in this subcover by As is increasing, it follows that   Taking a limit as goes to (from above), the right continuity of gives that   and so is countably monotonic. Hence is a premeasure on .  When has a minimal element , so that or we define to be   We define as above with the extra condition . Again, will be a premeasure on the semiring .  In both cases, the Carathéodory-Hahn Theorem says that extends to a measure on , which we will still denote by . The uniqueness of follows again from the Carathéodory-Hahn Theorem, and the fact that is -finite on . As the sets in will be -measurable, the Borel sets will be measurable with respect to . If is a closed interval in , then . It follows that for any compact set , and thus defines a Borel measure on .    When and , the measure constructed by Theorem is the Lebesgue measure.    Let be a closed interval in and let be a non-negative, increasing, right-continuous function on . If is not bounded below, further assume . Let be the Borel measure on satisfying constructed in Theorem .  If is a finite Borel measure then is the cumulative distribution function for .    Suppose is the minimal element of . Then, for each , the construction of in Theorem gives   Thus, is the cumulative distribution function for .  Now suppose is not bounded below and that Fix . Then   and hence is the cumulative distribution function for .    Let be a closed bounded interval in . Every Borel measure on is uniquely determined by its cumulative distribution function.   \\section*{Exercises}   Let be the Lebesgue measure on . Suppose is Lebesgue measurable. Take . Show that there are disjoint Lebesgue measure able sets such that   and for each .    Let . Show that for all . Show that is Lebesgue measurable if and only if is Lebesgue measurable for all .    Complete the proof of Theorem . That is, show that if is measurable then for all there is an open set containing such that . (You can assume that the result holds when ; the proof of that case is given in the proof of Theorem ).    Complete the proof of Theorem . That is, show that if is Lebesgue measurable then   (The case when is given in the proof of Theorem ).    Let be a subset, and let be the relation defined in Theorem . That is, if and only if there is a such that . Show that is an equivalence relation.    Let be a strictly increasing continuous bijection. Show that has a continuous inverse.    Let be a continuous function. Show that for any Borel set .    Let be the Dirac measure on the Borel sets in (Example ). That is, for , if , and if . Find the cumulative distribution function for .    Let be the measure space of the Lebesgue measure restricted to the Borel sets . Let be the completion of . Show that , the -algebra of all Lebesgue measurable sets; and that , the Lebesgue measure. I.e., show that the completion of the Lebesgue measure restricted to the Borel sets, is the Lebesgue measure on all Lebesgue measurable sets.    Let be the Cantor Lebesgue function on , let be the Cantor set, and let . Show that for all .    Let be the Cantor set; let ; and let . Let be the Borel measure on induced by (using Theorem ). Show that ; and .   "
},
{
  "id": "def-cumulative-dist",
  "level": "2",
  "url": "sec-borel-on-R.html#def-cumulative-dist",
  "type": "Definition",
  "number": "3.3.1",
  "title": "",
  "body": " Let be a closed interval in . Let be a finite Borel measure on . Define a function by   The function is called the cumulative distribution function for . cumulative distribution function  "
},
{
  "id": "rem-cumulative-dist-in-probability",
  "level": "2",
  "url": "sec-borel-on-R.html#rem-cumulative-dist-in-probability",
  "type": "Remark",
  "number": "3.3.2",
  "title": "",
  "body": " The term cumulative distribution function is borrowed from probability theory.  "
},
{
  "id": "exam-cdf-of-gaussian",
  "level": "2",
  "url": "sec-borel-on-R.html#exam-cdf-of-gaussian",
  "type": "Example",
  "number": "3.3.3",
  "title": "",
  "body": " distribution Gaussian distribution Let be the Gaussian distribution. The cumulative distribution function of is usually denoted by . By definition is given by   Note that is continuous on every closed interval in . Further,       "
},
{
  "id": "sec-borel-on-R-8",
  "level": "2",
  "url": "sec-borel-on-R.html#sec-borel-on-R-8",
  "type": "Definition",
  "number": "3.3.5",
  "title": "",
  "body": " Let be a closed interval. A function is right-continuous on continuous function right-continuous if given such that there exists such that (i.e. is not a right end-point of ), then   "
},
{
  "id": "thm-cdf",
  "level": "2",
  "url": "sec-borel-on-R.html#thm-cdf",
  "type": "Theorem",
  "number": "3.3.6",
  "title": "",
  "body": " cumulative distribution function Let be a closed interval and let be a finite Borel measure on . Then the cumulative distribution function for is increasing and right-continuous.  "
},
{
  "id": "sec-borel-on-R-10",
  "level": "2",
  "url": "sec-borel-on-R.html#sec-borel-on-R-10",
  "type": "Proof",
  "number": "3.3.1",
  "title": "",
  "body": " Let be a finite Borel measure on and let be the corresponding cumulative distribution function. Note that, if with then   Thus, is an increasing function.  We will now show that is right-continuous. Take , such that there is a such that . Let be a sequence in converging to , with for each . Then   Hence, since is a finite measure, continuity of measure, Theorem , gives   Hence is right-continuous.  "
},
{
  "id": "thm-lebesgue-stieltjes-measure",
  "level": "2",
  "url": "sec-borel-on-R.html#thm-lebesgue-stieltjes-measure",
  "type": "Theorem",
  "number": "3.3.7",
  "title": "",
  "body": " Let be a closed interval, and let be a non-negative, increasing, right-continuous function. If has a minimal element we will also assume that is non-negative. Then there is a unique Borel measure on satisfying  "
},
{
  "id": "sec-borel-on-R-13",
  "level": "2",
  "url": "sec-borel-on-R.html#sec-borel-on-R-13",
  "type": "Proof",
  "number": "3.3.2",
  "title": "",
  "body": " First assume that does not have a minimal element. That is, assume for some , or . Let be the semiring of subsets of ,   Define on by and We will show that is a premeasure on . It is straightforward to show that   if are disjoint intervals in with .  It remains to show that is countably monotonic. Suppose and are in and satisfy   Fix such that . For each , choose such that and   (if is the end-point of for some we can extend so that for ). Note that we can by the right continuity of . We now have the following inclusions   Thus, is an open cover of . By the Heine-Borel Theorem, is compact, thus there is a finite subcover of . We (relabelling if necessary) denote the sets in this subcover by As is increasing, it follows that   Taking a limit as goes to (from above), the right continuity of gives that   and so is countably monotonic. Hence is a premeasure on .  When has a minimal element , so that or we define to be   We define as above with the extra condition . Again, will be a premeasure on the semiring .  In both cases, the Carathéodory-Hahn Theorem says that extends to a measure on , which we will still denote by . The uniqueness of follows again from the Carathéodory-Hahn Theorem, and the fact that is -finite on . As the sets in will be -measurable, the Borel sets will be measurable with respect to . If is a closed interval in , then . It follows that for any compact set , and thus defines a Borel measure on .  "
},
{
  "id": "sec-borel-on-R-14",
  "level": "2",
  "url": "sec-borel-on-R.html#sec-borel-on-R-14",
  "type": "Remark",
  "number": "3.3.8",
  "title": "",
  "body": " When and , the measure constructed by Theorem is the Lebesgue measure.  "
},
{
  "id": "cor-lebesgue-stieltjes-measure",
  "level": "2",
  "url": "sec-borel-on-R.html#cor-lebesgue-stieltjes-measure",
  "type": "Corollary",
  "number": "3.3.9",
  "title": "",
  "body": " Let be a closed interval in and let be a non-negative, increasing, right-continuous function on . If is not bounded below, further assume . Let be the Borel measure on satisfying constructed in Theorem .  If is a finite Borel measure then is the cumulative distribution function for .  "
},
{
  "id": "sec-borel-on-R-16",
  "level": "2",
  "url": "sec-borel-on-R.html#sec-borel-on-R-16",
  "type": "Proof",
  "number": "3.3.3",
  "title": "",
  "body": " Suppose is the minimal element of . Then, for each , the construction of in Theorem gives   Thus, is the cumulative distribution function for .  Now suppose is not bounded below and that Fix . Then   and hence is the cumulative distribution function for .  "
},
{
  "id": "cor-cdf-and-Borel",
  "level": "2",
  "url": "sec-borel-on-R.html#cor-cdf-and-Borel",
  "type": "Corollary",
  "number": "3.3.10",
  "title": "",
  "body": " Let be a closed bounded interval in . Every Borel measure on is uniquely determined by its cumulative distribution function.  "
},
{
  "id": "sec-borel-on-R-19",
  "level": "2",
  "url": "sec-borel-on-R.html#sec-borel-on-R-19",
  "type": "Checkpoint",
  "number": "3.3.11",
  "title": "",
  "body": " Let be the Lebesgue measure on . Suppose is Lebesgue measurable. Take . Show that there are disjoint Lebesgue measure able sets such that   and for each .  "
},
{
  "id": "exer-Lebesgue-translation-inv",
  "level": "2",
  "url": "sec-borel-on-R.html#exer-Lebesgue-translation-inv",
  "type": "Checkpoint",
  "number": "3.3.12",
  "title": "",
  "body": " Let . Show that for all . Show that is Lebesgue measurable if and only if is Lebesgue measurable for all .  "
},
{
  "id": "exer-outer-approx",
  "level": "2",
  "url": "sec-borel-on-R.html#exer-outer-approx",
  "type": "Checkpoint",
  "number": "3.3.13",
  "title": "",
  "body": " Complete the proof of Theorem . That is, show that if is measurable then for all there is an open set containing such that . (You can assume that the result holds when ; the proof of that case is given in the proof of Theorem ).  "
},
{
  "id": "exer-Lebesgue-inner-reg",
  "level": "2",
  "url": "sec-borel-on-R.html#exer-Lebesgue-inner-reg",
  "type": "Checkpoint",
  "number": "3.3.14",
  "title": "",
  "body": " Complete the proof of Theorem . That is, show that if is Lebesgue measurable then   (The case when is given in the proof of Theorem ).  "
},
{
  "id": "exer-Q-equiv-rel",
  "level": "2",
  "url": "sec-borel-on-R.html#exer-Q-equiv-rel",
  "type": "Checkpoint",
  "number": "3.3.15",
  "title": "",
  "body": " Let be a subset, and let be the relation defined in Theorem . That is, if and only if there is a such that . Show that is an equivalence relation.  "
},
{
  "id": "exer-cont-inverse",
  "level": "2",
  "url": "sec-borel-on-R.html#exer-cont-inverse",
  "type": "Checkpoint",
  "number": "3.3.16",
  "title": "",
  "body": " Let be a strictly increasing continuous bijection. Show that has a continuous inverse.  "
},
{
  "id": "exer-Borel-inv-img",
  "level": "2",
  "url": "sec-borel-on-R.html#exer-Borel-inv-img",
  "type": "Checkpoint",
  "number": "3.3.17",
  "title": "",
  "body": " Let be a continuous function. Show that for any Borel set .  "
},
{
  "id": "exer-dirac-cdf",
  "level": "2",
  "url": "sec-borel-on-R.html#exer-dirac-cdf",
  "type": "Checkpoint",
  "number": "3.3.18",
  "title": "",
  "body": " Let be the Dirac measure on the Borel sets in (Example ). That is, for , if , and if . Find the cumulative distribution function for .  "
},
{
  "id": "sec-borel-on-R-27",
  "level": "2",
  "url": "sec-borel-on-R.html#sec-borel-on-R-27",
  "type": "Checkpoint",
  "number": "3.3.19",
  "title": "",
  "body": " Let be the measure space of the Lebesgue measure restricted to the Borel sets . Let be the completion of . Show that , the -algebra of all Lebesgue measurable sets; and that , the Lebesgue measure. I.e., show that the completion of the Lebesgue measure restricted to the Borel sets, is the Lebesgue measure on all Lebesgue measurable sets.  "
},
{
  "id": "exer-cant-len-func-singular",
  "level": "2",
  "url": "sec-borel-on-R.html#exer-cant-len-func-singular",
  "type": "Checkpoint",
  "number": "3.3.20",
  "title": "",
  "body": " Let be the Cantor Lebesgue function on , let be the Cantor set, and let . Show that for all .  "
},
{
  "id": "exer-cantor-leb-cdf",
  "level": "2",
  "url": "sec-borel-on-R.html#exer-cantor-leb-cdf",
  "type": "Checkpoint",
  "number": "3.3.21",
  "title": "",
  "body": " Let be the Cantor set; let ; and let . Let be the Borel measure on induced by (using Theorem ). Show that ; and .  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
