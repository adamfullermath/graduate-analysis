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
  "id": "real-analysis-4-2-3",
  "level": "1",
  "url": "real-analysis-4-2-3.html",
  "type": "Section",
  "number": "1.1",
  "title": "Set Theory Notation",
  "body": " Set Theory Notation  The empty-set is denoted by . Let be any set, and let . The union of and is given by   Their intersection is   We will usually call a set whose elements are sets a collection . Let be a collection of subsets of . The union and intersection of all sets in are written   respectively. A collection of sets is disjoint , or pairwise disjoint , if for all .  The complement of in is given by   When it is clear what ambient set we are working in we will often refer to as simply the complement of . We will also write as . For example, we will often be implicitly be working with subsets of . Thus, by ``the complement of \" we will mean   The collection of all subsets of a set is called the the power set of power set and is denoted by . The notation is also sometimes used for the power-set of . Note that if has elements, then has elements.  Let be a collection of subsets of . The following two identities are called De Morgan's Identities . De Morgan's Identities   Let be any set. Suppose for each there is a set . Let . We will write the collection by   and call an index set for the collection .   Mappings  For we let   We call the inverse image of under . Note that the inverse image of a set is defined whether or not the mapping is invertible.  For subsets we have the following identities:    "
},
{
  "id": "real-analysis-4-2-4",
  "level": "1",
  "url": "real-analysis-4-2-4.html",
  "type": "Section",
  "number": "1.2",
  "title": "Equivalence Relations and Classes",
  "body": " Equivalence Relations and Classes  A relation on is an equivalence relation equivalence relation if it satisfies the following conditions:   for all ( is reflexive );   if and only if ( is symmetric );   if an then ( is transitive ). Let be an equivalence relation on . For , the equivalence class of is     Note that for all . Also if , then . Further if and only if . That is, each element is in one, and only one, equivalence class. Hence the collection is a disjoint collection of subsets of such that   We call such a collection a partition of .  "
},
{
  "id": "real-analysis-4-2-5",
  "level": "1",
  "url": "real-analysis-4-2-5.html",
  "type": "Section",
  "number": "1.3",
  "title": "Cardinality",
  "body": " Cardinality   Note that cardinality forms an equivalence relation on sets.  A set is called countable if is finite, or if has the same cardinality as the natural numbers . In the latter case we call  countably infinite .  If a set is not countable, we say it is uncountable . There are many uncountable cardinalities. In fact, there are infinitely many uncountable cardinalities. This can be observed by showing that has a larger cardinality than , for any set . However, we will primarily be concerned with whether a set is countable or not.  \\begin{egs}   , and are all countable (see Section 1.3, Corollary 4 of ).   The union of a countable collection of countable sets is countable (see Section 1.3, Corollary 6 of ).   and are uncountable (they have the same cardinality).   For , , the intervals , , and are uncountable. In fact, they have the same cardinality as and (see Section 1.3, Theorem 7 of ).    \\end{egs}  "
},
{
  "id": "real-analysis-4-2-6",
  "level": "1",
  "url": "real-analysis-4-2-6.html",
  "type": "Section",
  "number": "1.4",
  "title": "Axiom of Choice",
  "body": " Axiom of Choice  A choice function choice function  on is a mapping   such that for all . That is, chooses an element from each set  The axiom of choice axiom of choice states that given any collection of non-empty sets a choice function always exists.  Note that the axiom of choice is an axiom! It does not follow from the standard set theory axioms (the Zermelo-Fraenkel axioms). While the axiom of choice seems very natural, it does lead to some interesting, counter-intuitive results, e.g. the Banach-Tarski paradox and the well-ordering principal.  In the first part of the course we will use the axiom of choice to prove the existence of non-measurable sets in . We will also make use of Zorn's Lemma, Zorn's Lemma which is logically equivalent to the axiom of choice. The axiom of choice axiom of choice is widely used by working mathematicians, especially in analysis\/functional analysis.  We state Zorn's Lemma here. We will make use of this Lemma several times; it is used frequently in analysis and functional analysis. Zorn's Lemma is also used in other areas. For example, it is a straightforward application of Zorn's lemma to show that every vector space has a basis. The converse also holds. That is, the assumption that every vector space has a basis is equivalent to the axiom of choice, and hence equivalent to Zorn's Lemma, see   Zorn's Lemma  Zorn's Lemma Let be a partially ordered set. If every totally ordered subsets has an upper bound in , then contains maximal elements.    The axiom of countable choice axiom of choice countable choice states that any countable collection of non-empty sets has a choice function. This is a weaker axiom than the axiom of choice. As most functional analysis is carried out with underlying field or , which contain countable dense subsets ( and respectively), there are many times that the countable axiom of choice can be used in place of the axiom of choice. However, this leads to more technical proofs in an already technical field, so we will speak no more of the countable axiom of choice. It is also worth noting that (uncountable) choice is needed to show the existence of non-measurable sets.   "
},
{
  "id": "lem-zorn",
  "level": "2",
  "url": "real-analysis-4-2-6.html#lem-zorn",
  "type": "Lemma",
  "number": "1.4.1",
  "title": "Zorn’s Lemma.",
  "body": " Zorn's Lemma  Zorn's Lemma Let be a partially ordered set. If every totally ordered subsets has an upper bound in , then contains maximal elements.  "
},
{
  "id": "real-analysis-4-2-6-9",
  "level": "2",
  "url": "real-analysis-4-2-6.html#real-analysis-4-2-6-9",
  "type": "Remark",
  "number": "1.4.2",
  "title": "",
  "body": " The axiom of countable choice axiom of choice countable choice states that any countable collection of non-empty sets has a choice function. This is a weaker axiom than the axiom of choice. As most functional analysis is carried out with underlying field or , which contain countable dense subsets ( and respectively), there are many times that the countable axiom of choice can be used in place of the axiom of choice. However, this leads to more technical proofs in an already technical field, so we will speak no more of the countable axiom of choice. It is also worth noting that (uncountable) choice is needed to show the existence of non-measurable sets.  "
},
{
  "id": "real-analysis-4-3-3",
  "level": "1",
  "url": "real-analysis-4-3-3.html",
  "type": "Subsection",
  "number": "2.1",
  "title": "Open and closed sets in <span class=\"process-math\">\\(\\mathbb{R}\\)<\/span>",
  "body": " Open and closed sets in   A subset is open if for all there exists such that .  A subset is closed if its complement is open.   \\begin{egs}   and are open and closed.   Open intervals are open, i.e. intervals of the form and .   Closed intervals are closed, i.e. intervals of the form and .   Finite subsets of are closed.   The rational numbers are neither open nor closed.   The intervals and are neither open nor closed.    \\end{egs}   Let . A set is open in if there is an open subset such that . Similarly, a set is closed in if there is a closed subset such that .   The key properties of open sets are:   are open;   if is any collection of open sets then    if are open then      Using DeMorgan's identities you can use (ii) to show that an arbitrary intersection of closed sets is closed; and using (iii) you can show a finite union of closed sets is closed.   A useful characterization of closed sets in is the following.   A subset is closed if and only if given any convergent sequence of with for all , we must have .    Let . The closure of , denoted is the smallest closed set containing . The interior of , denoted , is the largest open set contained in . A subset is dense in if .  If and , then the closure of in is the set . Similarly, the interior of in is the set . A set is dense in if the closure of in is all of .    The rational numbers are dense in . The irrational numbers are also dense in .   We will use the following property of open sets later in the course.   Every non-empty open set in is the disjoint union of countably many open intervals.    Let be non-empty open set. Take . Since is open, there exists such that . Similarly, there exists with . Let   (allowing for the possibility that and ). Let . We will show that but .  Take . Suppose . By definition of as the supremum, there exists such that . Thus . Similarly, if we get . Hence .  Now assume and . Then, since is open , there is an such that . But then . This contradicts the definition of as a supremum, and hence . Similarly, .  Take . Note that, either or . Hence the collection is a disjoint collection of open intervals. Further, since for all , we have   It remains to show that there are countably many distinct intervals . Note that, since is dense in , each open interval contains rational numbers. Thus, the set can be indexed by a subset of . Since is countable this indexing set is countable, and we are done.    A countable intersection of open sets if called a -set. A countable union of closed sets is called an -set.    The term comes from German. The German for area is `Gebeit', and the German for intersection is `Durschnitt'. Hence a set comes from an intersection of areas.  The term , on the other hand, comes from another language altogether. In French the word for closed is `fermé', and the word for sum is `somme'. Hence an set is a sum of closed sets.   Recall that continuity of functions on can be defined solely in terms of open sets, with out making reference to the distance function on .   continuous function Let . A function is continuous if and only is open in for all open sets in .   "
},
{
  "id": "real-analysis-4-3-3-2",
  "level": "2",
  "url": "real-analysis-4-3-3.html#real-analysis-4-3-3-2",
  "type": "Definition",
  "number": "2.1.3",
  "title": "",
  "body": " A subset is open if for all there exists such that .  A subset is closed if its complement is open.  "
},
{
  "id": "real-analysis-4-3-3-6",
  "level": "2",
  "url": "real-analysis-4-3-3.html#real-analysis-4-3-3-6",
  "type": "Definition",
  "number": "2.1.4",
  "title": "",
  "body": " Let . A set is open in if there is an open subset such that . Similarly, a set is closed in if there is a closed subset such that .  "
},
{
  "id": "real-analysis-4-3-3-9",
  "level": "2",
  "url": "real-analysis-4-3-3.html#real-analysis-4-3-3-9",
  "type": "Remark",
  "number": "2.1.5",
  "title": "",
  "body": " Using DeMorgan's identities you can use (ii) to show that an arbitrary intersection of closed sets is closed; and using (iii) you can show a finite union of closed sets is closed.  "
},
{
  "id": "prop-closed",
  "level": "2",
  "url": "real-analysis-4-3-3.html#prop-closed",
  "type": "Proposition",
  "number": "2.1.6",
  "title": "",
  "body": " A subset is closed if and only if given any convergent sequence of with for all , we must have .  "
},
{
  "id": "real-analysis-4-3-3-12",
  "level": "2",
  "url": "real-analysis-4-3-3.html#real-analysis-4-3-3-12",
  "type": "Definition",
  "number": "2.1.7",
  "title": "",
  "body": " Let . The closure of , denoted is the smallest closed set containing . The interior of , denoted , is the largest open set contained in . A subset is dense in if .  If and , then the closure of in is the set . Similarly, the interior of in is the set . A set is dense in if the closure of in is all of .  "
},
{
  "id": "real-analysis-4-3-3-13",
  "level": "2",
  "url": "real-analysis-4-3-3.html#real-analysis-4-3-3-13",
  "type": "Example",
  "number": "2.1.8",
  "title": "",
  "body": " The rational numbers are dense in . The irrational numbers are also dense in .  "
},
{
  "id": "prop-open-sets",
  "level": "2",
  "url": "real-analysis-4-3-3.html#prop-open-sets",
  "type": "Proposition",
  "number": "2.1.9",
  "title": "",
  "body": " Every non-empty open set in is the disjoint union of countably many open intervals.  "
},
{
  "id": "real-analysis-4-3-3-16",
  "level": "2",
  "url": "real-analysis-4-3-3.html#real-analysis-4-3-3-16",
  "type": "Proof",
  "number": "2.1.1",
  "title": "",
  "body": " Let be non-empty open set. Take . Since is open, there exists such that . Similarly, there exists with . Let   (allowing for the possibility that and ). Let . We will show that but .  Take . Suppose . By definition of as the supremum, there exists such that . Thus . Similarly, if we get . Hence .  Now assume and . Then, since is open , there is an such that . But then . This contradicts the definition of as a supremum, and hence . Similarly, .  Take . Note that, either or . Hence the collection is a disjoint collection of open intervals. Further, since for all , we have   It remains to show that there are countably many distinct intervals . Note that, since is dense in , each open interval contains rational numbers. Thus, the set can be indexed by a subset of . Since is countable this indexing set is countable, and we are done.  "
},
{
  "id": "real-analysis-4-3-3-17",
  "level": "2",
  "url": "real-analysis-4-3-3.html#real-analysis-4-3-3-17",
  "type": "Definition",
  "number": "2.1.10",
  "title": "",
  "body": " A countable intersection of open sets if called a -set. A countable union of closed sets is called an -set.  "
},
{
  "id": "real-analysis-4-3-3-18",
  "level": "2",
  "url": "real-analysis-4-3-3.html#real-analysis-4-3-3-18",
  "type": "Remark",
  "number": "2.1.11",
  "title": "",
  "body": " The term comes from German. The German for area is `Gebeit', and the German for intersection is `Durschnitt'. Hence a set comes from an intersection of areas.  The term , on the other hand, comes from another language altogether. In French the word for closed is `fermé', and the word for sum is `somme'. Hence an set is a sum of closed sets.  "
},
{
  "id": "real-analysis-4-3-3-20",
  "level": "2",
  "url": "real-analysis-4-3-3.html#real-analysis-4-3-3-20",
  "type": "Proposition",
  "number": "2.1.12",
  "title": "",
  "body": " continuous function Let . A function is continuous if and only is open in for all open sets in .  "
},
{
  "id": "real-analysis-4-3-4",
  "level": "1",
  "url": "real-analysis-4-3-4.html",
  "type": "Section",
  "number": "2.1",
  "title": "General topology",
  "body": " General topology   A topology on a non-empty set is a collection of subsets of with the properties   , ;   if is a collection of sets in then ;   if then .    We call the elements of  open sets . If is open, we call  closed . We call , or simply if the topology is clear, a topological space .   Once we have defined what sets we want to be open, we can define what it means for a function to be continuous by mirroring what happened in .   Let and be topological spaces. A function is continuous if for all .    A subset is open if given there is an such that   This defines a topology on .  The usual - definition of continuous functions on coincides with Definition .    Recall that there are other norms we can put on : For each define   The usual norm is the same as the -norm . We could say that a set is open with respect to the -norm if for each there is an such that   This would also define a topology on . However, the topology defined using a -norm and the topology defined using the usual -norm are exactly the same.  In particular, it follows that if you are interested in studying continuous functions it does not matter which -norm you use.    Let be a metric space. A set is open if for each there is an such that   Again, this defines a topology on and the - definition of continuity coincides with Definition .    Let be a topological space. Let . The closure of , denoted is the smallest closed set containing . The interior of , denoted , is the largest open set contained in . A subset is dense in if .   "
},
{
  "id": "real-analysis-4-3-4-2",
  "level": "2",
  "url": "real-analysis-4-3-4.html#real-analysis-4-3-4-2",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": " A topology on a non-empty set is a collection of subsets of with the properties   , ;   if is a collection of sets in then ;   if then .    We call the elements of  open sets . If is open, we call  closed . We call , or simply if the topology is clear, a topological space .  "
},
{
  "id": "def-cont",
  "level": "2",
  "url": "real-analysis-4-3-4.html#def-cont",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": " Let and be topological spaces. A function is continuous if for all .  "
},
{
  "id": "real-analysis-4-3-4-5",
  "level": "2",
  "url": "real-analysis-4-3-4.html#real-analysis-4-3-4-5",
  "type": "Example",
  "number": "2.1.3",
  "title": "",
  "body": " A subset is open if given there is an such that   This defines a topology on .  The usual - definition of continuous functions on coincides with Definition .  "
},
{
  "id": "real-analysis-4-3-4-6",
  "level": "2",
  "url": "real-analysis-4-3-4.html#real-analysis-4-3-4-6",
  "type": "Example",
  "number": "2.1.4",
  "title": "",
  "body": " Recall that there are other norms we can put on : For each define   The usual norm is the same as the -norm . We could say that a set is open with respect to the -norm if for each there is an such that   This would also define a topology on . However, the topology defined using a -norm and the topology defined using the usual -norm are exactly the same.  In particular, it follows that if you are interested in studying continuous functions it does not matter which -norm you use.  "
},
{
  "id": "real-analysis-4-3-4-7",
  "level": "2",
  "url": "real-analysis-4-3-4.html#real-analysis-4-3-4-7",
  "type": "Example",
  "number": "2.1.5",
  "title": "",
  "body": " Let be a metric space. A set is open if for each there is an such that   Again, this defines a topology on and the - definition of continuity coincides with Definition .  "
},
{
  "id": "real-analysis-4-3-4-8",
  "level": "2",
  "url": "real-analysis-4-3-4.html#real-analysis-4-3-4-8",
  "type": "Definition",
  "number": "2.1.6",
  "title": "",
  "body": " Let be a topological space. Let . The closure of , denoted is the smallest closed set containing . The interior of , denoted , is the largest open set contained in . A subset is dense in if .  "
},
{
  "id": "real-analysis-4-3-5",
  "level": "1",
  "url": "real-analysis-4-3-5.html",
  "type": "Section",
  "number": "2.2",
  "title": "Compactness",
  "body": " Compactness   Let be a topological space and let . An open cover of is a collection of open sets such that   An open cover of has a finite subcover of if there is a finite subset such that   A set is called compact given any open cover of , has a finite subcover of .   The following theorem gives an easy characterization of compact sets in .   Heine-Borel Theorem  Heine-Borel Theorem A subset is compact if and only if is closed and bounded.    We will first show that a closed bounded interval is compact. If , then is finite and clearly compact. Assume . Let be an arbitrary open cover of . Note that, for any , is also an open cover of . Let   Note that . As is an open cover of there is an open set such that . Hence .  As is a non-empty, bounded subset of we can take its supremum. Let   Clearly, . If we can show that then we are done.  Now, since , there is an open set such that . As is open, there exists such that . As is not an upper bounded for , there exists such that . By definition of , there are open sets such that   Thus   It follows that , otherwise we could find with   and have finitely covered by ; contradicting the definition of as the supremum of . We have now shown that is compact.  Let be an arbitrary closed bounded subset of and let be any open cover of . As is bounded there is a closed interval such that .  Let be the complement of . Since is closed, is open. Let . Then is an open cover of . Since is compact, has a finite subcover of . That is   for some . If , then we have a finite subcover of from open sets in , and we are done. Otherwise one of is equal to . Without loss of generality, say . Then we have   and so form a finite open subcover of from . Thus is compact.  To prove the converse statement, that a set is closed and bounded if it is compact, it suffices to prove the following two results, which we leave as an exercise:   if is unbounded then is not compact;   if is not closed, then is not compact.      A set is called sequentially compact if every infinite sequence of elements of has a subsequence which converges to an element of .   The Bolzano-Weierstrass theorem, together with Proposition , tells us that a set is sequentially compact if and only if it is closed and bounded. Combining the Bolzano-Weierstrass Theorem and the Heine-Borel Theorem we get the following result.   Let . Then the following are equivalent:   is compact;   is sequentially compact;   is closed and bounded.     Many statements which are true for continous real-valued functions on closed bounded intervals, are in fact true for real-valued functions on closed bounded sets, using similar proofs (which rely on compactness\/sequential compactness). We record some of these facts below:   Let be a closed bounded set. Let be a continuous function. Then   is uniformly continuous;   attains its maximum and minimum value.      The Heine-Borel Theorem and Corollary actually hold in : a set is compact if and only if it is sequentially compact if and only if it is closed and bounded.  However, in general topology the three conditions need not be the same. A metric space is compact if and only if it is sequentially compact. However, there are topological spaces which are not metric spaces, which are sequentially compact but not compact.  If is a normed vector space which is complete (i.e. Cauchy sequences are convergent) then the statement: `` is compact if and only if is closed and bounded\" is true if and only if is finite dimensional. That is, it is possible to find closed and bounded sets which are not compact.  In this course we will study a large class of complete, normed vector spaces which are infinite dimensional: -spaces.   "
},
{
  "id": "real-analysis-4-3-5-2",
  "level": "2",
  "url": "real-analysis-4-3-5.html#real-analysis-4-3-5-2",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": " Let be a topological space and let . An open cover of is a collection of open sets such that   An open cover of has a finite subcover of if there is a finite subset such that   A set is called compact given any open cover of , has a finite subcover of .  "
},
{
  "id": "thm-heine-borel",
  "level": "2",
  "url": "real-analysis-4-3-5.html#thm-heine-borel",
  "type": "Theorem",
  "number": "2.2.2",
  "title": "Heine-Borel Theorem.",
  "body": " Heine-Borel Theorem  Heine-Borel Theorem A subset is compact if and only if is closed and bounded.  "
},
{
  "id": "real-analysis-4-3-5-5",
  "level": "2",
  "url": "real-analysis-4-3-5.html#real-analysis-4-3-5-5",
  "type": "Proof",
  "number": "2.2.1",
  "title": "",
  "body": " We will first show that a closed bounded interval is compact. If , then is finite and clearly compact. Assume . Let be an arbitrary open cover of . Note that, for any , is also an open cover of . Let   Note that . As is an open cover of there is an open set such that . Hence .  As is a non-empty, bounded subset of we can take its supremum. Let   Clearly, . If we can show that then we are done.  Now, since , there is an open set such that . As is open, there exists such that . As is not an upper bounded for , there exists such that . By definition of , there are open sets such that   Thus   It follows that , otherwise we could find with   and have finitely covered by ; contradicting the definition of as the supremum of . We have now shown that is compact.  Let be an arbitrary closed bounded subset of and let be any open cover of . As is bounded there is a closed interval such that .  Let be the complement of . Since is closed, is open. Let . Then is an open cover of . Since is compact, has a finite subcover of . That is   for some . If , then we have a finite subcover of from open sets in , and we are done. Otherwise one of is equal to . Without loss of generality, say . Then we have   and so form a finite open subcover of from . Thus is compact.  To prove the converse statement, that a set is closed and bounded if it is compact, it suffices to prove the following two results, which we leave as an exercise:   if is unbounded then is not compact;   if is not closed, then is not compact.    "
},
{
  "id": "real-analysis-4-3-5-6",
  "level": "2",
  "url": "real-analysis-4-3-5.html#real-analysis-4-3-5-6",
  "type": "Definition",
  "number": "2.2.3",
  "title": "",
  "body": " A set is called sequentially compact if every infinite sequence of elements of has a subsequence which converges to an element of .  "
},
{
  "id": "cor-heine-borel",
  "level": "2",
  "url": "real-analysis-4-3-5.html#cor-heine-borel",
  "type": "Corollary",
  "number": "2.2.4",
  "title": "",
  "body": " Let . Then the following are equivalent:   is compact;   is sequentially compact;   is closed and bounded.    "
},
{
  "id": "real-analysis-4-3-5-10",
  "level": "2",
  "url": "real-analysis-4-3-5.html#real-analysis-4-3-5-10",
  "type": "Proposition",
  "number": "2.2.5",
  "title": "",
  "body": " Let be a closed bounded set. Let be a continuous function. Then   is uniformly continuous;   attains its maximum and minimum value.    "
},
{
  "id": "real-analysis-4-3-5-11",
  "level": "2",
  "url": "real-analysis-4-3-5.html#real-analysis-4-3-5-11",
  "type": "Remark",
  "number": "2.2.6",
  "title": "",
  "body": " The Heine-Borel Theorem and Corollary actually hold in : a set is compact if and only if it is sequentially compact if and only if it is closed and bounded.  However, in general topology the three conditions need not be the same. A metric space is compact if and only if it is sequentially compact. However, there are topological spaces which are not metric spaces, which are sequentially compact but not compact.  If is a normed vector space which is complete (i.e. Cauchy sequences are convergent) then the statement: `` is compact if and only if is closed and bounded\" is true if and only if is finite dimensional. That is, it is possible to find closed and bounded sets which are not compact.  In this course we will study a large class of complete, normed vector spaces which are infinite dimensional: -spaces.  "
},
{
  "id": "sec-intro-ftoc",
  "level": "1",
  "url": "sec-intro-ftoc.html",
  "type": "Section",
  "number": "3.1",
  "title": "The integral of a derivative",
  "body": " The integral of a derivative  In a first real analysis course, or indeed a first calculus course, students are presented with two theorems grandly named The Fundamental Theorem of Calculus . Fundamental Theorem of Calculus We will focus on the first of these here (though both will be addressed later in the course).   The Fundamental Theorem of Calculus I  Fundamental Theorem of Calculus Suppose   is a continuous function which is differentiable on and has continuous bounded derivative on . Then    This is clearly a useful, strong theorem. However, it does leave a number of questions unanswered. Is there a class of functions so that the differentiability of is automatic? Do we need to be continuous everywhere in for the theorem to hold? Do we need to be defined everywhere in for the theorem to hold?  The following simple example shows that there are functions where the conclusion of the first fundamental theorem holds, but is not defined on all of the interval .   Let be the function on the interval , where . Then is differentiable at every point in except at . Indeed,   We can choose any value for , but we can not choose a value so that is continuous at . However, we can still calculate the Riemann integral , since a Riemann integral is not changed by the value at a single point. We have that    Example shows that we can get away with not being defined everywhere, and still satisfy the conclusion of the first fundamental theorem, Theorem . Similar to Example , we can easily construct examples of continuous functions which are not differentiable at finitely many points. With a little thought, we can construct an example of a continuous function which is continuous and not differentiable at countably many points. We give one such example below.   Define a function on by   By construction, is continuous. However, is not differentiable at for each integer ; is differentiable at all other (where or ).    A continuous function which is not differentiable at each . Example    One can further show that    for each Thus    Example shows that the conclusion of the Fundamental Theorem of Calculus holds for some functions where the derivative is undefined at infinitely many points. Can we classify\/describe the functions where the Fundamental Theorem of Calculus applies?  These questions are closely related to another question which many 19th century mathematicians struggled with. What is the relationship between continuity and differentiability? If is a continuous function, how non-differentiable can it be? Is a continuous function necessarily differentiable at some points? On some intervals? Is a continuous function differentiable `enough' to apply the first fundamental theorem of calculus?  In Example , the function is not differentiable at each . Whilst this gives (countably) infinite points where is not differentiable, each point where is not differentiable is isolated (meaning if is not differentiable at then there is an interval around in which is differentiable at all ). In the early 1800s, it was widely believed (or suspected, at least) that all examples would satisfy this. That is, it was conjectured that if was continuous on a closed interval then each point where is not differentiable is isolated). André-Marie Ampère (1775–1836) Ampère, André-Marie went so far as to present a `proof' of this statement. All mathematicians make mistakes. Most mathematicians go as far to publish mistakes. If you are to remember Ampère Ampère, André-Marie for anything it should not be for this. Augustin-Louis Cauchy (1789 - 1857) Cauchy, Augustin-Louis credits Ampère in influencing his work on the formalization of calculus.  The question of the relationship between continuity and differentiability was settled by Karl Weierstrass (1815–1897) Weierstrass, Karl and Hermann Schwarz (1843–1921) Schwarz, Hermann Schwarz's example in the 1870s. Weierstrass published the first example of a continuous function which is differentiable nowhere.  Schwarz gave an example of a continuous function which is differentiable at all but countably many points; but the points where is not differentiable are not isolated. Schwarz's example has an unbounded derivative which is not Riemann integrable. Schwarz's example  The history is more complicated than alluded to here. As earlier as the 1830s Bernard Bolzano (1781-1848) gave an example of a nowhere differentiable function. This work was not published at the time. In Bolzano's work he exhibited the continuity of the function and that it was not differentiable on a dense set. That Bolzano's function is nowhere differentiable was not proved until after Bolzano's manuscript was published in the 1920s. Charles Cellérier (1818-1889) gave an example of a nowhere differentiable continuous function in the 1860s. This was not published until after Cellérier's death, and after Weierstrass's work, in 1890.  The existence of nowhere differentiable functions means that there are continuous functions for which the first fundamental theorem does not apply. But for which functions does it apply? Which continuous functions are differentiable `enough' to apply the fundamental theorem?  Here is where we run into some shortcomings of the Riemann integral. Consider the following two examples.   Thomae's function Riemann's function popcorn function Riemann's function Riemann's function Let . Define a function on by   This is function goes by several names, including Riemann's function , Thomae's function , and the popcorn function .    Riemann's function, which is Riemann integrable and has a dense set of discontinuities. Example    Bernhard Riemann (1826 - 1866) Riemann, Bernhard introduced this function in his doctoral thesis in 1854, in which he also introduced the method of integration which bears his name. Riemann showed that this function was continuous at each irrational, , and discontinuous at the rational points, . He further showed that is Riemann integrable and      Let . Consider the characteristic function . That is   As is dense in , it follows that the lower integral   and the upper integral   Hence is not Riemann integral.   Examples ~and show that Riemann integration can sometimes work well with countable dense subsets, but not always. Hence Riemann integration may not work well when dealing with the derivative of Schwarz's example. Vito Volterra (1860 - 1940) Volterra, Vito gave an example in 1881 which gives a further complication to the theory. Volterra's function Volterra's function is continuous, with bounded and defined for all . However, is not Riemann integrable. Hence, we can not apply Theorem to .  These failures of the Riemann integral necessitate defining a new type of integral: the Lebesgue integral . Henri Lebesgue (1875 - 1941) Lebesgue, Henri introduced this more robust way integrating functions. For Riemann integrable functions, the Lebesgue integral and the Riemann integral coincide. However, the Lebesgue integral allows us to integrate many functions which are not Riemann integrable, including from Example and the derivative of Volterra's function .  Lebesgue also worked on the theory of differentiation, and its relationship to (both Riemann and Lebesgue) integration. Lebesgue showed that every increasing function is differentiable almost everywhere. This, in turn, can be used to show that a class of continuous functions called absolutely continuous functions absolutely continuous function , are differentiable almost everywhere. The term `almost everywhere' is not a vague colloquialism; it has an exact technical definition that we will see later in this course. In Chapter we will study measure spaces. In Chapter we will introduce the Lebesgue measure on subsets the real line, a generalization of the length function on intervals in . In Chapter we use these ideas to introduce Lebesgue integration (and generalizations thereof). In Chapter we will study absolutely continuous functions and complete our story on the relationship between (Lebesgue) integration and differentiation. In Theorem we give Lebesgue's version of the fundamental theorem of calculus:   for all absolutely continuous functions (where we use the Lebesgue integral to integrate ).  "
},
{
  "id": "thm-FTOCI",
  "level": "2",
  "url": "sec-intro-ftoc.html#thm-FTOCI",
  "type": "Theorem",
  "number": "3.1.1",
  "title": "The Fundamental Theorem of Calculus I.",
  "body": " The Fundamental Theorem of Calculus I  Fundamental Theorem of Calculus Suppose   is a continuous function which is differentiable on and has continuous bounded derivative on . Then   "
},
{
  "id": "exam-ftoc",
  "level": "2",
  "url": "sec-intro-ftoc.html#exam-ftoc",
  "type": "Example",
  "number": "3.1.2",
  "title": "",
  "body": " Let be the function on the interval , where . Then is differentiable at every point in except at . Indeed,   We can choose any value for , but we can not choose a value so that is continuous at . However, we can still calculate the Riemann integral , since a Riemann integral is not changed by the value at a single point. We have that   "
},
{
  "id": "exam-ftoc2",
  "level": "2",
  "url": "sec-intro-ftoc.html#exam-ftoc2",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": " Define a function on by   By construction, is continuous. However, is not differentiable at for each integer ; is differentiable at all other (where or ).    A continuous function which is not differentiable at each . Example    One can further show that    for each Thus   "
},
{
  "id": "exam-popcorn",
  "level": "2",
  "url": "sec-intro-ftoc.html#exam-popcorn",
  "type": "Example",
  "number": "3.1.5",
  "title": "",
  "body": " Thomae's function Riemann's function popcorn function Riemann's function Riemann's function Let . Define a function on by   This is function goes by several names, including Riemann's function , Thomae's function , and the popcorn function .    Riemann's function, which is Riemann integrable and has a dense set of discontinuities. Example    Bernhard Riemann (1826 - 1866) Riemann, Bernhard introduced this function in his doctoral thesis in 1854, in which he also introduced the method of integration which bears his name. Riemann showed that this function was continuous at each irrational, , and discontinuous at the rational points, . He further showed that is Riemann integrable and    "
},
{
  "id": "exam-char-Q",
  "level": "2",
  "url": "sec-intro-ftoc.html#exam-char-Q",
  "type": "Example",
  "number": "3.1.7",
  "title": "",
  "body": " Let . Consider the characteristic function . That is   As is dense in , it follows that the lower integral   and the upper integral   Hence is not Riemann integral.  "
},
{
  "id": "sec-int-lim-swap",
  "level": "1",
  "url": "sec-int-lim-swap.html",
  "type": "Section",
  "number": "3.2",
  "title": "More shortcomings of Riemann integration",
  "body": " More shortcomings of Riemann integration  The following theorem should be familiar.   Let be a sequence of continuous functions on a closed interval which converge uniformly to a (necessarily continuous) function . Then    Put another way, Theorem says that   That is, when converges to uniformly, the limit passes under the integral sign.  A short-coming of this theorem is in the need for uniform convergence. Uniform convergence is a strong condition, that is not always easy to check. A much easier condition to check is pointwise convergence. However, Theorem does not necessarily hold when uniform convergence is replaced by pointwise convergence. We will see an example of this in Exercise .  Enter, again, Lebesgue integration. We will see that pointwise limits of Lebesgue integral functions are again Lebesgue integrable. Further, we will show that, with some reasonable conditions (less than those implicitly in Theorem ), pointwise limits will pass under the (Lebesgue) integral sign. Several theorems of this type will be proved. The most famous of these is the Lebesgue Dominated Convergence Theorem, Theorem . As the name suggests, this was originally proved by Lebesgue.  "
},
{
  "id": "thm-lim-int",
  "level": "2",
  "url": "sec-int-lim-swap.html#thm-lim-int",
  "type": "Theorem",
  "number": "3.2.1",
  "title": "",
  "body": " Let be a sequence of continuous functions on a closed interval which converge uniformly to a (necessarily continuous) function . Then   "
},
{
  "id": "chap-intro-5",
  "level": "1",
  "url": "chap-intro-5.html",
  "type": "Section",
  "number": "3.3",
  "title": "On beyond",
  "body": " On beyond  With the framework set forth by Lebesgue, mathematicians found that they could define measures (and integrals) in a wide array of settings. Rather than develop Lebesgue measure on and then generalize, we will develop both theories in tandem. This saves a considerable amount of repetition.  The following, non-exhaustive, list of applications of measure theory gives some idea as to its value in mathematics, beyond the study of functions on the real line:   series;   probability theory;   formal definitions of the Dirac delta function ;   topological groups (i.e. abstract harmonic analysis);   Hausdorff dimension (e.g. to study fractals).    "
},
{
  "id": "chap-measure-space-3",
  "level": "1",
  "url": "chap-measure-space-3.html",
  "type": "Section",
  "number": "4.1",
  "title": "Measure spaces",
  "body": " Measure spaces  There will be a scarcity of examples in this section. In Section~\\ref{sec: construction} we will develop tools to construct measures. After that, we will have access to a plethora of examples. Let be a non-empty set. A measure will assign a non-negative value to subsets of , but not necessarily all subsets. We need the following definition(s) to describe the domain of a measure.   Let be a non-empty set, and let be the power set of . A collection of sets is a -algebra The suffix ` -' is usually used to denote a countably infinite version of whatever word comes after the ` -'. With that information you can probably infer what an algebra of sets is. if   ;   if then ;   if is a countable collection of sets in , then .      Let be a non-empty set, and let be a -algebra of subsets of . The pair is called a measurable space . measurable space   We record some basic properties of -algebras which we will need frequently.   Let be a measurable space. Then   ;   is closed under countable intersections, i.e. if then    is closed under finite unions and finite intersections;   if then .      SInce , it follows from conditions (i) and (ii) of , that .  Let is a countable collection sets in . Then, it follows from conditions (ii) and (iii) of the . Using De Morgan's Identity, and condition (ii) again, we have   Suppose is a finite collection of sets in . For , let . Then, by condition (i) of Defintion~\\ref{def: sigma-alg}, is a countable collection of subsets in . By condition (iii),   Thus is also closed under finite unions. Similarly, we can show that .  Finally, take . Note   As is closed under complements and finite intersections, it follows that .    Let be a non-empty set, and let be the power-set of subsets of . Then is a -algebra, and thus is a measurable space.   There are occasions when we will consider measurable spaces of the form , (particularly if is countable). However, in most cases we will consider -algebras which are strictly contained in .   Let be a non-empty set. Let be a non-empty collection of sets. Then there is a unique -algebra such that , and if is a -algebra containing , then .  That is, there is a unique smallest -algebra containing .    Let be the collection of all -algebras of that contain . Note that is non-empty, as . Let   That is a -algebra with the desired properties follows readily.    Let be a non-empty set, and let be a non-empty collection of subsets of . Let be the unique, smallest -algebra containing (in the sense of ). We call the -algebra generated by .    Let be a topological space. Denote by the -algebra generated by the open sets in . We call the Borel sets of . Borel sets If we say that is a Borel set in X .  When , we will denote the Borel sets by .    Recall that every open set is a countable union of open intervals. Thus, the open sets in are in the -algebra generated by the open intervals. Hence, the Borel sets is the -algebra generated by the open intervals in .   We will now (finally) give the definition of a measure and a measure space.   Let be a measure space. A function is a measure measure on if   ; and   if is a countable collection of disjoint sets in then     If is a measure on a measurable space , we call the triple a measure space . measure space The sets are called measurable sets measurable set in the measure space .    A function which satisfies condition (ii) in is said to be countable additive on disjoint sets countable additivity . This property is frequently abbreviated to simply `countably additive' . We must be careful to remember that countable additivity only applies to disjoint sets.   The condition of countable additivity implies finite additivity. If is a finite collection of disjoint sets in a -algebra , we can extend to a countably infinite collection by letting for , as we did in . Then, we have   Note that the definition of a measure does not assume that only takes finite values, i.e. is an allowed value, and there is no assumption that the series in condition (ii) of are convergent. We use the usual rules of addition with and :   However, we must be careful to avoid , as is undefined.   measure space -finite A measure space is -finite if there is a countable collection of sets in such that   for each ;      If then is a finite measure space . measure space finite    A measure space is complete if, for each with , if then . measure space complete    We will pause here to assess where we are going. One of our main motivations for developing measure theory, as discussed in Sections~\\ref{sec: intro ftoc}~and~\\ref{sec: int lim swap}, is to develop a theory of integration on the real line that is more robust than Riemann integration.  For an interval let denote the length of . To form a Riemann sum for a function , we partition an interval into subintervals   and the Riemann sum is given by   where is some element of .  The main idea of Lebesgue integration is to define a measure on (a -algebra of) subsets of , so that for intervals . With in hand, we can then decompose using sets other than intervals. I.e., the idea is to use, instead of just Riemann sums, sums of the form   where , and is a disjoint collection of measurable sets such that . Broadening the scope of the sets we can `measure', i.e. using to measure sets that are not necessarily intervals, we will develop a theory of integration stronger than Riemann integration.  The exact definition of , and the -algebra it acts on, will have to wait until we have some more tools in our belt. We can see now, however, that if is to do what we want it to do, then will have to contain all intervals in (and hence will have to contain all the Borel sets ).    Let be any non-empty set and let be the -algebra of all subsets of . Define by   if contains infinitely many elements, and if has elements, for finite. Then is a measure space. We call the counting measure on . measure counting measure  The measure space is always complete; it is -finite if and only if is countable; it is finite if and only if is finite.    Let be a measurable space. Fix . Define on by measure Dirac measure   Then is a measure on called the Dirac measure at . measure Dirac measure    Let be a topological space. A measure on the Borel sets is a Borel measure Borel measure if for all compact subsets .   We will rarely want to define a measure on a set which does not have some natural topology on it. Indeed, most examples of measures that we will see will be Borel measures. The Dirac measure of is Borel measure when is a topological space and is the Borel sets (see ). Even the counting measure of is a Borel measure if we endow with the discrete topology (see ).  Probability theory can be naturally described in terms of measure theory. Probability theory is a subject in its own right and has led to some differences in naming and notation conventions.   A probability space probability space sample space probability space is a finite measure space where . The measure is called a probability measure . measure probability measure   We will forgo any further direct mention of probabilty theory until later,  though it has had an influence on some of the theory we will see along the way.  We end this section with an important piece of verbiage.   Let be a measure space. A property is said to hold for almost all almost all (abbreviated as a.a.  ) a.a. almost all or almost everywhere almost everywhere (abbreviate e.e. ) a.e. almost everywhere if there is a measurable set with such that holds on .   "
},
{
  "id": "def-sigma-alg",
  "level": "2",
  "url": "chap-measure-space-3.html#def-sigma-alg",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": " Let be a non-empty set, and let be the power set of . A collection of sets is a -algebra The suffix ` -' is usually used to denote a countably infinite version of whatever word comes after the ` -'. With that information you can probably infer what an algebra of sets is. if   ;   if then ;   if is a countable collection of sets in , then .    "
},
{
  "id": "def-measurable-space",
  "level": "2",
  "url": "chap-measure-space-3.html#def-measurable-space",
  "type": "Definition",
  "number": "4.1.2",
  "title": "",
  "body": " Let be a non-empty set, and let be a -algebra of subsets of . The pair is called a measurable space . measurable space  "
},
{
  "id": "prop-sigma-alg-props",
  "level": "2",
  "url": "chap-measure-space-3.html#prop-sigma-alg-props",
  "type": "Proposition",
  "number": "4.1.3",
  "title": "",
  "body": " Let be a measurable space. Then   ;   is closed under countable intersections, i.e. if then    is closed under finite unions and finite intersections;   if then .    "
},
{
  "id": "chap-measure-space-3-7",
  "level": "2",
  "url": "chap-measure-space-3.html#chap-measure-space-3-7",
  "type": "Proof",
  "number": "4.1.1",
  "title": "",
  "body": " SInce , it follows from conditions (i) and (ii) of , that .  Let is a countable collection sets in . Then, it follows from conditions (ii) and (iii) of the . Using De Morgan's Identity, and condition (ii) again, we have   Suppose is a finite collection of sets in . For , let . Then, by condition (i) of Defintion~\\ref{def: sigma-alg}, is a countable collection of subsets in . By condition (iii),   Thus is also closed under finite unions. Similarly, we can show that .  Finally, take . Note   As is closed under complements and finite intersections, it follows that .  "
},
{
  "id": "exam-P-X-measurable-space",
  "level": "2",
  "url": "chap-measure-space-3.html#exam-P-X-measurable-space",
  "type": "Example",
  "number": "4.1.4",
  "title": "",
  "body": " Let be a non-empty set, and let be the power-set of subsets of . Then is a -algebra, and thus is a measurable space.  "
},
{
  "id": "prop-gen-sig-alg",
  "level": "2",
  "url": "chap-measure-space-3.html#prop-gen-sig-alg",
  "type": "Proposition",
  "number": "4.1.5",
  "title": "",
  "body": " Let be a non-empty set. Let be a non-empty collection of sets. Then there is a unique -algebra such that , and if is a -algebra containing , then .  That is, there is a unique smallest -algebra containing .  "
},
{
  "id": "chap-measure-space-3-11",
  "level": "2",
  "url": "chap-measure-space-3.html#chap-measure-space-3-11",
  "type": "Proof",
  "number": "4.1.2",
  "title": "",
  "body": " Let be the collection of all -algebras of that contain . Note that is non-empty, as . Let   That is a -algebra with the desired properties follows readily.  "
},
{
  "id": "chap-measure-space-3-12",
  "level": "2",
  "url": "chap-measure-space-3.html#chap-measure-space-3-12",
  "type": "Definition",
  "number": "4.1.6",
  "title": "",
  "body": " Let be a non-empty set, and let be a non-empty collection of subsets of . Let be the unique, smallest -algebra containing (in the sense of ). We call the -algebra generated by .  "
},
{
  "id": "exam-Borel-sets",
  "level": "2",
  "url": "chap-measure-space-3.html#exam-Borel-sets",
  "type": "Definition",
  "number": "4.1.7",
  "title": "",
  "body": " Let be a topological space. Denote by the -algebra generated by the open sets in . We call the Borel sets of . Borel sets If we say that is a Borel set in X .  When , we will denote the Borel sets by .  "
},
{
  "id": "chap-measure-space-3-14",
  "level": "2",
  "url": "chap-measure-space-3.html#chap-measure-space-3-14",
  "type": "Remark",
  "number": "4.1.8",
  "title": "",
  "body": " Recall that every open set is a countable union of open intervals. Thus, the open sets in are in the -algebra generated by the open intervals. Hence, the Borel sets is the -algebra generated by the open intervals in .  "
},
{
  "id": "def-measure",
  "level": "2",
  "url": "chap-measure-space-3.html#def-measure",
  "type": "Definition",
  "number": "4.1.9",
  "title": "",
  "body": " Let be a measure space. A function is a measure measure on if   ; and   if is a countable collection of disjoint sets in then     If is a measure on a measurable space , we call the triple a measure space . measure space The sets are called measurable sets measurable set in the measure space .  "
},
{
  "id": "chap-measure-space-3-17",
  "level": "2",
  "url": "chap-measure-space-3.html#chap-measure-space-3-17",
  "type": "Remark",
  "number": "4.1.10",
  "title": "",
  "body": " A function which satisfies condition (ii) in is said to be countable additive on disjoint sets countable additivity . This property is frequently abbreviated to simply `countably additive' . We must be careful to remember that countable additivity only applies to disjoint sets.  "
},
{
  "id": "chap-measure-space-3-23",
  "level": "2",
  "url": "chap-measure-space-3.html#chap-measure-space-3-23",
  "type": "Definition",
  "number": "4.1.11",
  "title": "",
  "body": " measure space -finite A measure space is -finite if there is a countable collection of sets in such that   for each ;      If then is a finite measure space . measure space finite  "
},
{
  "id": "chap-measure-space-3-24",
  "level": "2",
  "url": "chap-measure-space-3.html#chap-measure-space-3-24",
  "type": "Definition",
  "number": "4.1.12",
  "title": "",
  "body": " A measure space is complete if, for each with , if then . measure space complete  "
},
{
  "id": "chap-measure-space-3-25",
  "level": "2",
  "url": "chap-measure-space-3.html#chap-measure-space-3-25",
  "type": "Remark",
  "number": "4.1.13",
  "title": "",
  "body": " We will pause here to assess where we are going. One of our main motivations for developing measure theory, as discussed in Sections~\\ref{sec: intro ftoc}~and~\\ref{sec: int lim swap}, is to develop a theory of integration on the real line that is more robust than Riemann integration.  For an interval let denote the length of . To form a Riemann sum for a function , we partition an interval into subintervals   and the Riemann sum is given by   where is some element of .  The main idea of Lebesgue integration is to define a measure on (a -algebra of) subsets of , so that for intervals . With in hand, we can then decompose using sets other than intervals. I.e., the idea is to use, instead of just Riemann sums, sums of the form   where , and is a disjoint collection of measurable sets such that . Broadening the scope of the sets we can `measure', i.e. using to measure sets that are not necessarily intervals, we will develop a theory of integration stronger than Riemann integration.  The exact definition of , and the -algebra it acts on, will have to wait until we have some more tools in our belt. We can see now, however, that if is to do what we want it to do, then will have to contain all intervals in (and hence will have to contain all the Borel sets ).  "
},
{
  "id": "exam-counting",
  "level": "2",
  "url": "chap-measure-space-3.html#exam-counting",
  "type": "Example",
  "number": "4.1.14",
  "title": "",
  "body": " Let be any non-empty set and let be the -algebra of all subsets of . Define by   if contains infinitely many elements, and if has elements, for finite. Then is a measure space. We call the counting measure on . measure counting measure  The measure space is always complete; it is -finite if and only if is countable; it is finite if and only if is finite.  "
},
{
  "id": "exam-dirac-measure",
  "level": "2",
  "url": "chap-measure-space-3.html#exam-dirac-measure",
  "type": "Example",
  "number": "4.1.15",
  "title": "",
  "body": " Let be a measurable space. Fix . Define on by measure Dirac measure   Then is a measure on called the Dirac measure at . measure Dirac measure  "
},
{
  "id": "def-borel-meas",
  "level": "2",
  "url": "chap-measure-space-3.html#def-borel-meas",
  "type": "Definition",
  "number": "4.1.16",
  "title": "",
  "body": " Let be a topological space. A measure on the Borel sets is a Borel measure Borel measure if for all compact subsets .  "
},
{
  "id": "chap-measure-space-3-31",
  "level": "2",
  "url": "chap-measure-space-3.html#chap-measure-space-3-31",
  "type": "Definition",
  "number": "4.1.17",
  "title": "",
  "body": " A probability space probability space sample space probability space is a finite measure space where . The measure is called a probability measure . measure probability measure  "
},
{
  "id": "chap-measure-space-3-35",
  "level": "2",
  "url": "chap-measure-space-3.html#chap-measure-space-3-35",
  "type": "Definition",
  "number": "4.1.18",
  "title": "",
  "body": " Let be a measure space. A property is said to hold for almost all almost all (abbreviated as a.a.  ) a.a. almost all or almost everywhere almost everywhere (abbreviate e.e. ) a.e. almost everywhere if there is a measurable set with such that holds on .  "
},
{
  "id": "chap-measure-space-4",
  "level": "1",
  "url": "chap-measure-space-4.html",
  "type": "Section",
  "number": "4.2",
  "title": "Properties of measures",
  "body": " Properties of measures   Let be a measure space. Then the following hold   (Monotonicity) If with , then ; measure monotonicity   (Excision) If with and , then ; measure excision property   (Countable monotonicity) If is a countable collection of measurable sets, and is a measurable set such that , then measure countable monotonicity      Take with . Note we can write as a disjoint union   Thus   Thus, . If , then it follows that and . Hence, it follows from that That is finite is imporant here. Otherwise we could be looking at , which is undefined.   Now let be a countable collection of sets in . Let . Let . Continuing in this way, we let   In this way, we get a countable family of disjoint measurable sets, which satisfies   and for each . Thus, if we have    The next theorem is called the continuity of measure .   Continuity of measure  measure continuity Let be a measure space.   If is a countable collection of measurable sets satisfying (i.e. ascending measurable sets), then    If is a countable collection of measurable sets satisfying (i.e. descending measurable sets) and , then       Let be an countable collection of ascending measurable sets, and let . If for some index , then since (by the monotonicity of ). Hence   Assume now that for all . Let and let   Then is a countable collection of disjoint measurable sets satisfying   Hence is the disjoint union . Thus   Thus (i) holds.  Now assume is a descending collection of measurable sets, with . For each , let . Then is an ascending sequence of measurable sets. By part (i), we have that   Note that we have used the fact that in order to use the excision property in . By De Morgan's identities   Hence   Combining and we get    Not all measure spaces that we encounter will be complete. Indeed, we will see that Borel measures need not be complete. We will see an important example of this in the real line later.  However, the next theorem shows that a measure space that is not complete can always be extended to be complete.   measure space completion Let be a measure space. Define to be the collection of subset of   For in where and with , define . Then is a -algebra and is a complete measure space. measure space complete    Let be a measure space, and let be the complete measure space constructed from in . Then is the completion of . measure space completion   "
},
{
  "id": "prop-measure-properties",
  "level": "2",
  "url": "chap-measure-space-4.html#prop-measure-properties",
  "type": "Proposition",
  "number": "4.2.1",
  "title": "",
  "body": " Let be a measure space. Then the following hold   (Monotonicity) If with , then ; measure monotonicity   (Excision) If with and , then ; measure excision property   (Countable monotonicity) If is a countable collection of measurable sets, and is a measurable set such that , then measure countable monotonicity    "
},
{
  "id": "chap-measure-space-4-3",
  "level": "2",
  "url": "chap-measure-space-4.html#chap-measure-space-4-3",
  "type": "Proof",
  "number": "4.2.1",
  "title": "",
  "body": " Take with . Note we can write as a disjoint union   Thus   Thus, . If , then it follows that and . Hence, it follows from that That is finite is imporant here. Otherwise we could be looking at , which is undefined.   Now let be a countable collection of sets in . Let . Let . Continuing in this way, we let   In this way, we get a countable family of disjoint measurable sets, which satisfies   and for each . Thus, if we have   "
},
{
  "id": "thm-continuity-of-measure",
  "level": "2",
  "url": "chap-measure-space-4.html#thm-continuity-of-measure",
  "type": "Theorem",
  "number": "4.2.2",
  "title": "Continuity of measure.",
  "body": " Continuity of measure  measure continuity Let be a measure space.   If is a countable collection of measurable sets satisfying (i.e. ascending measurable sets), then    If is a countable collection of measurable sets satisfying (i.e. descending measurable sets) and , then     "
},
{
  "id": "chap-measure-space-4-6",
  "level": "2",
  "url": "chap-measure-space-4.html#chap-measure-space-4-6",
  "type": "Proof",
  "number": "4.2.2",
  "title": "",
  "body": " Let be an countable collection of ascending measurable sets, and let . If for some index , then since (by the monotonicity of ). Hence   Assume now that for all . Let and let   Then is a countable collection of disjoint measurable sets satisfying   Hence is the disjoint union . Thus   Thus (i) holds.  Now assume is a descending collection of measurable sets, with . For each , let . Then is an ascending sequence of measurable sets. By part (i), we have that   Note that we have used the fact that in order to use the excision property in . By De Morgan's identities   Hence   Combining and we get   "
},
{
  "id": "thm-completion-of-meas-space",
  "level": "2",
  "url": "chap-measure-space-4.html#thm-completion-of-meas-space",
  "type": "Theorem",
  "number": "4.2.3",
  "title": "",
  "body": " measure space completion Let be a measure space. Define to be the collection of subset of   For in where and with , define . Then is a -algebra and is a complete measure space. measure space complete  "
},
{
  "id": "chap-measure-space-4-10",
  "level": "2",
  "url": "chap-measure-space-4.html#chap-measure-space-4-10",
  "type": "Definition",
  "number": "4.2.4",
  "title": "",
  "body": " Let be a measure space, and let be the complete measure space constructed from in . Then is the completion of . measure space completion  "
},
{
  "id": "sec-construction",
  "level": "1",
  "url": "sec-construction.html",
  "type": "Section",
  "number": "4.3",
  "title": "Constructing measures",
  "body": " Constructing measures  The reason for the dearth of examples of measures thus far is simple: measures are complicated. Let be a measure space. Given one may ask   Is measurable? That is, is ?   If is measurable, what is the value of ?    In general, neither of these questions are easy to answer. However, as we will see, we can make do without having a full answer to these questions. More commonly, we will want to take some prescribed values on a subset of , where is not necessarily a -algebra. In this section we will see how to construct a measure by defining on (when and are sufficiently well behaved).  The process for constructing measures will involve several steps. Starting with a function on a set of sets we will construct a function , called an outer measure , on all of . We will then restrict two a smaller -algebra on which it is a measure.  We begin with the definition of an outer measure.   Let be a non-empty set. A function   is an outer measure outer measure on if   ;   if is a countable collection of subsets of , and then  I.e. is countably monotone. countably monotone      Outer measures are not as well behaved as measures. However, they have two significant advantages: they are defined on all subsets of , and they are easy to construct.   outer measure induced Let be a nonempty set, let be a non-empty collection of subsets of , and let be any function. Define a function by   ;   if , and there exists a countable collection of sets in such that , then    if and can not be covered by a countably infinite family in , then    Then is an outer measure on .    By definition, , so we only need to show that is countably monotone. Take subsets , and of with . If for some , then   Suppose now that for all . Fix . For each , choose a countable collection of subsets of such that   Since , the collection covers . Thus   Hence , and so is countably monotone.    Let be a non-empty set, and let be a non-empty collection of subsets. Let be a function and let be the outer measure constructed in . We call the outer measure induced by . outer measure induced   Let be the outer measure induced from a set function In general, there is no reason to expect to be well-behaved, beyond being an outer measure. We may not even have for . We will see that whether or not preserves nice properties of (if there are any) will depend on both  and  . The following two examples give instances when the induced outer measure does end up being useful.   Let be an infinite set, and let be the collection of all finite subsets of . Let be the counting function. I.e. for , is the (necessarily finite) number of elements of . If is the outer measure induced by , then is the counting measure ( ).    Let be the collection of all open intervals in the real line. Let be the length function on , i.e. for all . Let be the outer measure induced by . Then for all intervals in (Exercised~\\ref{exer: induced length outer measure}). The outer measure is called the Lebesgue outer measure on . outer measure Lebesgue outer measure We will see (much!) more on this later.   Having constructed an outer measure from an arbitrary (set) function, we will now restrict outer measures to measures.   measurable set with respect to an outer measure Let be a non-empty set and let be an outer measure on . A set is measurable with respect to if   for all  The term -measurable is also used for sets which are measurable with respect to .    Let be a non-empty set, let be an outer measure on , and let be the collection of all subsets of which are measurable with respect to . Then is a -algebra and the restriction of to is a measure. That is, is a measure space, where . Further, is a complete measure space.    Clearly . Also, if is measurable with respect to , then is also in . To show that is a -algebra it remains to show that is closed under countable unions. We will do this in tandem with showing that is a measure.  Let and be two -measurable sets. Take any . Then, since and are measurable, we have   Note that   and   Hence   Therefore, is -measurable. It follows inductively that if is a finite collection of measurable sets, then is measurable.  Let be a finite collection of disjoint measurable sets. Take any set . Since the sets are disjoint and measurable, we have   In particular,   Thus far, we have shown that is closed under finite unions, and is additive on finite collections of disjoint sets in . As is closed under taking complements, it follows that is also closed under finite intersections. We need to extend finite to infinite in both instances. Let be a countable collection of measurable sets and let We will use our favorite trick to ``disjointize\" this collection. Though we have used this method before, we will go through the steps carefully to make sure that at each step we remain with a set in . Let , and . Note that Continuing in this way, for each let   Again, we have that for each . Thus is a countable collection of disjoint measurable sets. Further for .  Fix , and take any . Let . Then, by the measurability of ,   where the second inequality comes from and the last inequality holds since . As this holds for all , the countable monotonicity of the outer measure gives   It follows that is measurable.  We have thus shown that is a -algebra. It remains to complete the proof that is a measure when restricted to . It only remains to show that is countably additive on disjoint measurable sets. Let be a disjoint collection of measurable sets and let . If , then   and so . Suppose now that . For every we have, by the measurability of and the finite additivity of on disjoint sets,   As this holds for all , we have that . Hence . Thus is a measure space. That this measure space is complete is left as an exercise ( ).   Starting we a function on some set we can now construct a measure.   Start with on ;   let be the outer-measure induced by ( );   let be the measure we get by restricting to the -measurable sets ( ).    We call the Carathéodory measure induced by . measure Carathéodory measure  Now that we can construct the Carathéodory measure induced by a set function , we can ask how and relate. In particular, when are we guaranteed that each set is measurable with respect to ? And if the sets in are measurable, is ? As stated earlier, the answers to these questions rely both on and .   Let be a non-empty set and let be a non-empty collection of subsets of . A function is a premeasure premeasure if   is finitely additive, i.e. if is a disjoint collection of sets in whose union is also in , then ;   is countably monotone, i.e. if are in and , then ;   if , then .     Let . As any measure is a premeasure, in necessary condition for the Carathéodory measure induced by to agree with on is for to be a premeasure. With some additional structure on , we can show that the Carathéodory measure is an extension of a premeasure. When this happens, we call the Carathéodory measure a Carathéodory extension . Carathéodory extension It may be the case that there are more measures than the Carathéodory extension which extend a premeasure . However, we will see in that Carathéodory is sometimes unique.   Let be a non-empty set. Let be a non-empty collection of subseteq which is closed under relative complements relative complement . That is, if , then . Let be a premeasure, and let be the Carathéodory measure induced by . Then each is -measurable, and . That is, is the Carathéodory extenion on .    Take . We will show that is -measurable, where is the outer measure induced by . Take any . We need to show that   If then this equality clearly holds. Thus we will suppose that It suffices to show that   Fix a . By the definition of , and since , there exists a countable collection such that and   Note that, , and hence for each . Further, , and so for each . By the countable additivity of we thus have   Thus   As covers and covers we have that   Thus   As this holds for all , it follows that   Thus is -measurable.  That for all follows since is countably monotone. Thus the Carathéodory measure induced by is an extension of .   The conditions on in are not quite what we will have practical use for. We instead will look at semirings of subsets .   Let be a non-empty set and let be a non-empty collection of subsets of . The collection is a semiring (of subsets of ) semiring if for each   ; and   there exists a finite disjoint collection of sets in such that      Note that if is a semiring, then . Indeed, if then can be written as a disjoint union of sets in . These sets are necessarily the empty set.   Let be the collection of all intervals in ; let be the collection of all intervals of finite length in ; and let be the collection of intervals of the form   Then each of , , and are semirings of subsets of .    Let and be two measure spaces. Let be the collection of subsets of given by   Then is a semiring. The elements of are called measurable rectangles. measurable rectangle More on this later, when we look at product measures.    Let be a semiring of subsets of a non-empty subset and let   Then is closed under relative complements. Further, if is a premeasure on then extends uniquely to a premeasure on .    Note that is closed under finite intersections. It follows that is also closed under finite intersections. Now take . We can write as the disjoint union   As each of the three terms can be written as disjoint unions of sets in , it follows that . Inductively, it can be shown that is closed under finite unions.  Let and be finite disjoint collections of sets from . We have that   Thus, relative complements of sets in can be written as finite unions of finite intersections of sets in . As is closed under finite unions and finite intersections, it follows that is closed under relative complements.  Suppose now that is a premeasure on . For disjoint sets in define   We must first show that is well-defined on . To this end, suppose and are finite disjoint collections in with . Note that, for each , is a disjoint union of sets in . By the finite additivity of ,   Similarly, for each ,   Thus,   Hence is a well-defined function on .  That is finitely additive is clear. To show that is a premeasure, it remains to show countable monotonicity. To this end, take a countable collection in , and such that   Note that, since is closed under finite unions and relative complements, we can assume that the collection is disjoint. As sets in are disjoint unions of sets in , can further assume that the sets are in . Let be disjoint sets in such that . By the countable monotonicity of we have   for each . Hence   Hence is a premeasure on .  The uniqueness of follows from the definition of .   Let be a function on a collection of subsets of . Denote by the collection of all countable unions of sets in ; and denote by the collection of all countable intersections of sets in . Note that, if the sets in are measurable with respect to the Carathéodory measure induced by (in particular, if is an extension of ), then the sets in are also measurable. The following proposition tells us that the sets in can often be used to approximate the outer measure (and indeed the measure ).   The -notation used above is supposed to be reminiscent of and notation used in topology: -sets are countable unions of open sets; -sets are countable intersections of closed sets. `G' for `open' comes from the German word geöffnet; `F' for `closed' comes from the French word fermé. When working with measures on topological spaces we will often use and sets in the way sets are used in the following proposition.    Let be a set function on a collection of subsets of , and let be the induced outer measure, and let be the induced Carathéodory measure.  If satisfies then there exists an such that and . If is -measurable and each set in is -measurable, then is -measurable and .    Suppose . By the definition of , for each there exists a countable collection such that and   Let . Then and   Now let . Then , and . Further, for each ,   As this holds for all , it follows that .  Finally, if extends then every set in is measurable, and thus every set in and is measurable. If is also measurable, then by the excision property   \\qedhere   We are now ready for the main theorem of this section: our main tool for constructing measures. The uniqueness in the following theorem is important and will be used frequently. Before stating the theorem we need one more definition. If is a collection of subsets of , and is a function, we say that is -finite -finite set function if there is a countable collection of sets in with for all , and . Note that this definition is consistent with the definition of a -finite measure.   Carathéodory-Hahn Theorem  Carathéodory-Hahn Theorem Carathéodory extension Let be a premeasure on a semiring of subsets of a non-empty set . Then the Carathéodory measure induced by is an extension of . Furthermore, if is -finite, then is -finite and is the unique measure on the set of -measurable subsets extending .    That extends follows from and . If is -finite, then is -finite since extends .  It remains to show that is unique when is -finite. Suppose that is another measure on the -measurable sets which extends . Suppose satisfies . By the definition of the out measure , if we fix there exists in such that and   Noting that for each , the countable monotonicity of implies that .  Take any (i.e. is a countable union of sets in ). As is a semiring, we can write as a disjoint countable union of sets in . Since and are countably additive and agree on , it follows that . If (i.e. is a countable intersection of sets in ), and , then by the continuity of measure, for both and , we have that .  Now take with . Take any . We will show that . By , there is an such that and . We can further assume that . By the excision property   We have already shown that and . And hence .  Finally, if is -finite, there are sets in which cover all of and satisfy . We can further assume that the sets are disjoint. Thus, if is measurable then   thus proving the uniqueness of .   "
},
{
  "id": "sec-construction-7",
  "level": "2",
  "url": "sec-construction.html#sec-construction-7",
  "type": "Definition",
  "number": "4.3.1",
  "title": "",
  "body": " Let be a non-empty set. A function   is an outer measure outer measure on if   ;   if is a countable collection of subsets of , and then  I.e. is countably monotone. countably monotone     "
},
{
  "id": "thm-outer-measure",
  "level": "2",
  "url": "sec-construction.html#thm-outer-measure",
  "type": "Theorem",
  "number": "4.3.2",
  "title": "",
  "body": " outer measure induced Let be a nonempty set, let be a non-empty collection of subsets of , and let be any function. Define a function by   ;   if , and there exists a countable collection of sets in such that , then    if and can not be covered by a countably infinite family in , then    Then is an outer measure on .  "
},
{
  "id": "sec-construction-10",
  "level": "2",
  "url": "sec-construction.html#sec-construction-10",
  "type": "Proof",
  "number": "4.3.1",
  "title": "",
  "body": " By definition, , so we only need to show that is countably monotone. Take subsets , and of with . If for some , then   Suppose now that for all . Fix . For each , choose a countable collection of subsets of such that   Since , the collection covers . Thus   Hence , and so is countably monotone.  "
},
{
  "id": "sec-construction-11",
  "level": "2",
  "url": "sec-construction.html#sec-construction-11",
  "type": "Definition",
  "number": "4.3.3",
  "title": "",
  "body": " Let be a non-empty set, and let be a non-empty collection of subsets. Let be a function and let be the outer measure constructed in . We call the outer measure induced by . outer measure induced  "
},
{
  "id": "ex-induced-counting-outer-measure",
  "level": "2",
  "url": "sec-construction.html#ex-induced-counting-outer-measure",
  "type": "Example",
  "number": "4.3.4",
  "title": "",
  "body": " Let be an infinite set, and let be the collection of all finite subsets of . Let be the counting function. I.e. for , is the (necessarily finite) number of elements of . If is the outer measure induced by , then is the counting measure ( ).  "
},
{
  "id": "ex-induced-length-outer-measure",
  "level": "2",
  "url": "sec-construction.html#ex-induced-length-outer-measure",
  "type": "Example",
  "number": "4.3.5",
  "title": "",
  "body": " Let be the collection of all open intervals in the real line. Let be the length function on , i.e. for all . Let be the outer measure induced by . Then for all intervals in (Exercised~\\ref{exer: induced length outer measure}). The outer measure is called the Lebesgue outer measure on . outer measure Lebesgue outer measure We will see (much!) more on this later.  "
},
{
  "id": "sec-construction-16",
  "level": "2",
  "url": "sec-construction.html#sec-construction-16",
  "type": "Definition",
  "number": "4.3.6",
  "title": "",
  "body": " measurable set with respect to an outer measure Let be a non-empty set and let be an outer measure on . A set is measurable with respect to if   for all  The term -measurable is also used for sets which are measurable with respect to .  "
},
{
  "id": "thm-measure-space-from-outer-measure",
  "level": "2",
  "url": "sec-construction.html#thm-measure-space-from-outer-measure",
  "type": "Theorem",
  "number": "4.3.7",
  "title": "",
  "body": " Let be a non-empty set, let be an outer measure on , and let be the collection of all subsets of which are measurable with respect to . Then is a -algebra and the restriction of to is a measure. That is, is a measure space, where . Further, is a complete measure space.  "
},
{
  "id": "sec-construction-18",
  "level": "2",
  "url": "sec-construction.html#sec-construction-18",
  "type": "Proof",
  "number": "4.3.2",
  "title": "",
  "body": " Clearly . Also, if is measurable with respect to , then is also in . To show that is a -algebra it remains to show that is closed under countable unions. We will do this in tandem with showing that is a measure.  Let and be two -measurable sets. Take any . Then, since and are measurable, we have   Note that   and   Hence   Therefore, is -measurable. It follows inductively that if is a finite collection of measurable sets, then is measurable.  Let be a finite collection of disjoint measurable sets. Take any set . Since the sets are disjoint and measurable, we have   In particular,   Thus far, we have shown that is closed under finite unions, and is additive on finite collections of disjoint sets in . As is closed under taking complements, it follows that is also closed under finite intersections. We need to extend finite to infinite in both instances. Let be a countable collection of measurable sets and let We will use our favorite trick to ``disjointize\" this collection. Though we have used this method before, we will go through the steps carefully to make sure that at each step we remain with a set in . Let , and . Note that Continuing in this way, for each let   Again, we have that for each . Thus is a countable collection of disjoint measurable sets. Further for .  Fix , and take any . Let . Then, by the measurability of ,   where the second inequality comes from and the last inequality holds since . As this holds for all , the countable monotonicity of the outer measure gives   It follows that is measurable.  We have thus shown that is a -algebra. It remains to complete the proof that is a measure when restricted to . It only remains to show that is countably additive on disjoint measurable sets. Let be a disjoint collection of measurable sets and let . If , then   and so . Suppose now that . For every we have, by the measurability of and the finite additivity of on disjoint sets,   As this holds for all , we have that . Hence . Thus is a measure space. That this measure space is complete is left as an exercise ( ).  "
},
{
  "id": "sec-construction-23",
  "level": "2",
  "url": "sec-construction.html#sec-construction-23",
  "type": "Definition",
  "number": "4.3.8",
  "title": "",
  "body": " Let be a non-empty set and let be a non-empty collection of subsets of . A function is a premeasure premeasure if   is finitely additive, i.e. if is a disjoint collection of sets in whose union is also in , then ;   is countably monotone, i.e. if are in and , then ;   if , then .    "
},
{
  "id": "thm-Car-ext-1",
  "level": "2",
  "url": "sec-construction.html#thm-Car-ext-1",
  "type": "Theorem",
  "number": "4.3.9",
  "title": "",
  "body": " Let be a non-empty set. Let be a non-empty collection of subseteq which is closed under relative complements relative complement . That is, if , then . Let be a premeasure, and let be the Carathéodory measure induced by . Then each is -measurable, and . That is, is the Carathéodory extenion on .  "
},
{
  "id": "sec-construction-26",
  "level": "2",
  "url": "sec-construction.html#sec-construction-26",
  "type": "Proof",
  "number": "4.3.3",
  "title": "",
  "body": " Take . We will show that is -measurable, where is the outer measure induced by . Take any . We need to show that   If then this equality clearly holds. Thus we will suppose that It suffices to show that   Fix a . By the definition of , and since , there exists a countable collection such that and   Note that, , and hence for each . Further, , and so for each . By the countable additivity of we thus have   Thus   As covers and covers we have that   Thus   As this holds for all , it follows that   Thus is -measurable.  That for all follows since is countably monotone. Thus the Carathéodory measure induced by is an extension of .  "
},
{
  "id": "sec-construction-28",
  "level": "2",
  "url": "sec-construction.html#sec-construction-28",
  "type": "Definition",
  "number": "4.3.10",
  "title": "",
  "body": " Let be a non-empty set and let be a non-empty collection of subsets of . The collection is a semiring (of subsets of ) semiring if for each   ; and   there exists a finite disjoint collection of sets in such that     "
},
{
  "id": "exam-interval-semiring",
  "level": "2",
  "url": "sec-construction.html#exam-interval-semiring",
  "type": "Example",
  "number": "4.3.11",
  "title": "",
  "body": " Let be the collection of all intervals in ; let be the collection of all intervals of finite length in ; and let be the collection of intervals of the form   Then each of , , and are semirings of subsets of .  "
},
{
  "id": "exam-product-semiring",
  "level": "2",
  "url": "sec-construction.html#exam-product-semiring",
  "type": "Example",
  "number": "4.3.12",
  "title": "",
  "body": " Let and be two measure spaces. Let be the collection of subsets of given by   Then is a semiring. The elements of are called measurable rectangles. measurable rectangle More on this later, when we look at product measures.  "
},
{
  "id": "lem-Car-ext-2",
  "level": "2",
  "url": "sec-construction.html#lem-Car-ext-2",
  "type": "Lemma",
  "number": "4.3.13",
  "title": "",
  "body": " Let be a semiring of subsets of a non-empty subset and let   Then is closed under relative complements. Further, if is a premeasure on then extends uniquely to a premeasure on .  "
},
{
  "id": "sec-construction-33",
  "level": "2",
  "url": "sec-construction.html#sec-construction-33",
  "type": "Proof",
  "number": "4.3.4",
  "title": "",
  "body": " Note that is closed under finite intersections. It follows that is also closed under finite intersections. Now take . We can write as the disjoint union   As each of the three terms can be written as disjoint unions of sets in , it follows that . Inductively, it can be shown that is closed under finite unions.  Let and be finite disjoint collections of sets from . We have that   Thus, relative complements of sets in can be written as finite unions of finite intersections of sets in . As is closed under finite unions and finite intersections, it follows that is closed under relative complements.  Suppose now that is a premeasure on . For disjoint sets in define   We must first show that is well-defined on . To this end, suppose and are finite disjoint collections in with . Note that, for each , is a disjoint union of sets in . By the finite additivity of ,   Similarly, for each ,   Thus,   Hence is a well-defined function on .  That is finitely additive is clear. To show that is a premeasure, it remains to show countable monotonicity. To this end, take a countable collection in , and such that   Note that, since is closed under finite unions and relative complements, we can assume that the collection is disjoint. As sets in are disjoint unions of sets in , can further assume that the sets are in . Let be disjoint sets in such that . By the countable monotonicity of we have   for each . Hence   Hence is a premeasure on .  The uniqueness of follows from the definition of .  "
},
{
  "id": "sec-construction-35",
  "level": "2",
  "url": "sec-construction.html#sec-construction-35",
  "type": "Remark",
  "number": "4.3.14",
  "title": "",
  "body": " The -notation used above is supposed to be reminiscent of and notation used in topology: -sets are countable unions of open sets; -sets are countable intersections of closed sets. `G' for `open' comes from the German word geöffnet; `F' for `closed' comes from the French word fermé. When working with measures on topological spaces we will often use and sets in the way sets are used in the following proposition.  "
},
{
  "id": "prop-sigma-delta-sets",
  "level": "2",
  "url": "sec-construction.html#prop-sigma-delta-sets",
  "type": "Proposition",
  "number": "4.3.15",
  "title": "",
  "body": " Let be a set function on a collection of subsets of , and let be the induced outer measure, and let be the induced Carathéodory measure.  If satisfies then there exists an such that and . If is -measurable and each set in is -measurable, then is -measurable and .  "
},
{
  "id": "sec-construction-37",
  "level": "2",
  "url": "sec-construction.html#sec-construction-37",
  "type": "Proof",
  "number": "4.3.5",
  "title": "",
  "body": " Suppose . By the definition of , for each there exists a countable collection such that and   Let . Then and   Now let . Then , and . Further, for each ,   As this holds for all , it follows that .  Finally, if extends then every set in is measurable, and thus every set in and is measurable. If is also measurable, then by the excision property   \\qedhere  "
},
{
  "id": "thm-Car-ext-2",
  "level": "2",
  "url": "sec-construction.html#thm-Car-ext-2",
  "type": "Theorem",
  "number": "4.3.16",
  "title": "Carathéodory-Hahn Theorem.",
  "body": " Carathéodory-Hahn Theorem  Carathéodory-Hahn Theorem Carathéodory extension Let be a premeasure on a semiring of subsets of a non-empty set . Then the Carathéodory measure induced by is an extension of . Furthermore, if is -finite, then is -finite and is the unique measure on the set of -measurable subsets extending .  "
},
{
  "id": "sec-construction-40",
  "level": "2",
  "url": "sec-construction.html#sec-construction-40",
  "type": "Proof",
  "number": "4.3.6",
  "title": "",
  "body": " That extends follows from and . If is -finite, then is -finite since extends .  It remains to show that is unique when is -finite. Suppose that is another measure on the -measurable sets which extends . Suppose satisfies . By the definition of the out measure , if we fix there exists in such that and   Noting that for each , the countable monotonicity of implies that .  Take any (i.e. is a countable union of sets in ). As is a semiring, we can write as a disjoint countable union of sets in . Since and are countably additive and agree on , it follows that . If (i.e. is a countable intersection of sets in ), and , then by the continuity of measure, for both and , we have that .  Now take with . Take any . We will show that . By , there is an such that and . We can further assume that . By the excision property   We have already shown that and . And hence .  Finally, if is -finite, there are sets in which cover all of and satisfy . We can further assume that the sets are disjoint. Thus, if is measurable then   thus proving the uniqueness of .  "
},
{
  "id": "chap-measure-space-6",
  "level": "1",
  "url": "chap-measure-space-6.html",
  "type": "Exercises",
  "number": "4.4",
  "title": "Exercises",
  "body": "  Let be an uncountable set. A set is cocountable if its complement is countable.   Show that the collection of all subsets of which are either countable or cocountable forms a -algebra. -algebra countable-cocountable -algebra   Define a function by if is countable, and if is cocountable. Show that is a measure.      Prove the claims in . That is, show that the counting measure measure counting measure  on a non-empty set defines a complete measure.  Show that is -finite if and only if is countable. Show that is a finite measure space if and only if is finite.    Let be a non-empty set with the discrete topology. Let be the counting measure on . Show that is a Borel measure.    Let be a measurable space. Fix , and let be the Dirac measure defined in . Show that is a measure.  Suppose is a topological space, and is the Borel sets. Show that is a Borel measure.    Borel sets in the extended real line extended real line Let be the extended real line. Let be the collection of sets in given by   where is the collection of Borel sets in . Show that is a -algebra.    Let be the extended real line. extended real line For we say is open in if it satisfies the following conditions   is open in ;   if , then there exists such that ;   , then there exists such that .    Show that this defines a topology on .    Let . extended real line Let be the -algebra from . Endow with the topology from . Show that the -algebra of Borel sets in , , conincides with .    Prove .    Let be a measure space, and let be a measurable space. Let be a function satisfying for all . Define a function on by    Show that is a measure on .   Show that .      Prove the claim in : Let be an infinite set, and let be the collection of all finite subsets of . Let be the counting function. Let be the outer measure induced by . Show that , the counting measure on .    Prove the claim in : Let be the collection of all open intervals in the real line. Let be the length function on , i.e. for all . Let be the outer measure induced by . Show that for all intervals in .    Let be an outer measure on a non-empty set . Show that if then is -measurable. (Note that this completes the proof of ).    Show that the collections , and from form a semirings of subsets of . That is show that the collection of all intervals in ; the colletion of all intervals of finite length; and of all intervals of the form , , for semirings.    measurable rectangle Show that the collection from forms a semiring. That is, if and are two measure spaces and   show that is a semiring of subsets of .    Let be an uncountable set and let be the collection of all countable subsets of . Define a function on by for all . Let be the outer measure induced by . Determine for each . Determine which sets are -measurable. Note that the measure for all is also an extension of . Why does this not contradict the Carathéodory-Hahn Theorem ( )?    Let , and be the semirings of intervals from . Show that the length function when restricted to each is a premeasure of , for .   "
},
{
  "id": "exer-cocount-measure",
  "level": "2",
  "url": "chap-measure-space-6.html#exer-cocount-measure",
  "type": "Exercise",
  "number": "4.4.1",
  "title": "",
  "body": " Let be an uncountable set. A set is cocountable if its complement is countable.   Show that the collection of all subsets of which are either countable or cocountable forms a -algebra. -algebra countable-cocountable -algebra   Define a function by if is countable, and if is cocountable. Show that is a measure.    "
},
{
  "id": "chap-measure-space-6-2",
  "level": "2",
  "url": "chap-measure-space-6.html#chap-measure-space-6-2",
  "type": "Exercise",
  "number": "4.4.2",
  "title": "",
  "body": " Prove the claims in . That is, show that the counting measure measure counting measure  on a non-empty set defines a complete measure.  Show that is -finite if and only if is countable. Show that is a finite measure space if and only if is finite.  "
},
{
  "id": "exer-counting-Borel",
  "level": "2",
  "url": "chap-measure-space-6.html#exer-counting-Borel",
  "type": "Exercise",
  "number": "4.4.3",
  "title": "",
  "body": " Let be a non-empty set with the discrete topology. Let be the counting measure on . Show that is a Borel measure.  "
},
{
  "id": "exer-dirac-meas",
  "level": "2",
  "url": "chap-measure-space-6.html#exer-dirac-meas",
  "type": "Exercise",
  "number": "4.4.4",
  "title": "",
  "body": " Let be a measurable space. Fix , and let be the Dirac measure defined in . Show that is a measure.  Suppose is a topological space, and is the Borel sets. Show that is a Borel measure.  "
},
{
  "id": "exer-borel-on-extended",
  "level": "2",
  "url": "chap-measure-space-6.html#exer-borel-on-extended",
  "type": "Exercise",
  "number": "4.4.5",
  "title": "",
  "body": " Borel sets in the extended real line extended real line Let be the extended real line. Let be the collection of sets in given by   where is the collection of Borel sets in . Show that is a -algebra.  "
},
{
  "id": "exer-top-on-extended",
  "level": "2",
  "url": "chap-measure-space-6.html#exer-top-on-extended",
  "type": "Exercise",
  "number": "4.4.6",
  "title": "",
  "body": " Let be the extended real line. extended real line For we say is open in if it satisfies the following conditions   is open in ;   if , then there exists such that ;   , then there exists such that .    Show that this defines a topology on .  "
},
{
  "id": "exer-borel-on-extended-2",
  "level": "2",
  "url": "chap-measure-space-6.html#exer-borel-on-extended-2",
  "type": "Exercise",
  "number": "4.4.7",
  "title": "",
  "body": " Let . extended real line Let be the -algebra from . Endow with the topology from . Show that the -algebra of Borel sets in , , conincides with .  "
},
{
  "id": "chap-measure-space-6-8",
  "level": "2",
  "url": "chap-measure-space-6.html#chap-measure-space-6-8",
  "type": "Exercise",
  "number": "4.4.8",
  "title": "",
  "body": " Prove .  "
},
{
  "id": "chap-measure-space-6-9",
  "level": "2",
  "url": "chap-measure-space-6.html#chap-measure-space-6-9",
  "type": "Exercise",
  "number": "4.4.9",
  "title": "",
  "body": " Let be a measure space, and let be a measurable space. Let be a function satisfying for all . Define a function on by    Show that is a measure on .   Show that .    "
},
{
  "id": "exer-induced-counting-outer-measure",
  "level": "2",
  "url": "chap-measure-space-6.html#exer-induced-counting-outer-measure",
  "type": "Exercise",
  "number": "4.4.10",
  "title": "",
  "body": " Prove the claim in : Let be an infinite set, and let be the collection of all finite subsets of . Let be the counting function. Let be the outer measure induced by . Show that , the counting measure on .  "
},
{
  "id": "exer-induced-length-outer-measure",
  "level": "2",
  "url": "chap-measure-space-6.html#exer-induced-length-outer-measure",
  "type": "Exercise",
  "number": "4.4.11",
  "title": "",
  "body": " Prove the claim in : Let be the collection of all open intervals in the real line. Let be the length function on , i.e. for all . Let be the outer measure induced by . Show that for all intervals in .  "
},
{
  "id": "exer-zero-measurable",
  "level": "2",
  "url": "chap-measure-space-6.html#exer-zero-measurable",
  "type": "Exercise",
  "number": "4.4.12",
  "title": "",
  "body": " Let be an outer measure on a non-empty set . Show that if then is -measurable. (Note that this completes the proof of ).  "
},
{
  "id": "exer-interval-semiring",
  "level": "2",
  "url": "chap-measure-space-6.html#exer-interval-semiring",
  "type": "Exercise",
  "number": "4.4.13",
  "title": "",
  "body": " Show that the collections , and from form a semirings of subsets of . That is show that the collection of all intervals in ; the colletion of all intervals of finite length; and of all intervals of the form , , for semirings.  "
},
{
  "id": "exer-product-semiring",
  "level": "2",
  "url": "chap-measure-space-6.html#exer-product-semiring",
  "type": "Exercise",
  "number": "4.4.14",
  "title": "",
  "body": " measurable rectangle Show that the collection from forms a semiring. That is, if and are two measure spaces and   show that is a semiring of subsets of .  "
},
{
  "id": "chap-measure-space-6-15",
  "level": "2",
  "url": "chap-measure-space-6.html#chap-measure-space-6-15",
  "type": "Exercise",
  "number": "4.4.15",
  "title": "",
  "body": " Let be an uncountable set and let be the collection of all countable subsets of . Define a function on by for all . Let be the outer measure induced by . Determine for each . Determine which sets are -measurable. Note that the measure for all is also an extension of . Why does this not contradict the Carathéodory-Hahn Theorem ( )?  "
},
{
  "id": "exer-length-premeasure",
  "level": "2",
  "url": "chap-measure-space-6.html#exer-length-premeasure",
  "type": "Exercise",
  "number": "4.4.16",
  "title": "",
  "body": " Let , and be the semirings of intervals from . Show that the length function when restricted to each is a premeasure of , for .  "
},
{
  "id": "sec-Lebesgue",
  "level": "1",
  "url": "sec-Lebesgue.html",
  "type": "Section",
  "number": "5.1",
  "title": "Lebesgue measure on <span class=\"process-math\">\\(\\mathbb{R}\\)<\/span>",
  "body": " Lebesgue measure on  We will now apply the Carathéodory-Hahn Theorem, Theorem , to define the promised Lebesgue measure. Our goal is to extend the length function to a measure. In Example (see Exercise ) we saw three different semirings of intervals. Exercise tells us that is a premeasure when restricted to each of these semirings. This gives three possibilities of where to apply the Carathéodory-Hahn theorem. The next proposition shows that this choice does not matter. We get the same outer measure no matter the choice.   Let be the semiring of all intervals in ; let be the semiring of all finite length intervals; and let be the semiring of intervals of the form , where with . Let be the outer measure induced by on ; let be the outer measure induced by restricted to ; and let be the outer measure induced by restricted to . Then for each     Since it follows that   for all . Take any . If , then by the above inequalities, and . Suppose . Fix . There exist intervals such that and   As it follows that , and so is of finite length for each . Thus   As this holds for all , it follows that . Hence .  We will now show that   Let denote the function   Since is an infimum over all covers by intervals of finite length, and is an infimum over all covers by open intervals of finite length, it follows that for all .  Now take any . If , then . Suppose that . Fix . Let be a countable collection of finite length intervals such that and   For each , let and let . Then   That is, is a cover of by open intervals of finite length. Thus   As the above inequality holds for all , it follows that . Hence . A similar argument shows that .    The function defined by   is call the Lebesgue outer measure on . outer measure Lebesgue outer measure  The elements of the -algebra of -measurable sets are called Lebesgue measurable sets . measurable set Lebesgue measurable set  The Carathéodory measure got by restricting to is called the Lebesgue measure on . Lebesgue measure   Proposition shows that the Lebesgue outer measure is the outer measure induced by the length function . Thus by the Carathéodory-Hahn theorem, Theorem , all intervals are Lebesgue measurable, and . Further, since is -finite, the measure space is a complete -finite measure space, and is the unique extennsion of to a measure on .   If is a countable set, then is Lebesgue measurable and .    Take any . Then can be written as a closed interval of length   Hence all singleton sets are Lebesgue measurable with Lebesgue measure . Let be a countable set. If has elements then we can write as ; if is countably infinite we can write as . Thus   In either case, is a countable union of disjoint sets of measure . Hence by the countable additivity of .    Theorem says that all countable sets have Lebesgue measure . It does not say that if then is countable. We will see examples of uncountable sets of zero Lebesgue measure later.    All Borel sets in are Lebesgue measurable. That is, .    By the construction of (i.e. the Carathéodory-Hahn theorem), all open intervals are Lebesgue measurable. Any open set can be written as a disjoint union of countably many open sets (Proposition ), and hence is also Lebesgue measurable. As the Borel sets are the sets in the -algebra generated by the open sets, and each open set is in , it follows that .    Finite sets, countably infinite sets, and intervals are all examples of Borel sets in . Theorem says that all Borel sets are Lebesgue measurable, but we have not exhibited any sets which are Lebesgue measurable but not Borel.  In the other direction, we know that , but we have not exhibited any subsets of which are not Lebesgue measurable. That is, we have   but it is not clear if these inclusions are strict. We will see in Section that each inclusion is indeed strict: there are Lebesgue measurable sets which are not Borel sets; and there are subsets of which are not Lebesgue measurable.   We will now look at some approximation and regularity properties of the Lebesgue measure. By Proposition the Lebesgue outer measure is an induced outer measure: is the outer measure induced by the length function on the collection of all intervals in the real line. We can thus apply Proposition to . That is, letting be the countable intersections of countable unions of intervals, if then there is a set such that and . Further, if is Lebesgue measurable then (noting here that all the sets in are Lebesgue measurable since every interval is Lebesgue measurable). The following result is a strengthening of Proposition for the Lebesgue measure.   Outer and inner approximation of Lebesgue measure  Lebesgue measure inner approximation Lebesgue measure outer approximation Let . The following are equivalent.   is Lebesgue measurable;   for every there exists an open set containing such that ;   there is a -set contraing such that ;   for every there exists a closed set contained in such that ;   there is an -set contained in such that .      The complement of an open set is a closed set, hence the complement of a set is an set. Since the -algebra of Lebesgue measurable sets is closed under complements, it follows that (ii) is equivalent to (iv) and (iii) is equivalent to (v).  Suppose that is Lebesgue measurable. We will show that (ii) holds. Assume . Fix . By the definition of the Lebesgue outer measure , there exists open intervals such that and   Let . Then is open, , and   Since we can apply the excision property (Proposition ), to get . Thus (ii) holds. The case when is left as an exercise (Exercise ).  Now assume (ii) holds. To show (iii) holds is a similar argument to that in Proposition . For each there is an open set such that . Let be the set . Then and   for all . Hence  Finally, suppose that (iii) holds for a set . Take a set containing with . Since is a set, is Lebesgue measurbale; and since , is also Lebesgue measurable (Exercise ). Noting that   it follows that is Lebesgue measurable.   The following theorem is similar to Theorem . We record it however, as we will be interested in generalizations of this result in the sequel. The result describes regularity conditions for the Lebesgue measure.   Let be Lebesgue measurable, then   (outer regularity) regularity of a measure outer regularity of Lebesgue measure     (inner regularity) regularity of a measure inner regularity of Lebesgue measure        Condition (i) follows immediately from the definition of the Lebesgue outer measure. We will use condition (i) to prove (ii).  Take measurable . Assume first that is bounded, so that for some closed interval . Let . Fix . By (i), there is an open set such that and . Let . Since is open, is closed. Thus, is a compact set by the Heine-Borel theorem (Theorem ). Further, since , . By repeated application of the excision property and monotonicity of , we have   Hence   The case when is left as an exercise (Exercise ).   We end this section with a result (due to Lebesgue) showing the connection between the Lebesgue measure and Riemann integration. Riemann integration We first establish\/recall some notation and concepts to do with Riemann integration.  Let be a closed interval in , and let be a bounded function. Let be a partition of , where   We define as   The function is Riemann integrable integrable Riemann integrable if for all there exists a partition of such that . You may have seen other definitions of Riemann integrable . Can you prove that your definition of Riemann integrable is equivalent to the definition given here?   integrable Riemann integrable Let be a bounded function on the closed interval , and let . Then is Riemann integrable if and only if has Lebesgue measure .    Suppose that is Riemann integrable. Take . The function is not continuous at , if there exists such that for all there exists such that . Thus, if we set   then   That that, if , then Thus, we can write as a countable union   Fix . We will show that . Take any . Since is Riemann integrable, there exists a partition   such that . Let Then   Since it follows that   The above inequality holds for all , and so . It follows that is Lebesgue measurable and (see Exercise ). We have now that   and so is also Lebesgue measurable with .  Suppose now that has Lebesgue measure . Given , there exists open intervals such that   Let and . The set is a union of open intervals, and so is open in . Thus, is closed. As , is both closed and bounded, and so is compact by the Heine-Borel Theorem, Theorem .  The function is continuous on .  Hence, for each there exists such that, for if and then . The open intervals form an open cover of . Since is compact, there are is a finite set such that   Let   The set is finite, and contains both and , we can thus order and view as a partition of . Let the ordered elements of be denoted by   Note that, if there are and such that then . Let   and   Note, if , and then   for some , by the choice of . Further   and so   Let . Then   Hence is Riemann integrable.   "
},
{
  "id": "prop-Lebesgue-outer-measure",
  "level": "2",
  "url": "sec-Lebesgue.html#prop-Lebesgue-outer-measure",
  "type": "Proposition",
  "number": "5.1.1",
  "title": "",
  "body": " Let be the semiring of all intervals in ; let be the semiring of all finite length intervals; and let be the semiring of intervals of the form , where with . Let be the outer measure induced by on ; let be the outer measure induced by restricted to ; and let be the outer measure induced by restricted to . Then for each   "
},
{
  "id": "sec-Lebesgue-4",
  "level": "2",
  "url": "sec-Lebesgue.html#sec-Lebesgue-4",
  "type": "Proof",
  "number": "5.1.1",
  "title": "",
  "body": " Since it follows that   for all . Take any . If , then by the above inequalities, and . Suppose . Fix . There exist intervals such that and   As it follows that , and so is of finite length for each . Thus   As this holds for all , it follows that . Hence .  We will now show that   Let denote the function   Since is an infimum over all covers by intervals of finite length, and is an infimum over all covers by open intervals of finite length, it follows that for all .  Now take any . If , then . Suppose that . Fix . Let be a countable collection of finite length intervals such that and   For each , let and let . Then   That is, is a cover of by open intervals of finite length. Thus   As the above inequality holds for all , it follows that . Hence . A similar argument shows that .  "
},
{
  "id": "sec-Lebesgue-5",
  "level": "2",
  "url": "sec-Lebesgue.html#sec-Lebesgue-5",
  "type": "Definition",
  "number": "5.1.2",
  "title": "",
  "body": " The function defined by   is call the Lebesgue outer measure on . outer measure Lebesgue outer measure  The elements of the -algebra of -measurable sets are called Lebesgue measurable sets . measurable set Lebesgue measurable set  The Carathéodory measure got by restricting to is called the Lebesgue measure on . Lebesgue measure  "
},
{
  "id": "thm-countable-L-measurable",
  "level": "2",
  "url": "sec-Lebesgue.html#thm-countable-L-measurable",
  "type": "Theorem",
  "number": "5.1.3",
  "title": "",
  "body": " If is a countable set, then is Lebesgue measurable and .  "
},
{
  "id": "sec-Lebesgue-8",
  "level": "2",
  "url": "sec-Lebesgue.html#sec-Lebesgue-8",
  "type": "Proof",
  "number": "5.1.2",
  "title": "",
  "body": " Take any . Then can be written as a closed interval of length   Hence all singleton sets are Lebesgue measurable with Lebesgue measure . Let be a countable set. If has elements then we can write as ; if is countably infinite we can write as . Thus   In either case, is a countable union of disjoint sets of measure . Hence by the countable additivity of .  "
},
{
  "id": "sec-Lebesgue-9",
  "level": "2",
  "url": "sec-Lebesgue.html#sec-Lebesgue-9",
  "type": "Remark",
  "number": "5.1.4",
  "title": "",
  "body": " Theorem says that all countable sets have Lebesgue measure . It does not say that if then is countable. We will see examples of uncountable sets of zero Lebesgue measure later.  "
},
{
  "id": "thm-Borel-Lebesgue-meas",
  "level": "2",
  "url": "sec-Lebesgue.html#thm-Borel-Lebesgue-meas",
  "type": "Theorem",
  "number": "5.1.5",
  "title": "",
  "body": " All Borel sets in are Lebesgue measurable. That is, .  "
},
{
  "id": "sec-Lebesgue-11",
  "level": "2",
  "url": "sec-Lebesgue.html#sec-Lebesgue-11",
  "type": "Proof",
  "number": "5.1.3",
  "title": "",
  "body": " By the construction of (i.e. the Carathéodory-Hahn theorem), all open intervals are Lebesgue measurable. Any open set can be written as a disjoint union of countably many open sets (Proposition ), and hence is also Lebesgue measurable. As the Borel sets are the sets in the -algebra generated by the open sets, and each open set is in , it follows that .  "
},
{
  "id": "sec-Lebesgue-12",
  "level": "2",
  "url": "sec-Lebesgue.html#sec-Lebesgue-12",
  "type": "Remark",
  "number": "5.1.6",
  "title": "",
  "body": " Finite sets, countably infinite sets, and intervals are all examples of Borel sets in . Theorem says that all Borel sets are Lebesgue measurable, but we have not exhibited any sets which are Lebesgue measurable but not Borel.  In the other direction, we know that , but we have not exhibited any subsets of which are not Lebesgue measurable. That is, we have   but it is not clear if these inclusions are strict. We will see in Section that each inclusion is indeed strict: there are Lebesgue measurable sets which are not Borel sets; and there are subsets of which are not Lebesgue measurable.  "
},
{
  "id": "thm-Leb-meas-sets-G-delta-F-sigma",
  "level": "2",
  "url": "sec-Lebesgue.html#thm-Leb-meas-sets-G-delta-F-sigma",
  "type": "Theorem",
  "number": "5.1.7",
  "title": "Outer and inner approximation of Lebesgue measure.",
  "body": " Outer and inner approximation of Lebesgue measure  Lebesgue measure inner approximation Lebesgue measure outer approximation Let . The following are equivalent.   is Lebesgue measurable;   for every there exists an open set containing such that ;   there is a -set contraing such that ;   for every there exists a closed set contained in such that ;   there is an -set contained in such that .    "
},
{
  "id": "sec-Lebesgue-15",
  "level": "2",
  "url": "sec-Lebesgue.html#sec-Lebesgue-15",
  "type": "Proof",
  "number": "5.1.4",
  "title": "",
  "body": " The complement of an open set is a closed set, hence the complement of a set is an set. Since the -algebra of Lebesgue measurable sets is closed under complements, it follows that (ii) is equivalent to (iv) and (iii) is equivalent to (v).  Suppose that is Lebesgue measurable. We will show that (ii) holds. Assume . Fix . By the definition of the Lebesgue outer measure , there exists open intervals such that and   Let . Then is open, , and   Since we can apply the excision property (Proposition ), to get . Thus (ii) holds. The case when is left as an exercise (Exercise ).  Now assume (ii) holds. To show (iii) holds is a similar argument to that in Proposition . For each there is an open set such that . Let be the set . Then and   for all . Hence  Finally, suppose that (iii) holds for a set . Take a set containing with . Since is a set, is Lebesgue measurbale; and since , is also Lebesgue measurable (Exercise ). Noting that   it follows that is Lebesgue measurable.  "
},
{
  "id": "thm-Lebesgue-regular",
  "level": "2",
  "url": "sec-Lebesgue.html#thm-Lebesgue-regular",
  "type": "Theorem",
  "number": "5.1.8",
  "title": "",
  "body": " Let be Lebesgue measurable, then   (outer regularity) regularity of a measure outer regularity of Lebesgue measure     (inner regularity) regularity of a measure inner regularity of Lebesgue measure      "
},
{
  "id": "sec-Lebesgue-18",
  "level": "2",
  "url": "sec-Lebesgue.html#sec-Lebesgue-18",
  "type": "Proof",
  "number": "5.1.5",
  "title": "",
  "body": " Condition (i) follows immediately from the definition of the Lebesgue outer measure. We will use condition (i) to prove (ii).  Take measurable . Assume first that is bounded, so that for some closed interval . Let . Fix . By (i), there is an open set such that and . Let . Since is open, is closed. Thus, is a compact set by the Heine-Borel theorem (Theorem ). Further, since , . By repeated application of the excision property and monotonicity of , we have   Hence   The case when is left as an exercise (Exercise ).  "
},
{
  "id": "thm-Riemann-int",
  "level": "2",
  "url": "sec-Lebesgue.html#thm-Riemann-int",
  "type": "Theorem",
  "number": "5.1.9",
  "title": "",
  "body": " integrable Riemann integrable Let be a bounded function on the closed interval , and let . Then is Riemann integrable if and only if has Lebesgue measure .  "
},
{
  "id": "sec-Lebesgue-26",
  "level": "2",
  "url": "sec-Lebesgue.html#sec-Lebesgue-26",
  "type": "Proof",
  "number": "5.1.6",
  "title": "",
  "body": " Suppose that is Riemann integrable. Take . The function is not continuous at , if there exists such that for all there exists such that . Thus, if we set   then   That that, if , then Thus, we can write as a countable union   Fix . We will show that . Take any . Since is Riemann integrable, there exists a partition   such that . Let Then   Since it follows that   The above inequality holds for all , and so . It follows that is Lebesgue measurable and (see Exercise ). We have now that   and so is also Lebesgue measurable with .  Suppose now that has Lebesgue measure . Given , there exists open intervals such that   Let and . The set is a union of open intervals, and so is open in . Thus, is closed. As , is both closed and bounded, and so is compact by the Heine-Borel Theorem, Theorem .  The function is continuous on .  Hence, for each there exists such that, for if and then . The open intervals form an open cover of . Since is compact, there are is a finite set such that   Let   The set is finite, and contains both and , we can thus order and view as a partition of . Let the ordered elements of be denoted by   Note that, if there are and such that then . Let   and   Note, if , and then   for some , by the choice of . Further   and so   Let . Then   Hence is Riemann integrable.  "
},
{
  "id": "sec-nonmeasurable",
  "level": "1",
  "url": "sec-nonmeasurable.html",
  "type": "Section",
  "number": "5.2",
  "title": "Borel sets, Lebesgue measurable sets, and subsets of <span class=\"process-math\">\\(\\mathbb{R}\\text{.}\\)<\/span>",
  "body": " Borel sets, Lebesgue measurable sets, and subsets of .  Let be the Borel sets of , and let be the Lebesgue measurable sets of . We have seen that the following inclusions hold:   In this section we will see that both these inclusions are strict. I.e. we will see that there exist Lebesgue measurable sets which are not Borel; and there exists subsets of which are not Lebesgue measurable.  Another question arising from Section is the following: are there any uncountable Lebesgue measurable sets with Lebesgue measure? We know that countable sets have measure , but are the countable sets all of the Lebesgue measure sets? We will see presently, that there are uncountable sets with Lebesgue measure .  We will begin with proving the existence of subsets of which are not Lebesgue measurable. The following theorem was published by Giuseppe Vitali (1875 - 1932) Vitali, Giuseppe in 1905.   Vitali  Let satisfy . Then there exists such that is not Lebesgue measurable.    By the countable monotonicity of ,   Thus, contains a bounded subset with positive Lebesgue outer measure. We can thus assume that is bounded.  Define a relation on by the following rule: if then if and only if there is a rational number such that . It is not hard to see that is an equivalence relation on (Exercise ). Create a set by choosing a representative element from each equivalence class of the equivalence relation . Thus satisfies: if then there exists a unique such that . It follows that the collection of sets are disjoint and cover . Further, as is bounded (and there are infinitely many rational numbers between any two rational numbers), there is a bounded, infinite set such that   Suppose now that is Lebesgue measurable. Then, since , . Further, is Lebesgue measurable for each , and (Exercise ). Thus, Lebesgue measurable, as it is a countable union of Lebesgue measurable sets. We also, have that is bounded, since and are bounded. Thus   Since is an infinite set, it follows that .  Now, by the countable submonotonicity of the Lebesgue outer measure we have   This contradicts, , and so is not Lebesgue measurable.    Theorem tells us that there are many subsets off which are not Lebesgue measurable. Still, there is something unsatisfactory about the proof. In the proof we construct a set which is not Lebesgue measurable, but what does look like? It is important to note that the construction of given here relies on the axiom of choice. We choose and element from each equivalence class of . This is not, however, a shortcoming of the proof. It is a necessity. There are models of set theory where the axiom of choice is not assumed, where it can be shown that all subsets of the real line are Lebesgue measurable. This is an interesting topic, but is too far into the weeds of set theory for what we are trying to do. We will (happily!) stick to the standard Zermelo–Fraenkel axioms of set theory plus the axiom of choice (ZFC). Thus, we are living in a world where Theorem holds. This won't be the last time that the axiom of choice plays a significant role in these notes; but it is perhaps the most famous and consequential.   We will now embark on the construction of an uncountable subset of which is Lebesgue measurable with Lebesgue measure .   Cantor set Let . Let . Note, that is . I.e. is with the middle third of its interval removed. To construct we remove the (open) middle third from each of the two disjoint intervals in . That is   We construct by removing the open middle thirds from each of the 4 intervals in . We continue in this way: is constructed from by removing the open middle thirds from each of the closed intervals in .     Illustration of the sets (top), used to construct the Cantor set .     Let . We call the Cantor set . Cantor set The set is also referred to as the Cantor middle-third set . Since each is a closed set, is also a closed set (as intersections of closed sets are closed sets). It follows that is a Borel set, and hence is Lebesgue measurable.  Let be the open set which is removed from to get . Thus, , , etc. Let . Note that   As the sets are disjoint, we have that   Now, as , and , it follows that .  We will now look at the cardinality of . Every number in has a binary expansion. If we do not consider finite binary expansions, and only consider infinite expansions, the binary expansions are unique. That is we will write the binary expansion as . Suppose . Construct be the following algorithm: if is in the left half , then the first digit in the binary expansion of is ; if is in the right interval of then the first digit of the binary expansion of is . Now, in , is in either the left subinterval, or the right subinterval of the interval is in . Let be the second digit of if is to the left, be the second digit if is to the right. Continuing in this way we get as a binary expansion. The map is a bijection from to , hence and have the same cardinality. As is uncountable This is traditionally proved using the famed diagonal argument of Cantor. We also know that is uncountable since and countable sets have Lebesgue measure by Theorem . , it follows that is uncountable.   We thus shown have that the Cantor set has Lebesgue measure and is uncountable. Cantor set Hence the converse of Theorem does not hold. All countable sets have Lebesgue measure , but not all Lebesgue measure sets are countable.  We want to prove the existence of Lebesgue measurable sets which are not Borel sets. In order to do this we first introduce a function, the Cantor-Lebesgue function . Cantor-Lebesgue function Whilst we introduce it now for the purpose of finding a set which is not Borel, the Cantor-Lebesgue function is of interest in its own right.   Let be the Cantor set, from Example , and let . We first define a function on . Recall that where is the open set removed from at the step of the construction of the Cantor set .  Let for . For define by   Continue in this way, so that for   when is in the th interval in (See Figure ).     The Cantor-Lebesgue function on the set .     We extend to all of by setting , and for ,   We call the Cantor-Lebesgue function Cantor-Lebesgue function Note that is continuous. Indeed, is clearly continuous on , since is constant on open intervals in . For , and large enough, we can find such that   for all . It follows that does not have a jump discontinuity at . As is increasing, this shows that is continuous at .    Let be the Cantor set. Then there is a set such that is Lebesgue measurable but is not a Borel set.    Let be the Cantor-Lebesgue function from Example . Cantor-Lebesgue function The function is an increasing, continuous function with and . It follows from the Intermediate Value Theorem that maps surjectively onto . Define a function by   Then is a continuous, strictly increasing function with .  Let be the Cantor set, and let . By Example , , and hence . Applying to and we get disjoint sets and satisfying   Recall that is constructed so that there are disjoint open intervals such that and is constant on each . Let when . Then, . Hence is a countable union of intervals, and hence is Lebesgue measurable. Further   As and are Lebesgue measurable, it follows that is Lebesgue measurable, and  Theorem tells us that there is a set which is not Lebesgue measurable.  Since is strictly increasing bijection from to it has a continuous inverse (Exercise ). Let . As is not Lebesgue measurable, and hence not a Borel set, it follows from Exercise that is not a Borel set. As and , is a Lebesgue measurable since is a complete measure space.    The -algebra of Borel subsets of is strictly contained in the -algebra of Lebesgue measurable subsets of .    That the Borel sets are contained in the Lebesgue measurable sets is Theorem . Lemma gives the existence of a Lebesgue measurable set which is not Borel.    The measure space of the Lebesgue measure restricted to the Borel sets of is not a complete measure space.    The Cantor set is closed, and hence a Borel set. Further . Lemma shows that there is a set which is not a Borel set, hence is not a complete measure space.   "
},
{
  "id": "thm-Vitali-non-meas",
  "level": "2",
  "url": "sec-nonmeasurable.html#thm-Vitali-non-meas",
  "type": "Theorem",
  "number": "5.2.1",
  "title": "Vitali.",
  "body": " Vitali  Let satisfy . Then there exists such that is not Lebesgue measurable.  "
},
{
  "id": "sec-nonmeasurable-8",
  "level": "2",
  "url": "sec-nonmeasurable.html#sec-nonmeasurable-8",
  "type": "Proof",
  "number": "5.2.1",
  "title": "",
  "body": " By the countable monotonicity of ,   Thus, contains a bounded subset with positive Lebesgue outer measure. We can thus assume that is bounded.  Define a relation on by the following rule: if then if and only if there is a rational number such that . It is not hard to see that is an equivalence relation on (Exercise ). Create a set by choosing a representative element from each equivalence class of the equivalence relation . Thus satisfies: if then there exists a unique such that . It follows that the collection of sets are disjoint and cover . Further, as is bounded (and there are infinitely many rational numbers between any two rational numbers), there is a bounded, infinite set such that   Suppose now that is Lebesgue measurable. Then, since , . Further, is Lebesgue measurable for each , and (Exercise ). Thus, Lebesgue measurable, as it is a countable union of Lebesgue measurable sets. We also, have that is bounded, since and are bounded. Thus   Since is an infinite set, it follows that .  Now, by the countable submonotonicity of the Lebesgue outer measure we have   This contradicts, , and so is not Lebesgue measurable.  "
},
{
  "id": "sec-nonmeasurable-9",
  "level": "2",
  "url": "sec-nonmeasurable.html#sec-nonmeasurable-9",
  "type": "Remark",
  "number": "5.2.2",
  "title": "",
  "body": " Theorem tells us that there are many subsets off which are not Lebesgue measurable. Still, there is something unsatisfactory about the proof. In the proof we construct a set which is not Lebesgue measurable, but what does look like? It is important to note that the construction of given here relies on the axiom of choice. We choose and element from each equivalence class of . This is not, however, a shortcoming of the proof. It is a necessity. There are models of set theory where the axiom of choice is not assumed, where it can be shown that all subsets of the real line are Lebesgue measurable. This is an interesting topic, but is too far into the weeds of set theory for what we are trying to do. We will (happily!) stick to the standard Zermelo–Fraenkel axioms of set theory plus the axiom of choice (ZFC). Thus, we are living in a world where Theorem holds. This won't be the last time that the axiom of choice plays a significant role in these notes; but it is perhaps the most famous and consequential.  "
},
{
  "id": "ex-Cantor",
  "level": "2",
  "url": "sec-nonmeasurable.html#ex-Cantor",
  "type": "Example",
  "number": "5.2.3",
  "title": "",
  "body": " Cantor set Let . Let . Note, that is . I.e. is with the middle third of its interval removed. To construct we remove the (open) middle third from each of the two disjoint intervals in . That is   We construct by removing the open middle thirds from each of the 4 intervals in . We continue in this way: is constructed from by removing the open middle thirds from each of the closed intervals in .     Illustration of the sets (top), used to construct the Cantor set .     Let . We call the Cantor set . Cantor set The set is also referred to as the Cantor middle-third set . Since each is a closed set, is also a closed set (as intersections of closed sets are closed sets). It follows that is a Borel set, and hence is Lebesgue measurable.  Let be the open set which is removed from to get . Thus, , , etc. Let . Note that   As the sets are disjoint, we have that   Now, as , and , it follows that .  We will now look at the cardinality of . Every number in has a binary expansion. If we do not consider finite binary expansions, and only consider infinite expansions, the binary expansions are unique. That is we will write the binary expansion as . Suppose . Construct be the following algorithm: if is in the left half , then the first digit in the binary expansion of is ; if is in the right interval of then the first digit of the binary expansion of is . Now, in , is in either the left subinterval, or the right subinterval of the interval is in . Let be the second digit of if is to the left, be the second digit if is to the right. Continuing in this way we get as a binary expansion. The map is a bijection from to , hence and have the same cardinality. As is uncountable This is traditionally proved using the famed diagonal argument of Cantor. We also know that is uncountable since and countable sets have Lebesgue measure by Theorem . , it follows that is uncountable.  "
},
{
  "id": "ex-cantor-lebesgue",
  "level": "2",
  "url": "sec-nonmeasurable.html#ex-cantor-lebesgue",
  "type": "Example",
  "number": "5.2.5",
  "title": "",
  "body": " Let be the Cantor set, from Example , and let . We first define a function on . Recall that where is the open set removed from at the step of the construction of the Cantor set .  Let for . For define by   Continue in this way, so that for   when is in the th interval in (See Figure ).     The Cantor-Lebesgue function on the set .     We extend to all of by setting , and for ,   We call the Cantor-Lebesgue function Cantor-Lebesgue function Note that is continuous. Indeed, is clearly continuous on , since is constant on open intervals in . For , and large enough, we can find such that   for all . It follows that does not have a jump discontinuity at . As is increasing, this shows that is continuous at .  "
},
{
  "id": "lem-non-Borel",
  "level": "2",
  "url": "sec-nonmeasurable.html#lem-non-Borel",
  "type": "Lemma",
  "number": "5.2.7",
  "title": "",
  "body": " Let be the Cantor set. Then there is a set such that is Lebesgue measurable but is not a Borel set.  "
},
{
  "id": "sec-nonmeasurable-16",
  "level": "2",
  "url": "sec-nonmeasurable.html#sec-nonmeasurable-16",
  "type": "Proof",
  "number": "5.2.2",
  "title": "",
  "body": " Let be the Cantor-Lebesgue function from Example . Cantor-Lebesgue function The function is an increasing, continuous function with and . It follows from the Intermediate Value Theorem that maps surjectively onto . Define a function by   Then is a continuous, strictly increasing function with .  Let be the Cantor set, and let . By Example , , and hence . Applying to and we get disjoint sets and satisfying   Recall that is constructed so that there are disjoint open intervals such that and is constant on each . Let when . Then, . Hence is a countable union of intervals, and hence is Lebesgue measurable. Further   As and are Lebesgue measurable, it follows that is Lebesgue measurable, and  Theorem tells us that there is a set which is not Lebesgue measurable.  Since is strictly increasing bijection from to it has a continuous inverse (Exercise ). Let . As is not Lebesgue measurable, and hence not a Borel set, it follows from Exercise that is not a Borel set. As and , is a Lebesgue measurable since is a complete measure space.  "
},
{
  "id": "sec-nonmeasurable-17",
  "level": "2",
  "url": "sec-nonmeasurable.html#sec-nonmeasurable-17",
  "type": "Theorem",
  "number": "5.2.8",
  "title": "",
  "body": " The -algebra of Borel subsets of is strictly contained in the -algebra of Lebesgue measurable subsets of .  "
},
{
  "id": "sec-nonmeasurable-18",
  "level": "2",
  "url": "sec-nonmeasurable.html#sec-nonmeasurable-18",
  "type": "Proof",
  "number": "5.2.3",
  "title": "",
  "body": " That the Borel sets are contained in the Lebesgue measurable sets is Theorem . Lemma gives the existence of a Lebesgue measurable set which is not Borel.  "
},
{
  "id": "sec-nonmeasurable-19",
  "level": "2",
  "url": "sec-nonmeasurable.html#sec-nonmeasurable-19",
  "type": "Corollary",
  "number": "5.2.9",
  "title": "",
  "body": " The measure space of the Lebesgue measure restricted to the Borel sets of is not a complete measure space.  "
},
{
  "id": "sec-nonmeasurable-20",
  "level": "2",
  "url": "sec-nonmeasurable.html#sec-nonmeasurable-20",
  "type": "Proof",
  "number": "5.2.4",
  "title": "",
  "body": " The Cantor set is closed, and hence a Borel set. Further . Lemma shows that there is a set which is not a Borel set, hence is not a complete measure space.  "
},
{
  "id": "sec-borel-on-R",
  "level": "1",
  "url": "sec-borel-on-R.html",
  "type": "Section",
  "number": "5.3",
  "title": "Borel measures on <span class=\"process-math\">\\(\\mathbb{R}\\)<\/span>",
  "body": " Borel measures on  The Lebesgue measure is induced by the length function on intervals: . Given an increasing function on we can define a weighted length on intervals by . We in this section we show how, with some reasonable constraints on , this gives rise to a Borel measure. Conversely, we show how Borel measures on give rise to functions. These processes will be, up to the addition of a constant, inverses of each other.  We will begin with constructing functions from Borel measures.   Let be a closed interval in . Let be a finite Borel measure on . Define a function by   The function is called the cumulative distribution function for . cumulative distribution function    The term cumulative distribution function is borrowed from probability theory.    distribution Gaussian distribution Let be the Gaussian distribution. The cumulative distribution function of is usually denoted by . By definition is given by   Note that is continuous on every closed interval in . Further,        A cumulative distribution functions need not be continuous, but they will satisfy a one-sided version of continuity. We define this formally now, before showing all cumulative distribution functions satisfy it in Theorem .   Let be a closed interval. A function is right-continuous on continuous function right-continuous if given such that there exists such that (i.e. is not a right end-point of ), then     cumulative distribution function Let be a closed interval and let be a finite Borel measure on . Then the cumulative distribution function for is increasing and right-continuous.    Let be a finite Borel measure on and let be the corresponding cumulative distribution function. Note that, if with then   Thus, is an increasing function.  We will now show that is right-continuous. Take , such that there is a such that . Let be a sequence in converging to , with for each . Then   Hence, since is a finite measure, continuity of measure, Theorem , gives   Hence is right-continuous.   We will now show how a Borel measure can be recovered from its cumulative distribution function. More generally, we show that any increasing, right-continuous function defines a Borel measure.   Let be a closed interval, and let be a non-negative, increasing, right-continuous function. If has a minimal element we will also assume that is non-negative. Then there is a unique Borel measure on satisfying    First assume that does not have a minimal element. That is, assume for some , or . Let be the semiring of subsets of ,   Define on by and We will show that is a premeasure on . It is straightforward to show that   if are disjoint intervals in with .  It remains to show that is countably monotonic. Suppose and are in and satisfy   Fix such that . For each , choose such that and   (if is the end-point of for some we can extend so that for ). Note that we can by the right continuity of . We now have the following inclusions   Thus, is an open cover of . By the Heine-Borel Theorem, is compact, thus there is a finite subcover of . We (relabelling if necessary) denote the sets in this subcover by As is increasing, it follows that   Taking a limit as goes to (from above), the right continuity of gives that   and so is countably monotonic. Hence is a premeasure on .  When has a minimal element , so that or we define to be   We define as above with the extra condition . Again, will be a premeasure on the semiring .  In both cases, the Carathéodory-Hahn Theorem says that extends to a measure on , which we will still denote by . The uniqueness of follows again from the Carathéodory-Hahn Theorem, and the fact that is -finite on . As the sets in will be -measurable, the Borel sets will be measurable with respect to . If is a closed interval in , then . It follows that for any compact set , and thus defines a Borel measure on .    When and , the measure constructed by Theorem is the Lebesgue measure.    Let be a closed interval in and let be a non-negative, increasing, right-continuous function on . If is not bounded below, further assume . Let be the Borel measure on satisfying constructed in Theorem .  If is a finite Borel measure then is the cumulative distribution function for .    Suppose is the minimal element of . Then, for each , the construction of in Theorem gives   Thus, is the cumulative distribution function for .  Now suppose is not bounded below and that Fix . Then   and hence is the cumulative distribution function for .    Let be a closed bounded interval in . Every Borel measure on is uniquely determined by its cumulative distribution function.   "
},
{
  "id": "def-cumulative-dist",
  "level": "2",
  "url": "sec-borel-on-R.html#def-cumulative-dist",
  "type": "Definition",
  "number": "5.3.1",
  "title": "",
  "body": " Let be a closed interval in . Let be a finite Borel measure on . Define a function by   The function is called the cumulative distribution function for . cumulative distribution function  "
},
{
  "id": "rem-cumulative-dist-in-probability",
  "level": "2",
  "url": "sec-borel-on-R.html#rem-cumulative-dist-in-probability",
  "type": "Remark",
  "number": "5.3.2",
  "title": "",
  "body": " The term cumulative distribution function is borrowed from probability theory.  "
},
{
  "id": "exam-cdf-of-gaussian",
  "level": "2",
  "url": "sec-borel-on-R.html#exam-cdf-of-gaussian",
  "type": "Example",
  "number": "5.3.3",
  "title": "",
  "body": " distribution Gaussian distribution Let be the Gaussian distribution. The cumulative distribution function of is usually denoted by . By definition is given by   Note that is continuous on every closed interval in . Further,       "
},
{
  "id": "sec-borel-on-R-8",
  "level": "2",
  "url": "sec-borel-on-R.html#sec-borel-on-R-8",
  "type": "Definition",
  "number": "5.3.5",
  "title": "",
  "body": " Let be a closed interval. A function is right-continuous on continuous function right-continuous if given such that there exists such that (i.e. is not a right end-point of ), then   "
},
{
  "id": "thm-cdf",
  "level": "2",
  "url": "sec-borel-on-R.html#thm-cdf",
  "type": "Theorem",
  "number": "5.3.6",
  "title": "",
  "body": " cumulative distribution function Let be a closed interval and let be a finite Borel measure on . Then the cumulative distribution function for is increasing and right-continuous.  "
},
{
  "id": "sec-borel-on-R-10",
  "level": "2",
  "url": "sec-borel-on-R.html#sec-borel-on-R-10",
  "type": "Proof",
  "number": "5.3.1",
  "title": "",
  "body": " Let be a finite Borel measure on and let be the corresponding cumulative distribution function. Note that, if with then   Thus, is an increasing function.  We will now show that is right-continuous. Take , such that there is a such that . Let be a sequence in converging to , with for each . Then   Hence, since is a finite measure, continuity of measure, Theorem , gives   Hence is right-continuous.  "
},
{
  "id": "thm-lebesgue-stieltjes-measure",
  "level": "2",
  "url": "sec-borel-on-R.html#thm-lebesgue-stieltjes-measure",
  "type": "Theorem",
  "number": "5.3.7",
  "title": "",
  "body": " Let be a closed interval, and let be a non-negative, increasing, right-continuous function. If has a minimal element we will also assume that is non-negative. Then there is a unique Borel measure on satisfying  "
},
{
  "id": "sec-borel-on-R-13",
  "level": "2",
  "url": "sec-borel-on-R.html#sec-borel-on-R-13",
  "type": "Proof",
  "number": "5.3.2",
  "title": "",
  "body": " First assume that does not have a minimal element. That is, assume for some , or . Let be the semiring of subsets of ,   Define on by and We will show that is a premeasure on . It is straightforward to show that   if are disjoint intervals in with .  It remains to show that is countably monotonic. Suppose and are in and satisfy   Fix such that . For each , choose such that and   (if is the end-point of for some we can extend so that for ). Note that we can by the right continuity of . We now have the following inclusions   Thus, is an open cover of . By the Heine-Borel Theorem, is compact, thus there is a finite subcover of . We (relabelling if necessary) denote the sets in this subcover by As is increasing, it follows that   Taking a limit as goes to (from above), the right continuity of gives that   and so is countably monotonic. Hence is a premeasure on .  When has a minimal element , so that or we define to be   We define as above with the extra condition . Again, will be a premeasure on the semiring .  In both cases, the Carathéodory-Hahn Theorem says that extends to a measure on , which we will still denote by . The uniqueness of follows again from the Carathéodory-Hahn Theorem, and the fact that is -finite on . As the sets in will be -measurable, the Borel sets will be measurable with respect to . If is a closed interval in , then . It follows that for any compact set , and thus defines a Borel measure on .  "
},
{
  "id": "sec-borel-on-R-14",
  "level": "2",
  "url": "sec-borel-on-R.html#sec-borel-on-R-14",
  "type": "Remark",
  "number": "5.3.8",
  "title": "",
  "body": " When and , the measure constructed by Theorem is the Lebesgue measure.  "
},
{
  "id": "cor-lebesgue-stieltjes-measure",
  "level": "2",
  "url": "sec-borel-on-R.html#cor-lebesgue-stieltjes-measure",
  "type": "Corollary",
  "number": "5.3.9",
  "title": "",
  "body": " Let be a closed interval in and let be a non-negative, increasing, right-continuous function on . If is not bounded below, further assume . Let be the Borel measure on satisfying constructed in Theorem .  If is a finite Borel measure then is the cumulative distribution function for .  "
},
{
  "id": "sec-borel-on-R-16",
  "level": "2",
  "url": "sec-borel-on-R.html#sec-borel-on-R-16",
  "type": "Proof",
  "number": "5.3.3",
  "title": "",
  "body": " Suppose is the minimal element of . Then, for each , the construction of in Theorem gives   Thus, is the cumulative distribution function for .  Now suppose is not bounded below and that Fix . Then   and hence is the cumulative distribution function for .  "
},
{
  "id": "cor-cdf-and-Borel",
  "level": "2",
  "url": "sec-borel-on-R.html#cor-cdf-and-Borel",
  "type": "Corollary",
  "number": "5.3.10",
  "title": "",
  "body": " Let be a closed bounded interval in . Every Borel measure on is uniquely determined by its cumulative distribution function.  "
},
{
  "id": "chap-lebesgue-measure-6",
  "level": "1",
  "url": "chap-lebesgue-measure-6.html",
  "type": "Exercises",
  "number": "5.4",
  "title": "Exercises",
  "body": "  Let be the Lebesgue measure on . Suppose is Lebesgue measurable. Take . Show that there are disjoint Lebesgue measure able sets such that   and for each .    Let . Show that for all . Show that is Lebesgue measurable if and only if is Lebesgue measurable for all .    Complete the proof of Theorem . That is, show that if is measurable then for all there is an open set containing such that . (You can assume that the result holds when ; the proof of that case is given in the proof of Theorem ).    Complete the proof of Theorem . That is, show that if is Lebesgue measurable then   (The case when is given in the proof of Theorem ).    Let be a subset, and let be the relation defined in Theorem . That is, if and only if there is a such that . Show that is an equivalence relation.    Let be a strictly increasing continuous bijection. Show that has a continuous inverse.    Let be a continuous function. Show that for any Borel set .    Let be the Dirac measure on the Borel sets in (Example ). That is, for , if , and if . Find the cumulative distribution function for .    Let be the measure space of the Lebesgue measure restricted to the Borel sets . Let be the completion of . Show that , the -algebra of all Lebesgue measurable sets; and that , the Lebesgue measure. I.e., show that the completion of the Lebesgue measure restricted to the Borel sets, is the Lebesgue measure on all Lebesgue measurable sets.    Let be the Cantor Lebesgue function on , let be the Cantor set, and let . Show that for all .    Let be the Cantor set; let ; and let . Let be the Borel measure on induced by (using Theorem ). Show that ; and .   "
},
{
  "id": "chap-lebesgue-measure-6-1",
  "level": "2",
  "url": "chap-lebesgue-measure-6.html#chap-lebesgue-measure-6-1",
  "type": "Exercise",
  "number": "5.4.1",
  "title": "",
  "body": " Let be the Lebesgue measure on . Suppose is Lebesgue measurable. Take . Show that there are disjoint Lebesgue measure able sets such that   and for each .  "
},
{
  "id": "exer-Lebesgue-translation-inv",
  "level": "2",
  "url": "chap-lebesgue-measure-6.html#exer-Lebesgue-translation-inv",
  "type": "Exercise",
  "number": "5.4.2",
  "title": "",
  "body": " Let . Show that for all . Show that is Lebesgue measurable if and only if is Lebesgue measurable for all .  "
},
{
  "id": "exer-outer-approx",
  "level": "2",
  "url": "chap-lebesgue-measure-6.html#exer-outer-approx",
  "type": "Exercise",
  "number": "5.4.3",
  "title": "",
  "body": " Complete the proof of Theorem . That is, show that if is measurable then for all there is an open set containing such that . (You can assume that the result holds when ; the proof of that case is given in the proof of Theorem ).  "
},
{
  "id": "exer-Lebesgue-inner-reg",
  "level": "2",
  "url": "chap-lebesgue-measure-6.html#exer-Lebesgue-inner-reg",
  "type": "Exercise",
  "number": "5.4.4",
  "title": "",
  "body": " Complete the proof of Theorem . That is, show that if is Lebesgue measurable then   (The case when is given in the proof of Theorem ).  "
},
{
  "id": "exer-Q-equiv-rel",
  "level": "2",
  "url": "chap-lebesgue-measure-6.html#exer-Q-equiv-rel",
  "type": "Exercise",
  "number": "5.4.5",
  "title": "",
  "body": " Let be a subset, and let be the relation defined in Theorem . That is, if and only if there is a such that . Show that is an equivalence relation.  "
},
{
  "id": "exer-cont-inverse",
  "level": "2",
  "url": "chap-lebesgue-measure-6.html#exer-cont-inverse",
  "type": "Exercise",
  "number": "5.4.6",
  "title": "",
  "body": " Let be a strictly increasing continuous bijection. Show that has a continuous inverse.  "
},
{
  "id": "exer-Borel-inv-img",
  "level": "2",
  "url": "chap-lebesgue-measure-6.html#exer-Borel-inv-img",
  "type": "Exercise",
  "number": "5.4.7",
  "title": "",
  "body": " Let be a continuous function. Show that for any Borel set .  "
},
{
  "id": "exer-dirac-cdf",
  "level": "2",
  "url": "chap-lebesgue-measure-6.html#exer-dirac-cdf",
  "type": "Exercise",
  "number": "5.4.8",
  "title": "",
  "body": " Let be the Dirac measure on the Borel sets in (Example ). That is, for , if , and if . Find the cumulative distribution function for .  "
},
{
  "id": "chap-lebesgue-measure-6-9",
  "level": "2",
  "url": "chap-lebesgue-measure-6.html#chap-lebesgue-measure-6-9",
  "type": "Exercise",
  "number": "5.4.9",
  "title": "",
  "body": " Let be the measure space of the Lebesgue measure restricted to the Borel sets . Let be the completion of . Show that , the -algebra of all Lebesgue measurable sets; and that , the Lebesgue measure. I.e., show that the completion of the Lebesgue measure restricted to the Borel sets, is the Lebesgue measure on all Lebesgue measurable sets.  "
},
{
  "id": "exer-cant-len-func-singular",
  "level": "2",
  "url": "chap-lebesgue-measure-6.html#exer-cant-len-func-singular",
  "type": "Exercise",
  "number": "5.4.10",
  "title": "",
  "body": " Let be the Cantor Lebesgue function on , let be the Cantor set, and let . Show that for all .  "
},
{
  "id": "exer-cantor-leb-cdf",
  "level": "2",
  "url": "chap-lebesgue-measure-6.html#exer-cantor-leb-cdf",
  "type": "Exercise",
  "number": "5.4.11",
  "title": "",
  "body": " Let be the Cantor set; let ; and let . Let be the Borel measure on induced by (using Theorem ). Show that ; and .  "
},
{
  "id": "real-analysis-5-5-3",
  "level": "1",
  "url": "real-analysis-5-5-3.html",
  "type": "Section",
  "number": "6.1",
  "title": "Signed measures",
  "body": " Signed measures  We have defined measures to only take non-negative values. However, there are some points where it is beneficial to extend the definition of a measure to include negative values (and we will see more as we proceed). For example, Exercise shows that the collection of measures on is closed under addition and multiplying by non-negative scalars. The set of measures on is almost a vector space; we just can't multiply be negative scalars. Allowing for measures which take positive and negative values would allow us to create a vector space (which may, or may not, be useful).  Less abstractly, in Section , we showed that if is a Borel measure on then the cumulative distribution function for , , is an increasing, right-continuous function, Thereom . Conversely, given an increasing, right-continuous function on , uniquely determines a Borel measure on , Theorem . Cumulative distribution functions are increasing precisely because measures take non-negative values. In Theorem , we need an increasing function in order to define a measure. If we want to use measure theory to study real functions, other than increasing functions, we will need to allow for measures which allow for possibly negative values. This leads us to the following definition.   signed measure Let be a measurable space. A function   is a signed measure if   takes at most value from ;   ; and   if are disjoint sets in , then     The elements of are called the measurable sets measurable set for a signed measure , or -measurable sets . A signed measure on is finite if . signed measure finite   The definition of a signed measure is very similar to that of a measure, but a couple of points are worth discussing. Firstly, the condition that takes at most one value from is necessary in order for the third condition (countable additivity) to make sense. Suppose is a function on a -algebra satisfying conditions (ii) and (iii) of a signed measure. Suppose and . Condition (iii) then says that   Hence, . Further   Since , it follows that . Thus   As is not defined, cannot defined to take both of the values and . In particular, we could have defined signed measures to only satisfy (ii) and (iii); the above argument shows that condition (i) follows from condition (iii). We include condition (i) for clarity.  Secondly, there is room for some misunderstandings in condition (iii). Suppose are disjoint measurable sets, and , and that . Then   \\ That is, is a convergent series. There is more than one way a series can converge: absolutely or conditionally. Note that the set is independent on the order of the sets , and so is independent of the order of the sets . As , it follows that the (finite) value of is independent of the order of the terms . It follows that the series converges absolutely .  Exercise says that the difference of two measures is a signed measure. In this section we will show that all signed measures are of this form. We need some preliminary definitions and results first.   Let be a signed measure on a measurable space and let be a measurable set.   The set is positive (or -positive positive set if there is room for confusion) if is measurable, then ;   the set is negative (or -negative negative set if there is room for confusion) if is measurable, then ; and   the set is a null set (or -null null set if there is room for confusion) if is measurable, then .      Note that null sets are both positive and negative.    Hahn  Let be a signed measure on a measurable space . Suppose , with . Then there is a positive set such that .    If is positive, then we are done. Otherwise, there are subsets with . Let be the smallest natural number such that there is a measurable such that   Continuing, choose minimal natural number such that there is a   with   If this process ends after steps, let   Then is positive, since it contains no subsets such that . Further,   Since and , it follows that .  If the process does not end, we get a sequence of sets Let and let Since , it follows from Exercise that . Thus   Thus .  We will show that is positive. Suppose and Then for each we have   Thus, by the choice of ,   As this holds for all , and , it follows that . Hene is a positive set.  To show that we note that   Since and , it follows that .    Hahn Decomposition Theorem  Hahn Decomposition Theorem Let be a signed measure on a measurable space . Then there are disjoint measurable subsets such that , is positive, and is negative.  If are also disjoint measurable sets with positive, negative, and , then the sets   are null sets.    Assume that does not take the value (replace with if it does). Let be the collection of all positive sets. Note that is non-empty since . Let   We will show that is attained, i.e. is the maximum value in . Choose a sequence such that   Let . Note that is positive by Exercise . Thus . Also, since is positive, , and   Taking the limit as , we get . Thus .  Let . We will show that is negative. If is not negative, then there is a measurable set with . Since, by assumption, does not take the value , we have   It follows from Lemma that there is a positive set with . The set is positive with   This contradicts the definition of . Thus is negative.  Suppose and are another pair of disjoint measurable sets, with , positive, and negative. Then and . Hence is both positive and negative. Thus, is a null set. Similar arguments show that , , and are null sets.    Let be a signed measure on a measurable space . If and are disjoint measurable sets satisfying for disjoint sets and , with positive and negative, we call and a Hahn decomposition for . Hahn decomposition   The Hahn Decomposition, Theorem , says that Hahn decompositions exist for all signed measures.  We can now, as promised, decompose signed measures as the difference of two measures. Before we do this we introduce just one more definition.   Let be a measurable space, and let and be two measures on . The measures and are mutually singular , singular measures mutually singular denoted , if there are disjoint measurable sets with satisfying , , , and .    Let be the Lebesgue measure on the Borel sets of , and let be the Borel measure on the Borel sets of whose cumulative distribution function is the Cantor-Lebesgue function (see Corollary ). It follows from Exercise that and are mutually singular.    The Jordan Decomposition Theorem  Jordan Decomposition Theorem for signed measures Let be a signed measure on a measurable space . Then there are mutually orthogonal measures on and on such that , i.e.   for all .  Further, and are unique mutually orthogonal measures satisfying .    Let be a Hahn decomposition for , with positive and negative. For each , define   That is a measure follows from Exercise . That is a measure can be proved similarly. That and are mutually orthogonal follows from the fact that and are disjoint.  Suppose now that and are mutually orthogonal measures satisfying . Since and are mutually orthogonal, there are disjoint measurable sets and satisfying , , , , and . We will show that and give a Hahn decomposition for . That is, we will show that is -positive and is -negative. Take any . Since , , thus   Similarly, if , then and so   Since and are a Hahn decompoistion for , and and are a Hahn decompoistion for , it follows from Theorem that and are null sets. Take any , then   and   and so   Take any . Then   where the penultimate equality comes from . Hence . We can show that in a similar fashion.    Let be a signed measure on a measurable space . Let and be mutually orthogonal measures on satisfying   We call and the Jordan decomposition of . Jordan decomposition of a signed measure  We call the measure the positive part of , and call the measure the negative part of .    Let be a signed measure and let be the Jordan decomposition of . The measure defined by   is called the measure of total variation of . measure of total variation The value is the total variation of . total variation of a signed measure. When is finite then is of bounded variation . bounded variation for a signed measure    Let be a signed measure. Then , measure of total variation of , is indeed a measure by Exercise .  It is worth noting that, when is a signed measure, in general it is not true that   for a -measurable set. That is, the placement of the lines is important.  In general, there is no reason to expect the function to be a measure. Can you see why not?   Note that is finite if and only if is a finite signed measure. The following characterization of total variation will be useful in the sequel. We leave the proof to Exercise   Let be a signed measure on a measurable space . Then the total variation is given by    We end this section with another characterization of for finite signed measures.   Let be a signed measure on a measurable space with finite total variation . Suppose and are measures on satisfying . Then .  Further, if and only if and .    Let be a Hahn decomposition for so that   and   Take any measurable , then   Similarly, if is measurable then   We have then that   Now suppose that . If or then, by the same reasoning as earlier in this proof,   Thus and .  Take any measurable . We have shown that . If then   As , it follows that for all measurable .  Suppose satisfies . Then   Hence, if , then .  We can similarly show that for all measurable , and that if then .  Thus, if or , we have   This contradicts the definition of the total variation . Hence and .   "
},
{
  "id": "def-signed-measure",
  "level": "2",
  "url": "real-analysis-5-5-3.html#def-signed-measure",
  "type": "Definition",
  "number": "6.1.1",
  "title": "",
  "body": " signed measure Let be a measurable space. A function   is a signed measure if   takes at most value from ;   ; and   if are disjoint sets in , then     The elements of are called the measurable sets measurable set for a signed measure , or -measurable sets . A signed measure on is finite if . signed measure finite  "
},
{
  "id": "real-analysis-5-5-3-16",
  "level": "2",
  "url": "real-analysis-5-5-3.html#real-analysis-5-5-3-16",
  "type": "Definition",
  "number": "6.1.2",
  "title": "",
  "body": " Let be a signed measure on a measurable space and let be a measurable set.   The set is positive (or -positive positive set if there is room for confusion) if is measurable, then ;   the set is negative (or -negative negative set if there is room for confusion) if is measurable, then ; and   the set is a null set (or -null null set if there is room for confusion) if is measurable, then .    "
},
{
  "id": "real-analysis-5-5-3-17",
  "level": "2",
  "url": "real-analysis-5-5-3.html#real-analysis-5-5-3-17",
  "type": "Remark",
  "number": "6.1.3",
  "title": "",
  "body": " Note that null sets are both positive and negative.  "
},
{
  "id": "lem-hahn-lemma",
  "level": "2",
  "url": "real-analysis-5-5-3.html#lem-hahn-lemma",
  "type": "Lemma",
  "number": "6.1.4",
  "title": "Hahn.",
  "body": " Hahn  Let be a signed measure on a measurable space . Suppose , with . Then there is a positive set such that .  "
},
{
  "id": "real-analysis-5-5-3-19",
  "level": "2",
  "url": "real-analysis-5-5-3.html#real-analysis-5-5-3-19",
  "type": "Proof",
  "number": "6.1.1",
  "title": "",
  "body": " If is positive, then we are done. Otherwise, there are subsets with . Let be the smallest natural number such that there is a measurable such that   Continuing, choose minimal natural number such that there is a   with   If this process ends after steps, let   Then is positive, since it contains no subsets such that . Further,   Since and , it follows that .  If the process does not end, we get a sequence of sets Let and let Since , it follows from Exercise that . Thus   Thus .  We will show that is positive. Suppose and Then for each we have   Thus, by the choice of ,   As this holds for all , and , it follows that . Hene is a positive set.  To show that we note that   Since and , it follows that .  "
},
{
  "id": "thm-Hahn-decomp",
  "level": "2",
  "url": "real-analysis-5-5-3.html#thm-Hahn-decomp",
  "type": "Theorem",
  "number": "6.1.5",
  "title": "Hahn Decomposition Theorem.",
  "body": " Hahn Decomposition Theorem  Hahn Decomposition Theorem Let be a signed measure on a measurable space . Then there are disjoint measurable subsets such that , is positive, and is negative.  If are also disjoint measurable sets with positive, negative, and , then the sets   are null sets.  "
},
{
  "id": "real-analysis-5-5-3-21",
  "level": "2",
  "url": "real-analysis-5-5-3.html#real-analysis-5-5-3-21",
  "type": "Proof",
  "number": "6.1.2",
  "title": "",
  "body": " Assume that does not take the value (replace with if it does). Let be the collection of all positive sets. Note that is non-empty since . Let   We will show that is attained, i.e. is the maximum value in . Choose a sequence such that   Let . Note that is positive by Exercise . Thus . Also, since is positive, , and   Taking the limit as , we get . Thus .  Let . We will show that is negative. If is not negative, then there is a measurable set with . Since, by assumption, does not take the value , we have   It follows from Lemma that there is a positive set with . The set is positive with   This contradicts the definition of . Thus is negative.  Suppose and are another pair of disjoint measurable sets, with , positive, and negative. Then and . Hence is both positive and negative. Thus, is a null set. Similar arguments show that , , and are null sets.  "
},
{
  "id": "real-analysis-5-5-3-22",
  "level": "2",
  "url": "real-analysis-5-5-3.html#real-analysis-5-5-3-22",
  "type": "Definition",
  "number": "6.1.6",
  "title": "",
  "body": " Let be a signed measure on a measurable space . If and are disjoint measurable sets satisfying for disjoint sets and , with positive and negative, we call and a Hahn decomposition for . Hahn decomposition  "
},
{
  "id": "real-analysis-5-5-3-25",
  "level": "2",
  "url": "real-analysis-5-5-3.html#real-analysis-5-5-3-25",
  "type": "Definition",
  "number": "6.1.7",
  "title": "",
  "body": " Let be a measurable space, and let and be two measures on . The measures and are mutually singular , singular measures mutually singular denoted , if there are disjoint measurable sets with satisfying , , , and .  "
},
{
  "id": "real-analysis-5-5-3-26",
  "level": "2",
  "url": "real-analysis-5-5-3.html#real-analysis-5-5-3-26",
  "type": "Example",
  "number": "6.1.8",
  "title": "",
  "body": " Let be the Lebesgue measure on the Borel sets of , and let be the Borel measure on the Borel sets of whose cumulative distribution function is the Cantor-Lebesgue function (see Corollary ). It follows from Exercise that and are mutually singular.  "
},
{
  "id": "thm-jordan-decomp-measure",
  "level": "2",
  "url": "real-analysis-5-5-3.html#thm-jordan-decomp-measure",
  "type": "Theorem",
  "number": "6.1.9",
  "title": "The Jordan Decomposition Theorem.",
  "body": " The Jordan Decomposition Theorem  Jordan Decomposition Theorem for signed measures Let be a signed measure on a measurable space . Then there are mutually orthogonal measures on and on such that , i.e.   for all .  Further, and are unique mutually orthogonal measures satisfying .  "
},
{
  "id": "real-analysis-5-5-3-28",
  "level": "2",
  "url": "real-analysis-5-5-3.html#real-analysis-5-5-3-28",
  "type": "Proof",
  "number": "6.1.3",
  "title": "",
  "body": " Let be a Hahn decomposition for , with positive and negative. For each , define   That is a measure follows from Exercise . That is a measure can be proved similarly. That and are mutually orthogonal follows from the fact that and are disjoint.  Suppose now that and are mutually orthogonal measures satisfying . Since and are mutually orthogonal, there are disjoint measurable sets and satisfying , , , , and . We will show that and give a Hahn decomposition for . That is, we will show that is -positive and is -negative. Take any . Since , , thus   Similarly, if , then and so   Since and are a Hahn decompoistion for , and and are a Hahn decompoistion for , it follows from Theorem that and are null sets. Take any , then   and   and so   Take any . Then   where the penultimate equality comes from . Hence . We can show that in a similar fashion.  "
},
{
  "id": "real-analysis-5-5-3-29",
  "level": "2",
  "url": "real-analysis-5-5-3.html#real-analysis-5-5-3-29",
  "type": "Definition",
  "number": "6.1.10",
  "title": "",
  "body": " Let be a signed measure on a measurable space . Let and be mutually orthogonal measures on satisfying   We call and the Jordan decomposition of . Jordan decomposition of a signed measure  We call the measure the positive part of , and call the measure the negative part of .  "
},
{
  "id": "real-analysis-5-5-3-30",
  "level": "2",
  "url": "real-analysis-5-5-3.html#real-analysis-5-5-3-30",
  "type": "Definition",
  "number": "6.1.11",
  "title": "",
  "body": " Let be a signed measure and let be the Jordan decomposition of . The measure defined by   is called the measure of total variation of . measure of total variation The value is the total variation of . total variation of a signed measure. When is finite then is of bounded variation . bounded variation for a signed measure  "
},
{
  "id": "real-analysis-5-5-3-31",
  "level": "2",
  "url": "real-analysis-5-5-3.html#real-analysis-5-5-3-31",
  "type": "Remark",
  "number": "6.1.12",
  "title": "",
  "body": " Let be a signed measure. Then , measure of total variation of , is indeed a measure by Exercise .  It is worth noting that, when is a signed measure, in general it is not true that   for a -measurable set. That is, the placement of the lines is important.  In general, there is no reason to expect the function to be a measure. Can you see why not?  "
},
{
  "id": "prop-bv-signed-meas-as-sup",
  "level": "2",
  "url": "real-analysis-5-5-3.html#prop-bv-signed-meas-as-sup",
  "type": "Proposition",
  "number": "6.1.13",
  "title": "",
  "body": " Let be a signed measure on a measurable space . Then the total variation is given by   "
},
{
  "id": "prop-total-variation",
  "level": "2",
  "url": "real-analysis-5-5-3.html#prop-total-variation",
  "type": "Proposition",
  "number": "6.1.14",
  "title": "",
  "body": " Let be a signed measure on a measurable space with finite total variation . Suppose and are measures on satisfying . Then .  Further, if and only if and .  "
},
{
  "id": "real-analysis-5-5-3-36",
  "level": "2",
  "url": "real-analysis-5-5-3.html#real-analysis-5-5-3-36",
  "type": "Proof",
  "number": "6.1.4",
  "title": "",
  "body": " Let be a Hahn decomposition for so that   and   Take any measurable , then   Similarly, if is measurable then   We have then that   Now suppose that . If or then, by the same reasoning as earlier in this proof,   Thus and .  Take any measurable . We have shown that . If then   As , it follows that for all measurable .  Suppose satisfies . Then   Hence, if , then .  We can similarly show that for all measurable , and that if then .  Thus, if or , we have   This contradicts the definition of the total variation . Hence and .  "
},
{
  "id": "sec-signed-borel",
  "level": "1",
  "url": "sec-signed-borel.html",
  "type": "Section",
  "number": "6.2",
  "title": "Signed Borel measures on <span class=\"process-math\">\\(\\mathbb{R}\\)<\/span> and functions of bounded variation",
  "body": " Signed Borel measures on and functions of bounded variation  In Section we studied the Borel measures on closed intervals in . In particular, we showed that if is a Borel measure on closed interval then the cumulative distribution function for is non-negative, increasing, and right-continuous, Theorem Conversely, if is a non-negative, increasing, right-continuous function on then uniquely determines a Borel measure on whose cumulative distribution function is , Corollary . In this section we want to study the relationship between signed Borel measures on closed intervals and functionso on .  We begin with a definition to formalize our language.   Let be a topological space and let be the -algebra of Borel sets of . A signed measure on is a signed Borel measure signed measure signed Borel measure if for all compact sets .    If is a signed Borel measure on and is compact, then . It follows that . In particular, if is a signed Borel measure on the closed interval then is of bounded variation.   When studying Borel measures on , the functions that arose were increasing. For signed measures, the functions that we will need to study are functions of bounded variation. We define the necessary terms now.   Let be a function. If is a partition of the variation of over variation is   The total variation of total variation of a function is defined as   When then is of bounded variation . bounded variation for a function   The next example, whilst simple, is very important.   If is monotone (i.e. is increasing or decreasing), then is of bounded variation. Indeed, if is increasing and is any partition of then   Thus, . If is decreasing then we can show that    Intuitively, the total variation of a function can be seen as a measure of the oscillation of : the more oscillation the higher the value of . Monotone functions, as in Example do not oscillate and so have bounded variation. To find examples of functions which are not of bounded variation we look at functions with a lot of oscillation.   Define on by   Then is not of bounded variation. See Exercise .    Define on by   Then is not of bounded variation. See Exercise .   Note that Example shows that there are continuous functions which are not of bounded variation, see Exercise . However the continuous functions which are of bounded variation are bountiful, as the next proposition shows.   Let be a closed interval in . If are functions of bounded variation then   is of bounded variation for all .    Let be a partition of . Then   Thus   Thus is of bounded variation.  Take any scalar . Then   Thus . The result follows.   Knowing that increasing functions have bounded variation (Example ) and that the functions of bounded variation form a vector space (Proposition ), gives many functions which are of bounded variation. Examples include the sine function (Exercise ), the cosine function (Exercise ), and polynomials (Exercise ).  The following lemma gives a partial relationship between Borel signed measures and functions of bounded variation.   Let be a Borel signed measure on the closed interval . Define a function   Then is the difference of two increasing functions right-continuous. In particular, is right-continuous and of bounded variation.    Let be the Jordan decomposition of . Let be the cumulative distribution of , and let be the cumulative distribution function for . Then   By Theorem , and are increasing, right-continuous functions. By Example  and are of bounded variation, and so is of bounded variation by Proposition .    An alternate way to prove is of bounded variation in Lemma would be to invoke Proposition directly.   To complete the picture of the relationship between functions of bounded variation and Borel measures of bounded variation, we need another description of functions of functions of bounded variation.  Let be a function of bounded variation on . Then, for each , the restriction of to is also of bounded variation. Define the function on by   We call the function of total variation for . function of total variation It is straightforward to see that is a non-negative, increasing function.   Jordan Decomposition Theorem  Jordan Decomposition Theorem for functions Let be a function of bounded variation on the interval . Then there are increasing functions on such that .    Take . Note that   Thus   and   Hence, the functions and are increasing functions. Let   Then , and so is the difference of two increasing functions.    Let be a function of bounded variation. Let and . Then is called the Jordan decomposition of . Jordan decomposition of a function    Note that for a function of bounded variation   Thus, the total variation of is given by the sum of the total variations of the Jordan decomposition of .  Recall that for a signed measure , the total variation of is given by , where is the Jordan decomposition of .    Let be a function of bounded variation on a closed interval . If is a right-continuous function then is right-continuous. In particular, there are right-continuous increasing functions such that .    Suppose that is right-continuous. Take . Let . Since is increasing, . We want to show that .  Fix . By the right-continuity of and definition of , there exists such that   and   when .  Fix with . Choose a partition   so that   Thus,   Now take a partition of ,   such that   Then   Noting that is a partition of , we have that   Hence , or . As this holds for all , it follows that and so is right-continuous.  The Jordan decomposition of ,   shows that is the difference of two increasing, right-continuous functions.    Let be a signed Borel measure on be a signed Borel measure on . Then is a right-continuous function of bounded variation.  Conversely, if is a right-continuous function of bounded variation on , then there is a unique Borel signed measure on such that for all .    The first part of the theorem is dealt with in Lemma .  Let be a right-continuous function of bounded variation on . Let be the Jordan decomposition of . By Proposition , and are right-continuous. By Corollary , there are Borel measures and on so that is the cumulative distribution function for and is the cumulative distribution function for . Let . Then is a signed Borel measure on , and for any    Theorem gives a correspondence between right-continuous functions of bounded variation, and signed Borel measures on . We have a Jordan decomposition for functions of bounded variation, and we have a Jordan decomposition for signed measures. We will now show that the correspondence given in Theorem sends the Jordan decomposition for functions to the Jordan decomposition for the signed measures, and vice versa.   Let be a right-continuous function of bounded variation on the closed interval , and let be the signed Borel measure satisfying from Theorem . Let be the Jordan decomposition for and be the Jordan decomposition for . Then is the cumulative distribution function for and is the cumulative distribution function for .  Conversely, if is a signed measure on with Jordan decomposition . If is the cumulative distribution function for and is the cumulative distribution function for , then, up to the addition of a constant to and , is the Jordan decomposition of the function .  In both cases, we get that the total variation of is equal to the total variation of , i.e. ,    Let be a right-continuous function of bounded variation and let be the signed Borel measure satisfying (which exists by Theorem ). Let be the Jordan decomposition of , and be the Jordan decomposition of . By Corollary , there are Borel measures and on so that and for intervals .  Note that and so, by Proposition ,   Let be a partition of , by Proposition ,   Thus . Hence .  Let be a signed Borel measure on , and define for . Then is right-continuous and of bounded variation by Theorem , Let be the Jordan decomposition of . Define functions and on by and . By Theorem , and are increasing, right continuous functions. Since , it follows that . Let and be the Jordan decomposition of . By Corollary , there are Borel measures and whose cumulative distribution functions are and , respectively.  Note that . By Proposition for each   By Proposition , for all , and thus   We have now,   Hence   where . It follows that    "
},
{
  "id": "sec-signed-borel-4",
  "level": "2",
  "url": "sec-signed-borel.html#sec-signed-borel-4",
  "type": "Definition",
  "number": "6.2.1",
  "title": "",
  "body": " Let be a topological space and let be the -algebra of Borel sets of . A signed measure on is a signed Borel measure signed measure signed Borel measure if for all compact sets .  "
},
{
  "id": "sec-signed-borel-5",
  "level": "2",
  "url": "sec-signed-borel.html#sec-signed-borel-5",
  "type": "Remark",
  "number": "6.2.2",
  "title": "",
  "body": " If is a signed Borel measure on and is compact, then . It follows that . In particular, if is a signed Borel measure on the closed interval then is of bounded variation.  "
},
{
  "id": "sec-signed-borel-7",
  "level": "2",
  "url": "sec-signed-borel.html#sec-signed-borel-7",
  "type": "Definition",
  "number": "6.2.3",
  "title": "",
  "body": " Let be a function. If is a partition of the variation of over variation is   The total variation of total variation of a function is defined as   When then is of bounded variation . bounded variation for a function  "
},
{
  "id": "ex-inc-has-bounded-variation",
  "level": "2",
  "url": "sec-signed-borel.html#ex-inc-has-bounded-variation",
  "type": "Example",
  "number": "6.2.4",
  "title": "",
  "body": " If is monotone (i.e. is increasing or decreasing), then is of bounded variation. Indeed, if is increasing and is any partition of then   Thus, . If is decreasing then we can show that   "
},
{
  "id": "ex-not-tv-1",
  "level": "2",
  "url": "sec-signed-borel.html#ex-not-tv-1",
  "type": "Example",
  "number": "6.2.5",
  "title": "",
  "body": " Define on by   Then is not of bounded variation. See Exercise .  "
},
{
  "id": "ex-not-tv-2",
  "level": "2",
  "url": "sec-signed-borel.html#ex-not-tv-2",
  "type": "Example",
  "number": "6.2.6",
  "title": "",
  "body": " Define on by   Then is not of bounded variation. See Exercise .  "
},
{
  "id": "prop-bv-vec-sp",
  "level": "2",
  "url": "sec-signed-borel.html#prop-bv-vec-sp",
  "type": "Proposition",
  "number": "6.2.7",
  "title": "",
  "body": " Let be a closed interval in . If are functions of bounded variation then   is of bounded variation for all .  "
},
{
  "id": "sec-signed-borel-15",
  "level": "2",
  "url": "sec-signed-borel.html#sec-signed-borel-15",
  "type": "Proof",
  "number": "6.2.1",
  "title": "",
  "body": " Let be a partition of . Then   Thus   Thus is of bounded variation.  Take any scalar . Then   Thus . The result follows.  "
},
{
  "id": "lem-signed-meas-to-bv",
  "level": "2",
  "url": "sec-signed-borel.html#lem-signed-meas-to-bv",
  "type": "Lemma",
  "number": "6.2.8",
  "title": "",
  "body": " Let be a Borel signed measure on the closed interval . Define a function   Then is the difference of two increasing functions right-continuous. In particular, is right-continuous and of bounded variation.  "
},
{
  "id": "sec-signed-borel-19",
  "level": "2",
  "url": "sec-signed-borel.html#sec-signed-borel-19",
  "type": "Proof",
  "number": "6.2.2",
  "title": "",
  "body": " Let be the Jordan decomposition of . Let be the cumulative distribution of , and let be the cumulative distribution function for . Then   By Theorem , and are increasing, right-continuous functions. By Example  and are of bounded variation, and so is of bounded variation by Proposition .  "
},
{
  "id": "sec-signed-borel-20",
  "level": "2",
  "url": "sec-signed-borel.html#sec-signed-borel-20",
  "type": "Remark",
  "number": "6.2.9",
  "title": "",
  "body": " An alternate way to prove is of bounded variation in Lemma would be to invoke Proposition directly.  "
},
{
  "id": "thm-jordan-decomp-function",
  "level": "2",
  "url": "sec-signed-borel.html#thm-jordan-decomp-function",
  "type": "Theorem",
  "number": "6.2.10",
  "title": "Jordan Decomposition Theorem.",
  "body": " Jordan Decomposition Theorem  Jordan Decomposition Theorem for functions Let be a function of bounded variation on the interval . Then there are increasing functions on such that .  "
},
{
  "id": "sec-signed-borel-26",
  "level": "2",
  "url": "sec-signed-borel.html#sec-signed-borel-26",
  "type": "Proof",
  "number": "6.2.3",
  "title": "",
  "body": " Take . Note that   Thus   and   Hence, the functions and are increasing functions. Let   Then , and so is the difference of two increasing functions.  "
},
{
  "id": "sec-signed-borel-27",
  "level": "2",
  "url": "sec-signed-borel.html#sec-signed-borel-27",
  "type": "Definition",
  "number": "6.2.11",
  "title": "",
  "body": " Let be a function of bounded variation. Let and . Then is called the Jordan decomposition of . Jordan decomposition of a function  "
},
{
  "id": "sec-signed-borel-28",
  "level": "2",
  "url": "sec-signed-borel.html#sec-signed-borel-28",
  "type": "Remark",
  "number": "6.2.12",
  "title": "",
  "body": " Note that for a function of bounded variation   Thus, the total variation of is given by the sum of the total variations of the Jordan decomposition of .  Recall that for a signed measure , the total variation of is given by , where is the Jordan decomposition of .  "
},
{
  "id": "prop-total-var-cont",
  "level": "2",
  "url": "sec-signed-borel.html#prop-total-var-cont",
  "type": "Proposition",
  "number": "6.2.13",
  "title": "",
  "body": " Let be a function of bounded variation on a closed interval . If is a right-continuous function then is right-continuous. In particular, there are right-continuous increasing functions such that .  "
},
{
  "id": "sec-signed-borel-30",
  "level": "2",
  "url": "sec-signed-borel.html#sec-signed-borel-30",
  "type": "Proof",
  "number": "6.2.4",
  "title": "",
  "body": " Suppose that is right-continuous. Take . Let . Since is increasing, . We want to show that .  Fix . By the right-continuity of and definition of , there exists such that   and   when .  Fix with . Choose a partition   so that   Thus,   Now take a partition of ,   such that   Then   Noting that is a partition of , we have that   Hence , or . As this holds for all , it follows that and so is right-continuous.  The Jordan decomposition of ,   shows that is the difference of two increasing, right-continuous functions.  "
},
{
  "id": "thm-signed-meas-1-1-bv",
  "level": "2",
  "url": "sec-signed-borel.html#thm-signed-meas-1-1-bv",
  "type": "Theorem",
  "number": "6.2.14",
  "title": "",
  "body": " Let be a signed Borel measure on be a signed Borel measure on . Then is a right-continuous function of bounded variation.  Conversely, if is a right-continuous function of bounded variation on , then there is a unique Borel signed measure on such that for all .  "
},
{
  "id": "sec-signed-borel-32",
  "level": "2",
  "url": "sec-signed-borel.html#sec-signed-borel-32",
  "type": "Proof",
  "number": "6.2.5",
  "title": "",
  "body": " The first part of the theorem is dealt with in Lemma .  Let be a right-continuous function of bounded variation on . Let be the Jordan decomposition of . By Proposition , and are right-continuous. By Corollary , there are Borel measures and on so that is the cumulative distribution function for and is the cumulative distribution function for . Let . Then is a signed Borel measure on , and for any   "
},
{
  "id": "prop-jordan-decomp-measure-and-function",
  "level": "2",
  "url": "sec-signed-borel.html#prop-jordan-decomp-measure-and-function",
  "type": "Proposition",
  "number": "6.2.15",
  "title": "",
  "body": " Let be a right-continuous function of bounded variation on the closed interval , and let be the signed Borel measure satisfying from Theorem . Let be the Jordan decomposition for and be the Jordan decomposition for . Then is the cumulative distribution function for and is the cumulative distribution function for .  Conversely, if is a signed measure on with Jordan decomposition . If is the cumulative distribution function for and is the cumulative distribution function for , then, up to the addition of a constant to and , is the Jordan decomposition of the function .  In both cases, we get that the total variation of is equal to the total variation of , i.e. ,  "
},
{
  "id": "sec-signed-borel-35",
  "level": "2",
  "url": "sec-signed-borel.html#sec-signed-borel-35",
  "type": "Proof",
  "number": "6.2.6",
  "title": "",
  "body": " Let be a right-continuous function of bounded variation and let be the signed Borel measure satisfying (which exists by Theorem ). Let be the Jordan decomposition of , and be the Jordan decomposition of . By Corollary , there are Borel measures and on so that and for intervals .  Note that and so, by Proposition ,   Let be a partition of , by Proposition ,   Thus . Hence .  Let be a signed Borel measure on , and define for . Then is right-continuous and of bounded variation by Theorem , Let be the Jordan decomposition of . Define functions and on by and . By Theorem , and are increasing, right continuous functions. Since , it follows that . Let and be the Jordan decomposition of . By Corollary , there are Borel measures and whose cumulative distribution functions are and , respectively.  Note that . By Proposition for each   By Proposition , for all , and thus   We have now,   Hence   where . It follows that   "
},
{
  "id": "real-analysis-5-5-5",
  "level": "1",
  "url": "real-analysis-5-5-5.html",
  "type": "Exercises",
  "number": "6.3",
  "title": "Exercises",
  "body": "  Let and be measures on a measurable space .   For a real number , define on by for all . Show that is a measure on .   Define on by  Show that is a measure on . We denote by .       Suppose and are measures on a measurable space and (i.e. for all ). Define on by    Show that is a measure on .   Show that (where is defined by Exercise ).   Show that if is -finite then the is the unique measure satisfying . (Hint: Assume there are two such measures and and show they have to be equal on sets with . Then move to general measurable sets.)      Let be a measurable space. Let and be measures on . Further assume that one or both of and are finite measures. Define , i.e. for all . Show that is a signed measure on .    Let be a measurable space. Let be the set of all finite signed measures on . Define addition on by   for all and all ; and define scalar multiplication on by   for all , , and   Show that for all .   Show that for all and .   Show that is a vector space under the given operations of addition and scalar multiplication.      Let be a signed measure on a measurable space . Suppose with . Show that if , then .    Let be a signed measure on a measurable space . Suppose are positive sets. Show that is a positive set.    Let be a signed measure on a measurable space . and let be a positive set. Define a function on by for all . Show that is a measure on .    Prove Proposition : Let be a signed measure on a measurable space . Show that that the total variation of can be calculated by     Let be a measurable space and let the vector space of finite signed measures on , see Exercise . For , define by   Show that defines a norm on . norm norm on the space of finite signed measures That is, show that   if and only if , the zero measure in ;   for all ; and   for all . I.e. show that satisfies the triangle inequality . triangle inequality for norms      Define on by   Show that is not of bounded variation.    Define on by   Show that is continuous. Show that is not of bounded variation.    Let for . Write as the difference of two increasing, continuous functions.    Let for . Write as the difference of two increasing, continuous functions.    Let be a polynomial on the closed interval . Show that is the difference of two increasing, continuous functions.    Let be a function of bounded variation on an interval . Show that, if , then     Let be a function of bounded variation on the closed interval . Suppose where and are increasing functions. Show that   Show that   if and only if there is a constant such that and . (HINT: Compare this question to Proposition ).   "
},
{
  "id": "exer-measures-vec-space",
  "level": "2",
  "url": "real-analysis-5-5-5.html#exer-measures-vec-space",
  "type": "Exercise",
  "number": "6.3.1",
  "title": "",
  "body": " Let and be measures on a measurable space .   For a real number , define on by for all . Show that is a measure on .   Define on by  Show that is a measure on . We denote by .     "
},
{
  "id": "real-analysis-5-5-5-2",
  "level": "2",
  "url": "real-analysis-5-5-5.html#real-analysis-5-5-5-2",
  "type": "Exercise",
  "number": "6.3.2",
  "title": "",
  "body": " Suppose and are measures on a measurable space and (i.e. for all ). Define on by    Show that is a measure on .   Show that (where is defined by Exercise ).   Show that if is -finite then the is the unique measure satisfying . (Hint: Assume there are two such measures and and show they have to be equal on sets with . Then move to general measurable sets.)    "
},
{
  "id": "exer-diff-of-measures",
  "level": "2",
  "url": "real-analysis-5-5-5.html#exer-diff-of-measures",
  "type": "Exercise",
  "number": "6.3.3",
  "title": "",
  "body": " Let be a measurable space. Let and be measures on . Further assume that one or both of and are finite measures. Define , i.e. for all . Show that is a signed measure on .  "
},
{
  "id": "exer-signed-meas-vec-sp",
  "level": "2",
  "url": "real-analysis-5-5-5.html#exer-signed-meas-vec-sp",
  "type": "Exercise",
  "number": "6.3.4",
  "title": "",
  "body": " Let be a measurable space. Let be the set of all finite signed measures on . Define addition on by   for all and all ; and define scalar multiplication on by   for all , , and   Show that for all .   Show that for all and .   Show that is a vector space under the given operations of addition and scalar multiplication.    "
},
{
  "id": "exer-finite-signed-measures",
  "level": "2",
  "url": "real-analysis-5-5-5.html#exer-finite-signed-measures",
  "type": "Exercise",
  "number": "6.3.5",
  "title": "",
  "body": " Let be a signed measure on a measurable space . Suppose with . Show that if , then .  "
},
{
  "id": "exer-positive-union",
  "level": "2",
  "url": "real-analysis-5-5-5.html#exer-positive-union",
  "type": "Exercise",
  "number": "6.3.6",
  "title": "",
  "body": " Let be a signed measure on a measurable space . Suppose are positive sets. Show that is a positive set.  "
},
{
  "id": "exer-signed-meas-to-meas",
  "level": "2",
  "url": "real-analysis-5-5-5.html#exer-signed-meas-to-meas",
  "type": "Exercise",
  "number": "6.3.7",
  "title": "",
  "body": " Let be a signed measure on a measurable space . and let be a positive set. Define a function on by for all . Show that is a measure on .  "
},
{
  "id": "exer-total-variation",
  "level": "2",
  "url": "real-analysis-5-5-5.html#exer-total-variation",
  "type": "Exercise",
  "number": "6.3.8",
  "title": "",
  "body": " Prove Proposition : Let be a signed measure on a measurable space . Show that that the total variation of can be calculated by   "
},
{
  "id": "exer-signed-measure-space-with-norm",
  "level": "2",
  "url": "real-analysis-5-5-5.html#exer-signed-measure-space-with-norm",
  "type": "Exercise",
  "number": "6.3.9",
  "title": "",
  "body": " Let be a measurable space and let the vector space of finite signed measures on , see Exercise . For , define by   Show that defines a norm on . norm norm on the space of finite signed measures That is, show that   if and only if , the zero measure in ;   for all ; and   for all . I.e. show that satisfies the triangle inequality . triangle inequality for norms    "
},
{
  "id": "exer-not-tv-1",
  "level": "2",
  "url": "real-analysis-5-5-5.html#exer-not-tv-1",
  "type": "Exercise",
  "number": "6.3.10",
  "title": "",
  "body": " Define on by   Show that is not of bounded variation.  "
},
{
  "id": "exer-not-tv-2",
  "level": "2",
  "url": "real-analysis-5-5-5.html#exer-not-tv-2",
  "type": "Exercise",
  "number": "6.3.11",
  "title": "",
  "body": " Define on by   Show that is continuous. Show that is not of bounded variation.  "
},
{
  "id": "exer-sin-bv",
  "level": "2",
  "url": "real-analysis-5-5-5.html#exer-sin-bv",
  "type": "Exercise",
  "number": "6.3.12",
  "title": "",
  "body": " Let for . Write as the difference of two increasing, continuous functions.  "
},
{
  "id": "exer-cos-bv",
  "level": "2",
  "url": "real-analysis-5-5-5.html#exer-cos-bv",
  "type": "Exercise",
  "number": "6.3.13",
  "title": "",
  "body": " Let for . Write as the difference of two increasing, continuous functions.  "
},
{
  "id": "exer-poly-bv",
  "level": "2",
  "url": "real-analysis-5-5-5.html#exer-poly-bv",
  "type": "Exercise",
  "number": "6.3.14",
  "title": "",
  "body": " Let be a polynomial on the closed interval . Show that is the difference of two increasing, continuous functions.  "
},
{
  "id": "real-analysis-5-5-5-15",
  "level": "2",
  "url": "real-analysis-5-5-5.html#real-analysis-5-5-5-15",
  "type": "Exercise",
  "number": "6.3.15",
  "title": "",
  "body": " Let be a function of bounded variation on an interval . Show that, if , then   "
},
{
  "id": "real-analysis-5-5-5-16",
  "level": "2",
  "url": "real-analysis-5-5-5.html#real-analysis-5-5-5-16",
  "type": "Exercise",
  "number": "6.3.16",
  "title": "",
  "body": " Let be a function of bounded variation on the closed interval . Suppose where and are increasing functions. Show that   Show that   if and only if there is a constant such that and . (HINT: Compare this question to Proposition ).  "
},
{
  "id": "chap-meas-fun-3",
  "level": "1",
  "url": "chap-meas-fun-3.html",
  "type": "Section",
  "number": "7.1",
  "title": "Measurable functions",
  "body": " Measurable functions  We first need to decide on what class of functions it makes sense to consider. These will be called measurable functions. Given a set , a function from to is called a real-valued function ; a function from to the extended reals  extended real line is an extended real-valued function . real-valued function extended real-valued function We will be interested in extended real-valued functions. The following theorem is necessary before the definition of a measurable function.   measurable function Let be a measurable space. Let and let be an extended real-valued function with domain . Then the following are equivalent:   for all , ;   for all , ;   for all , ; and   for all , .      Note that   and   As the -algebra is closed under taking complements, (i) is equivalent to (iv), and (ii) is equivalent to (iii).  Assume that (i) holds and take any . For each , the set is in . As a countable intersection of measurable sets is measurable it follows that   is measurable. Hence (ii) holds.  Finally, assume (ii) holds and take any . For each , the set is in . As a countable union of measurable sets is measurable it follows that   is measurable. Hence (i) holds.    measurable function Let be a measurable space, , and be an extended real-valued function. Then is a measurable function with respect to if satisfies any of the equivalent conditions from Theorem . If there is no chance of confusion on what the -algebra is, we will simply say that is a measurable function.  If is a measure space, and is measurable with respect to we also say is measurable with respect to , or -measurable.  If is a measurable function with domain , and there is a measurable set such that and for all , then is finitely supported. measurable function of finite support   Over the next several results we will examples of functions which are measurable. We begin with a simple example. Let be a set and let . We define the characteristic function of , , by characteristic function   Characteristic functions will play an important role in our study of measurable functions. The proof of the following proposition is left as an exercise, Exercise .   Let be a measurable space, and take . The characteristic function is a measurable function if and only if is a measurable set.   We now give an alternative characterization of a measurable real-valued function.   Let be a measurable space.  If is an extended real-valued measurable function on , then is measurable for all open .  If is a real-valued function and is measurable for all open , then is a measurable function.    Let be a measurable extended real-valued function on . Then and are measurable sets for all Thus, if , then   is the intersection of two measurable sets, and hence measurable. That is, if is an open interval, then is measurable. If is open, then where are disjoint open intervals. Thus   is a countable union of measurable sets, and thus is measurable.  If is a real-valued function on an is measurable for open then for all   is measurable. Hence is a measurable function.   Proposition immediately gives the following corollary telling us that (in the right settings) continuous functions are measurable functions.   Let be a topological space, let be the -algebra of Borel sets in , and let be a -algebra with . Let be a continuous function. Then is measurable with respect to .    Since is continuous, is open in for all open sets . Hence, by Proposition , if is an open set in ,   Thus is measurable with respect to .   Recall that two functions and on a measure space are equal almost everywhere if there is a measurable with so that that for all .   Let be a complete measure space. Let be functions from a measurable set to . If almost everywhere and is a measurable function, then is a measurable function.    Let be a measurable set with such that for all . Fix any . Then   Note that   is the intersection of two measurable sets, and thus is measurable. Further   thus is measurable, since is complete. Thus is the union of two measurable sets, and hence is measurable.    The completeness of the measure space is necessary in Proposition , see Example .   The following theorem gives some simple ways of creating measurable functions from measurable functions: by linear combinations and products. Before we start we need to do some mild bookkeeping. If and are measurable functions, with the same measurable domain , we want to consider their sum, . However, if there is an such that and , then is undefined. One way to circumvent this issue would be to only consider real-valued measurable functions. However, there will be times when considering functions with infinite values is either unavoidable or desirable.  Instead, we will focus on measurable that are finite almost everywhere . Let be a measure space. A function on is finite almost everywhere , finite almost eveywhere if there is a with such that for all . If and are two measurable functions with common domain , and and are finite almost everywhere, then there is a measurable set such that for all , and there is a set such that for all . Note that . We can thus, define on by   For we will assign arbitrary values to We thus are not uniquely defining the function , we are instead defining up the equivalence class of equality almost everywhere. That ``equal almost everywhere\" forms an equivalence class in functions is covered by Exercise .   Let be a measure space. Let and be measurable functions with the same domain which are finite almost everywhere. Then   for all , there is a with such that is measurable on ; and   there is a with , is measurable on .    If or are real-valued, or if is complete, then we can take in both (i) and (ii).    That is a measurable function for when is a measurable function is left to Example .  Let and be measurable functions on a measurable set , where both and are finite almost everywhere. Then there is a measurable set such that and and are finite on . Fix . We want to show that   is a measurable set. Take . Then . By the density of the rationals in , there is a such that   Thus   Conversely, if and there is such that   then   Thus   Since and are measurable the sets and are measurable for every . Hence is a measurable set. It follows that is a measurable function on .  Note that   Thus, to show that the product of two measurable functions is measurable, it suffices to show that the square of a measurable function is measurable. Let be a measurable on and take . Then   is a measurable set. If then is also measurable. Thus is a measurable function.  If is a complete measure space we can take in the above cases, by Proposition .   We now introduce an important class of measurable functions: simple functions.   Let be a measurable space, and let be a real-valued measurable function on . The function is simple simple function if is a finite set.    Let be a simple function on a measurable space and let . For each let   By Exercise , each set is a measurable set. Thus   Conversely, if are measurable sets, and are real numbers then if   is a measurable function by Theorem . Further, as takes finitely many values Note the sets are not necessarily disjoint, so may take values other than the values . , is a simple function.   The following few results give further ways of constructing measurable functions from measurable functions.   Let be a complete measure space and let be measurable functions on . Then   is measurable; and   is measurable.      Let be measurable functions, and let Take any . Then   Thus is a measurable set, and hence is a measurale function.  Note that   Hence, is a measurable function.    For a measurable function on a measurable space , is the positive part of positive part of a function and is the negative part of . negative part of a function   Note that, Proposition shows that if is a measurable function, then and is a measurable function. Further, note that . That is, is the difference of two non-negative measurable functions. This decomposition, will be used frequently when studying integration.   Let be a measurable function on a measurable space . The the function is measurable.    Note that Both and are measurable, by Proposition . As and are both non-negative functions, is defined (possibly infinite) for all . It follows from the same argument as in Theorem , that is a measurable function.   The question of whether the composition of measurable functions is measurable is complicated. In general, the answer is no, Example However, there are circumstances where measurability of a composition is guaranteed, Proposition .   In the proof of Lemma , we prove the existence of a non-Lebesgue measurable set and a bijective continuous function such that is Lebesgue measurable. By a simple adjustment, we can assume that We extend to a continuous function on all of by setting for and for . Let .  Consider the measure space , where is all Lebesgue measurable sets in . The function is a measurable function since is measurable, Exercise , and is measurable since it is continuous, Proposition . However the function is not measurable. Indeed   is not Lebesgue measurable, and hence is not a measurable function.    Let be a measurable space, let be a real-valued measurable function on , and let be a continuous function. Then is continuous.    Take any open set , and let . Then is an open subset of , since is continuous. By, Proposition , is a measurable set. Thus,   is measurable for all open sets . Hence is a measurable function, by Proposition .    We have only considered extended real-valued measurable functions. This is what we will be interested in for the majority of these notes. In more generality, if and are two measurable spaces, a function is measurable with respect to and measurable function between two measure spaces if for all . This definition is consistent with Definition when and , the Borel sets in the extended real line. See Exercise for more on . This fact almost follows from Proposition . The full details are left to Exercise .  When we study measurable functions from to , we study measurable functions from with respect to and , is the Lebesgue measurable sets on and is the Borel sets on . I.e. we study measurable functions from the measure space to the measure space . The lopsidedness of this naturally raises questions. Firstly, the advantage of the domain being is that is a complete measure space. See, e.g., Proposition for an advantage of having a complete measure space in the domain.  One reason for taking the Borel sets in the range, instead of all Lebesgue measurable sets, is the following. As described in the proof of Lemma and Example , there is a continuous function and a set which is not Lebesgue measurable, such that is Lebesgue measurable but is not a Borel set, and . I.e. there is a continuous function and a Lebesgue measurable set such that is not Lebesgue measurable. In conclusion, the measurable functions from to do not include all continuous functions. We do, however, want to study the continuous functions. Hence the measurable functions from to is not the right class to study.   "
},
{
  "id": "thm-measurable-function-equiv",
  "level": "2",
  "url": "chap-meas-fun-3.html#thm-measurable-function-equiv",
  "type": "Theorem",
  "number": "7.1.1",
  "title": "",
  "body": " measurable function Let be a measurable space. Let and let be an extended real-valued function with domain . Then the following are equivalent:   for all , ;   for all , ;   for all , ; and   for all , .    "
},
{
  "id": "chap-meas-fun-3-4",
  "level": "2",
  "url": "chap-meas-fun-3.html#chap-meas-fun-3-4",
  "type": "Proof",
  "number": "7.1.1",
  "title": "",
  "body": " Note that   and   As the -algebra is closed under taking complements, (i) is equivalent to (iv), and (ii) is equivalent to (iii).  Assume that (i) holds and take any . For each , the set is in . As a countable intersection of measurable sets is measurable it follows that   is measurable. Hence (ii) holds.  Finally, assume (ii) holds and take any . For each , the set is in . As a countable union of measurable sets is measurable it follows that   is measurable. Hence (i) holds.  "
},
{
  "id": "def-meas-func",
  "level": "2",
  "url": "chap-meas-fun-3.html#def-meas-func",
  "type": "Definition",
  "number": "7.1.2",
  "title": "",
  "body": " measurable function Let be a measurable space, , and be an extended real-valued function. Then is a measurable function with respect to if satisfies any of the equivalent conditions from Theorem . If there is no chance of confusion on what the -algebra is, we will simply say that is a measurable function.  If is a measure space, and is measurable with respect to we also say is measurable with respect to , or -measurable.  If is a measurable function with domain , and there is a measurable set such that and for all , then is finitely supported. measurable function of finite support  "
},
{
  "id": "prop-char-measurable",
  "level": "2",
  "url": "chap-meas-fun-3.html#prop-char-measurable",
  "type": "Proposition",
  "number": "7.1.3",
  "title": "",
  "body": " Let be a measurable space, and take . The characteristic function is a measurable function if and only if is a measurable set.  "
},
{
  "id": "prop-meas-fun-inverse-open",
  "level": "2",
  "url": "chap-meas-fun-3.html#prop-meas-fun-inverse-open",
  "type": "Proposition",
  "number": "7.1.4",
  "title": "",
  "body": " Let be a measurable space.  If is an extended real-valued measurable function on , then is measurable for all open .  If is a real-valued function and is measurable for all open , then is a measurable function.  "
},
{
  "id": "chap-meas-fun-3-12",
  "level": "2",
  "url": "chap-meas-fun-3.html#chap-meas-fun-3-12",
  "type": "Proof",
  "number": "7.1.2",
  "title": "",
  "body": " Let be a measurable extended real-valued function on . Then and are measurable sets for all Thus, if , then   is the intersection of two measurable sets, and hence measurable. That is, if is an open interval, then is measurable. If is open, then where are disjoint open intervals. Thus   is a countable union of measurable sets, and thus is measurable.  If is a real-valued function on an is measurable for open then for all   is measurable. Hence is a measurable function.  "
},
{
  "id": "cor-Cont-are-meas",
  "level": "2",
  "url": "chap-meas-fun-3.html#cor-Cont-are-meas",
  "type": "Corollary",
  "number": "7.1.5",
  "title": "",
  "body": " Let be a topological space, let be the -algebra of Borel sets in , and let be a -algebra with . Let be a continuous function. Then is measurable with respect to .  "
},
{
  "id": "chap-meas-fun-3-15",
  "level": "2",
  "url": "chap-meas-fun-3.html#chap-meas-fun-3-15",
  "type": "Proof",
  "number": "7.1.3",
  "title": "",
  "body": " Since is continuous, is open in for all open sets . Hence, by Proposition , if is an open set in ,   Thus is measurable with respect to .  "
},
{
  "id": "prop-f-g-a-e",
  "level": "2",
  "url": "chap-meas-fun-3.html#prop-f-g-a-e",
  "type": "Proposition",
  "number": "7.1.6",
  "title": "",
  "body": " Let be a complete measure space. Let be functions from a measurable set to . If almost everywhere and is a measurable function, then is a measurable function.  "
},
{
  "id": "chap-meas-fun-3-18",
  "level": "2",
  "url": "chap-meas-fun-3.html#chap-meas-fun-3-18",
  "type": "Proof",
  "number": "7.1.4",
  "title": "",
  "body": " Let be a measurable set with such that for all . Fix any . Then   Note that   is the intersection of two measurable sets, and thus is measurable. Further   thus is measurable, since is complete. Thus is the union of two measurable sets, and hence is measurable.  "
},
{
  "id": "chap-meas-fun-3-19",
  "level": "2",
  "url": "chap-meas-fun-3.html#chap-meas-fun-3-19",
  "type": "Remark",
  "number": "7.1.7",
  "title": "",
  "body": " The completeness of the measure space is necessary in Proposition , see Example .  "
},
{
  "id": "thm-meas-fnc-vec-sp",
  "level": "2",
  "url": "chap-meas-fun-3.html#thm-meas-fnc-vec-sp",
  "type": "Theorem",
  "number": "7.1.8",
  "title": "",
  "body": " Let be a measure space. Let and be measurable functions with the same domain which are finite almost everywhere. Then   for all , there is a with such that is measurable on ; and   there is a with , is measurable on .    If or are real-valued, or if is complete, then we can take in both (i) and (ii).  "
},
{
  "id": "chap-meas-fun-3-25",
  "level": "2",
  "url": "chap-meas-fun-3.html#chap-meas-fun-3-25",
  "type": "Proof",
  "number": "7.1.5",
  "title": "",
  "body": " That is a measurable function for when is a measurable function is left to Example .  Let and be measurable functions on a measurable set , where both and are finite almost everywhere. Then there is a measurable set such that and and are finite on . Fix . We want to show that   is a measurable set. Take . Then . By the density of the rationals in , there is a such that   Thus   Conversely, if and there is such that   then   Thus   Since and are measurable the sets and are measurable for every . Hence is a measurable set. It follows that is a measurable function on .  Note that   Thus, to show that the product of two measurable functions is measurable, it suffices to show that the square of a measurable function is measurable. Let be a measurable on and take . Then   is a measurable set. If then is also measurable. Thus is a measurable function.  If is a complete measure space we can take in the above cases, by Proposition .  "
},
{
  "id": "chap-meas-fun-3-27",
  "level": "2",
  "url": "chap-meas-fun-3.html#chap-meas-fun-3-27",
  "type": "Definition",
  "number": "7.1.9",
  "title": "",
  "body": " Let be a measurable space, and let be a real-valued measurable function on . The function is simple simple function if is a finite set.  "
},
{
  "id": "chap-meas-fun-3-28",
  "level": "2",
  "url": "chap-meas-fun-3.html#chap-meas-fun-3-28",
  "type": "Remark",
  "number": "7.1.10",
  "title": "",
  "body": " Let be a simple function on a measurable space and let . For each let   By Exercise , each set is a measurable set. Thus   Conversely, if are measurable sets, and are real numbers then if   is a measurable function by Theorem . Further, as takes finitely many values Note the sets are not necessarily disjoint, so may take values other than the values . , is a simple function.  "
},
{
  "id": "prop-max-min-meas",
  "level": "2",
  "url": "chap-meas-fun-3.html#prop-max-min-meas",
  "type": "Proposition",
  "number": "7.1.11",
  "title": "",
  "body": " Let be a complete measure space and let be measurable functions on . Then   is measurable; and   is measurable.    "
},
{
  "id": "chap-meas-fun-3-31",
  "level": "2",
  "url": "chap-meas-fun-3.html#chap-meas-fun-3-31",
  "type": "Proof",
  "number": "7.1.6",
  "title": "",
  "body": " Let be measurable functions, and let Take any . Then   Thus is a measurable set, and hence is a measurale function.  Note that   Hence, is a measurable function.  "
},
{
  "id": "chap-meas-fun-3-32",
  "level": "2",
  "url": "chap-meas-fun-3.html#chap-meas-fun-3-32",
  "type": "Definition",
  "number": "7.1.12",
  "title": "",
  "body": " For a measurable function on a measurable space , is the positive part of positive part of a function and is the negative part of . negative part of a function  "
},
{
  "id": "cor-abs-val",
  "level": "2",
  "url": "chap-meas-fun-3.html#cor-abs-val",
  "type": "Corollary",
  "number": "7.1.13",
  "title": "",
  "body": " Let be a measurable function on a measurable space . The the function is measurable.  "
},
{
  "id": "chap-meas-fun-3-35",
  "level": "2",
  "url": "chap-meas-fun-3.html#chap-meas-fun-3-35",
  "type": "Proof",
  "number": "7.1.7",
  "title": "",
  "body": " Note that Both and are measurable, by Proposition . As and are both non-negative functions, is defined (possibly infinite) for all . It follows from the same argument as in Theorem , that is a measurable function.  "
},
{
  "id": "ex-comp-not-meas",
  "level": "2",
  "url": "chap-meas-fun-3.html#ex-comp-not-meas",
  "type": "Example",
  "number": "7.1.14",
  "title": "",
  "body": " In the proof of Lemma , we prove the existence of a non-Lebesgue measurable set and a bijective continuous function such that is Lebesgue measurable. By a simple adjustment, we can assume that We extend to a continuous function on all of by setting for and for . Let .  Consider the measure space , where is all Lebesgue measurable sets in . The function is a measurable function since is measurable, Exercise , and is measurable since it is continuous, Proposition . However the function is not measurable. Indeed   is not Lebesgue measurable, and hence is not a measurable function.  "
},
{
  "id": "prop-comp-meas",
  "level": "2",
  "url": "chap-meas-fun-3.html#prop-comp-meas",
  "type": "Proposition",
  "number": "7.1.15",
  "title": "",
  "body": " Let be a measurable space, let be a real-valued measurable function on , and let be a continuous function. Then is continuous.  "
},
{
  "id": "chap-meas-fun-3-39",
  "level": "2",
  "url": "chap-meas-fun-3.html#chap-meas-fun-3-39",
  "type": "Proof",
  "number": "7.1.8",
  "title": "",
  "body": " Take any open set , and let . Then is an open subset of , since is continuous. By, Proposition , is a measurable set. Thus,   is measurable for all open sets . Hence is a measurable function, by Proposition .  "
},
{
  "id": "rem-morphisms",
  "level": "2",
  "url": "chap-meas-fun-3.html#rem-morphisms",
  "type": "Remark",
  "number": "7.1.16",
  "title": "",
  "body": " We have only considered extended real-valued measurable functions. This is what we will be interested in for the majority of these notes. In more generality, if and are two measurable spaces, a function is measurable with respect to and measurable function between two measure spaces if for all . This definition is consistent with Definition when and , the Borel sets in the extended real line. See Exercise for more on . This fact almost follows from Proposition . The full details are left to Exercise .  When we study measurable functions from to , we study measurable functions from with respect to and , is the Lebesgue measurable sets on and is the Borel sets on . I.e. we study measurable functions from the measure space to the measure space . The lopsidedness of this naturally raises questions. Firstly, the advantage of the domain being is that is a complete measure space. See, e.g., Proposition for an advantage of having a complete measure space in the domain.  One reason for taking the Borel sets in the range, instead of all Lebesgue measurable sets, is the following. As described in the proof of Lemma and Example , there is a continuous function and a set which is not Lebesgue measurable, such that is Lebesgue measurable but is not a Borel set, and . I.e. there is a continuous function and a Lebesgue measurable set such that is not Lebesgue measurable. In conclusion, the measurable functions from to do not include all continuous functions. We do, however, want to study the continuous functions. Hence the measurable functions from to is not the right class to study.  "
},
{
  "id": "chap-meas-fun-4",
  "level": "1",
  "url": "chap-meas-fun-4.html",
  "type": "Section",
  "number": "7.2",
  "title": "Approximations of measurable functions",
  "body": " Approximations of measurable functions  Equivalently, there are several ways we can say that a sequence of functions converges to a function . You will already be familiar with the concept of pointwise convergence of functions and, at least for functions from to , uniform convergence. We recall these definitions below, together with an unfamiliar form of convergence: convergence pointwise almost everywhere.   Let be a measure space, let be a sequence of extended real-valued functions on , and let be an extended real-valued function on .  The sequence  converges to pointwise almost everywhere convergence pointwise almost everywhere often abbreviated to pointwise a.e. if there is an with , such that   for all .  If   for all then we say that the sequence  converges pointwise to . convergence pointwise  The sequence converges uniformly convergence uniform if for all there exists an such that   for all and .    The relationship between these three forms of convergence is:   Neither of the implications go the opposite way, however. Recall that the sequence on converges pointwise to the function   but does not converge uniformly to .  Suppose is a non-empty Lebesgue measurable set with . Define functions   Then converges pointwise a.e. to the zero function , whilst does not converge pointwise to any function.   Our main goal in this section is two prove two theorems: The Simple Approximation Theorem, Theorem , which says that any measurable function is a pointwise limit of simple functions; and Ergoroff's Theorem, Theorem , which says that if converge pointwise to , then there is a large set on which the convergence is uniform.  We first establish that a pointwise limit of measurable functions is measurable.   Let be a measure space. Suppose is a sequence of measurable functions on that converge pointwise almost everywhere to a function . Then, if either   is a complete measure space; or   the sequence converges pointwise to ,    then is a measurable function.    Let be a measurable set with such that converges to for all . If is complete, then is measurable if and only if is measurable, by Proposition . Thus, by excising if necessary, we can assume that converges pointwise to .  Fix and let   Our goal is to show that is a measurable set. Note that, if , then there exists an such that   Conversely, suppose satisfies   Then , and hence . Thus   Thus, since each is a measurable function, is a countable union of a countable intersection of measurable sets. Thus is measurable. As was chosen arbitrarily, is a measurable function.    The Simple Approximation Theorem  Simple Approximation Theorem Let be a measure space and let be an extended real-valued function on . Then is measurable if and only is the pointwise limit of a sequence of simple functions satisfying for all .  If is a non-negative function, the sequence can be chosen to be increasing.  If is -finite, then the simple functions can each be chosen to be of finite support.    If is a pointwise limit of simple functions, then is measurable by Proposition .  Suppose now that is measurable. Assume first that . For each , and , let   For each , the sets are disjoint measurable sets. Define scalars by   For each define a simple function by   Note .  We claim that converge pointwise to . First, suppose . Fix Choose an integer such that and . Then, if , there is a such that . Thus,   Thus .  If , then for all . Thus   Hence converges pointwise to .  By replacing with we can make sure the sequence is increasing.  For an arbitrary measurable function we can find a sequences and of simple functions which converge pointwise to and respectively, with and . Then is a sequence of simple functions which converge pointwise to . Further   Finally, suppose that is a -finite measure space and is a sequence of simple functions that converge pointwise to a measurable function . Let be an increasing sequence of measurable sets such that for all , and . For each define the function   Then is a sequence of finitely supported simple functions which converge pointwise to .   As noted in Remark , pointwise a.e. convergence is weaker than pointwise convergence which is weaker than uniform convergence. Our goal is to prove Ergoroff's Theorem, which states that, in certain cases, pointwise a.e. convergence implies uniform convergence on a large set.   Ergoroff's Theorem  Ergoroff's Theorem Let be a finite measure space and let be a sequence of measurable functions on which converge pointwise a.e. to a finite a.e. function . Then for all there is a measurable set such that   converges uniformly to on ;   .      By removing a set of measure if necessary, we can assume that converges pointwise to on . By removing another measure set, we can assume that is real-valued.  Fix . For each , the function is measurable, and hence the set   \\ is a measurable set. For each let be the measurable set   Then is an increasing sequence of measurable sets and , since converges pointwise to on . By the continuity of measure,   Thus, for any there is an such that   Note that on for .  Fix . For each , apply the above argument with and to find a measurable set and an index such that   and   for all and .  Let . We will show that and converges uniformly to on . First note that   Take any . Choose integer such that . Then, if ,   for all . As , it follows that   for all and . Thus converges uniformly to on and    Ergoroff's Theorem on  Ergoroff's Theorem on the real line Let be a Lebesegue measurable set with . Let be a sequence of measurable functions on which converge a.e. to a finite a.e. function .  For each there is a closed set such that and converges uniformly to on .    Fix . By Theorem there is a measurable set such that and converges uniformly to on . By Theorem , there is a closed set such that .  As , converges uniformly to on . Also   completing the proof.   "
},
{
  "id": "chap-meas-fun-4-3",
  "level": "2",
  "url": "chap-meas-fun-4.html#chap-meas-fun-4-3",
  "type": "Definition",
  "number": "7.2.1",
  "title": "",
  "body": " Let be a measure space, let be a sequence of extended real-valued functions on , and let be an extended real-valued function on .  The sequence  converges to pointwise almost everywhere convergence pointwise almost everywhere often abbreviated to pointwise a.e. if there is an with , such that   for all .  If   for all then we say that the sequence  converges pointwise to . convergence pointwise  The sequence converges uniformly convergence uniform if for all there exists an such that   for all and .  "
},
{
  "id": "rem-types-of-convergence",
  "level": "2",
  "url": "chap-meas-fun-4.html#rem-types-of-convergence",
  "type": "Remark",
  "number": "7.2.2",
  "title": "",
  "body": " The relationship between these three forms of convergence is:   Neither of the implications go the opposite way, however. Recall that the sequence on converges pointwise to the function   but does not converge uniformly to .  Suppose is a non-empty Lebesgue measurable set with . Define functions   Then converges pointwise a.e. to the zero function , whilst does not converge pointwise to any function.  "
},
{
  "id": "prop-pw-lim",
  "level": "2",
  "url": "chap-meas-fun-4.html#prop-pw-lim",
  "type": "Proposition",
  "number": "7.2.3",
  "title": "",
  "body": " Let be a measure space. Suppose is a sequence of measurable functions on that converge pointwise almost everywhere to a function . Then, if either   is a complete measure space; or   the sequence converges pointwise to ,    then is a measurable function.  "
},
{
  "id": "chap-meas-fun-4-8",
  "level": "2",
  "url": "chap-meas-fun-4.html#chap-meas-fun-4-8",
  "type": "Proof",
  "number": "7.2.1",
  "title": "",
  "body": " Let be a measurable set with such that converges to for all . If is complete, then is measurable if and only if is measurable, by Proposition . Thus, by excising if necessary, we can assume that converges pointwise to .  Fix and let   Our goal is to show that is a measurable set. Note that, if , then there exists an such that   Conversely, suppose satisfies   Then , and hence . Thus   Thus, since each is a measurable function, is a countable union of a countable intersection of measurable sets. Thus is measurable. As was chosen arbitrarily, is a measurable function.  "
},
{
  "id": "thm-simple-approx",
  "level": "2",
  "url": "chap-meas-fun-4.html#thm-simple-approx",
  "type": "Theorem",
  "number": "7.2.4",
  "title": "The Simple Approximation Theorem.",
  "body": " The Simple Approximation Theorem  Simple Approximation Theorem Let be a measure space and let be an extended real-valued function on . Then is measurable if and only is the pointwise limit of a sequence of simple functions satisfying for all .  If is a non-negative function, the sequence can be chosen to be increasing.  If is -finite, then the simple functions can each be chosen to be of finite support.  "
},
{
  "id": "chap-meas-fun-4-10",
  "level": "2",
  "url": "chap-meas-fun-4.html#chap-meas-fun-4-10",
  "type": "Proof",
  "number": "7.2.2",
  "title": "",
  "body": " If is a pointwise limit of simple functions, then is measurable by Proposition .  Suppose now that is measurable. Assume first that . For each , and , let   For each , the sets are disjoint measurable sets. Define scalars by   For each define a simple function by   Note .  We claim that converge pointwise to . First, suppose . Fix Choose an integer such that and . Then, if , there is a such that . Thus,   Thus .  If , then for all . Thus   Hence converges pointwise to .  By replacing with we can make sure the sequence is increasing.  For an arbitrary measurable function we can find a sequences and of simple functions which converge pointwise to and respectively, with and . Then is a sequence of simple functions which converge pointwise to . Further   Finally, suppose that is a -finite measure space and is a sequence of simple functions that converge pointwise to a measurable function . Let be an increasing sequence of measurable sets such that for all , and . For each define the function   Then is a sequence of finitely supported simple functions which converge pointwise to .  "
},
{
  "id": "thm-ergoroff",
  "level": "2",
  "url": "chap-meas-fun-4.html#thm-ergoroff",
  "type": "Theorem",
  "number": "7.2.5",
  "title": "Ergoroff’s Theorem.",
  "body": " Ergoroff's Theorem  Ergoroff's Theorem Let be a finite measure space and let be a sequence of measurable functions on which converge pointwise a.e. to a finite a.e. function . Then for all there is a measurable set such that   converges uniformly to on ;   .    "
},
{
  "id": "chap-meas-fun-4-13",
  "level": "2",
  "url": "chap-meas-fun-4.html#chap-meas-fun-4-13",
  "type": "Proof",
  "number": "7.2.3",
  "title": "",
  "body": " By removing a set of measure if necessary, we can assume that converges pointwise to on . By removing another measure set, we can assume that is real-valued.  Fix . For each , the function is measurable, and hence the set   \\ is a measurable set. For each let be the measurable set   Then is an increasing sequence of measurable sets and , since converges pointwise to on . By the continuity of measure,   Thus, for any there is an such that   Note that on for .  Fix . For each , apply the above argument with and to find a measurable set and an index such that   and   for all and .  Let . We will show that and converges uniformly to on . First note that   Take any . Choose integer such that . Then, if ,   for all . As , it follows that   for all and . Thus converges uniformly to on and  "
},
{
  "id": "cor-ergoroff",
  "level": "2",
  "url": "chap-meas-fun-4.html#cor-ergoroff",
  "type": "Corollary",
  "number": "7.2.6",
  "title": "Ergoroff’s Theorem on <span class=\"process-math\">\\(\\mathbb{R}\\)<\/span>.",
  "body": " Ergoroff's Theorem on  Ergoroff's Theorem on the real line Let be a Lebesegue measurable set with . Let be a sequence of measurable functions on which converge a.e. to a finite a.e. function .  For each there is a closed set such that and converges uniformly to on .  "
},
{
  "id": "chap-meas-fun-4-15",
  "level": "2",
  "url": "chap-meas-fun-4.html#chap-meas-fun-4-15",
  "type": "Proof",
  "number": "7.2.4",
  "title": "",
  "body": " Fix . By Theorem there is a measurable set such that and converges uniformly to on . By Theorem , there is a closed set such that .  As , converges uniformly to on . Also   completing the proof.  "
},
{
  "id": "chap-meas-fun-5",
  "level": "1",
  "url": "chap-meas-fun-5.html",
  "type": "Exercises",
  "number": "7.3",
  "title": "Exercises",
  "body": "  Let be a measurable space, and let be a measurable extended real-valued function with measurable domain . Show that the set   is measurable for all (HINT: you will need to treat the values and differently than ).    Give an example of a measurable space and an extended real-valued function with measurable domain which satisfies   is measurable for all , but is not a measurable function.    Let be a measurable space. Let and let be the characteristic function on . Show that is a measurable function if and only if is a measurable set.    Let be a measure space which is not complete. Show that there is a measurable function on , and a function on such that almost everywhere, but is not a measurable function.    Let be two continuous functions on . Show that if almost everywhere, then .    Let be a measure space and let be the collection of all extended real-valued functions on . Define a relation on by   Show that is an equivalence relation on .    Let be a measurable space, and let be a measurable function with measurable domain . Show that is a measurable function for all .    Let be a measurable space and let   where are measurable sets, and . Show that there are disjoint measurable sets and distinct real numbers such that     Let be a measurable space, and let be a sequence of measurable functions on . Show that the functions   ;   ;   ; and      are all measurable functions.    Let be a measure space and let be a bounded measurable function. Show that, for all there exist simple functions and such that and on .    Let be a measure space and let be a bounded measurable function. Show that there is a sequence of simple functions with for all, such that converges uniformly to . (HINT: Use Exercise )    Let be a measurable space. Let be the extended real-line and let be the Borel sets in , with respect to the topology defined in Exercise (see also Exercise ).  Let be a function. Show that is a measurable function if and only if for all .   "
},
{
  "id": "exer-f-c-meas",
  "level": "2",
  "url": "chap-meas-fun-5.html#exer-f-c-meas",
  "type": "Exercise",
  "number": "7.3.1",
  "title": "",
  "body": " Let be a measurable space, and let be a measurable extended real-valued function with measurable domain . Show that the set   is measurable for all (HINT: you will need to treat the values and differently than ).  "
},
{
  "id": "exer-f-c-not-meas",
  "level": "2",
  "url": "chap-meas-fun-5.html#exer-f-c-not-meas",
  "type": "Exercise",
  "number": "7.3.2",
  "title": "",
  "body": " Give an example of a measurable space and an extended real-valued function with measurable domain which satisfies   is measurable for all , but is not a measurable function.  "
},
{
  "id": "exer-char-measurable",
  "level": "2",
  "url": "chap-meas-fun-5.html#exer-char-measurable",
  "type": "Exercise",
  "number": "7.3.3",
  "title": "",
  "body": " Let be a measurable space. Let and let be the characteristic function on . Show that is a measurable function if and only if is a measurable set.  "
},
{
  "id": "exer-f-g-a-e",
  "level": "2",
  "url": "chap-meas-fun-5.html#exer-f-g-a-e",
  "type": "Exercise",
  "number": "7.3.4",
  "title": "",
  "body": " Let be a measure space which is not complete. Show that there is a measurable function on , and a function on such that almost everywhere, but is not a measurable function.  "
},
{
  "id": "exer-cont-ae",
  "level": "2",
  "url": "chap-meas-fun-5.html#exer-cont-ae",
  "type": "Exercise",
  "number": "7.3.5",
  "title": "",
  "body": " Let be two continuous functions on . Show that if almost everywhere, then .  "
},
{
  "id": "exer-meas-func-equiv",
  "level": "2",
  "url": "chap-meas-fun-5.html#exer-meas-func-equiv",
  "type": "Exercise",
  "number": "7.3.6",
  "title": "",
  "body": " Let be a measure space and let be the collection of all extended real-valued functions on . Define a relation on by   Show that is an equivalence relation on .  "
},
{
  "id": "exer-scale-meas",
  "level": "2",
  "url": "chap-meas-fun-5.html#exer-scale-meas",
  "type": "Exercise",
  "number": "7.3.7",
  "title": "",
  "body": " Let be a measurable space, and let be a measurable function with measurable domain . Show that is a measurable function for all .  "
},
{
  "id": "exer-simple-disjiont",
  "level": "2",
  "url": "chap-meas-fun-5.html#exer-simple-disjiont",
  "type": "Exercise",
  "number": "7.3.8",
  "title": "",
  "body": " Let be a measurable space and let   where are measurable sets, and . Show that there are disjoint measurable sets and distinct real numbers such that   "
},
{
  "id": "exer-sup-inf-liminf-limsup",
  "level": "2",
  "url": "chap-meas-fun-5.html#exer-sup-inf-liminf-limsup",
  "type": "Exercise",
  "number": "7.3.9",
  "title": "",
  "body": " Let be a measurable space, and let be a sequence of measurable functions on . Show that the functions   ;   ;   ; and      are all measurable functions.  "
},
{
  "id": "exer-simple-approx-lemma",
  "level": "2",
  "url": "chap-meas-fun-5.html#exer-simple-approx-lemma",
  "type": "Exercise",
  "number": "7.3.10",
  "title": "",
  "body": " Let be a measure space and let be a bounded measurable function. Show that, for all there exist simple functions and such that and on .  "
},
{
  "id": "exer-uniform-convergence",
  "level": "2",
  "url": "chap-meas-fun-5.html#exer-uniform-convergence",
  "type": "Exercise",
  "number": "7.3.11",
  "title": "",
  "body": " Let be a measure space and let be a bounded measurable function. Show that there is a sequence of simple functions with for all, such that converges uniformly to . (HINT: Use Exercise )  "
},
{
  "id": "exer-Borel-meas-functions",
  "level": "2",
  "url": "chap-meas-fun-5.html#exer-Borel-meas-functions",
  "type": "Exercise",
  "number": "7.3.12",
  "title": "",
  "body": " Let be a measurable space. Let be the extended real-line and let be the Borel sets in , with respect to the topology defined in Exercise (see also Exercise ).  Let be a function. Show that is a measurable function if and only if for all .  "
},
{
  "id": "chap-integration-3",
  "level": "1",
  "url": "chap-integration-3.html",
  "type": "Section",
  "number": "8.1",
  "title": "Integration of non-negative functions",
  "body": " Integration of non-negative functions   Let be a measure space. Let be a non-negative simple function on where are distinct scalars and are disjoint measurable functions. We define the integral of with respect to , integral of a non-negative simple function denote as   If is a measurable set we define the integral of over as    Note that, the condition that is non-negative is necessary in order to guarantee that is defined. If and then   is not defined.   Let be a measure space and let be a non-negative simple function. If   where are (not necessarily distinct) scalars and are disjoint measurable sets, then     Let be distinct scalars and be disjoint sets such that . Assume , (by adding to and to if necessary).  Note that for each , . Thus, for   Hence   Hence     linearity of integration non-negative simple functions Let be a measure space and let and be non-negative simple functions on . Then, for any scalars ,   Further, integration is monotonic: monotonicity of integration non-negative simple functions if then     That is straightforward.  Let and be simple functions. Let , , for , and . Then   By Lemma ,   Now suppose that and are non-negative simple functions with . Then . It follows that   Hence .    Let be a collection of measurable sets, let be non-negative real numbers, and let By Theorem ,   That is, if is a simple function we do not need the sets to be disjoint in order to easily calculate   The following corollary is immediate on noting that   for disjoint sets and .   If non-negative simple function on a measure space and are disjoint sets, then    The next corollary will be used frequently. It tells us that the behavior of a function on a set of measure does not affect the integral.   If is a simple function on a measure space and satisfies then    We will now define the integral of non-negative measurable functions.   Let be a measure space and let be a non-negative measurable function on . Define the integral of with respect to integral of a non-negative function by   If is a measurable set we define the integral of over as   A non-negative measurable function on is integrable integrable non-negative functions if   When is a Lebesgue measurable set, is the Lebesgue measurable subsets of , and is the Lebesgue measure, we refer to the integral with respect to as the Lebesgue integral . integral Lebesgue integral If is an integrable function with respect to we say that is Lebesgue integrable. integrable Lebesgue integrable   The proof of the following two propositions are left to Exercise and Exercise , respectively.   Let be a measure space, let be non-negative measurable function on , and let be a measurable set with . Then     Monotonicity of integration  monotonicity of integration non-negative functions Let be a measure space, and let and be non-negative measurable functions on . If then    Note that it may be possible for the integral of a non-negative measurable function to be infinite. That is does not need to integrable in order to calculate . If is a simple function (where are measurable sets), then if and only if for some . If , it is possible to have even if for all simple function . The following example illustrates this point.   Consider the function on the interval . Let be the Lebesgue measure on . We will show whilst for all simple .  First, suppose is a simple function with . For each , for all . Since , it follows that if , then is a bounded set. Thus for each when , and so .  For each define a simple function   where denotes the ceiling function (i.e. round to the nearest integer above). Then for each .    The functions (red) and (blue) from Example    For each we have    Thus, for each ,   and so   As the harmonic series is not convergent, it follows that    If is integrable, then will be, in some sense, well-behaved. We make this explicit in Theorem after the following important lemma.   Chebyshev's Inequality  Chebyshev's Inequality Let be a measure space and let be a non-negative measurable function. Then, for each real number ,     Fix and let   Note that, since is measurable, is measurable. Let . Then is simple and . Further . Thus   Dividing the above inequality by gives the desired result.    Let be a measure space and let be a non-negative measurable function such that . Then is finite almost everywhere and the set   is -finite.    Let . To show that is finite a.e. we must show that . For each , let and let . Then and so   Thus   and so . Note that , and so by the continuity of measure   and hence is finite a.e.  Let Note that   By Chebshev's Inequality,   Thus is a countable union of sets of finite measure. That is, is -finite.   In Section we denounced the Riemann integral for not behaving well with limits of functions. In particular, we have no significant theorems on the relationship between the Riemann integral and pointwise limits of functions. So how does our integral behave with pointwise limits, or pointwise a.e. limits? Explicitly, if is a sequence of non-negative measurable functions converging pointwise a.e. to a measurable function , do we have   The answer is, of course: not necessarily. We give some counter examples here.   Let on and let be the Lebesgue measure.. Then We define sequences , and on by   Each of the sequences , and converge pointwise to . Further   Hence   In conclusion, the answer to can be no, for a variety of reasons. The limit on the left-hand side can be finite, it may not exist, or it may be infinite. In each of these cases, may not hold.   The obvious moral to take away from Example is that, in order for there to be a positive answer to we need some additional conditions on the functions and . There is, however, a less obvious, but important point that is worth observing. We first recall some terminology for sequences of numbers. Let be a sequence of real numbers. The limit superior limit inferior liminf limit inferior of is defined as   and the limit superior limit superior limsup limit superior is defined as   The limit inferior and limit superior always exist (with and as possible values). It is always the case that   Further if and only if is a convergent sequence, in which case   Returning to Example . Whilst we do not have that is a limit of the integrals of the functions which converge pointwise to , we do have the following inequalities:   That these inequalities hold for each of our sequences is not a coincidence.   Fatou's Lemma  Fatou's Lemma Let be a measure space, and let be a sequence of non-negative measurable functions which converge pointwise a.e. to a measurable function . Then     Let be a measure set such that converges to pointwise on . By Proposition , replacing with does not change the value of any integrals. We can thus assume that converges pointwise to everywhere on .  Let be a simple function satisfying . We will show that   First, assume that . In this case, there is a measurable set and a real number such that and for all . For each let   Note that since, for , .  As the sets are ascending (and measurable) we have, by the continuity of measure,   By Chebyshev's Inequality,   and hence Thus   Thus  Assume now that . Let Since is simple and we must have that . Fix . For each , let   The sequence is an ascending sequence of measurable sets with . Hence is a descending sequence of measurable sets with intersection . By the continuity of measure, since ,   Choose such that for all . Let be the maximum value takes. For any we have that   Summarizing the above, for , we have   Hence   Since is arbitrary, and since and , it follows that   Now, taking a supremum over all simple with gives the desired result.   Fatou's Lemma will prove to be a powerful tool. We give now our first application of Fatou's Lemma, and our first theorem where a pointwise limit of functions implies a limit of integrals.   Monotone Convergence Theorem  Monotone Convergence Theorem Let be a measure space and let be an increasing sequence of non-negative measurable functions on . Define a function on by Then is measurable and     Note that exists for all since the sequence is increasing. Thus is a well-defined function on . Further is measurable by Proposition and is non-negative since each is non-negative.  By the monotonicity of integration, we have that is an increasing sequence, and hence convergent. Further, since for each ,   By Fatou's Lemma, Lemma ,   Thus    It is reasonable to ask whether `increasing' can be replaced by `decreasing' in the Monotone Convergence Theorem. That is, if is a decreasing sequence of non-negative measurable functions converging pointwise to , is it true that   The following example shows that we cannot expect the statement to hold for decreasing sequences. You could thus reasonable argue that the Monotone Convergence Theorem should be called something else. Maybe the Increasing Convergence Theorem would be better? If you have a problem with it, take it up with the non-existent Mathematical Theorem Naming Committee.   Consider the sequence of measurable functions on the real line. The sequence is decreasing, and converges pointwise to the function . However, for each ,   and so    The proof of the following Corollary to the Monotone Convergence Theorem is left as an exercise, Exercise .   Let be a measure space, let be a sequence of non-negative measurable functions, and let Then     Let be a non-negative measurable function on a measure space . By the definition of the integral, can be approximated by integrals of simple functions below . By the Simple Approximation Theorem, can be (pointwise) approximated by simple functions below . The Monotone Convergence Theorem allows us to put these two approximations together. Explicitly, by the Simple Approximation Theorem, there is an increasing sequence of simple functions , , which converge pointwise to . By the Monotone Convergence Theorem    We end this subsection by showing that integration is linear.   linearity of integration non-negative functions Let be a measure space, let and be non-negative measurable functions, and let , be non-negative real-numbers. Then     By the Simple Approximation Theorem there are increasing sequences of non-negative simple functions and such that converges to pointwise and converges to pointwise. Thus is an increasing sequence of non-negative simple functions which converge pointwise to . Using the Monotone Covergence Theorem and Theorem and the Monotone Convergence Theorem again we get    "
},
{
  "id": "chap-integration-3-2",
  "level": "2",
  "url": "chap-integration-3.html#chap-integration-3-2",
  "type": "Definition",
  "number": "8.1.1",
  "title": "",
  "body": " Let be a measure space. Let be a non-negative simple function on where are distinct scalars and are disjoint measurable functions. We define the integral of with respect to , integral of a non-negative simple function denote as   If is a measurable set we define the integral of over as   "
},
{
  "id": "lem-simp-int",
  "level": "2",
  "url": "chap-integration-3.html#lem-simp-int",
  "type": "Lemma",
  "number": "8.1.2",
  "title": "",
  "body": " Let be a measure space and let be a non-negative simple function. If   where are (not necessarily distinct) scalars and are disjoint measurable sets, then   "
},
{
  "id": "chap-integration-3-7",
  "level": "2",
  "url": "chap-integration-3.html#chap-integration-3-7",
  "type": "Proof",
  "number": "8.1.1",
  "title": "",
  "body": " Let be distinct scalars and be disjoint sets such that . Assume , (by adding to and to if necessary).  Note that for each , . Thus, for   Hence   Hence   "
},
{
  "id": "thm-simple-int-linear",
  "level": "2",
  "url": "chap-integration-3.html#thm-simple-int-linear",
  "type": "Theorem",
  "number": "8.1.3",
  "title": "",
  "body": " linearity of integration non-negative simple functions Let be a measure space and let and be non-negative simple functions on . Then, for any scalars ,   Further, integration is monotonic: monotonicity of integration non-negative simple functions if then   "
},
{
  "id": "chap-integration-3-9",
  "level": "2",
  "url": "chap-integration-3.html#chap-integration-3-9",
  "type": "Proof",
  "number": "8.1.2",
  "title": "",
  "body": " That is straightforward.  Let and be simple functions. Let , , for , and . Then   By Lemma ,   Now suppose that and are non-negative simple functions with . Then . It follows that   Hence .  "
},
{
  "id": "chap-integration-3-10",
  "level": "2",
  "url": "chap-integration-3.html#chap-integration-3-10",
  "type": "Remark",
  "number": "8.1.4",
  "title": "",
  "body": " Let be a collection of measurable sets, let be non-negative real numbers, and let By Theorem ,   That is, if is a simple function we do not need the sets to be disjoint in order to easily calculate  "
},
{
  "id": "cor-simp-A-union-B",
  "level": "2",
  "url": "chap-integration-3.html#cor-simp-A-union-B",
  "type": "Corollary",
  "number": "8.1.5",
  "title": "",
  "body": " If non-negative simple function on a measure space and are disjoint sets, then   "
},
{
  "id": "cor-remove-meas-0-simp",
  "level": "2",
  "url": "chap-integration-3.html#cor-remove-meas-0-simp",
  "type": "Corollary",
  "number": "8.1.6",
  "title": "",
  "body": " If is a simple function on a measure space and satisfies then   "
},
{
  "id": "chap-integration-3-18",
  "level": "2",
  "url": "chap-integration-3.html#chap-integration-3-18",
  "type": "Definition",
  "number": "8.1.7",
  "title": "",
  "body": " Let be a measure space and let be a non-negative measurable function on . Define the integral of with respect to integral of a non-negative function by   If is a measurable set we define the integral of over as   A non-negative measurable function on is integrable integrable non-negative functions if   When is a Lebesgue measurable set, is the Lebesgue measurable subsets of , and is the Lebesgue measure, we refer to the integral with respect to as the Lebesgue integral . integral Lebesgue integral If is an integrable function with respect to we say that is Lebesgue integrable. integrable Lebesgue integrable  "
},
{
  "id": "prop-int-remove-zero-set-non-neg",
  "level": "2",
  "url": "chap-integration-3.html#prop-int-remove-zero-set-non-neg",
  "type": "Proposition",
  "number": "8.1.8",
  "title": "",
  "body": " Let be a measure space, let be non-negative measurable function on , and let be a measurable set with . Then   "
},
{
  "id": "prop-int-mono-non-neg",
  "level": "2",
  "url": "chap-integration-3.html#prop-int-mono-non-neg",
  "type": "Proposition",
  "number": "8.1.9",
  "title": "Monotonicity of integration.",
  "body": " Monotonicity of integration  monotonicity of integration non-negative functions Let be a measure space, and let and be non-negative measurable functions on . If then   "
},
{
  "id": "exam-integral-1-x",
  "level": "2",
  "url": "chap-integration-3.html#exam-integral-1-x",
  "type": "Example",
  "number": "8.1.10",
  "title": "",
  "body": " Consider the function on the interval . Let be the Lebesgue measure on . We will show whilst for all simple .  First, suppose is a simple function with . For each , for all . Since , it follows that if , then is a bounded set. Thus for each when , and so .  For each define a simple function   where denotes the ceiling function (i.e. round to the nearest integer above). Then for each .    The functions (red) and (blue) from Example    For each we have    Thus, for each ,   and so   As the harmonic series is not convergent, it follows that   "
},
{
  "id": "lem-chenyshev",
  "level": "2",
  "url": "chap-integration-3.html#lem-chenyshev",
  "type": "Lemma",
  "number": "8.1.12",
  "title": "Chebyshev’s Inequality.",
  "body": " Chebyshev's Inequality  Chebyshev's Inequality Let be a measure space and let be a non-negative measurable function. Then, for each real number ,   "
},
{
  "id": "chap-integration-3-26",
  "level": "2",
  "url": "chap-integration-3.html#chap-integration-3-26",
  "type": "Proof",
  "number": "8.1.3",
  "title": "",
  "body": " Fix and let   Note that, since is measurable, is measurable. Let . Then is simple and . Further . Thus   Dividing the above inequality by gives the desired result.  "
},
{
  "id": "thm-f-integrable",
  "level": "2",
  "url": "chap-integration-3.html#thm-f-integrable",
  "type": "Theorem",
  "number": "8.1.13",
  "title": "",
  "body": " Let be a measure space and let be a non-negative measurable function such that . Then is finite almost everywhere and the set   is -finite.  "
},
{
  "id": "chap-integration-3-28",
  "level": "2",
  "url": "chap-integration-3.html#chap-integration-3-28",
  "type": "Proof",
  "number": "8.1.4",
  "title": "",
  "body": " Let . To show that is finite a.e. we must show that . For each , let and let . Then and so   Thus   and so . Note that , and so by the continuity of measure   and hence is finite a.e.  Let Note that   By Chebshev's Inequality,   Thus is a countable union of sets of finite measure. That is, is -finite.  "
},
{
  "id": "ex-pw-int-not-convergent",
  "level": "2",
  "url": "chap-integration-3.html#ex-pw-int-not-convergent",
  "type": "Example",
  "number": "8.1.14",
  "title": "",
  "body": " Let on and let be the Lebesgue measure.. Then We define sequences , and on by   Each of the sequences , and converge pointwise to . Further   Hence   In conclusion, the answer to can be no, for a variety of reasons. The limit on the left-hand side can be finite, it may not exist, or it may be infinite. In each of these cases, may not hold.  "
},
{
  "id": "lem-fatou",
  "level": "2",
  "url": "chap-integration-3.html#lem-fatou",
  "type": "Lemma",
  "number": "8.1.15",
  "title": "Fatou’s Lemma.",
  "body": " Fatou's Lemma  Fatou's Lemma Let be a measure space, and let be a sequence of non-negative measurable functions which converge pointwise a.e. to a measurable function . Then   "
},
{
  "id": "chap-integration-3-45",
  "level": "2",
  "url": "chap-integration-3.html#chap-integration-3-45",
  "type": "Proof",
  "number": "8.1.5",
  "title": "",
  "body": " Let be a measure set such that converges to pointwise on . By Proposition , replacing with does not change the value of any integrals. We can thus assume that converges pointwise to everywhere on .  Let be a simple function satisfying . We will show that   First, assume that . In this case, there is a measurable set and a real number such that and for all . For each let   Note that since, for , .  As the sets are ascending (and measurable) we have, by the continuity of measure,   By Chebyshev's Inequality,   and hence Thus   Thus  Assume now that . Let Since is simple and we must have that . Fix . For each , let   The sequence is an ascending sequence of measurable sets with . Hence is a descending sequence of measurable sets with intersection . By the continuity of measure, since ,   Choose such that for all . Let be the maximum value takes. For any we have that   Summarizing the above, for , we have   Hence   Since is arbitrary, and since and , it follows that   Now, taking a supremum over all simple with gives the desired result.  "
},
{
  "id": "thm-MCT",
  "level": "2",
  "url": "chap-integration-3.html#thm-MCT",
  "type": "Theorem",
  "number": "8.1.16",
  "title": "Monotone Convergence Theorem.",
  "body": " Monotone Convergence Theorem  Monotone Convergence Theorem Let be a measure space and let be an increasing sequence of non-negative measurable functions on . Define a function on by Then is measurable and   "
},
{
  "id": "chap-integration-3-48",
  "level": "2",
  "url": "chap-integration-3.html#chap-integration-3-48",
  "type": "Proof",
  "number": "8.1.6",
  "title": "",
  "body": " Note that exists for all since the sequence is increasing. Thus is a well-defined function on . Further is measurable by Proposition and is non-negative since each is non-negative.  By the monotonicity of integration, we have that is an increasing sequence, and hence convergent. Further, since for each ,   By Fatou's Lemma, Lemma ,   Thus   "
},
{
  "id": "chap-integration-3-52",
  "level": "2",
  "url": "chap-integration-3.html#chap-integration-3-52",
  "type": "Example",
  "number": "8.1.17",
  "title": "",
  "body": " Consider the sequence of measurable functions on the real line. The sequence is decreasing, and converges pointwise to the function . However, for each ,   and so   "
},
{
  "id": "cor-MCT-series",
  "level": "2",
  "url": "chap-integration-3.html#cor-MCT-series",
  "type": "Corollary",
  "number": "8.1.18",
  "title": "",
  "body": " Let be a measure space, let be a sequence of non-negative measurable functions, and let Then   "
},
{
  "id": "chap-integration-3-55",
  "level": "2",
  "url": "chap-integration-3.html#chap-integration-3-55",
  "type": "Remark",
  "number": "8.1.19",
  "title": "",
  "body": " Let be a non-negative measurable function on a measure space . By the definition of the integral, can be approximated by integrals of simple functions below . By the Simple Approximation Theorem, can be (pointwise) approximated by simple functions below . The Monotone Convergence Theorem allows us to put these two approximations together. Explicitly, by the Simple Approximation Theorem, there is an increasing sequence of simple functions , , which converge pointwise to . By the Monotone Convergence Theorem   "
},
{
  "id": "thm-pos-int-linear",
  "level": "2",
  "url": "chap-integration-3.html#thm-pos-int-linear",
  "type": "Theorem",
  "number": "8.1.20",
  "title": "",
  "body": " linearity of integration non-negative functions Let be a measure space, let and be non-negative measurable functions, and let , be non-negative real-numbers. Then   "
},
{
  "id": "chap-integration-3-58",
  "level": "2",
  "url": "chap-integration-3.html#chap-integration-3-58",
  "type": "Proof",
  "number": "8.1.7",
  "title": "",
  "body": " By the Simple Approximation Theorem there are increasing sequences of non-negative simple functions and such that converges to pointwise and converges to pointwise. Thus is an increasing sequence of non-negative simple functions which converge pointwise to . Using the Monotone Covergence Theorem and Theorem and the Monotone Convergence Theorem again we get   "
},
{
  "id": "chap-integration-4",
  "level": "1",
  "url": "chap-integration-4.html",
  "type": "Section",
  "number": "8.2",
  "title": "Integration of measurable functions",
  "body": " Integration of measurable functions  Recall that if is a measurable function on a measure space then where is the positive part of and is the negative part of . Further, . As , and are non-negative measurable functions we can use Theorem to get   Thus is integrable if and only if and are integrable.   Let be a measure space and let be a measurable function on with positive part and negative part . The function is integrable with respect to integrable if is integrable. That is, is integrable if . If is integrable we define the integral of over with respect to integral by   If is integrable and is measurable, we define the integral of over with respect to as   When is Lebesgue measurable, is the Lebesgue measurable subsets of , and is the Lebesgue measure, an integrable function is called Lebesgue integrable integrable Lebesgue integrable and the integral is called the Lebesgue integral . integral Lebesgue integral   We first note the following important property relating the integral of and the integral of .   Let be a measure space and let be an integrable function on . Then     Let be the decomposition of into its positive and negative parts. Then     Linearity and Monotonicity of Integration  monotonicty of integration linearity of integration Let be a measure space, let and be integrable functions on , and let . Then is integrable and   Further, it then     It is straightforward to show that . We will show . First note that by Theorem , and being integrable implies and are finite a.e. Thus is defined. Note that . By the monotonicity of integration of non-negative measurable functions, it follows that is integrable.  As , , and , it follows that   and so   By Theorem , we have then that   Thus   and hence   If , then and so   Thus .   Several results can now be stated which follow readily from Theorem and what we have already proved for integrals of non-negative linear functions.   If and are disjoint measurable subsets in a measure space and is integrable, then     If is a measure space, is a sequence of integrable functions on , and is integrable, then     Apply Corollary and the linearity of integration.   In Exercise it is shown that defines a measure when . The following proposition is a straightforward application of Exercise , the linearity of integration, and the continuity of measure.   Continuity of Integration  integral continuity Let be a measure space and let be an integrable function on .   If is an ascending sequence of measurable sets in with then    If is a descending sequence of measurable sets in with then      The following theorem continues our theme of results which ask when a limit of integrals is the integral of the pointwise limit.   Lebesgue Dominated Convergence Theorem  Lebesgue Dominated Convergence Theorem Dominated Convergence Theorem Lebesgue Dominated Convergence Theorem Let be a measure space and let be a sequence of measurable functions which converge pointwise a.e. to a measurable function . If there is an integrable non-negative function on such that a.e. for all , then is integrable over and     By removing a set of measure , we will assume that the sequence converges pointwise to and everywhere. Note that each is integrable since and is integrable. It follows that , and so is integrable as well.  The sequence is a sequence of non-negative measurable functions which converges pointwise to . Thus, by Fatou's Lemma,   The linearity of integration thus gives that   The sequence is also a sequence of non-negative measurable functions. This sequence converges pointwise to . Applying Fatou's Lemma and the linearity of integration we have   Thus   By and we have that   It follows that is a convergent sequence and    Note that the Lebesgue Dominated Convergence Theorem is not a generalization of the Monotone Convergence Theorem. The Lebesgue Dominated Convergence Theorem only deals with integrable functions, whilst the Monotone Convergence Theorem allows for possibly infinite integrals.  However, if we restrict the Monotone convergence theorem to an increasing sequence of integrable non-negative functions which converge pointwise a.e. to an integrable function , then this is a special case of the Lebesgue Decomposition Theorem.   "
},
{
  "id": "chap-integration-4-5",
  "level": "2",
  "url": "chap-integration-4.html#chap-integration-4-5",
  "type": "Definition",
  "number": "8.2.1",
  "title": "",
  "body": " Let be a measure space and let be a measurable function on with positive part and negative part . The function is integrable with respect to integrable if is integrable. That is, is integrable if . If is integrable we define the integral of over with respect to integral by   If is integrable and is measurable, we define the integral of over with respect to as   When is Lebesgue measurable, is the Lebesgue measurable subsets of , and is the Lebesgue measure, an integrable function is called Lebesgue integrable integrable Lebesgue integrable and the integral is called the Lebesgue integral . integral Lebesgue integral  "
},
{
  "id": "chap-integration-4-7",
  "level": "2",
  "url": "chap-integration-4.html#chap-integration-4-7",
  "type": "Proposition",
  "number": "8.2.2",
  "title": "",
  "body": " Let be a measure space and let be an integrable function on . Then   "
},
{
  "id": "chap-integration-4-8",
  "level": "2",
  "url": "chap-integration-4.html#chap-integration-4-8",
  "type": "Proof",
  "number": "8.2.1",
  "title": "",
  "body": " Let be the decomposition of into its positive and negative parts. Then   "
},
{
  "id": "thm-int-liner",
  "level": "2",
  "url": "chap-integration-4.html#thm-int-liner",
  "type": "Theorem",
  "number": "8.2.3",
  "title": "Linearity and Monotonicity of Integration.",
  "body": " Linearity and Monotonicity of Integration  monotonicty of integration linearity of integration Let be a measure space, let and be integrable functions on , and let . Then is integrable and   Further, it then   "
},
{
  "id": "chap-integration-4-10",
  "level": "2",
  "url": "chap-integration-4.html#chap-integration-4-10",
  "type": "Proof",
  "number": "8.2.2",
  "title": "",
  "body": " It is straightforward to show that . We will show . First note that by Theorem , and being integrable implies and are finite a.e. Thus is defined. Note that . By the monotonicity of integration of non-negative measurable functions, it follows that is integrable.  As , , and , it follows that   and so   By Theorem , we have then that   Thus   and hence   If , then and so   Thus .  "
},
{
  "id": "chap-integration-4-12",
  "level": "2",
  "url": "chap-integration-4.html#chap-integration-4-12",
  "type": "Corollary",
  "number": "8.2.4",
  "title": "",
  "body": " If and are disjoint measurable subsets in a measure space and is integrable, then   "
},
{
  "id": "chap-integration-4-13",
  "level": "2",
  "url": "chap-integration-4.html#chap-integration-4-13",
  "type": "Proposition",
  "number": "8.2.5",
  "title": "",
  "body": " If is a measure space, is a sequence of integrable functions on , and is integrable, then   "
},
{
  "id": "chap-integration-4-14",
  "level": "2",
  "url": "chap-integration-4.html#chap-integration-4-14",
  "type": "Proof",
  "number": "8.2.3",
  "title": "",
  "body": " Apply Corollary and the linearity of integration.  "
},
{
  "id": "prop-integral-cont",
  "level": "2",
  "url": "chap-integration-4.html#prop-integral-cont",
  "type": "Proposition",
  "number": "8.2.6",
  "title": "Continuity of Integration.",
  "body": " Continuity of Integration  integral continuity Let be a measure space and let be an integrable function on .   If is an ascending sequence of measurable sets in with then    If is a descending sequence of measurable sets in with then     "
},
{
  "id": "thm-LDC",
  "level": "2",
  "url": "chap-integration-4.html#thm-LDC",
  "type": "Theorem",
  "number": "8.2.7",
  "title": "Lebesgue Dominated Convergence Theorem.",
  "body": " Lebesgue Dominated Convergence Theorem  Lebesgue Dominated Convergence Theorem Dominated Convergence Theorem Lebesgue Dominated Convergence Theorem Let be a measure space and let be a sequence of measurable functions which converge pointwise a.e. to a measurable function . If there is an integrable non-negative function on such that a.e. for all , then is integrable over and   "
},
{
  "id": "chap-integration-4-19",
  "level": "2",
  "url": "chap-integration-4.html#chap-integration-4-19",
  "type": "Proof",
  "number": "8.2.4",
  "title": "",
  "body": " By removing a set of measure , we will assume that the sequence converges pointwise to and everywhere. Note that each is integrable since and is integrable. It follows that , and so is integrable as well.  The sequence is a sequence of non-negative measurable functions which converges pointwise to . Thus, by Fatou's Lemma,   The linearity of integration thus gives that   The sequence is also a sequence of non-negative measurable functions. This sequence converges pointwise to . Applying Fatou's Lemma and the linearity of integration we have   Thus   By and we have that   It follows that is a convergent sequence and  "
},
{
  "id": "chap-integration-4-20",
  "level": "2",
  "url": "chap-integration-4.html#chap-integration-4-20",
  "type": "Remark",
  "number": "8.2.8",
  "title": "",
  "body": " Note that the Lebesgue Dominated Convergence Theorem is not a generalization of the Monotone Convergence Theorem. The Lebesgue Dominated Convergence Theorem only deals with integrable functions, whilst the Monotone Convergence Theorem allows for possibly infinite integrals.  However, if we restrict the Monotone convergence theorem to an increasing sequence of integrable non-negative functions which converge pointwise a.e. to an integrable function , then this is a special case of the Lebesgue Decomposition Theorem.  "
},
{
  "id": "chap-integration-5",
  "level": "1",
  "url": "chap-integration-5.html",
  "type": "Section",
  "number": "8.3",
  "title": "Lebesgue integration and Riemann integration",
  "body": " Lebesgue integration and Riemann integration  In Chapter~1 we argued for the need of a form of integration more robust than Riemann integration. Have we achieved that? We will see that for integrals of bounded functions over closed intervals that the answer is yes.  When is Riemann integrable on an interval we denote the Riemann integral of by .   Let be a bounded function on the closed interval . If is Riemann integrable, then is measurable.    Let , and let . Since is continuous on , we have that is a measurable function by Corollary . By Theorem , . Since is a complete measure on , is a measurable function. Thus is measurable.   We have defined the Lebesgue integral in terms of integrals of simple functions. The Riemann integral is usually defined in terms of Riemann sums. The following definition allows us to describe Riemann sums by integrals of simple functions.   A simple function on a closed interval is a step function step function if   for some partition of .   Let be a bounded function on and let be a partition of . For , let . Then the lower Darboux sum Darboux sum lower of with respect to is   If we let be the step function then   Similarly, if . Then the upper Darboux sum Darboux sum upper of with respect to is   If we let be the step function then   That is, the upper and lower Riemann sums are equal to the integrals of step functions.   Let be a bounded function on a closed interval . If is Riemann integrable then is Lebesgue integrable and     Assume is Riemann integrable. By Lemma , is measurable. Let be an upper bound for . Then   Thus is Lebesgue integrable.  For each partition let be a step function such and   and let be a step function such and   Note that such a step functions and exist by the argument preceding this theorem.  Since is Riemann integrable we have that   Since, for every partition , , the monotonicity of Lebesgue integral tell us   Hence .    Let be a closed interval. We have shown that the set of bounded Riemann integrable functions on is contained in the set of bounded Lebesgue integrable functions on . When is not a singleton (i.e. when ), this inclusion is strict. If then is a Lebesgue integrable function on , but is not Riemann integrable.   The following example shows that the statements analogous to the Monotone Convergence Theorem and the Lebesgue Dominated Convergence Theorem for Riemann integration do not hold.   Let and let . The set is countable and so can be enumerated as   For each let   and let . Then is an increasing sequence of non-negative Riemann-integrable functions which converge pointwise to . The Riemann integral of each is . However, as noted in Example , is not Riemann integrable.  We do not have   since is not defined. Of course, using Lebesgue integration, we get   Indeed this is an easy calculation to do directly. Alternatively it follows from either the Monotone Convergence Theorem or the Lebesgue Dominated Convergence Theorem.   Recall that Riemann integrals can be extended beyond closed intervals by improper Riemann integrals. integral Riemann integral improper That is we define   The following examples show that it is possible for a function to have a finite improper Riemann integral but not be Lebesgue integrable.   Define a function on by   when .    The function from Example    Then The exact value this alternating series takes can be shown to be , but that is finite is enough for us here.    However   and hence is not Lebesgue integrable.    Let on the real line.     The function from Example     It can be shown that Showing this takes some work, but it can be done using complex integration tricks or double integral tricks.   Note for every integer   Hence   Thus   and so is not Lebesgue integrable.    Example and Example highlight an important difference between Lebesgue integrals and improper Riemann integrals. Let be a function on the non-negative real line . Then has a finite improper Riemann integral if and only if is Riemann integrable on every each interval and the series . Then   For Lebesgue integration, convergence of the series is not sufficient. If is Lebesgue integrable on then   for any collection of disjoint measurable sets with . Thus, reordering the collection does not affect the value of   Thus, the series is not only convergent, but absolutely convergent. In Example and Example   are conditionally convergent, not absolutely convergent.   "
},
{
  "id": "lem-riemann-meas",
  "level": "2",
  "url": "chap-integration-5.html#lem-riemann-meas",
  "type": "Lemma",
  "number": "8.3.1",
  "title": "",
  "body": " Let be a bounded function on the closed interval . If is Riemann integrable, then is measurable.  "
},
{
  "id": "chap-integration-5-5",
  "level": "2",
  "url": "chap-integration-5.html#chap-integration-5-5",
  "type": "Proof",
  "number": "8.3.1",
  "title": "",
  "body": " Let , and let . Since is continuous on , we have that is a measurable function by Corollary . By Theorem , . Since is a complete measure on , is a measurable function. Thus is measurable.  "
},
{
  "id": "chap-integration-5-7",
  "level": "2",
  "url": "chap-integration-5.html#chap-integration-5-7",
  "type": "Definition",
  "number": "8.3.2",
  "title": "",
  "body": " A simple function on a closed interval is a step function step function if   for some partition of .  "
},
{
  "id": "thm-Riemann-is-Lebesgue",
  "level": "2",
  "url": "chap-integration-5.html#thm-Riemann-is-Lebesgue",
  "type": "Theorem",
  "number": "8.3.3",
  "title": "",
  "body": " Let be a bounded function on a closed interval . If is Riemann integrable then is Lebesgue integrable and   "
},
{
  "id": "chap-integration-5-18",
  "level": "2",
  "url": "chap-integration-5.html#chap-integration-5-18",
  "type": "Proof",
  "number": "8.3.2",
  "title": "",
  "body": " Assume is Riemann integrable. By Lemma , is measurable. Let be an upper bound for . Then   Thus is Lebesgue integrable.  For each partition let be a step function such and   and let be a step function such and   Note that such a step functions and exist by the argument preceding this theorem.  Since is Riemann integrable we have that   Since, for every partition , , the monotonicity of Lebesgue integral tell us   Hence .  "
},
{
  "id": "chap-integration-5-19",
  "level": "2",
  "url": "chap-integration-5.html#chap-integration-5-19",
  "type": "Remark",
  "number": "8.3.4",
  "title": "",
  "body": " Let be a closed interval. We have shown that the set of bounded Riemann integrable functions on is contained in the set of bounded Lebesgue integrable functions on . When is not a singleton (i.e. when ), this inclusion is strict. If then is a Lebesgue integrable function on , but is not Riemann integrable.  "
},
{
  "id": "exam-MCT-DCT-failure-for-Riemann",
  "level": "2",
  "url": "chap-integration-5.html#exam-MCT-DCT-failure-for-Riemann",
  "type": "Example",
  "number": "8.3.5",
  "title": "",
  "body": " Let and let . The set is countable and so can be enumerated as   For each let   and let . Then is an increasing sequence of non-negative Riemann-integrable functions which converge pointwise to . The Riemann integral of each is . However, as noted in Example , is not Riemann integrable.  We do not have   since is not defined. Of course, using Lebesgue integration, we get   Indeed this is an easy calculation to do directly. Alternatively it follows from either the Monotone Convergence Theorem or the Lebesgue Dominated Convergence Theorem.  "
},
{
  "id": "ex-not-lebesgue-int-1",
  "level": "2",
  "url": "chap-integration-5.html#ex-not-lebesgue-int-1",
  "type": "Example",
  "number": "8.3.6",
  "title": "",
  "body": " Define a function on by   when .    The function from Example    Then The exact value this alternating series takes can be shown to be , but that is finite is enough for us here.    However   and hence is not Lebesgue integrable.  "
},
{
  "id": "ex-not-lebesgue-int-2",
  "level": "2",
  "url": "chap-integration-5.html#ex-not-lebesgue-int-2",
  "type": "Example",
  "number": "8.3.8",
  "title": "",
  "body": " Let on the real line.     The function from Example     It can be shown that Showing this takes some work, but it can be done using complex integration tricks or double integral tricks.   Note for every integer   Hence   Thus   and so is not Lebesgue integrable.  "
},
{
  "id": "chap-integration-5-27",
  "level": "2",
  "url": "chap-integration-5.html#chap-integration-5-27",
  "type": "Remark",
  "number": "8.3.10",
  "title": "",
  "body": " Example and Example highlight an important difference between Lebesgue integrals and improper Riemann integrals. Let be a function on the non-negative real line . Then has a finite improper Riemann integral if and only if is Riemann integrable on every each interval and the series . Then   For Lebesgue integration, convergence of the series is not sufficient. If is Lebesgue integrable on then   for any collection of disjoint measurable sets with . Thus, reordering the collection does not affect the value of   Thus, the series is not only convergent, but absolutely convergent. In Example and Example   are conditionally convergent, not absolutely convergent.  "
},
{
  "id": "chap-integration-6",
  "level": "1",
  "url": "chap-integration-6.html",
  "type": "Exercises",
  "number": "8.4",
  "title": "Exercises",
  "body": "  Let be a non-negative function on a measure space , and let be a measurable set with . Prove     Let be a measure space, and let and be non-negative measurable functions on . If then     Let be a measurable space. Fix and let be the Dirac measure at . If is a non-negative measurable function on , what is the value of ?    Let be the counting measure on the subsets of , and let be a (necessarily measurable) function from to .  Show that is integrable with respect to if and only if the series converges absolutely to a finite number. Further show that if is integrable then     Let be a measure space, and let be a non-negative measurable function on . Let be a measurable set such that for all . Show that, if then     Prove Corollary : Let be a measure space, let be a sequence of non-negative measurable functions, and let Prove     Let be a measure space. Suppose and are integrable functions such that   for all measurable sets . Show that almost everywhere with respect to . (HINT: for show that if and for all then a.e.).    Let be a measure space.   Let be a non-negative measurable function on . Define by  Show that is a measure on satisfying when .    Let an integrable function on with respect to . Define by  Show that is a signed-measure on satisfying when .      "
},
{
  "id": "exer-int-a-e",
  "level": "2",
  "url": "chap-integration-6.html#exer-int-a-e",
  "type": "Exercise",
  "number": "8.4.1",
  "title": "",
  "body": " Let be a non-negative function on a measure space , and let be a measurable set with . Prove   "
},
{
  "id": "exer-int-mono-non-neg",
  "level": "2",
  "url": "chap-integration-6.html#exer-int-mono-non-neg",
  "type": "Exercise",
  "number": "8.4.2",
  "title": "",
  "body": " Let be a measure space, and let and be non-negative measurable functions on . If then   "
},
{
  "id": "exer-dirac-integration",
  "level": "2",
  "url": "chap-integration-6.html#exer-dirac-integration",
  "type": "Exercise",
  "number": "8.4.3",
  "title": "",
  "body": " Let be a measurable space. Fix and let be the Dirac measure at . If is a non-negative measurable function on , what is the value of ?  "
},
{
  "id": "chap-integration-6-4",
  "level": "2",
  "url": "chap-integration-6.html#chap-integration-6-4",
  "type": "Exercise",
  "number": "8.4.4",
  "title": "",
  "body": " Let be the counting measure on the subsets of , and let be a (necessarily measurable) function from to .  Show that is integrable with respect to if and only if the series converges absolutely to a finite number. Further show that if is integrable then   "
},
{
  "id": "exer-positive-integral",
  "level": "2",
  "url": "chap-integration-6.html#exer-positive-integral",
  "type": "Exercise",
  "number": "8.4.5",
  "title": "",
  "body": " Let be a measure space, and let be a non-negative measurable function on . Let be a measurable set such that for all . Show that, if then   "
},
{
  "id": "exer-MCT-series",
  "level": "2",
  "url": "chap-integration-6.html#exer-MCT-series",
  "type": "Exercise",
  "number": "8.4.6",
  "title": "",
  "body": " Prove Corollary : Let be a measure space, let be a sequence of non-negative measurable functions, and let Prove   "
},
{
  "id": "exer-same-int-same-func",
  "level": "2",
  "url": "chap-integration-6.html#exer-same-int-same-func",
  "type": "Exercise",
  "number": "8.4.7",
  "title": "",
  "body": " Let be a measure space. Suppose and are integrable functions such that   for all measurable sets . Show that almost everywhere with respect to . (HINT: for show that if and for all then a.e.).  "
},
{
  "id": "exer-integration-measure",
  "level": "2",
  "url": "chap-integration-6.html#exer-integration-measure",
  "type": "Exercise",
  "number": "8.4.8",
  "title": "",
  "body": " Let be a measure space.   Let be a non-negative measurable function on . Define by  Show that is a measure on satisfying when .    Let an integrable function on with respect to . Define by  Show that is a signed-measure on satisfying when .     "
},
{
  "id": "chap-differentation-3",
  "level": "1",
  "url": "chap-differentation-3.html",
  "type": "Section",
  "number": "9.1",
  "title": "The Radon-Nikodym Theorem",
  "body": " The Radon-Nikodym Theorem  In Exercise we saw how integration against a non-negative measurable function with respect to a measure gave gives rise to a new measure . In this section we will study measures of that type in detail, cumulating in two famed theorems: the Radon-Nikodym Theorem and the Lebesgue Decomposition Theorem.  We begin by recalling the definition of mutually singular measures, and extending this definition to signed-measures.   Let be a measurable space, and let and be two signed-measures on . The measures and are mutually singular , singular measures mutually singular signed-measures denoted , if there are disjoint measurable sets with such that is a null set for , and is a null set for .    Let be the Cantor-Lebesgue function on , let be the Cantor set in and let . Let be the Borel measure on which is the Carathéodory extension of the premeasure   By Example , and , and by Exercise , and . Thus and are mutually singular.   Mutually singular measures are, in some sense, very different from eachother. We now introduce a comparison between measures.   Let be a measure space and let be a measure on . Then is absolutely continuous with respect to absolutely continuous measures , written , if for , if .  If is a signed-measure on , then is absolutely continuous with respect to absolutely continuous measures , written , if .   Let and be two non-zero measures on the same measure space. If then and . Conversely, if or , then . Mutually orthogonality and absolute continuity are mutually exclusive. We will see, that given measures and , we can always write where and , (The Lebesgue Decomposition Theorem, Theorem ). Thus, mutual singularity and absolute continuity are two extremes. We first explore absolute continuity further.  Given a measure , the next example shows that it is easy to create measures which are absolutely continuous with respect to . We will see, with some reasonable conditions on , all measures which are absolutely continuous with respect to will be of this form.   Let be a measure space. Let be a non-negative measurable function on , and let be an integrable function on . Then   defines a measure on , and   defines a signed measure on (Exercise ). Then and .   We can also get examples of absolutely continuous measures (with respect to the Lebesgue measure) using what we have learnt about Borel measures on . Below is one such example.   Let on . Let be the Borel measure on induced by . That is, is the Borel measure which is the Carathéodory extension of the premeasure   as described in Corollary . We will show that .  Take Borel set such that . We want to show that . Fix . We will assume (removing does not change or ). By Proposition , there is a countable collection of subsets of such that   and Now   As for all , it follows that . Thus is absolutely continuous with respect to .    Radon-Nikodym Theorem  Radon-Nikodym Theorem Let be a -finite measure space, and let be a -finite measure on such that . Then there is a non-negative measurable function on such that   for all . Further, if and are both non-negative functions satisfying , then a.e.    First assume that both and are finite measures. If for all , then we can take for to hold. Thus suppose that is not the zero measure.  Let be the collection of non-negative measurable functions with   for all . Since the zero function is in , is non-empty. Let . Note that, since is finite, is finite with .  Clearly, . We claim that . Consider, for each real , the signed measure . For each let be a Hahn-Decomposition of for . That is is a positive set for , and is a negative set for . If for all , then   for all and . Hence, if then . Since we also have implies , and so is the measure. This contradicts the assumption that is non-zero. Hence there is some for which . Let   Then, for any   Thus, . As , we must have .  We will show that is attained by a function . Let be a sequence of functions in so that   Note also that if and then . Indeed, if and then   We can thus assume that the sequence is increasing, by replacing each with if necessary. Let for all . By the Monotone Convergence Theorem   \\ for all . Thus . Setting we have   Our goal now is to show that satisfies . That is, we will show that for all   Define a measure on by   (Note that is indeed a measure, and not just a signed-measure, since ).  Since is absolutely continuous with respect to , and is absolutely continuous with respect to , is absolutely continuous with respect to . Applying the above argument to (in place of ), if is a non-zero measure, then there is a non-negative measurable function such that and   for all .  Taking any we have   Thus   Hence . However   contradicting the definition of . Hence for all , and thus   as desired.  Now suppose that and are both -finite. There are disjoint sets and disjoint sets such that   and for all . Let be the countable collection of disjoint sets . Then , and for all , and .  For each there is a non-negative measurable function such that   for all measurable . Extend to all of by setting for . Let . Take any . Applying Corollary , we get   The uniqueness (almost everywhere) follows from Exercise .   The following corollary to the Radon-Nikodym Theorem is immediate on taking the Jordan decomposition of a signed-measure and applying the Radon-Nikodym Theorem.   Let be a -finite measure space and let be a finite signed-measure on such that . Then there is a measurable function which is integrable with respect to such that, for all ,   Further, the function is unique up to almost everywhere equivalence.    Radon-Nikodym derivative Let be a -finite measure space and let be a -finite measure or a finite signed measure on such that . Let be the measurable function on such that   for all . The function is called the Radon-Nikodym derivative of with respect to . Radon-Nikodym derivative The Radon-Nikodym derivative is denotated as    The word ``derivative\" in Radon-Nikodym will perhaps raise some eyebrows. What is being derivated here? Section , in particular Theorem , goes some way to justify the term. We will satiate ourselves with a simple example now.   Let on . Let be the Carathéodory extension of the premeasure   on . We saw in Example that is absolutely continuous with respect to . Hence, by the Radon-Nikodym theorem there is a non-negative measurable function on such that   In particular, for we have   By the Fundamental Theorem of Calculus we also have We can comfortably apply the Fundamental Theorem of Calculus since and are continuous on , and thus are Riemann integrable.   By the uniqueness of the Carathéodory Extension, from the Carathéodory-Hahn Theorem, it follows that   for all Borel sets . It follows from Exercise , that . Technically, it means that almost everywhere, but can be chosen so that . Thus, the Radon-Nikodym derivative of is the derivative of . That is    We end this section with an important decomposition theorem due to Lebesgue.   Lebesgue Decomposition Theorem  Lebesgue Decomposition Theorem Let be a -finite measure space and let be a -finite measure on . Then there are mutually orthogonal measures and such that   , and   .      Let . Then is a -finite measure and . By the Radon-Nikodym Theorem, there is a non-negative measurable function such that, for all   with the last equality following from Exercise . Let   and   Define measures and by   Then and are mutually singular, with .  That and are mutually singular is clear. It remains to show . Take such that . Then   Thus   Since on , it follows that (Exercise ). Thus , and hence .   The following corollary follows by applying the applying the Lebesgue Decomposition Theorem to each of the measures in the Jordan decomposition of the signed-measure.   Let be a -finite measure space and let be a finite signed-measure on . Then there are mutually orthogonal signed-measures and such that   , and   .      Let be a -finite measure space, let be a -finite measure or a finite signed-measure, and let and are mutually orthogonal measures such that , , and . The measures and are called the Lebesgue decomposition of with respect to . Lebesgue decomposition of a measure We call the Radon-Nikodym derivative of witrh respect to the Radon-Nikodym derivative on with respect to and denote the it by . Radon-Nikodym derivative   "
},
{
  "id": "chap-differentation-3-4",
  "level": "2",
  "url": "chap-differentation-3.html#chap-differentation-3-4",
  "type": "Definition",
  "number": "9.1.1",
  "title": "",
  "body": " Let be a measurable space, and let and be two signed-measures on . The measures and are mutually singular , singular measures mutually singular signed-measures denoted , if there are disjoint measurable sets with such that is a null set for , and is a null set for .  "
},
{
  "id": "ex-Cantor-Lebesgue-not-abs-cont",
  "level": "2",
  "url": "chap-differentation-3.html#ex-Cantor-Lebesgue-not-abs-cont",
  "type": "Example",
  "number": "9.1.2",
  "title": "",
  "body": " Let be the Cantor-Lebesgue function on , let be the Cantor set in and let . Let be the Borel measure on which is the Carathéodory extension of the premeasure   By Example , and , and by Exercise , and . Thus and are mutually singular.  "
},
{
  "id": "chap-differentation-3-7",
  "level": "2",
  "url": "chap-differentation-3.html#chap-differentation-3-7",
  "type": "Definition",
  "number": "9.1.3",
  "title": "",
  "body": " Let be a measure space and let be a measure on . Then is absolutely continuous with respect to absolutely continuous measures , written , if for , if .  If is a signed-measure on , then is absolutely continuous with respect to absolutely continuous measures , written , if .  "
},
{
  "id": "ex-integration-measure-abs-cont",
  "level": "2",
  "url": "chap-differentation-3.html#ex-integration-measure-abs-cont",
  "type": "Example",
  "number": "9.1.4",
  "title": "",
  "body": " Let be a measure space. Let be a non-negative measurable function on , and let be an integrable function on . Then   defines a measure on , and   defines a signed measure on (Exercise ). Then and .  "
},
{
  "id": "ex-x-2-is-abs-cont",
  "level": "2",
  "url": "chap-differentation-3.html#ex-x-2-is-abs-cont",
  "type": "Example",
  "number": "9.1.5",
  "title": "",
  "body": " Let on . Let be the Borel measure on induced by . That is, is the Borel measure which is the Carathéodory extension of the premeasure   as described in Corollary . We will show that .  Take Borel set such that . We want to show that . Fix . We will assume (removing does not change or ). By Proposition , there is a countable collection of subsets of such that   and Now   As for all , it follows that . Thus is absolutely continuous with respect to .  "
},
{
  "id": "chap-differentation-3-13",
  "level": "2",
  "url": "chap-differentation-3.html#chap-differentation-3-13",
  "type": "Theorem",
  "number": "9.1.6",
  "title": "Radon-Nikodym Theorem.",
  "body": " Radon-Nikodym Theorem  Radon-Nikodym Theorem Let be a -finite measure space, and let be a -finite measure on such that . Then there is a non-negative measurable function on such that   for all . Further, if and are both non-negative functions satisfying , then a.e.  "
},
{
  "id": "chap-differentation-3-14",
  "level": "2",
  "url": "chap-differentation-3.html#chap-differentation-3-14",
  "type": "Proof",
  "number": "9.1.1",
  "title": "",
  "body": " First assume that both and are finite measures. If for all , then we can take for to hold. Thus suppose that is not the zero measure.  Let be the collection of non-negative measurable functions with   for all . Since the zero function is in , is non-empty. Let . Note that, since is finite, is finite with .  Clearly, . We claim that . Consider, for each real , the signed measure . For each let be a Hahn-Decomposition of for . That is is a positive set for , and is a negative set for . If for all , then   for all and . Hence, if then . Since we also have implies , and so is the measure. This contradicts the assumption that is non-zero. Hence there is some for which . Let   Then, for any   Thus, . As , we must have .  We will show that is attained by a function . Let be a sequence of functions in so that   Note also that if and then . Indeed, if and then   We can thus assume that the sequence is increasing, by replacing each with if necessary. Let for all . By the Monotone Convergence Theorem   \\ for all . Thus . Setting we have   Our goal now is to show that satisfies . That is, we will show that for all   Define a measure on by   (Note that is indeed a measure, and not just a signed-measure, since ).  Since is absolutely continuous with respect to , and is absolutely continuous with respect to , is absolutely continuous with respect to . Applying the above argument to (in place of ), if is a non-zero measure, then there is a non-negative measurable function such that and   for all .  Taking any we have   Thus   Hence . However   contradicting the definition of . Hence for all , and thus   as desired.  Now suppose that and are both -finite. There are disjoint sets and disjoint sets such that   and for all . Let be the countable collection of disjoint sets . Then , and for all , and .  For each there is a non-negative measurable function such that   for all measurable . Extend to all of by setting for . Let . Take any . Applying Corollary , we get   The uniqueness (almost everywhere) follows from Exercise .  "
},
{
  "id": "cor-signed-Radon-Nikodym",
  "level": "2",
  "url": "chap-differentation-3.html#cor-signed-Radon-Nikodym",
  "type": "Corollary",
  "number": "9.1.7",
  "title": "",
  "body": " Let be a -finite measure space and let be a finite signed-measure on such that . Then there is a measurable function which is integrable with respect to such that, for all ,   Further, the function is unique up to almost everywhere equivalence.  "
},
{
  "id": "chap-differentation-3-17",
  "level": "2",
  "url": "chap-differentation-3.html#chap-differentation-3-17",
  "type": "Definition",
  "number": "9.1.8",
  "title": "",
  "body": " Radon-Nikodym derivative Let be a -finite measure space and let be a -finite measure or a finite signed measure on such that . Let be the measurable function on such that   for all . The function is called the Radon-Nikodym derivative of with respect to . Radon-Nikodym derivative The Radon-Nikodym derivative is denotated as   "
},
{
  "id": "ex-x-2-Radon-Nikodym-derivative",
  "level": "2",
  "url": "chap-differentation-3.html#ex-x-2-Radon-Nikodym-derivative",
  "type": "Example",
  "number": "9.1.9",
  "title": "",
  "body": " Let on . Let be the Carathéodory extension of the premeasure   on . We saw in Example that is absolutely continuous with respect to . Hence, by the Radon-Nikodym theorem there is a non-negative measurable function on such that   In particular, for we have   By the Fundamental Theorem of Calculus we also have We can comfortably apply the Fundamental Theorem of Calculus since and are continuous on , and thus are Riemann integrable.   By the uniqueness of the Carathéodory Extension, from the Carathéodory-Hahn Theorem, it follows that   for all Borel sets . It follows from Exercise , that . Technically, it means that almost everywhere, but can be chosen so that . Thus, the Radon-Nikodym derivative of is the derivative of . That is   "
},
{
  "id": "thm-lebesegue-decomposition",
  "level": "2",
  "url": "chap-differentation-3.html#thm-lebesegue-decomposition",
  "type": "Theorem",
  "number": "9.1.10",
  "title": "Lebesgue Decomposition Theorem.",
  "body": " Lebesgue Decomposition Theorem  Lebesgue Decomposition Theorem Let be a -finite measure space and let be a -finite measure on . Then there are mutually orthogonal measures and such that   , and   .    "
},
{
  "id": "chap-differentation-3-22",
  "level": "2",
  "url": "chap-differentation-3.html#chap-differentation-3-22",
  "type": "Proof",
  "number": "9.1.2",
  "title": "",
  "body": " Let . Then is a -finite measure and . By the Radon-Nikodym Theorem, there is a non-negative measurable function such that, for all   with the last equality following from Exercise . Let   and   Define measures and by   Then and are mutually singular, with .  That and are mutually singular is clear. It remains to show . Take such that . Then   Thus   Since on , it follows that (Exercise ). Thus , and hence .  "
},
{
  "id": "chap-differentation-3-24",
  "level": "2",
  "url": "chap-differentation-3.html#chap-differentation-3-24",
  "type": "Corollary",
  "number": "9.1.11",
  "title": "",
  "body": " Let be a -finite measure space and let be a finite signed-measure on . Then there are mutually orthogonal signed-measures and such that   , and   .    "
},
{
  "id": "chap-differentation-3-25",
  "level": "2",
  "url": "chap-differentation-3.html#chap-differentation-3-25",
  "type": "Definition",
  "number": "9.1.12",
  "title": "",
  "body": " Let be a -finite measure space, let be a -finite measure or a finite signed-measure, and let and are mutually orthogonal measures such that , , and . The measures and are called the Lebesgue decomposition of with respect to . Lebesgue decomposition of a measure We call the Radon-Nikodym derivative of witrh respect to the Radon-Nikodym derivative on with respect to and denote the it by . Radon-Nikodym derivative  "
},
{
  "id": "chap-differentation-4",
  "level": "1",
  "url": "chap-differentation-4.html",
  "type": "Section",
  "number": "9.2",
  "title": "Absolutely continuous functions",
  "body": " Absolutely continuous functions  Let be closed interval in and let be the Lebesgue measure on . In this section we want to compare Borel measures on with the Lebesgue measure. If is a Borel measure on , when is ? When is ? What can we learn from the Radon-Nikodym Theorem and the Lebesgue decomposition theorem?  We first give a quantitative description of absolute continuity.   Let be a measure space. Suppose is a finite signed-measure on . Then if and only if for all there exists a such that given , if then    First, assume the criterion does not hold. That is, we will assume that there is an such that for all there is a set with and There is thus a sequence of sets such that   For each , let . Then is a descending sequence of sets with   Let . Since for all ,   for all . Hence . By the continuity of measure (since is a finite measure)   Hence is not absolutely continuous with respect to .  Conversely, suppose that criterion holds. Suppose . Then, for all , . Hence . Thus . Note that we did not use the was finite for this direction of the proof. That was finite was only used in the first paragraph to apply the continuity of measure for intersections.    Let be a closed interval, let be the Lebesgue measure on the Borel sets in , and let be a Borel signed-measure on . We say that is absolutely continuous if . absolutely continuous measure We say the is singular singular measures Borel measure if and , where is the Jordan decomposition of .   We know that any Borel measure on determines a right-continuous function of bounded variation on ; and any right-continuous function on determines a Borel measure, Theorem . Example shows that we can get singular measures this way; Example shows that we can absolutely continuous measures this way. The following definition is clearly leading to what functions give what types of measures.   Let be a closed interval and let be a function. The function is absolutely continuous absolutely continuous function if for all there is a such that if are disjoint open intervals with   then    It should be clear that an absolutely continuous function is continuous. The following example shows that all Lipschitz functions are absolutely continuous.   Let be a Lipschitz function on Lipschitz function . That is, assume there is a constant such that for all . Take any and let . Let be a collection of disjoint open intervals such that . Then   Thus, is absolutely continuous.  Assume now that . Let be the Borel signed-measure on induced by , from Theorem . That is, if is the Jordan decomposition of , then where is the Carathéodory extension of the premeasure and is the Carathéodory extension of the premeasure , for . Following a similar argument as in Example , we can show that is absolutely continuous.   The following theorem has a similar proof to the analogous statements for continuous functions and is left as an exercise.   Let and be absolutely continuous functions on a closed interval , then   is absolutely continuous for all ;   is absolutely continuous;   if for all , is absolutely continuous.     If we want to talk about Borel signed-measures constructed from absolutely continuous functions, we must first show that absolutely continuous functions have bounded variation.   Let be an absolutely continuous function on a closed interval , then is of bounded variation.  Further, if is the Jordan decomposition of , then and are absolutely continuous.    Let satisfy   whenever are disjoint open intervals in with   Let be an integer greater than . Then, for any partition of   Thus, has bounded variation, with total variation .  Let be the Jordan decomposition of . Recall   where is the function of total variation for . Fix . Fix such that if are disjoint open intervals such that then   Fix disjoint open intervals with . For each , let be a partition of . Then   Thus   Hence is absolutely continuous. It follows that and are absolutely continuous.   The following proposition shows that what we have just found Lipschitz functions is not a happy coincidence. We have a one-to-one correspondence with absolutely continuous sign-measures and absolutely continuous functions.   Let be a closed interval in . Let be a signed Borel measure on , and let . Then is absolutely continuous with respect to the Lebesgue measure , if and only if is an absolutely continuous function and .    Suppose . First suppose that is a measure, i.e. for all Borel sets . Fix . By Proposition , there exists such that, if is a Borel set with , then . Let be a family of disjoint intervals in such that . Note that, since ,   for any Thus   Hence is an absolutely continuous function.  Suppose now that is a signed Borel measure. Let be the Jordan decomposition of (Theorem ). Then, by Proposition , the Jordan decomposition of is given by where is the cumulative distribution function of and is the cumulative distribution function of . If then, by definition, is absolutely continuous with respect to . Hence, and . It follows by the above argument that and are absolutely continuous, and hence is absolutely continuous.  Suppose now that is absolutely continuous and . Again, first assume that is a measure, so that is an increasing function. By the continuity of and the continuity of measure, for any ,   Fix . Fix so that if are disjoint open intervals in with , then   Let be an open set with . There are disjoint intervals such that . Hence   Thus, for any ,   Hence .  Take now any Borel set with . By the outer regularity of the Lebesgue measure, there is an open set with and . Hence Hence, by Proposition , is absolutely continuous with respect to .  Now suppose is a Borel signed measure, such that is absolutely continuous. As before, let and be the cumulative distribution functions of and , respectively. As is absolutely continuous, and are absolutely continuous by Proposition . By the above argument, it follows that and . Hence, we have that is absolutely continuous with respect to .   "
},
{
  "id": "prop-abs-cont-eps-delta",
  "level": "2",
  "url": "chap-differentation-4.html#prop-abs-cont-eps-delta",
  "type": "Proposition",
  "number": "9.2.1",
  "title": "",
  "body": " Let be a measure space. Suppose is a finite signed-measure on . Then if and only if for all there exists a such that given , if then  "
},
{
  "id": "chap-differentation-4-5",
  "level": "2",
  "url": "chap-differentation-4.html#chap-differentation-4-5",
  "type": "Proof",
  "number": "9.2.1",
  "title": "",
  "body": " First, assume the criterion does not hold. That is, we will assume that there is an such that for all there is a set with and There is thus a sequence of sets such that   For each , let . Then is a descending sequence of sets with   Let . Since for all ,   for all . Hence . By the continuity of measure (since is a finite measure)   Hence is not absolutely continuous with respect to .  Conversely, suppose that criterion holds. Suppose . Then, for all , . Hence . Thus . Note that we did not use the was finite for this direction of the proof. That was finite was only used in the first paragraph to apply the continuity of measure for intersections.  "
},
{
  "id": "chap-differentation-4-6",
  "level": "2",
  "url": "chap-differentation-4.html#chap-differentation-4-6",
  "type": "Definition",
  "number": "9.2.2",
  "title": "",
  "body": " Let be a closed interval, let be the Lebesgue measure on the Borel sets in , and let be a Borel signed-measure on . We say that is absolutely continuous if . absolutely continuous measure We say the is singular singular measures Borel measure if and , where is the Jordan decomposition of .  "
},
{
  "id": "chap-differentation-4-8",
  "level": "2",
  "url": "chap-differentation-4.html#chap-differentation-4-8",
  "type": "Definition",
  "number": "9.2.3",
  "title": "",
  "body": " Let be a closed interval and let be a function. The function is absolutely continuous absolutely continuous function if for all there is a such that if are disjoint open intervals with   then   "
},
{
  "id": "exam-Lipschitz-abs-cont",
  "level": "2",
  "url": "chap-differentation-4.html#exam-Lipschitz-abs-cont",
  "type": "Example",
  "number": "9.2.4",
  "title": "",
  "body": " Let be a Lipschitz function on Lipschitz function . That is, assume there is a constant such that for all . Take any and let . Let be a collection of disjoint open intervals such that . Then   Thus, is absolutely continuous.  Assume now that . Let be the Borel signed-measure on induced by , from Theorem . That is, if is the Jordan decomposition of , then where is the Carathéodory extension of the premeasure and is the Carathéodory extension of the premeasure , for . Following a similar argument as in Example , we can show that is absolutely continuous.  "
},
{
  "id": "chap-differentation-4-12",
  "level": "2",
  "url": "chap-differentation-4.html#chap-differentation-4-12",
  "type": "Theorem",
  "number": "9.2.5",
  "title": "",
  "body": " Let and be absolutely continuous functions on a closed interval , then   is absolutely continuous for all ;   is absolutely continuous;   if for all , is absolutely continuous.    "
},
{
  "id": "prop-abs-cont-jordan-decomp",
  "level": "2",
  "url": "chap-differentation-4.html#prop-abs-cont-jordan-decomp",
  "type": "Proposition",
  "number": "9.2.6",
  "title": "",
  "body": " Let be an absolutely continuous function on a closed interval , then is of bounded variation.  Further, if is the Jordan decomposition of , then and are absolutely continuous.  "
},
{
  "id": "chap-differentation-4-15",
  "level": "2",
  "url": "chap-differentation-4.html#chap-differentation-4-15",
  "type": "Proof",
  "number": "9.2.2",
  "title": "",
  "body": " Let satisfy   whenever are disjoint open intervals in with   Let be an integer greater than . Then, for any partition of   Thus, has bounded variation, with total variation .  Let be the Jordan decomposition of . Recall   where is the function of total variation for . Fix . Fix such that if are disjoint open intervals such that then   Fix disjoint open intervals with . For each , let be a partition of . Then   Thus   Hence is absolutely continuous. It follows that and are absolutely continuous.  "
},
{
  "id": "prop-abs-cont-meas-and-func",
  "level": "2",
  "url": "chap-differentation-4.html#prop-abs-cont-meas-and-func",
  "type": "Proposition",
  "number": "9.2.7",
  "title": "",
  "body": " Let be a closed interval in . Let be a signed Borel measure on , and let . Then is absolutely continuous with respect to the Lebesgue measure , if and only if is an absolutely continuous function and .  "
},
{
  "id": "chap-differentation-4-18",
  "level": "2",
  "url": "chap-differentation-4.html#chap-differentation-4-18",
  "type": "Proof",
  "number": "9.2.3",
  "title": "",
  "body": " Suppose . First suppose that is a measure, i.e. for all Borel sets . Fix . By Proposition , there exists such that, if is a Borel set with , then . Let be a family of disjoint intervals in such that . Note that, since ,   for any Thus   Hence is an absolutely continuous function.  Suppose now that is a signed Borel measure. Let be the Jordan decomposition of (Theorem ). Then, by Proposition , the Jordan decomposition of is given by where is the cumulative distribution function of and is the cumulative distribution function of . If then, by definition, is absolutely continuous with respect to . Hence, and . It follows by the above argument that and are absolutely continuous, and hence is absolutely continuous.  Suppose now that is absolutely continuous and . Again, first assume that is a measure, so that is an increasing function. By the continuity of and the continuity of measure, for any ,   Fix . Fix so that if are disjoint open intervals in with , then   Let be an open set with . There are disjoint intervals such that . Hence   Thus, for any ,   Hence .  Take now any Borel set with . By the outer regularity of the Lebesgue measure, there is an open set with and . Hence Hence, by Proposition , is absolutely continuous with respect to .  Now suppose is a Borel signed measure, such that is absolutely continuous. As before, let and be the cumulative distribution functions of and , respectively. As is absolutely continuous, and are absolutely continuous by Proposition . By the above argument, it follows that and . Hence, we have that is absolutely continuous with respect to .  "
},
{
  "id": "sec-ftoc",
  "level": "1",
  "url": "sec-ftoc.html",
  "type": "Section",
  "number": "9.3",
  "title": "The fundamental theorem of calculus",
  "body": " The fundamental theorem of calculus  The main reference for the rest of this chapter is , though we present the results in less generality than what is done in . We begin with a result which has nothing at all to do with differentiation, but will be useful.   Let be a Lebesgue integrable function on . For all there exists a continuous Lebesgue integrable function on such that     We will deal first with the non-negative case. Fix . Since is integrable, Hence, there is an such that   Suppose is a non-negative continuous function on such that      An example of defined in the proof of Theorem .     For each , we define by for ; for ; is the straight line from the point to on ; and is the straight line from the point to on (see Figure ). Choose so that and . Then,   Hence, to prove the result for , it suffice to show that the result holds when is restricted to a closed interval. We can thus assume that is a non-negative integrable function on a closed interval .  By the definition of and by Theorem ,   Let be a step function such that and   Suppose where are disjoint intervals. Without loss of generalization, assume for each . For each , let be a continuous function with such that   Let . Then is a continuous function with , and   If is a (not necessarily non-negative) integrable function, then , where and are the positive and negative parts of , respectively. By the above argument, there are continuous functions and such that , ,   Let . Then is a continuous function and    For each and , denote by the open interval of length centred at . That is . The in this definition stands for `ball'. That term makes more sense when working in , but we will stick with the notation here, even though we are working in .   Suppose is an integrable function on . For each and , we define as   average value function We will call the average value function for with radius .  Define the Hardy-Littlewood maximal function , for by Hardy-Littlewood maximal function     Let is an integrable function on some closed interval . The function is jointly continuous in and .    Fix and . Let be a sequence in converging to , and let be a sequence of positive real numbers converging to . Take any , then   Thus the sequence converges pointwise a.e. to . Hence converges pointwise a.e. to . Further, if and then   It follows now from the Lebesgue Dominated Convergence Theorem that   is jointly continuous in and . It follows that is jointly continuous in and .    Let be an integrable function, then Hardy-Littlewood maximal function is measurable and   is open for all .    For any ,   Since is continuous for all , is an open set. Thus is measurable.    The Hardy-Littlewood Maximal Theorem  For all integrable on and ,   Hardy-Littlewood Maximal Theorem    Fix and let . By Corollary , is an open set. By the continuity of , for each there is an such that   for all . Note that   Take any with . By the inner regularity of Lebesgue measure, Theorem , there is a compact set such that   Note that the sets form and open cover of , since they are an open cover of . As is compact, there are sets such that   Choose such that is maximal. Choose such that is maximal in the sets disjoint from . Choose such that is maximal in the sets disjoint from and . Proceed in this way to get sets until we exhaust all of the sets in . Let be the center point of the interval for . For any , there is a , such that Fixing such that and that is maximal. Let be the open interval with the center as with Then . Thus is an open cover of . We thus have   where the penultimate inequality comes from the fact that , and the final inequality comes from the fact that are disjoint. Taking the supremum over all gives the desired inequality.   For Fatou's Lemma we needed the concept of a limit inferior, , for a sequence. For what follows we will need to consider the limit superior of a function. If is a real-valued function we define the limit superior limit superior of a function of as approaches as   and we define the limit inferior limit inferior of a function of as approaches as   The limit if and only if   Further, by the definition of the Hardy-Littlewood maximal function,    Let be a Lebesgue integrable function on , then   for almost all .    Fix . By Theorem , there is an integrable continuous function such that   Take and . By the continuity of there is an , such that if , then . Thus, if then   Hence, as , .  Take any , then   For let   Then   By Chebyshev's inequality, and the choice of ,   By the Hardy-Littlewood Maximal Theorem, and the choice of ,   Thus   As this holds for all , it follows that for all .  Let . Then, , and if ,   Thus, for all .   This brings us now to an important theorem: The Lebesgue Differentiation Theorem. Lebesgue Differentiation Theorem   Lebesgue Differentiation Theorem  Lebesgue Differentiation Theorem Let be a Lebesgue integrable function on . For each and , let and . Then, for almost all ,   and   where , or .    Let   For each , let By Theorem , there is a Lebesgue measurable set , such that , and if , then   Let   Then , since is countable. Take and . By the density of in , there is a such that   For any ,   Thus, since ,   As is arbitrary, it follows that . Hence .  Now, for all , if or   Thus the first equality holds for all . The second equality follows from Theorem .   We are almost ready to give a concrete description of the Radon-Nikodym derivative of a Borel measure on . We first need to understand which Borel measures have continuous cumulative distribution functions.   Let be a Borel measure on the real line. We say that is outer regular regularity of a measure Borel measureson if     Let be a Borel measure on a closed interval , then   for all Borel sets .    Take any Borel set . By the monotonicity of the measure   Fix and let be the cumulative distribution function for . Assume first that . By Theorem , there is a countable collection of intervals in such that and   By the continuity of measure, for each ,   Thus, for each , we can choose such that   Let . Then   It follows that   It is a relatively straightforward exercise to show that   which completes the proof.    Let be a Borel signed-measure on . Let be the Radon-Nikodym derivative of with respect to the Lebesgue measure . Then,   for almost all .    Note that   Similarly   Thus, to prove the result we can assume is a measure, and we need only need to show that   for almost all .  Assume first that . In this case . By the assumption that , there are Borel sets and so that and . For each , let   Fix . We will show that . The argument is similar to that in the Hardy-Littlewood Maximal Theorem, Theorem .  Since is outer regular, Lemma , for each there is an open set , such that For each , there is a , so that Arguing as in Theorem , if then there is a finite collection so that are disjoint and   Taking the supremum over all we get for all . Hence . Let . Then , and if   and hence   Now let be an arbitrary Borel measure on . Applying the Lebesgue Decomposition Theorem to , we have where and . In this case   By the Lebesgue Differentiation Theorem, Theorem and the Radon-Nikodym Theorem,   Hence   for almost all .    Let be a right-continuous function of bounded variation on a closed interval and let be the signed Borel-measure on extending the premeasure and . Then is defined for almost all and is integrable.    If then   It follows from Theorem   for a.a. . As the Radon-Nikodym derivative is integrable, is integrable.    Fundamental Theorem of Calculus for Lebesgue Integrals  Fundamental Theorem of Calculus Lebesgue integration Let be a function on a closed interval . Then the following are equivalent   is absolutely continuous on ;\\   for , for some integrable function on ;   is differentiable almost everywhere on , is integrable on , and for        By replacing with we can assume . Assume is absolutely continuous. By Proposition , is of bounded variation. Thus exists a.e. and is integrable by Corollary . Let be the signed-Borel measure such that is the cumulative distribution function for . Then, by Proposition , is absolutely continuous. Thus, by Theorem   Hence (i) implies (iii). That (iii) implies (ii) is clear by setting .  Finally, suppose (ii) holds. Let be an integrable function on such that   for . Let be the Borel signed-measure   for Borel sets . Then is absolutely continuous, and   By Proposition , is absolutely continuous.   "
},
{
  "id": "thm-integrable-close-to-cont",
  "level": "2",
  "url": "sec-ftoc.html#thm-integrable-close-to-cont",
  "type": "Theorem",
  "number": "9.3.1",
  "title": "",
  "body": " Let be a Lebesgue integrable function on . For all there exists a continuous Lebesgue integrable function on such that   "
},
{
  "id": "sec-ftoc-4",
  "level": "2",
  "url": "sec-ftoc.html#sec-ftoc-4",
  "type": "Proof",
  "number": "9.3.1",
  "title": "",
  "body": " We will deal first with the non-negative case. Fix . Since is integrable, Hence, there is an such that   Suppose is a non-negative continuous function on such that      An example of defined in the proof of Theorem .     For each , we define by for ; for ; is the straight line from the point to on ; and is the straight line from the point to on (see Figure ). Choose so that and . Then,   Hence, to prove the result for , it suffice to show that the result holds when is restricted to a closed interval. We can thus assume that is a non-negative integrable function on a closed interval .  By the definition of and by Theorem ,   Let be a step function such that and   Suppose where are disjoint intervals. Without loss of generalization, assume for each . For each , let be a continuous function with such that   Let . Then is a continuous function with , and   If is a (not necessarily non-negative) integrable function, then , where and are the positive and negative parts of , respectively. By the above argument, there are continuous functions and such that , ,   Let . Then is a continuous function and   "
},
{
  "id": "sec-ftoc-6",
  "level": "2",
  "url": "sec-ftoc.html#sec-ftoc-6",
  "type": "Definition",
  "number": "9.3.3",
  "title": "",
  "body": " Suppose is an integrable function on . For each and , we define as   average value function We will call the average value function for with radius .  Define the Hardy-Littlewood maximal function , for by Hardy-Littlewood maximal function   "
},
{
  "id": "lem-avg-cont",
  "level": "2",
  "url": "sec-ftoc.html#lem-avg-cont",
  "type": "Lemma",
  "number": "9.3.4",
  "title": "",
  "body": " Let is an integrable function on some closed interval . The function is jointly continuous in and .  "
},
{
  "id": "sec-ftoc-8",
  "level": "2",
  "url": "sec-ftoc.html#sec-ftoc-8",
  "type": "Proof",
  "number": "9.3.2",
  "title": "",
  "body": " Fix and . Let be a sequence in converging to , and let be a sequence of positive real numbers converging to . Take any , then   Thus the sequence converges pointwise a.e. to . Hence converges pointwise a.e. to . Further, if and then   It follows now from the Lebesgue Dominated Convergence Theorem that   is jointly continuous in and . It follows that is jointly continuous in and .  "
},
{
  "id": "cor-Hardy-Littlewood",
  "level": "2",
  "url": "sec-ftoc.html#cor-Hardy-Littlewood",
  "type": "Corollary",
  "number": "9.3.5",
  "title": "",
  "body": " Let be an integrable function, then Hardy-Littlewood maximal function is measurable and   is open for all .  "
},
{
  "id": "sec-ftoc-10",
  "level": "2",
  "url": "sec-ftoc.html#sec-ftoc-10",
  "type": "Proof",
  "number": "9.3.3",
  "title": "",
  "body": " For any ,   Since is continuous for all , is an open set. Thus is measurable.  "
},
{
  "id": "thm-maximal-theorem",
  "level": "2",
  "url": "sec-ftoc.html#thm-maximal-theorem",
  "type": "Theorem",
  "number": "9.3.6",
  "title": "The Hardy-Littlewood Maximal Theorem.",
  "body": " The Hardy-Littlewood Maximal Theorem  For all integrable on and ,   Hardy-Littlewood Maximal Theorem  "
},
{
  "id": "sec-ftoc-12",
  "level": "2",
  "url": "sec-ftoc.html#sec-ftoc-12",
  "type": "Proof",
  "number": "9.3.4",
  "title": "",
  "body": " Fix and let . By Corollary , is an open set. By the continuity of , for each there is an such that   for all . Note that   Take any with . By the inner regularity of Lebesgue measure, Theorem , there is a compact set such that   Note that the sets form and open cover of , since they are an open cover of . As is compact, there are sets such that   Choose such that is maximal. Choose such that is maximal in the sets disjoint from . Choose such that is maximal in the sets disjoint from and . Proceed in this way to get sets until we exhaust all of the sets in . Let be the center point of the interval for . For any , there is a , such that Fixing such that and that is maximal. Let be the open interval with the center as with Then . Thus is an open cover of . We thus have   where the penultimate inequality comes from the fact that , and the final inequality comes from the fact that are disjoint. Taking the supremum over all gives the desired inequality.  "
},
{
  "id": "thm-lim-avg-f-f",
  "level": "2",
  "url": "sec-ftoc.html#thm-lim-avg-f-f",
  "type": "Theorem",
  "number": "9.3.7",
  "title": "",
  "body": " Let be a Lebesgue integrable function on , then   for almost all .  "
},
{
  "id": "sec-ftoc-22",
  "level": "2",
  "url": "sec-ftoc.html#sec-ftoc-22",
  "type": "Proof",
  "number": "9.3.5",
  "title": "",
  "body": " Fix . By Theorem , there is an integrable continuous function such that   Take and . By the continuity of there is an , such that if , then . Thus, if then   Hence, as , .  Take any , then   For let   Then   By Chebyshev's inequality, and the choice of ,   By the Hardy-Littlewood Maximal Theorem, and the choice of ,   Thus   As this holds for all , it follows that for all .  Let . Then, , and if ,   Thus, for all .  "
},
{
  "id": "thm-Lebesgue-differentiation",
  "level": "2",
  "url": "sec-ftoc.html#thm-Lebesgue-differentiation",
  "type": "Theorem",
  "number": "9.3.8",
  "title": "Lebesgue Differentiation Theorem.",
  "body": " Lebesgue Differentiation Theorem  Lebesgue Differentiation Theorem Let be a Lebesgue integrable function on . For each and , let and . Then, for almost all ,   and   where , or .  "
},
{
  "id": "sec-ftoc-25",
  "level": "2",
  "url": "sec-ftoc.html#sec-ftoc-25",
  "type": "Proof",
  "number": "9.3.6",
  "title": "",
  "body": " Let   For each , let By Theorem , there is a Lebesgue measurable set , such that , and if , then   Let   Then , since is countable. Take and . By the density of in , there is a such that   For any ,   Thus, since ,   As is arbitrary, it follows that . Hence .  Now, for all , if or   Thus the first equality holds for all . The second equality follows from Theorem .  "
},
{
  "id": "sec-ftoc-27",
  "level": "2",
  "url": "sec-ftoc.html#sec-ftoc-27",
  "type": "Definition",
  "number": "9.3.9",
  "title": "",
  "body": " Let be a Borel measure on the real line. We say that is outer regular regularity of a measure Borel measureson if   "
},
{
  "id": "lem-regular-borel",
  "level": "2",
  "url": "sec-ftoc.html#lem-regular-borel",
  "type": "Lemma",
  "number": "9.3.10",
  "title": "",
  "body": " Let be a Borel measure on a closed interval , then   for all Borel sets .  "
},
{
  "id": "sec-ftoc-29",
  "level": "2",
  "url": "sec-ftoc.html#sec-ftoc-29",
  "type": "Proof",
  "number": "9.3.7",
  "title": "",
  "body": " Take any Borel set . By the monotonicity of the measure   Fix and let be the cumulative distribution function for . Assume first that . By Theorem , there is a countable collection of intervals in such that and   By the continuity of measure, for each ,   Thus, for each , we can choose such that   Let . Then   It follows that   It is a relatively straightforward exercise to show that   which completes the proof.  "
},
{
  "id": "thm-Borel-radon-nikodym-derivative",
  "level": "2",
  "url": "sec-ftoc.html#thm-Borel-radon-nikodym-derivative",
  "type": "Theorem",
  "number": "9.3.11",
  "title": "",
  "body": " Let be a Borel signed-measure on . Let be the Radon-Nikodym derivative of with respect to the Lebesgue measure . Then,   for almost all .  "
},
{
  "id": "sec-ftoc-31",
  "level": "2",
  "url": "sec-ftoc.html#sec-ftoc-31",
  "type": "Proof",
  "number": "9.3.8",
  "title": "",
  "body": " Note that   Similarly   Thus, to prove the result we can assume is a measure, and we need only need to show that   for almost all .  Assume first that . In this case . By the assumption that , there are Borel sets and so that and . For each , let   Fix . We will show that . The argument is similar to that in the Hardy-Littlewood Maximal Theorem, Theorem .  Since is outer regular, Lemma , for each there is an open set , such that For each , there is a , so that Arguing as in Theorem , if then there is a finite collection so that are disjoint and   Taking the supremum over all we get for all . Hence . Let . Then , and if   and hence   Now let be an arbitrary Borel measure on . Applying the Lebesgue Decomposition Theorem to , we have where and . In this case   By the Lebesgue Differentiation Theorem, Theorem and the Radon-Nikodym Theorem,   Hence   for almost all .  "
},
{
  "id": "cor-f-integrable",
  "level": "2",
  "url": "sec-ftoc.html#cor-f-integrable",
  "type": "Corollary",
  "number": "9.3.12",
  "title": "",
  "body": " Let be a right-continuous function of bounded variation on a closed interval and let be the signed Borel-measure on extending the premeasure and . Then is defined for almost all and is integrable.  "
},
{
  "id": "sec-ftoc-33",
  "level": "2",
  "url": "sec-ftoc.html#sec-ftoc-33",
  "type": "Proof",
  "number": "9.3.9",
  "title": "",
  "body": " If then   It follows from Theorem   for a.a. . As the Radon-Nikodym derivative is integrable, is integrable.  "
},
{
  "id": "thm-Lebesgue-FToC",
  "level": "2",
  "url": "sec-ftoc.html#thm-Lebesgue-FToC",
  "type": "Theorem",
  "number": "9.3.13",
  "title": "Fundamental Theorem of Calculus for Lebesgue Integrals.",
  "body": " Fundamental Theorem of Calculus for Lebesgue Integrals  Fundamental Theorem of Calculus Lebesgue integration Let be a function on a closed interval . Then the following are equivalent   is absolutely continuous on ;\\   for , for some integrable function on ;   is differentiable almost everywhere on , is integrable on , and for      "
},
{
  "id": "sec-ftoc-35",
  "level": "2",
  "url": "sec-ftoc.html#sec-ftoc-35",
  "type": "Proof",
  "number": "9.3.10",
  "title": "",
  "body": " By replacing with we can assume . Assume is absolutely continuous. By Proposition , is of bounded variation. Thus exists a.e. and is integrable by Corollary . Let be the signed-Borel measure such that is the cumulative distribution function for . Then, by Proposition , is absolutely continuous. Thus, by Theorem   Hence (i) implies (iii). That (iii) implies (ii) is clear by setting .  Finally, suppose (ii) holds. Let be an integrable function on such that   for . Let be the Borel signed-measure   for Borel sets . Then is absolutely continuous, and   By Proposition , is absolutely continuous.  "
},
{
  "id": "chap-differentation-6",
  "level": "1",
  "url": "chap-differentation-6.html",
  "type": "Section",
  "number": "9.4",
  "title": "The Lebesgue Decomposition of function",
  "body": " The Lebesgue Decomposition of function  By the Lebesgue Decomposition Theorem , where and . Let be the cumulative distribution function for , and let be the cumulative distribution function for . By Proposition , is absolutely continuous. In this section we will further study .   Let be a continuous function on a closed interval . Then is a continuous singular function singular function if a.e.    Let be the Cantor-Lebesgue function on (see Example ), let be the Cantor set in and let By the definition of , there are disjoint open intervals such that such that is constant on each . It follows that for all . By Example , . Hence a.e., and so is a continuous singular function.  Recall that, by Example , if is the Borel measure on satisfying , then is a singular measure.   Example gives an example of a singular function which gives rise to a singular measure. The following theorem shows that this is not a coincidence.   Let be a right-continuous function of bounded variation on a closed interval and let be the Borel signed-measure defined by Then is singular if and only if a.e.    Note that, as argued in Corollary ,   where is or . From Theorem , is singular if and only if, for almost all ,   Thus if and only if a.e.    Lebesgue Decomposition Theorem  Lebesgue Decomposition Theorem for functions Let be a continuous function of bounded variation on a closed interval , then there are unique continuous functions and on satisying , such that   is absolutely continuous; and   is singular.      The result follows immediately from Theorem , Proposition , and Proposition .    Let be the Dirac measure on the Borel sets of , centered at . I.e. if , and otherwise. If is the cumulative distribution function of , then is not continuous, see Exercise . Thus Theorem , does not apply to .    Let be a Borel measure on , with cumulative distribution function . If is continuous, then applying Theorem to gives the same decomposition as applying Theorem to .  If is not continuous, we can still apply Theorem to and decompose , where is absolutely continuous, and a.e. In this case will not be continuous.  This leads us to the questions: what Borel measures have continuous cumulative distribution functions? If is right-continuous and of bounded variation, how discontinuous can it be?    Let be a Borel signed-measure on a closed interval . Then is a continuous Borel signed-measure is for all . measure continuous signed-measure continuous    Let be a Borel signed-measure on a closed interval , and let . Then is continuous if and only if is continuous and .    By Theorem , is right continuous. Assume that is continuous and . Since , . Take any . Then   by the (left) continuity of .  Conversely, suppose for all . Then . If then   Hence is left-continuous, and therefore continuous, at .   In order to get a better idea of the singular part of a function of bounded variation, we need to understand to consider not-necessarily-continuous functions of bounded variation. To this end, we need a quick aside (which may or may not be known to you).  Let be an index set, and let be a collection of real numbers indexed by . Let be the collection of all finite subsets of . convergence of uncountable series Let be a real number. We say the series converges to some if for all there is an such that if with then   In this case we write .\\footnote{If you are familiar with point-set topology you will recognize this convergence as simply convergence of the net of partial sums .}  If each , and then   Further, if is the set of natural numbers, then if and only if converges absolutely.   convergence of uncountable series Let be an index set, and let be a collection of real numbers indexed by . If is convergent, then is countable.    Let and . Note that is convergent if and only if and are both convergent. We will thus assume that for all .  Suppose the set is uncountable. Let For each , choose such that   Let Then   As is uncountable, it follows that is countable for some . Let be such that and the set is uncountable.  For each , choose a finite set with elements. Then   Hence   and therefore     Let be a function of bounded variation on . Then the set of discontinuities of is countable.    Assume that is increasing. The general result follows from the increasing case by the Jordan Decomposition Theorem. For each , let   Since is continuous at if and only if . Further, since is increasing, when . The collection of open intervals is therefore a disjoint collection (viewing as the empty set when ); and   By Lemma it follows that for all but at most countably many points. Thus the set of discontinuities of is countable.   The following result offers a sort of converse to Theorem : for every countable set there is an increasing function whose set of discontinuities is .   Let be a closed interval, and let be a countable set. There is an increasing function on where is continuous on and discontinuous on . Further, can be chosen to be right-continuous.    We will assume that is countably infinite. The case when is finite is straightforward. Enumerate the points in by   Let be a sequence of positive real numbers such that . Define a function on by   We will show that is right-continuous; is discontinuous at every point in ; and is continuous on .  We will first prove right-continuity. Take any and fix . Suppose there exists such that . If and , then . Thus is right-continuous at . Otherwise, for each the set is infinite. Fix . The series   Hence, there is a finite set such that   Fix such that   Take with Then   Hence is right-continuous at .  Take any , and . Then   Hence is not continuous at .  The argument that is (left) continuous on follows similar reasoning as the argument that is right-continuous and is left as an exercise (Exercise ).   What do non-continuous Borel signed-measures look like? Let be a closed interval and let be any point. The Dirac measure at , , is not a continuous Borel measure, since . Clearly, any linear combination of Dirac measures will not be a continuous Borel signed-measure. Hence, there are many Borel measures which are not continuous. Gives a name to measures which are made from Dirac measures.   A non-zero Borel signed-measure on a closed interval is discrete measure discrete Borel signed-measure discrete Borel if there is a countable collection of points and a sequence of real numbers such that   where is the Dirac measure at the point .    Note that, if is a discrete Borel signed-measure, then the series is absolutely convergent.  Conversely, if is an absolutely convergent series, and is a countable collection of points in a closed interval , then is a discrete Borel signed-measure on , (Exercise ).   It turns out that discrete Borel measures are (up to removing a continuous measure) all the non-continuous Borel measures. We can now decompose the Lebesgue decomposition further.   Lebesgue decomposition function If is a Borel signed-measure on then there are mutually singular signed Borel measures , and such that   ;   is a discrete Borel signed-measure;   is a singular continuous Borel signed-measure; and   is an absolutely continuous Borel signed-measure.      By the Lebesgue decomposition, Theorem , there are mutually singular measures and where is singular, is absolutely continuous, and . It remains to show that we can decompose into a discrete part and a continuous part. We will thus assume that is singular.  First, assume is a measure. Let be the cumulative distribution function for . Then is a right-continuous increasing function on . By Theorem the set of discontinuities of is countable. For each , let   Note that the sequence is absolutely convergent, since is of bounded variation. Let be the discrete Borel signed-measure   and let .  For any , , and hence If , then   Hence is continuous, completing the proof   Let be the Heaviside function Heaviside function on . That is   The Heaviside function is the cumulative distribution function for the Dirac measure at , (see Exercise ). Thus, if , then the cumulative distribution function for the Dirac measure is   Let be a right-continuous function of bounded variation on a closed interval . Then there are functions , , and on such that   ;   is absolutely continuous on ;   is continuous and singular;   there are points in and a sequence of real numbers such that  for all .       Let be a discrete Borel signed-measure on . The result follows from Theorem , on noting that if , then    "
},
{
  "id": "chap-differentation-6-3",
  "level": "2",
  "url": "chap-differentation-6.html#chap-differentation-6-3",
  "type": "Definition",
  "number": "9.4.1",
  "title": "",
  "body": " Let be a continuous function on a closed interval . Then is a continuous singular function singular function if a.e.  "
},
{
  "id": "ex-Cantor-Lebesgue-singular-function",
  "level": "2",
  "url": "chap-differentation-6.html#ex-Cantor-Lebesgue-singular-function",
  "type": "Example",
  "number": "9.4.2",
  "title": "",
  "body": " Let be the Cantor-Lebesgue function on (see Example ), let be the Cantor set in and let By the definition of , there are disjoint open intervals such that such that is constant on each . It follows that for all . By Example , . Hence a.e., and so is a continuous singular function.  Recall that, by Example , if is the Borel measure on satisfying , then is a singular measure.  "
},
{
  "id": "prop-f-singular",
  "level": "2",
  "url": "chap-differentation-6.html#prop-f-singular",
  "type": "Proposition",
  "number": "9.4.3",
  "title": "",
  "body": " Let be a right-continuous function of bounded variation on a closed interval and let be the Borel signed-measure defined by Then is singular if and only if a.e.  "
},
{
  "id": "chap-differentation-6-7",
  "level": "2",
  "url": "chap-differentation-6.html#chap-differentation-6-7",
  "type": "Proof",
  "number": "9.4.1",
  "title": "",
  "body": " Note that, as argued in Corollary ,   where is or . From Theorem , is singular if and only if, for almost all ,   Thus if and only if a.e.  "
},
{
  "id": "thm-Lebesgue-decomp-function",
  "level": "2",
  "url": "chap-differentation-6.html#thm-Lebesgue-decomp-function",
  "type": "Theorem",
  "number": "9.4.4",
  "title": "Lebesgue Decomposition Theorem.",
  "body": " Lebesgue Decomposition Theorem  Lebesgue Decomposition Theorem for functions Let be a continuous function of bounded variation on a closed interval , then there are unique continuous functions and on satisying , such that   is absolutely continuous; and   is singular.    "
},
{
  "id": "chap-differentation-6-9",
  "level": "2",
  "url": "chap-differentation-6.html#chap-differentation-6-9",
  "type": "Proof",
  "number": "9.4.2",
  "title": "",
  "body": " The result follows immediately from Theorem , Proposition , and Proposition .  "
},
{
  "id": "chap-differentation-6-10",
  "level": "2",
  "url": "chap-differentation-6.html#chap-differentation-6-10",
  "type": "Example",
  "number": "9.4.5",
  "title": "",
  "body": " Let be the Dirac measure on the Borel sets of , centered at . I.e. if , and otherwise. If is the cumulative distribution function of , then is not continuous, see Exercise . Thus Theorem , does not apply to .  "
},
{
  "id": "chap-differentation-6-11",
  "level": "2",
  "url": "chap-differentation-6.html#chap-differentation-6-11",
  "type": "Remark",
  "number": "9.4.6",
  "title": "",
  "body": " Let be a Borel measure on , with cumulative distribution function . If is continuous, then applying Theorem to gives the same decomposition as applying Theorem to .  If is not continuous, we can still apply Theorem to and decompose , where is absolutely continuous, and a.e. In this case will not be continuous.  This leads us to the questions: what Borel measures have continuous cumulative distribution functions? If is right-continuous and of bounded variation, how discontinuous can it be?  "
},
{
  "id": "chap-differentation-6-12",
  "level": "2",
  "url": "chap-differentation-6.html#chap-differentation-6-12",
  "type": "Definition",
  "number": "9.4.7",
  "title": "",
  "body": " Let be a Borel signed-measure on a closed interval . Then is a continuous Borel signed-measure is for all . measure continuous signed-measure continuous  "
},
{
  "id": "chap-differentation-6-13",
  "level": "2",
  "url": "chap-differentation-6.html#chap-differentation-6-13",
  "type": "Proposition",
  "number": "9.4.8",
  "title": "",
  "body": " Let be a Borel signed-measure on a closed interval , and let . Then is continuous if and only if is continuous and .  "
},
{
  "id": "chap-differentation-6-14",
  "level": "2",
  "url": "chap-differentation-6.html#chap-differentation-6-14",
  "type": "Proof",
  "number": "9.4.3",
  "title": "",
  "body": " By Theorem , is right continuous. Assume that is continuous and . Since , . Take any . Then   by the (left) continuity of .  Conversely, suppose for all . Then . If then   Hence is left-continuous, and therefore continuous, at .  "
},
{
  "id": "lem-uncountable-series",
  "level": "2",
  "url": "chap-differentation-6.html#lem-uncountable-series",
  "type": "Lemma",
  "number": "9.4.9",
  "title": "",
  "body": " convergence of uncountable series Let be an index set, and let be a collection of real numbers indexed by . If is convergent, then is countable.  "
},
{
  "id": "chap-differentation-6-23",
  "level": "2",
  "url": "chap-differentation-6.html#chap-differentation-6-23",
  "type": "Proof",
  "number": "9.4.4",
  "title": "",
  "body": " Let and . Note that is convergent if and only if and are both convergent. We will thus assume that for all .  Suppose the set is uncountable. Let For each , choose such that   Let Then   As is uncountable, it follows that is countable for some . Let be such that and the set is uncountable.  For each , choose a finite set with elements. Then   Hence   and therefore   "
},
{
  "id": "thm-bv-countable-discont",
  "level": "2",
  "url": "chap-differentation-6.html#thm-bv-countable-discont",
  "type": "Theorem",
  "number": "9.4.10",
  "title": "",
  "body": " Let be a function of bounded variation on . Then the set of discontinuities of is countable.  "
},
{
  "id": "chap-differentation-6-25",
  "level": "2",
  "url": "chap-differentation-6.html#chap-differentation-6-25",
  "type": "Proof",
  "number": "9.4.5",
  "title": "",
  "body": " Assume that is increasing. The general result follows from the increasing case by the Jordan Decomposition Theorem. For each , let   Since is continuous at if and only if . Further, since is increasing, when . The collection of open intervals is therefore a disjoint collection (viewing as the empty set when ); and   By Lemma it follows that for all but at most countably many points. Thus the set of discontinuities of is countable.  "
},
{
  "id": "prop-countable-discont",
  "level": "2",
  "url": "chap-differentation-6.html#prop-countable-discont",
  "type": "Proposition",
  "number": "9.4.11",
  "title": "",
  "body": " Let be a closed interval, and let be a countable set. There is an increasing function on where is continuous on and discontinuous on . Further, can be chosen to be right-continuous.  "
},
{
  "id": "chap-differentation-6-28",
  "level": "2",
  "url": "chap-differentation-6.html#chap-differentation-6-28",
  "type": "Proof",
  "number": "9.4.6",
  "title": "",
  "body": " We will assume that is countably infinite. The case when is finite is straightforward. Enumerate the points in by   Let be a sequence of positive real numbers such that . Define a function on by   We will show that is right-continuous; is discontinuous at every point in ; and is continuous on .  We will first prove right-continuity. Take any and fix . Suppose there exists such that . If and , then . Thus is right-continuous at . Otherwise, for each the set is infinite. Fix . The series   Hence, there is a finite set such that   Fix such that   Take with Then   Hence is right-continuous at .  Take any , and . Then   Hence is not continuous at .  The argument that is (left) continuous on follows similar reasoning as the argument that is right-continuous and is left as an exercise (Exercise ).  "
},
{
  "id": "chap-differentation-6-30",
  "level": "2",
  "url": "chap-differentation-6.html#chap-differentation-6-30",
  "type": "Definition",
  "number": "9.4.12",
  "title": "",
  "body": " A non-zero Borel signed-measure on a closed interval is discrete measure discrete Borel signed-measure discrete Borel if there is a countable collection of points and a sequence of real numbers such that   where is the Dirac measure at the point .  "
},
{
  "id": "chap-differentation-6-31",
  "level": "2",
  "url": "chap-differentation-6.html#chap-differentation-6-31",
  "type": "Remark",
  "number": "9.4.13",
  "title": "",
  "body": " Note that, if is a discrete Borel signed-measure, then the series is absolutely convergent.  Conversely, if is an absolutely convergent series, and is a countable collection of points in a closed interval , then is a discrete Borel signed-measure on , (Exercise ).  "
},
{
  "id": "thm-Lebesgue-decomp-function-further",
  "level": "2",
  "url": "chap-differentation-6.html#thm-Lebesgue-decomp-function-further",
  "type": "Theorem",
  "number": "9.4.14",
  "title": "",
  "body": " Lebesgue decomposition function If is a Borel signed-measure on then there are mutually singular signed Borel measures , and such that   ;   is a discrete Borel signed-measure;   is a singular continuous Borel signed-measure; and   is an absolutely continuous Borel signed-measure.    "
},
{
  "id": "chap-differentation-6-34",
  "level": "2",
  "url": "chap-differentation-6.html#chap-differentation-6-34",
  "type": "Proof",
  "number": "9.4.7",
  "title": "",
  "body": " By the Lebesgue decomposition, Theorem , there are mutually singular measures and where is singular, is absolutely continuous, and . It remains to show that we can decompose into a discrete part and a continuous part. We will thus assume that is singular.  First, assume is a measure. Let be the cumulative distribution function for . Then is a right-continuous increasing function on . By Theorem the set of discontinuities of is countable. For each , let   Note that the sequence is absolutely convergent, since is of bounded variation. Let be the discrete Borel signed-measure   and let .  For any , , and hence If , then   Hence is continuous, completing the proof  "
},
{
  "id": "chap-differentation-6-38",
  "level": "2",
  "url": "chap-differentation-6.html#chap-differentation-6-38",
  "type": "Corollary",
  "number": "9.4.15",
  "title": "",
  "body": " Let be a right-continuous function of bounded variation on a closed interval . Then there are functions , , and on such that   ;   is absolutely continuous on ;   is continuous and singular;   there are points in and a sequence of real numbers such that  for all .     "
},
{
  "id": "chap-differentation-6-39",
  "level": "2",
  "url": "chap-differentation-6.html#chap-differentation-6-39",
  "type": "Proof",
  "number": "9.4.8",
  "title": "",
  "body": " Let be a discrete Borel signed-measure on . The result follows from Theorem , on noting that if , then   "
},
{
  "id": "chap-differentation-7",
  "level": "1",
  "url": "chap-differentation-7.html",
  "type": "Exercises",
  "number": "9.5",
  "title": "Exercises",
  "body": "  Let be a measurable space and let and be two measures on . Take any non-negative measurable function on . Show that, for all     Let be the measurable space of Lebesgue measurable subsets of , let be the Lebesgue measure on , and let be the counting measure on .   Show that .   Show that there does not exist a measurable function on so that    Why does this not contradict the Radon-Nikodym Theorem?      Let be a -finite measure space and let be a -finite measure on with . Let be the Radon-Nikodym derivative of with respect to . Let be a measurable set, and let be a measurable function on which is integrable with respect to . Show that   (HINT: First show the result holds for simple functions)    Let be a measurable set. Show that absolute continuity defines a preorder preorder on the set of all measures on . That is, show   for all measures ( is symmetric); and   if and , then ( is transitive).      In Exercise it is shown that is a preorder.   Show that is not a partial order . I.e. show that is not antisymmetric. That is, show that we can have and but .   For -finite measures, show that if and then there is a scalar such that . That is, let be a measurable space and let and be non-zero -finite measures on such that and . Show that the Radon-Nikodym derivatives and are constant and (multiplicative) inverses of eachother. (HINT: Recall Exercise and Exercise ).      Let be a continuous function on a closed interval . Show that if exists for all and is bounded, then is absolutely continuous. (HINT: Recall the Mean Value Theorem).    Complete the proof of Proposition . That is, if is a countable set, is a convergent series of positive numbers, and is the function on   then is continuous for all .    Let be a closed interval, and let be a countable subset of . Show that, for real numbers ,   is a Borel signed-measure on if and only if converges absolutely.   "
},
{
  "id": "ex-integration-sum-measures",
  "level": "2",
  "url": "chap-differentation-7.html#ex-integration-sum-measures",
  "type": "Exercise",
  "number": "9.5.1",
  "title": "",
  "body": " Let be a measurable space and let and be two measures on . Take any non-negative measurable function on . Show that, for all   "
},
{
  "id": "chap-differentation-7-2",
  "level": "2",
  "url": "chap-differentation-7.html#chap-differentation-7-2",
  "type": "Exercise",
  "number": "9.5.2",
  "title": "",
  "body": " Let be the measurable space of Lebesgue measurable subsets of , let be the Lebesgue measure on , and let be the counting measure on .   Show that .   Show that there does not exist a measurable function on so that    Why does this not contradict the Radon-Nikodym Theorem?    "
},
{
  "id": "exer-abs-cont-integration",
  "level": "2",
  "url": "chap-differentation-7.html#exer-abs-cont-integration",
  "type": "Exercise",
  "number": "9.5.3",
  "title": "",
  "body": " Let be a -finite measure space and let be a -finite measure on with . Let be the Radon-Nikodym derivative of with respect to . Let be a measurable set, and let be a measurable function on which is integrable with respect to . Show that   (HINT: First show the result holds for simple functions)  "
},
{
  "id": "exer-abs-cont-preorder",
  "level": "2",
  "url": "chap-differentation-7.html#exer-abs-cont-preorder",
  "type": "Exercise",
  "number": "9.5.4",
  "title": "",
  "body": " Let be a measurable set. Show that absolute continuity defines a preorder preorder on the set of all measures on . That is, show   for all measures ( is symmetric); and   if and , then ( is transitive).    "
},
{
  "id": "exer-abs-cont-not-antisymmetric",
  "level": "2",
  "url": "chap-differentation-7.html#exer-abs-cont-not-antisymmetric",
  "type": "Exercise",
  "number": "9.5.5",
  "title": "",
  "body": " In Exercise it is shown that is a preorder.   Show that is not a partial order . I.e. show that is not antisymmetric. That is, show that we can have and but .   For -finite measures, show that if and then there is a scalar such that . That is, let be a measurable space and let and be non-zero -finite measures on such that and . Show that the Radon-Nikodym derivatives and are constant and (multiplicative) inverses of eachother. (HINT: Recall Exercise and Exercise ).    "
},
{
  "id": "exer-bounded-derivative-abs-cont",
  "level": "2",
  "url": "chap-differentation-7.html#exer-bounded-derivative-abs-cont",
  "type": "Exercise",
  "number": "9.5.6",
  "title": "",
  "body": " Let be a continuous function on a closed interval . Show that if exists for all and is bounded, then is absolutely continuous. (HINT: Recall the Mean Value Theorem).  "
},
{
  "id": "exer-countable-discont",
  "level": "2",
  "url": "chap-differentation-7.html#exer-countable-discont",
  "type": "Exercise",
  "number": "9.5.7",
  "title": "",
  "body": " Complete the proof of Proposition . That is, if is a countable set, is a convergent series of positive numbers, and is the function on   then is continuous for all .  "
},
{
  "id": "exer-discrete-measure",
  "level": "2",
  "url": "chap-differentation-7.html#exer-discrete-measure",
  "type": "Exercise",
  "number": "9.5.8",
  "title": "",
  "body": " Let be a closed interval, and let be a countable subset of . Show that, for real numbers ,   is a Borel signed-measure on if and only if converges absolutely.  "
},
{
  "id": "real-analysis-6-2-3",
  "level": "1",
  "url": "real-analysis-6-2-3.html",
  "type": "Section",
  "number": "10.1",
  "title": "Banach spaces",
  "body": " Banach spaces  Almost everything we cover can just as easily be proved over the field of complex numbers . Whilst vector spaces can, of course, be defined over other fields, the analysis we are doing is rarely done on fields other than and . We will thus stick to using the field without comment; suitable adjustments for the field can be done, but won't be done here.   Let be a (real) vector space. A norm norm on is a function satisfying   for all , and if and only if ;   for all and ; and   for all (the triangle inequality ). triangle inequality for norms    If is a vector space with a norm, we call a normed vector space vector space normed .    The field itself is a real vector space. The absolute value defines a norm on .  More generally, let . We can define a norm on by   for . This is called the Euclidean norm or the -norm on . norm Euclidean norm norm -norm on That is a norm is left as an exercise, Exercise .    Denote by all continuous, bounded functions on . Then is a vector space. Define on by   Then defines a norm on called the infinity norm or the -norm . norm -norm  More generally, if is a topological space, the , the space of all continuous bounded functions on , is a vector space and   defines a norm on .  Denote by all continuous functions on a topological space . In general, will not define a norm on (since we could hace for some ). If is compact then all continuous functions on are bounded. In this case .   If is a normed vector space, then we can define a metric, or distance, on . The distance between two vectors is given by With this metric, we can then study convergence of sequences, just as we do in the real line.   Let be a normed vector space, and let be a vector in , and let be a sequence of vectors in . The sequence is convergent with limit with respect to , or convergent to if convergence in a normed vector space   That is, the sequence converges to if for all there is an such that if , then    We can similarly define Cauchy sequences in normed vector spaces.   Let be a normed vector space, and let be a sequence of vectors in . The sequence is a Cauchy sequence in Cauchy sequence in a normed vector space with respect to if for all there is an such that if , then    Roughly speaking, a sequence of vectors is convergent if they get closer and closer to some vector; and a sequence of vectors is Cauchy if the vectors get closer and closer to each other. The following proposition should thus not come as a surprise. The proof is analogous to the real-line case.   Let be a normed vector space, and let be a sequence of vectors in which converge to some . Then is a Cauchy sequence.   Whilst all convergent sequences are Cauchy, a Cauchy sequence is not necessarily convergent.   Let and let be the -norm (restricted from the -norm on .) Take a sequence of rationals which converge to . E.g. let   For each , let   Then is a Cauchy sequence in , but does not converge in . If we view as a sequence in , then converges to .   Recall that all Cauchy sequences in converge. That is, is complete. The completeness of is a fundamental property on which a lot of analysis relies. We are similarly, primarily interested in normed vector spaces in which Cauchy sequences are convergent.   If is a normed vector space in which every Cauchy sequence is convergent, then we call a Banach space . That is, a Banach space a normed vector space which is complete with respect to the metric induced by the norm.    The vector space with the -norm is a Banach space, see Exercise .    Let be an interval. The normed vector space with norm (see Example ) is a Banach space, see Exercise    Let be an interval. A continuous function  vanishes at infinity vanishes at infinity if for all there is a closed interval such that for . We denote the collection of all continuous functions on that vanish at infinity by .  The space is a vector subspace of , thus is a normed vector space with the -norm . With this norm is a Banach space, see Exercise .    Let be an interval. Let denote all continuous real-valued functions on which are compactly supported compactly supported . That is, a continuous function on is in if there is a compact set such that for . Then a vector space of functions with   However, in general, is not a Banach space, see Exercise and Exercise .   In many cases, a natural norm on a vector space arises from an inner-product. We will now recall the definition of an inner-product here and explain how we can get a norm from an inner-product.   Let be a real-inner product. An inner-product inner-product on is a bilinear, real-valued map   such that for all , and if and only if .  If is a vector space with an inner-product, then is called an inner-product space . inner-product space   If is an inner-product space, then we can make into a normed vector space. Indeed, if we define   then it can be shown that this defines a norm on . We call this norm the inner-product norm norm inner-product norm . We will leave proving the general case that an inner-product norm is always a norm to the Exercises. When they arise in the examples we are interested in, it will be clear that an inner-product norm is a norm.   Let be an inner-product space. If is complete, i.e. is a Banach space, with respect to the inner-product norm, then is Hilbert space .    The dot-product on is an inner-product and the Euclidean-norm\/ -norm on is the inner-product norm induced by the dot-product. As is a Banach space with the -norm (Example ), is a Hilbert space.   A vector space can have more than one norm. It is possible that two different norms may behave the same when it comes to topological concerns: e.g. convergence of sequences. We introduce the idea of equivalent norms now to deal with this instance.   Let be a real vector space, and let and be two norms on . The norm is equivalent to  norm equivalent norms if there are scalars such that   for all .   The relation of one norm being equivalent to another does, as the name suggests, form an equivalence relation on the family of all norms on a vector space .   Let be a real vector space, and let and be two norms on . The norm is equivalent to if and only if the norm is equivalent to .    The proof is left as an exercise, Exercise   Let be a vector space with norms and . If is equivalent to then the norm is equivalent to by Proposition . In this case we will simply say that and are equivalent . norm equivalent norms  Properties like convergence do not rely on the exact value of the norms; analytic definitions usually use inequalities, not equalities. Thus, when a vector space has two equivalent norms, it does not usually matter which one we work with. We formalize this in the following theorem.   Let be a real vector space and let and be equivalent norms on . Let be a sequence of vectors in . Then   is a Cauchy sequence with respect to the norm if and only if is a Cauchy sequence with respect to the norm ; and   is convergent with respect to with respect to if and only if is convergent with respect to with respect to .    In particular, is a Banach space under the norm if and only if is a Banach space under the norm .    We will prove (i). Part (ii) is proved similarly. Let be constants such that . Suppose is a Cauchy sequence with respect to the norm .  Take . There exists such that, if then   Thus, if then   Thus is Cauchy with respect to .  As is also equivalent to , a similar argument gives that if is Cauchy with respect to then is Cauchy with respect to    Let be a normed vector space, and let be a non-empty subset. A set is dense in dense if for all and there exists such that   A Banach space is called separable Banach space separable if there is countable set which is dense in .   Many Banach spaces that we study will be separable. Heuristically, a Banach space being separable means that it is not too big. Non-separable spaces tend to be harder to understand.   The rationals are dense in and the rationals are countable, and so is separable. More generally, is a countable dense subset of (with the -norm), and so is separable.   The following results show that infinite dimensional Banach spaces can be separable. We first show that the polynomials are dense in the Banach space of continuous functions on a closed interval . This result is known as the Weierstrass Approximation Theorem Weierstrass theorem . We then show that there is a countable subset of polynomials which is dense in , and so is a separable Banach space, with the -norm.   Weierstrass Approximation Theorem  Weierstrass Approximation theorem Let be a closed interval, let be a continuous function , and let . There exists a polynomial such that   where is the -norm on .    First assume that is a continuous function on . I.e., assume . We can further assume that , since if then is already a polynomial and we can take .  For each and , let   where is the binomial coefficient choose .  We will need several identities involving . Firstly, by the Binomial Theorem,   Thus   Taking the derivative of with respect to we find   Hence   Taking the derivative of with respect to we find   where was used in the last equality. It follows that   Hence, using , and , we have that   Thus   Consider the polynomials   We will show that, for large , approximates .  Since is continuous on the closed interval , is uniformly continuous. Take and choose such that if then Choose so that , and fix . For , let   and let   Note that, if for some , then   Thus,   where the last equality comes from and the last inequality follows since , for .  Now, for and we have   where the last inequality comes from the choice of  We have proved the result when . Consider an arbitrary closed interval and take . The polynomial   is a homeomorphism from to with inverse   By the above argument, given there is a polynomial on such that   Letting be the polynomial on defined by . Then   Hence the polynomials are dense in .   That is a separable space is a straightfoward corollary to the Weierstrass Approximation Theorem.   Let a closed bounded interval in . Then the continuous functions on with the -norm is a separable Banach space.    That is a Banach space is discussed in Example . If , then , which is separable.  Assume . Take any and By the Weierstrass Approximation Theorem, there is a polynomial on such that   Suppose has degree . Then there are scalars , with , such that   Choose rationals such that   Let be the polynomial   Then   Thus   We have shown that the polynomials with rational coefficients are dense in . The cardinality of the polynomials with rational coefficients is   which is countable. Thus is separable.   "
},
{
  "id": "real-analysis-6-2-3-3",
  "level": "2",
  "url": "real-analysis-6-2-3.html#real-analysis-6-2-3-3",
  "type": "Definition",
  "number": "10.1.1",
  "title": "",
  "body": " Let be a (real) vector space. A norm norm on is a function satisfying   for all , and if and only if ;   for all and ; and   for all (the triangle inequality ). triangle inequality for norms    If is a vector space with a norm, we call a normed vector space vector space normed .  "
},
{
  "id": "ex-2-norm-on-Rn",
  "level": "2",
  "url": "real-analysis-6-2-3.html#ex-2-norm-on-Rn",
  "type": "Example",
  "number": "10.1.2",
  "title": "",
  "body": " The field itself is a real vector space. The absolute value defines a norm on .  More generally, let . We can define a norm on by   for . This is called the Euclidean norm or the -norm on . norm Euclidean norm norm -norm on That is a norm is left as an exercise, Exercise .  "
},
{
  "id": "ex-C_b-X-norm",
  "level": "2",
  "url": "real-analysis-6-2-3.html#ex-C_b-X-norm",
  "type": "Example",
  "number": "10.1.3",
  "title": "",
  "body": " Denote by all continuous, bounded functions on . Then is a vector space. Define on by   Then defines a norm on called the infinity norm or the -norm . norm -norm  More generally, if is a topological space, the , the space of all continuous bounded functions on , is a vector space and   defines a norm on .  Denote by all continuous functions on a topological space . In general, will not define a norm on (since we could hace for some ). If is compact then all continuous functions on are bounded. In this case .  "
},
{
  "id": "real-analysis-6-2-3-7",
  "level": "2",
  "url": "real-analysis-6-2-3.html#real-analysis-6-2-3-7",
  "type": "Definition",
  "number": "10.1.4",
  "title": "",
  "body": " Let be a normed vector space, and let be a vector in , and let be a sequence of vectors in . The sequence is convergent with limit with respect to , or convergent to if convergence in a normed vector space   That is, the sequence converges to if for all there is an such that if , then   "
},
{
  "id": "real-analysis-6-2-3-9",
  "level": "2",
  "url": "real-analysis-6-2-3.html#real-analysis-6-2-3-9",
  "type": "Definition",
  "number": "10.1.5",
  "title": "",
  "body": " Let be a normed vector space, and let be a sequence of vectors in . The sequence is a Cauchy sequence in Cauchy sequence in a normed vector space with respect to if for all there is an such that if , then   "
},
{
  "id": "real-analysis-6-2-3-11",
  "level": "2",
  "url": "real-analysis-6-2-3.html#real-analysis-6-2-3-11",
  "type": "Proposition",
  "number": "10.1.6",
  "title": "",
  "body": " Let be a normed vector space, and let be a sequence of vectors in which converge to some . Then is a Cauchy sequence.  "
},
{
  "id": "real-analysis-6-2-3-13",
  "level": "2",
  "url": "real-analysis-6-2-3.html#real-analysis-6-2-3-13",
  "type": "Example",
  "number": "10.1.7",
  "title": "",
  "body": " Let and let be the -norm (restricted from the -norm on .) Take a sequence of rationals which converge to . E.g. let   For each , let   Then is a Cauchy sequence in , but does not converge in . If we view as a sequence in , then converges to .  "
},
{
  "id": "real-analysis-6-2-3-15",
  "level": "2",
  "url": "real-analysis-6-2-3.html#real-analysis-6-2-3-15",
  "type": "Definition",
  "number": "10.1.8",
  "title": "",
  "body": " If is a normed vector space in which every Cauchy sequence is convergent, then we call a Banach space . That is, a Banach space a normed vector space which is complete with respect to the metric induced by the norm.  "
},
{
  "id": "ex-Rn-Banach",
  "level": "2",
  "url": "real-analysis-6-2-3.html#ex-Rn-Banach",
  "type": "Example",
  "number": "10.1.9",
  "title": "",
  "body": " The vector space with the -norm is a Banach space, see Exercise .  "
},
{
  "id": "ex-Cb-Banach",
  "level": "2",
  "url": "real-analysis-6-2-3.html#ex-Cb-Banach",
  "type": "Example",
  "number": "10.1.10",
  "title": "",
  "body": " Let be an interval. The normed vector space with norm (see Example ) is a Banach space, see Exercise  "
},
{
  "id": "ex-C0-Banach",
  "level": "2",
  "url": "real-analysis-6-2-3.html#ex-C0-Banach",
  "type": "Example",
  "number": "10.1.11",
  "title": "",
  "body": " Let be an interval. A continuous function  vanishes at infinity vanishes at infinity if for all there is a closed interval such that for . We denote the collection of all continuous functions on that vanish at infinity by .  The space is a vector subspace of , thus is a normed vector space with the -norm . With this norm is a Banach space, see Exercise .  "
},
{
  "id": "ex-Cc-not-Banach",
  "level": "2",
  "url": "real-analysis-6-2-3.html#ex-Cc-not-Banach",
  "type": "Example",
  "number": "10.1.12",
  "title": "",
  "body": " Let be an interval. Let denote all continuous real-valued functions on which are compactly supported compactly supported . That is, a continuous function on is in if there is a compact set such that for . Then a vector space of functions with   However, in general, is not a Banach space, see Exercise and Exercise .  "
},
{
  "id": "real-analysis-6-2-3-21",
  "level": "2",
  "url": "real-analysis-6-2-3.html#real-analysis-6-2-3-21",
  "type": "Definition",
  "number": "10.1.13",
  "title": "",
  "body": " Let be a real-inner product. An inner-product inner-product on is a bilinear, real-valued map   such that for all , and if and only if .  If is a vector space with an inner-product, then is called an inner-product space . inner-product space  "
},
{
  "id": "real-analysis-6-2-3-25",
  "level": "2",
  "url": "real-analysis-6-2-3.html#real-analysis-6-2-3-25",
  "type": "Definition",
  "number": "10.1.14",
  "title": "",
  "body": " Let be an inner-product space. If is complete, i.e. is a Banach space, with respect to the inner-product norm, then is Hilbert space .  "
},
{
  "id": "ex-Rn-Hilbert",
  "level": "2",
  "url": "real-analysis-6-2-3.html#ex-Rn-Hilbert",
  "type": "Example",
  "number": "10.1.15",
  "title": "",
  "body": " The dot-product on is an inner-product and the Euclidean-norm\/ -norm on is the inner-product norm induced by the dot-product. As is a Banach space with the -norm (Example ), is a Hilbert space.  "
},
{
  "id": "real-analysis-6-2-3-28",
  "level": "2",
  "url": "real-analysis-6-2-3.html#real-analysis-6-2-3-28",
  "type": "Definition",
  "number": "10.1.16",
  "title": "",
  "body": " Let be a real vector space, and let and be two norms on . The norm is equivalent to  norm equivalent norms if there are scalars such that   for all .  "
},
{
  "id": "prop-norm-equiv",
  "level": "2",
  "url": "real-analysis-6-2-3.html#prop-norm-equiv",
  "type": "Proposition",
  "number": "10.1.17",
  "title": "",
  "body": " Let be a real vector space, and let and be two norms on . The norm is equivalent to if and only if the norm is equivalent to .  "
},
{
  "id": "real-analysis-6-2-3-31",
  "level": "2",
  "url": "real-analysis-6-2-3.html#real-analysis-6-2-3-31",
  "type": "Proof",
  "number": "10.1.1",
  "title": "",
  "body": " The proof is left as an exercise, Exercise  "
},
{
  "id": "thm-equiv-norms-convergence",
  "level": "2",
  "url": "real-analysis-6-2-3.html#thm-equiv-norms-convergence",
  "type": "Theorem",
  "number": "10.1.18",
  "title": "",
  "body": " Let be a real vector space and let and be equivalent norms on . Let be a sequence of vectors in . Then   is a Cauchy sequence with respect to the norm if and only if is a Cauchy sequence with respect to the norm ; and   is convergent with respect to with respect to if and only if is convergent with respect to with respect to .    In particular, is a Banach space under the norm if and only if is a Banach space under the norm .  "
},
{
  "id": "real-analysis-6-2-3-35",
  "level": "2",
  "url": "real-analysis-6-2-3.html#real-analysis-6-2-3-35",
  "type": "Proof",
  "number": "10.1.2",
  "title": "",
  "body": " We will prove (i). Part (ii) is proved similarly. Let be constants such that . Suppose is a Cauchy sequence with respect to the norm .  Take . There exists such that, if then   Thus, if then   Thus is Cauchy with respect to .  As is also equivalent to , a similar argument gives that if is Cauchy with respect to then is Cauchy with respect to  "
},
{
  "id": "real-analysis-6-2-3-36",
  "level": "2",
  "url": "real-analysis-6-2-3.html#real-analysis-6-2-3-36",
  "type": "Definition",
  "number": "10.1.19",
  "title": "",
  "body": " Let be a normed vector space, and let be a non-empty subset. A set is dense in dense if for all and there exists such that   A Banach space is called separable Banach space separable if there is countable set which is dense in .  "
},
{
  "id": "ex-Rn-separable",
  "level": "2",
  "url": "real-analysis-6-2-3.html#ex-Rn-separable",
  "type": "Example",
  "number": "10.1.20",
  "title": "",
  "body": " The rationals are dense in and the rationals are countable, and so is separable. More generally, is a countable dense subset of (with the -norm), and so is separable.  "
},
{
  "id": "thm-weierstrass",
  "level": "2",
  "url": "real-analysis-6-2-3.html#thm-weierstrass",
  "type": "Theorem",
  "number": "10.1.21",
  "title": "Weierstrass Approximation Theorem.",
  "body": " Weierstrass Approximation Theorem  Weierstrass Approximation theorem Let be a closed interval, let be a continuous function , and let . There exists a polynomial such that   where is the -norm on .  "
},
{
  "id": "real-analysis-6-2-3-41",
  "level": "2",
  "url": "real-analysis-6-2-3.html#real-analysis-6-2-3-41",
  "type": "Proof",
  "number": "10.1.3",
  "title": "",
  "body": " First assume that is a continuous function on . I.e., assume . We can further assume that , since if then is already a polynomial and we can take .  For each and , let   where is the binomial coefficient choose .  We will need several identities involving . Firstly, by the Binomial Theorem,   Thus   Taking the derivative of with respect to we find   Hence   Taking the derivative of with respect to we find   where was used in the last equality. It follows that   Hence, using , and , we have that   Thus   Consider the polynomials   We will show that, for large , approximates .  Since is continuous on the closed interval , is uniformly continuous. Take and choose such that if then Choose so that , and fix . For , let   and let   Note that, if for some , then   Thus,   where the last equality comes from and the last inequality follows since , for .  Now, for and we have   where the last inequality comes from the choice of  We have proved the result when . Consider an arbitrary closed interval and take . The polynomial   is a homeomorphism from to with inverse   By the above argument, given there is a polynomial on such that   Letting be the polynomial on defined by . Then   Hence the polynomials are dense in .  "
},
{
  "id": "cor-C-a-b-sep",
  "level": "2",
  "url": "real-analysis-6-2-3.html#cor-C-a-b-sep",
  "type": "Corollary",
  "number": "10.1.22",
  "title": "",
  "body": " Let a closed bounded interval in . Then the continuous functions on with the -norm is a separable Banach space.  "
},
{
  "id": "real-analysis-6-2-3-44",
  "level": "2",
  "url": "real-analysis-6-2-3.html#real-analysis-6-2-3-44",
  "type": "Proof",
  "number": "10.1.4",
  "title": "",
  "body": " That is a Banach space is discussed in Example . If , then , which is separable.  Assume . Take any and By the Weierstrass Approximation Theorem, there is a polynomial on such that   Suppose has degree . Then there are scalars , with , such that   Choose rationals such that   Let be the polynomial   Then   Thus   We have shown that the polynomials with rational coefficients are dense in . The cardinality of the polynomials with rational coefficients is   which is countable. Thus is separable.  "
},
{
  "id": "real-analysis-6-2-4",
  "level": "1",
  "url": "real-analysis-6-2-4.html",
  "type": "Section",
  "number": "10.2",
  "title": "<span class=\"process-math\">\\(L^p\\)<\/span>-norms",
  "body": " -norms  Denote by be the collection of all extended real-valued measurable functions on which are finite almost everywhere. By Theorem , is a vector space. Let be the equivalence relation: if and only if almost everywhere, for . By Exercise , is an equivalence relation on . Let be the equivalence classes of in . For each denote by the equivalence class of under the equivalence relation . The set inherits a vector space structure from by the operations   for and (see Exercise ).   Let be a measure space, let be all finite almost everywhere measurable functions on , and let be the equivalence relation of equivalence almost everywhere on .  For , define   -space We call the -space of .    Note, that is well-defined. Indeed, if and a.e., then a.e. and so is integrable if and only if is integrable.   We will also define the -space for .   Let be a measure space, let be all finite almost everywhere measurable functions on , and let be the equivalence relation of equivalence almost everywhere on . A function is essentially bounded essentially bounded if there is a constant such that almost everywhere. In this case, we call an essential bound essential bound for . Define as   -space We call the -space for    Note, that is well-defined. Indeed, if and a.e., then is essentially bounded if and only if is essentially bounded.    Let . The set is defined as a subset of . Thus, the elements of are not functions, but equivalence classes of functions. We will, however, often abuse language and refer to the elements of as functions. We will often abuse notation, and write, for , to mean that .   We will show that each -space is a Banach space under an appropriate norm. To do this, we must first show that each -space is a vector space.   Let be a measure space, and let . Then is a vector subspace of    First, assume that . Take and a scalar . Then   Hence .  Note that if , then Indeed,   and hence   Thus, if , then   Hence .  That is a vector space is left as an exercise, Exercise .   We now define a norm on . To show that these are indeed norms will take some work. Fix .\\ For let   When we define things differently. For define   For we call the -norm norm -norm norm -norm on .  The introduction of the -norms has given us some overlapping notation for and . We address this in the following remarks.   Let be a Lebesgue measurable set and let be the Lebesgue measure on . We have the -norm on , and we have the -norm on . Note that any continuous function on is measurable with respect to Lebesgue measure , by Corollary . Thus, if then , and the -norm and the -norm of coincide. Thus the -norm is a restriction of an -norm to continuous bounded functions.    We also have two -norms: on and on . Let and let be the counting measure on the subsets of . In this case, the finite a.e. measurable functions on are all functions . Further, two functions and on are equal a.e. if and only if everywhere. Letting be the collection of all finite a.e. measurable functions on as above, we have that for all Note that is isomorphic to via the isomorphism   Take any . It is not hard to see that   Thus, the -norm on is an example of a -norm on a -space.   Have not yet shown that is a norm on . We will work towards this for the rest of this section. We begin with the simplest cases: and .   Let be a measure space. Then is a norm on and is a norm on .    It is clear that for all . Suppose, and . Then   Let and . Then   Hence, by Exercise , . That is, a.e., and so in . Therefore if and only if .  If and , then   Finally, suppose .Then   Thus satisfies the triangle inequality. We have, therefore, shown that is a norm on .  We now consider on . Again, for all . If then for almost all . Thus if and only if in .  It is straightforward to show that for all and . It remains to show that satisfies the triangle inequality. Take , and let be an essential bound for and be an essential bound for . Thus, there exist measurable sets and in with , for all , and for all . Thus, if , then   As , it follows that is an essential bound for . Hence   Thus   Therefore is a norm on .   In order to show that is a norm on for , we first need to introduce some new definitions and prove some inequalities.   For , we define to be conjugate of conjugate when   We define the conjugate of to be , and the conjugate of to be .    Note that if and is conjugate to , then is the unique number such that   In particular, is conjugate to , and if then .    Young's Inequality  Young's Inequality Let and be conjugate to . If then     The proof we present here is based on the convexity of the function . By convexity convex function we mean that, for and   That is, the straight line segment from to is above the curve with . Intuitively, this can be understood since for all . A formal proof of the inequality is eked out in Exercise .     The function is convex     Let , , and Note that, since , . Further, since is conjugate to , . Thus, by ,   Thus, noting that and ,   which proves the desired inequality.    Hölder's Inequality  Let be a measure space, let be any value and let be conjugate to . If are measurable functions on then   In particular, if and then and     The inequality holds if either or are zero almost everywhere in . We can thus assume that neither or is a.e. If either or is not intergable, i.e. if   then the desired inequality holds trivially.  We can thus assume that and are non-zero. For any non-zero and non-zero we have   for almost all , by Young's Inequality, Lemma . Applying this inequality to and we get   Thus   A special case of Hölder's inequality is when When , we call Hölder's inequality the Cauchy-Schwarz inequality Cauchy-Schwarz inequality . For posterity, we state this special case here. A special case of the Cauchy-Schwarz inequality is in Exercise . An alternate proof of the Cauchy-Schwarz inequality, which does not rely on Hölders inequality, is described in Exercise .   Cauchy-Schwarz Inequality  Cauchy-Schwarz inequality \\label{thm: Cauchy-Schwarz} Let be a measure space. If , then is integrable and    The following corollary to Hölder's inequality will be used frequently.   Let and let be conjugate to . If , then there exists with such that     If , then the result holds for any with . Let be non-zero. Define the sign function for sign function by   and let Let Since and are measurable functions, is measurable. Noting that , we have   Thus, and . Further,   completing the proof.   We come now to our final named inequality of this section.   Minkowski's Inequality  Minkowski's inequality Let be a measure space and take with . If , then     Let be conjugate to . Take . By Corollary , there exists with such that   Thus   with the last inequality coming from two applications of Hölder's inequality, and the fact that .   We now have all we need to show that is a norm for .   Let be a measure space. For each , , is a norm on .    The cases when and are covered in Proposition . For , Minkowski's inequality, Theorem , shows that satisfies the triangle inequality. That satisfies the other properties of a norm is straightforward.    Let be a measure space. If , then the Cauchy-Schwarz inequality (or Hölder's inequality) says that is integrable. We can thus define a map   by   This map is bilinear, by the linearity properties of integration. Further   Hence is an inner-product on and the -norm is the induced inner-product norm on . inner-product on -space   Given a measure space we now have infinitely many vector space . What is the relationship between these vector spaces? When do we have ? When we have the following:   Let be a finite measure space. If , then .    Take . If , then   and hence .  Suppose now that . Note that   and hence is the conjugate of . Applying Hölder's inequality with the conjugates and we have   Hence, .   The following example shows that the containment in Theorem can be strict.   Let be the Lebesgue measure on the interval . By Theorem , if , then . Let Then with   However since   More generally, if and   then but Also, note that is not bounded, and so Thus, if then    When the conclusion of Theorem does not necessarily hold. In fact, we may not have containments in any direction.   Let be the Lebesgue measure on . Suppose . Let for , and for . Since is bounded, we have that . If , then, since , . However, since is not integrable on . Thus   Using the examples from Example we can also show that   Explicitly, for , if for and for , then but    -spaces and  We pronounce as `little '. -space When , we simply write for . The space thus consists of all sequences of real-numbers such that   when ; and consists of all bounded sequences.  The following result shows that the conclusion of Theorem can hold on non-finite measure spaces, when the measure is the counting measure. This should be compared with Example   Let , then and for all    Take any non-negative function on . If is not bounded, then there is an and a sequence in such that for all . Thus   Hence is not integrable. Therefore, if , then is bounded. Take and . There exists an such that   Thus   As this holds for all , it follows that .  Suppose now that . Then   Thus and   The following example shows that the inclusion of from Theorem can be strict.   Take and let Then but  Any non-zero constant sequence is in but not for . E.g., if for all , then but for any .   We turn our attention now to finite dimensional vector spaces. Let . In Remark we observed that, for all , is the real-valued functions on . Further, we can identify with via the isomorphism   Under this identification, we have a norms on for . These norms are given by   for , and   norm -norm on When these norms are all different, as illustrated in Figure . However, the norms are all equivalent.     The sets for different values of in     The norms on are all equivalent.    Take any . Then   and   Thus, the norms -norm and the -norm are equivalent.  Let be such that . Then   Thus   By Theorem , for all . Thus, for we have   Hence the -norm is equivalent to the -norm for all . Therefore, all the -norms are equivalent on .    "
},
{
  "id": "real-analysis-6-2-4-5",
  "level": "2",
  "url": "real-analysis-6-2-4.html#real-analysis-6-2-4-5",
  "type": "Definition",
  "number": "10.2.1",
  "title": "",
  "body": " Let be a measure space, let be all finite almost everywhere measurable functions on , and let be the equivalence relation of equivalence almost everywhere on .  For , define   -space We call the -space of .  "
},
{
  "id": "real-analysis-6-2-4-6",
  "level": "2",
  "url": "real-analysis-6-2-4.html#real-analysis-6-2-4-6",
  "type": "Remark",
  "number": "10.2.2",
  "title": "",
  "body": " Note, that is well-defined. Indeed, if and a.e., then a.e. and so is integrable if and only if is integrable.  "
},
{
  "id": "real-analysis-6-2-4-8",
  "level": "2",
  "url": "real-analysis-6-2-4.html#real-analysis-6-2-4-8",
  "type": "Definition",
  "number": "10.2.3",
  "title": "",
  "body": " Let be a measure space, let be all finite almost everywhere measurable functions on , and let be the equivalence relation of equivalence almost everywhere on . A function is essentially bounded essentially bounded if there is a constant such that almost everywhere. In this case, we call an essential bound essential bound for . Define as   -space We call the -space for  "
},
{
  "id": "real-analysis-6-2-4-9",
  "level": "2",
  "url": "real-analysis-6-2-4.html#real-analysis-6-2-4-9",
  "type": "Remark",
  "number": "10.2.4",
  "title": "",
  "body": " Note, that is well-defined. Indeed, if and a.e., then is essentially bounded if and only if is essentially bounded.  "
},
{
  "id": "real-analysis-6-2-4-10",
  "level": "2",
  "url": "real-analysis-6-2-4.html#real-analysis-6-2-4-10",
  "type": "Remark",
  "number": "10.2.5",
  "title": "",
  "body": " Let . The set is defined as a subset of . Thus, the elements of are not functions, but equivalence classes of functions. We will, however, often abuse language and refer to the elements of as functions. We will often abuse notation, and write, for , to mean that .  "
},
{
  "id": "real-analysis-6-2-4-12",
  "level": "2",
  "url": "real-analysis-6-2-4.html#real-analysis-6-2-4-12",
  "type": "Proposition",
  "number": "10.2.6",
  "title": "",
  "body": " Let be a measure space, and let . Then is a vector subspace of  "
},
{
  "id": "real-analysis-6-2-4-13",
  "level": "2",
  "url": "real-analysis-6-2-4.html#real-analysis-6-2-4-13",
  "type": "Proof",
  "number": "10.2.1",
  "title": "",
  "body": " First, assume that . Take and a scalar . Then   Hence .  Note that if , then Indeed,   and hence   Thus, if , then   Hence .  That is a vector space is left as an exercise, Exercise .  "
},
{
  "id": "rem-inf-norms",
  "level": "2",
  "url": "real-analysis-6-2-4.html#rem-inf-norms",
  "type": "Remark",
  "number": "10.2.7",
  "title": "",
  "body": " Let be a Lebesgue measurable set and let be the Lebesgue measure on . We have the -norm on , and we have the -norm on . Note that any continuous function on is measurable with respect to Lebesgue measure , by Corollary . Thus, if then , and the -norm and the -norm of coincide. Thus the -norm is a restriction of an -norm to continuous bounded functions.  "
},
{
  "id": "rem-2-norms",
  "level": "2",
  "url": "real-analysis-6-2-4.html#rem-2-norms",
  "type": "Remark",
  "number": "10.2.8",
  "title": "",
  "body": " We also have two -norms: on and on . Let and let be the counting measure on the subsets of . In this case, the finite a.e. measurable functions on are all functions . Further, two functions and on are equal a.e. if and only if everywhere. Letting be the collection of all finite a.e. measurable functions on as above, we have that for all Note that is isomorphic to via the isomorphism   Take any . It is not hard to see that   Thus, the -norm on is an example of a -norm on a -space.  "
},
{
  "id": "prop-1-and-inf-norms",
  "level": "2",
  "url": "real-analysis-6-2-4.html#prop-1-and-inf-norms",
  "type": "Proposition",
  "number": "10.2.9",
  "title": "",
  "body": " Let be a measure space. Then is a norm on and is a norm on .  "
},
{
  "id": "real-analysis-6-2-4-24",
  "level": "2",
  "url": "real-analysis-6-2-4.html#real-analysis-6-2-4-24",
  "type": "Proof",
  "number": "10.2.2",
  "title": "",
  "body": " It is clear that for all . Suppose, and . Then   Let and . Then   Hence, by Exercise , . That is, a.e., and so in . Therefore if and only if .  If and , then   Finally, suppose .Then   Thus satisfies the triangle inequality. We have, therefore, shown that is a norm on .  We now consider on . Again, for all . If then for almost all . Thus if and only if in .  It is straightforward to show that for all and . It remains to show that satisfies the triangle inequality. Take , and let be an essential bound for and be an essential bound for . Thus, there exist measurable sets and in with , for all , and for all . Thus, if , then   As , it follows that is an essential bound for . Hence   Thus   Therefore is a norm on .  "
},
{
  "id": "real-analysis-6-2-4-26",
  "level": "2",
  "url": "real-analysis-6-2-4.html#real-analysis-6-2-4-26",
  "type": "Definition",
  "number": "10.2.10",
  "title": "",
  "body": " For , we define to be conjugate of conjugate when   We define the conjugate of to be , and the conjugate of to be .  "
},
{
  "id": "real-analysis-6-2-4-27",
  "level": "2",
  "url": "real-analysis-6-2-4.html#real-analysis-6-2-4-27",
  "type": "Remark",
  "number": "10.2.11",
  "title": "",
  "body": " Note that if and is conjugate to , then is the unique number such that   In particular, is conjugate to , and if then .  "
},
{
  "id": "lem-youngs",
  "level": "2",
  "url": "real-analysis-6-2-4.html#lem-youngs",
  "type": "Lemma",
  "number": "10.2.12",
  "title": "Young’s Inequality.",
  "body": " Young's Inequality  Young's Inequality Let and be conjugate to . If then   "
},
{
  "id": "real-analysis-6-2-4-29",
  "level": "2",
  "url": "real-analysis-6-2-4.html#real-analysis-6-2-4-29",
  "type": "Proof",
  "number": "10.2.3",
  "title": "",
  "body": " The proof we present here is based on the convexity of the function . By convexity convex function we mean that, for and   That is, the straight line segment from to is above the curve with . Intuitively, this can be understood since for all . A formal proof of the inequality is eked out in Exercise .     The function is convex     Let , , and Note that, since , . Further, since is conjugate to , . Thus, by ,   Thus, noting that and ,   which proves the desired inequality.  "
},
{
  "id": "thm-holder",
  "level": "2",
  "url": "real-analysis-6-2-4.html#thm-holder",
  "type": "Theorem",
  "number": "10.2.14",
  "title": "Hölder’s Inequality.",
  "body": " Hölder's Inequality  Let be a measure space, let be any value and let be conjugate to . If are measurable functions on then   In particular, if and then and   "
},
{
  "id": "real-analysis-6-2-4-31",
  "level": "2",
  "url": "real-analysis-6-2-4.html#real-analysis-6-2-4-31",
  "type": "Proof",
  "number": "10.2.4",
  "title": "",
  "body": " The inequality holds if either or are zero almost everywhere in . We can thus assume that neither or is a.e. If either or is not intergable, i.e. if   then the desired inequality holds trivially.  We can thus assume that and are non-zero. For any non-zero and non-zero we have   for almost all , by Young's Inequality, Lemma . Applying this inequality to and we get   Thus  "
},
{
  "id": "thm-CS-ineq",
  "level": "2",
  "url": "real-analysis-6-2-4.html#thm-CS-ineq",
  "type": "Theorem",
  "number": "10.2.15",
  "title": "Cauchy-Schwarz Inequality.",
  "body": " Cauchy-Schwarz Inequality  Cauchy-Schwarz inequality \\label{thm: Cauchy-Schwarz} Let be a measure space. If , then is integrable and   "
},
{
  "id": "cor-holder-cor",
  "level": "2",
  "url": "real-analysis-6-2-4.html#cor-holder-cor",
  "type": "Corollary",
  "number": "10.2.16",
  "title": "",
  "body": " Let and let be conjugate to . If , then there exists with such that   "
},
{
  "id": "real-analysis-6-2-4-36",
  "level": "2",
  "url": "real-analysis-6-2-4.html#real-analysis-6-2-4-36",
  "type": "Proof",
  "number": "10.2.5",
  "title": "",
  "body": " If , then the result holds for any with . Let be non-zero. Define the sign function for sign function by   and let Let Since and are measurable functions, is measurable. Noting that , we have   Thus, and . Further,   completing the proof.  "
},
{
  "id": "thm-minkowski",
  "level": "2",
  "url": "real-analysis-6-2-4.html#thm-minkowski",
  "type": "Theorem",
  "number": "10.2.17",
  "title": "Minkowski’s Inequality.",
  "body": " Minkowski's Inequality  Minkowski's inequality Let be a measure space and take with . If , then   "
},
{
  "id": "real-analysis-6-2-4-39",
  "level": "2",
  "url": "real-analysis-6-2-4.html#real-analysis-6-2-4-39",
  "type": "Proof",
  "number": "10.2.6",
  "title": "",
  "body": " Let be conjugate to . Take . By Corollary , there exists with such that   Thus   with the last inequality coming from two applications of Hölder's inequality, and the fact that .  "
},
{
  "id": "real-analysis-6-2-4-41",
  "level": "2",
  "url": "real-analysis-6-2-4.html#real-analysis-6-2-4-41",
  "type": "Theorem",
  "number": "10.2.18",
  "title": "",
  "body": " Let be a measure space. For each , , is a norm on .  "
},
{
  "id": "real-analysis-6-2-4-42",
  "level": "2",
  "url": "real-analysis-6-2-4.html#real-analysis-6-2-4-42",
  "type": "Proof",
  "number": "10.2.7",
  "title": "",
  "body": " The cases when and are covered in Proposition . For , Minkowski's inequality, Theorem , shows that satisfies the triangle inequality. That satisfies the other properties of a norm is straightforward.  "
},
{
  "id": "rem-L2-inner-prod",
  "level": "2",
  "url": "real-analysis-6-2-4.html#rem-L2-inner-prod",
  "type": "Remark",
  "number": "10.2.19",
  "title": "",
  "body": " Let be a measure space. If , then the Cauchy-Schwarz inequality (or Hölder's inequality) says that is integrable. We can thus define a map   by   This map is bilinear, by the linearity properties of integration. Further   Hence is an inner-product on and the -norm is the induced inner-product norm on . inner-product on -space  "
},
{
  "id": "thm-Lq-in-Lp",
  "level": "2",
  "url": "real-analysis-6-2-4.html#thm-Lq-in-Lp",
  "type": "Theorem",
  "number": "10.2.20",
  "title": "",
  "body": " Let be a finite measure space. If , then .  "
},
{
  "id": "real-analysis-6-2-4-46",
  "level": "2",
  "url": "real-analysis-6-2-4.html#real-analysis-6-2-4-46",
  "type": "Proof",
  "number": "10.2.8",
  "title": "",
  "body": " Take . If , then   and hence .  Suppose now that . Note that   and hence is the conjugate of . Applying Hölder's inequality with the conjugates and we have   Hence, .  "
},
{
  "id": "ex-Lq-in-Lp",
  "level": "2",
  "url": "real-analysis-6-2-4.html#ex-Lq-in-Lp",
  "type": "Example",
  "number": "10.2.21",
  "title": "",
  "body": " Let be the Lebesgue measure on the interval . By Theorem , if , then . Let Then with   However since   More generally, if and   then but Also, note that is not bounded, and so Thus, if then   "
},
{
  "id": "ex-Lq-not-in-Lp",
  "level": "2",
  "url": "real-analysis-6-2-4.html#ex-Lq-not-in-Lp",
  "type": "Example",
  "number": "10.2.22",
  "title": "",
  "body": " Let be the Lebesgue measure on . Suppose . Let for , and for . Since is bounded, we have that . If , then, since , . However, since is not integrable on . Thus   Using the examples from Example we can also show that   Explicitly, for , if for and for , then but  "
},
{
  "id": "thm-lq-in-lp",
  "level": "2",
  "url": "real-analysis-6-2-4.html#thm-lq-in-lp",
  "type": "Theorem",
  "number": "10.2.23",
  "title": "",
  "body": " Let , then and for all  "
},
{
  "id": "real-analysis-6-2-4-51-7",
  "level": "2",
  "url": "real-analysis-6-2-4.html#real-analysis-6-2-4-51-7",
  "type": "Proof",
  "number": "10.2.1.1",
  "title": "",
  "body": " Take any non-negative function on . If is not bounded, then there is an and a sequence in such that for all . Thus   Hence is not integrable. Therefore, if , then is bounded. Take and . There exists an such that   Thus   As this holds for all , it follows that .  Suppose now that . Then   Thus and  "
},
{
  "id": "real-analysis-6-2-4-51-9",
  "level": "2",
  "url": "real-analysis-6-2-4.html#real-analysis-6-2-4-51-9",
  "type": "Example",
  "number": "10.2.24",
  "title": "",
  "body": " Take and let Then but  Any non-zero constant sequence is in but not for . E.g., if for all , then but for any .  "
},
{
  "id": "fig-p-norm",
  "level": "2",
  "url": "real-analysis-6-2-4.html#fig-p-norm",
  "type": "Figure",
  "number": "10.2.25",
  "title": "",
  "body": "   The sets for different values of in   "
},
{
  "id": "thm-equiv-norms-on-Rn",
  "level": "2",
  "url": "real-analysis-6-2-4.html#thm-equiv-norms-on-Rn",
  "type": "Theorem",
  "number": "10.2.26",
  "title": "",
  "body": " The norms on are all equivalent.  "
},
{
  "id": "real-analysis-6-2-4-51-19",
  "level": "2",
  "url": "real-analysis-6-2-4.html#real-analysis-6-2-4-51-19",
  "type": "Proof",
  "number": "10.2.1.2",
  "title": "",
  "body": " Take any . Then   and   Thus, the norms -norm and the -norm are equivalent.  Let be such that . Then   Thus   By Theorem , for all . Thus, for we have   Hence the -norm is equivalent to the -norm for all . Therefore, all the -norms are equivalent on .  "
},
{
  "id": "real-analysis-6-2-5",
  "level": "1",
  "url": "real-analysis-6-2-5.html",
  "type": "Section",
  "number": "10.3",
  "title": "<span class=\"process-math\">\\(L^p\\)<\/span>-approximations and the Riesz-Fischer Theorem",
  "body": " -approximations and the Riesz-Fischer Theorem  In the proof, we will incidentally end up considering different types of convergence we now have for measurable functions.   Riesz-Fischer Theorem  Riesz-Fischer Theorem Let be a measure space. Then is a Banach space for all .    First take . Let be a Cauchy sequence in . Choose such that   for . Let and for . Then,   Let .  Let and Note that   for all . Since is an increasing sequence converging pointwise to ,   by the Monotone Convergence Theorem. Thus . In particular, is finite a.e. and so the series converges absolutely a.e. Let be the pointwise a.e. limit. Then , and hence . Further,   Hence, by the Lebesgue Dominated Convergence Theorem,   Hence the sequence of partial sums converges to in -norm. Note that   Thus the subsequence converges to in -norm. It follows that converges to , and hence is complete.  Now let and let be a Cauchy sequence in . By excising a set of measure if necessary, assume that each is bounded. Take any . There is an such that for all   Take any , and , then   Thus, is a Cauchy sequence of real numbers. Since is complete, is convergent. Define a function by   for each .  There is an such that if then   Thus, if , then   Letting   we have for all . Thus, for ,   Hence .  Take . Choose , such that if then Then, for , if ,    Hence is the limit of in the -norm, and hence is complete.   For the our proof was a little but stronger than the statement given. In the proof of the Riesz-Fischer theorem for we showed that, if is a Cauchy sequence in then converges to some in -norm and there is a subsequence of that converges pointwise a.e. to . We record this statement in the following corollary. Corollary is not the correct word; the result is a corollary of the proof not a corollary of the statement of the Riesz-Fischer theorem itself. The word `Porism' has been used for such results, .   Let be a measure space and let If is a sequence in which converges to some in -norm, then there is a subsequence of which converges pointwise a.e. to .   In general, pointwise a.e. convergence does not imply convergence in the -norm for ; and convergence in the -norm does not imply pointwise a.e. convergence. We can see this in the following examples.   For , let be the function on given by      The functions and in Example .     The sequence converges pointwise to . Also   and so each with . Hence does not converge to in -norm.  Note that, the sequence can not converge to anything in -norm. Indeed, if converges in -norm to some , then by Corollary , a subsequence would converge pointwise a.e. to . Since converges pointwise to , any subsequence converges pointwise to , and so we must have .    For each , let   where and satisfy   These functions are sometimes called the typewriter functions or dancing functions typewriter functions dancing functions typewriter functions . Explicitly, we have      The eleventh typewriter function, from Example .    If as above,    Thus and converges to in -norm. However, does not converge pointwise (nor pointwise a.e.) to any function. Indeed, for any there are infinitely many such that and infinitely many such that .   The -norm plays wholly more nicely with our earlier modes of convergence.   Let be a measure space and let be a sequence in . Then converges to some if and only if there is a measure zero set such that converges uniformly to on .  In particular, if converges to in the -norm, then converges pointwise a.e. to .   We turn our attention now to the question of separability of -spaces. We first establish that simple functions are dense in , .   Let be a measure space, and let . The collection of simple functions of the form where with is dense in .    Let be a simple function on . There are unique scalars and disjoint measurable sets such that If , then   and hence for . Conversely, it for , then   and hence .  Take any . By the simple approximation theorem there are simple functions converging pointwise to such that for all . Since and , it follows that for all . Further   As is integrable and is an upper bound for , the Lebesgue Dominated Convergence theorem says   Hence . I.e., converges to in the -norm.   When we are working with the Lebesgue measure on subsets of the real line we go further: replacing simple functions with step functions. We will then use this to show that is separable when is Lebesgue measurable, and .   Let be a bounded closed interval, and let . The step functions on are dense in    Let be a Lebesgue measurable set. We will show that we can approximate with a step function in the -norm. Fix . By the outer regularity of the Lebesgue measure, there is an open set such that Since is open, is a disjoint union of countably many open intervals . Choose , so that   and let . Then   and   Note that, since is a finite union of disjoint intervals, is a set function. By the above calculations we have   As simple functions are linear combinations of characteristic functions, it follows now that step functions are dense in the simple functions in . Hence, by Proposition , the step functions are dense in .    Let be a bounded closed interval, and let . The Banach space is separable.    Take an arbitrary step function   where is a partition of , let . Choose rationals such that, for ,   and let and . Choose such that for ,   and let be the step function   Then   Hence  We have shown that the collection of all step functions taking rational values on partitions of with rational interior endpoints is dense in the collection of all step functions. It follows from Lemma , that is dense in . It is not hard to see that is countable, and hence is separable.   Having shown that is separable, we can now show that is separable for all and all Lebesgue measurable .   Let be a Lebesgue measurable set, and let . The Banach space is separable.    For a closed bounded interval , let be defined as in the proof of Lemma . That is, is all rational-valued step functions on defined using partitions of using rational values.  First assume that is bounded. Let be a closed bounded interval such that . Since is dense in the set of simple functions on , the set   is dense in the collection of simple functions on . Hence, is separable, by Proposition .  Assume now that is unbounded. For each , let . By the above argument, since is bounded, there is a countable set which is dense in Extend each to by setting for .  Take and fix By the continuity of integration, Proposition ,   Thus, we can choose such that   Since is dense in , there exists such that Thus   Thus . Hence, the countable set is dense in , and so is separable.   The -spaces for Lebesgue measure are not the only separable nice class of separable -spaces: -spaces are also separable.   Let be a non-empty set and take . Then is separable if and only if is countable.    If is finite, then , where is the cardinality of . Hence is separable.  If is countably infinite, then there is a bijection from to . This bijection defines an isometric isomorphism from to . We will thus assume that .  The simple functions in are the sequences which are finitely non-zero. Take simple and . For , choose such that   and let Then   and so Hence the finitely non-zero rational sequences are dense in the finitely non-zero sequences. As the finitely non-zero sequences are dense in by Proposition , it follows that the rational-valued simple functions are dense in . There are countably many finitely non-zero rational sequences, and hence is simple.  That is not separable when is uncountable is left as an exercise, Exercise . I recommend looking at the proof of Theorem before attempting Exercise .   Take . We have shown that is separable for all Lebesgue measurable , and that is separable. What happens when ? In this case, we are not guaranteed separability.   The Banach spaces and are not separable.    Consider first . For each , let   Each is bounded and measurable, and hence . Note that, if then   Suppose is a dense subset of . For each ,fix such that   Note that, if ,   Thus, when , In, particular, if then Hence, the collection is uncountable. Therefore, is uncountable, and hence is not separable.  The proof that is not separable is similar. We will outline the details. Let be the collection of all sequences in of zeros and ones. Note that this is an uncountable collection. Indeed, if we can identify the binary expansion of any with a sequence in , and hence and have the same cardinality. Further, if and , then is a sequence of and with at least one non-zero term. Thus, . Using in the role that played in , we can show that any dense set in has to be uncountable. Hence is not separable.   "
},
{
  "id": "thm-Riesz-Fischer",
  "level": "2",
  "url": "real-analysis-6-2-5.html#thm-Riesz-Fischer",
  "type": "Theorem",
  "number": "10.3.1",
  "title": "Riesz-Fischer Theorem.",
  "body": " Riesz-Fischer Theorem  Riesz-Fischer Theorem Let be a measure space. Then is a Banach space for all .  "
},
{
  "id": "real-analysis-6-2-5-4",
  "level": "2",
  "url": "real-analysis-6-2-5.html#real-analysis-6-2-5-4",
  "type": "Proof",
  "number": "10.3.1",
  "title": "",
  "body": " First take . Let be a Cauchy sequence in . Choose such that   for . Let and for . Then,   Let .  Let and Note that   for all . Since is an increasing sequence converging pointwise to ,   by the Monotone Convergence Theorem. Thus . In particular, is finite a.e. and so the series converges absolutely a.e. Let be the pointwise a.e. limit. Then , and hence . Further,   Hence, by the Lebesgue Dominated Convergence Theorem,   Hence the sequence of partial sums converges to in -norm. Note that   Thus the subsequence converges to in -norm. It follows that converges to , and hence is complete.  Now let and let be a Cauchy sequence in . By excising a set of measure if necessary, assume that each is bounded. Take any . There is an such that for all   Take any , and , then   Thus, is a Cauchy sequence of real numbers. Since is complete, is convergent. Define a function by   for each .  There is an such that if then   Thus, if , then   Letting   we have for all . Thus, for ,   Hence .  Take . Choose , such that if then Then, for , if ,    Hence is the limit of in the -norm, and hence is complete.  "
},
{
  "id": "cor-subseq-pw-ae-conver",
  "level": "2",
  "url": "real-analysis-6-2-5.html#cor-subseq-pw-ae-conver",
  "type": "Corollary",
  "number": "10.3.2",
  "title": "",
  "body": " Let be a measure space and let If is a sequence in which converges to some in -norm, then there is a subsequence of which converges pointwise a.e. to .  "
},
{
  "id": "ex-pw-not-L1",
  "level": "2",
  "url": "real-analysis-6-2-5.html#ex-pw-not-L1",
  "type": "Example",
  "number": "10.3.3",
  "title": "",
  "body": " For , let be the function on given by      The functions and in Example .     The sequence converges pointwise to . Also   and so each with . Hence does not converge to in -norm.  Note that, the sequence can not converge to anything in -norm. Indeed, if converges in -norm to some , then by Corollary , a subsequence would converge pointwise a.e. to . Since converges pointwise to , any subsequence converges pointwise to , and so we must have .  "
},
{
  "id": "ex-typewriter",
  "level": "2",
  "url": "real-analysis-6-2-5.html#ex-typewriter",
  "type": "Example",
  "number": "10.3.5",
  "title": "",
  "body": " For each , let   where and satisfy   These functions are sometimes called the typewriter functions or dancing functions typewriter functions dancing functions typewriter functions . Explicitly, we have      The eleventh typewriter function, from Example .    If as above,    Thus and converges to in -norm. However, does not converge pointwise (nor pointwise a.e.) to any function. Indeed, for any there are infinitely many such that and infinitely many such that .  "
},
{
  "id": "real-analysis-6-2-5-11",
  "level": "2",
  "url": "real-analysis-6-2-5.html#real-analysis-6-2-5-11",
  "type": "Proposition",
  "number": "10.3.7",
  "title": "",
  "body": " Let be a measure space and let be a sequence in . Then converges to some if and only if there is a measure zero set such that converges uniformly to on .  In particular, if converges to in the -norm, then converges pointwise a.e. to .  "
},
{
  "id": "prop-simple-dense",
  "level": "2",
  "url": "real-analysis-6-2-5.html#prop-simple-dense",
  "type": "Proposition",
  "number": "10.3.8",
  "title": "",
  "body": " Let be a measure space, and let . The collection of simple functions of the form where with is dense in .  "
},
{
  "id": "real-analysis-6-2-5-14",
  "level": "2",
  "url": "real-analysis-6-2-5.html#real-analysis-6-2-5-14",
  "type": "Proof",
  "number": "10.3.2",
  "title": "",
  "body": " Let be a simple function on . There are unique scalars and disjoint measurable sets such that If , then   and hence for . Conversely, it for , then   and hence .  Take any . By the simple approximation theorem there are simple functions converging pointwise to such that for all . Since and , it follows that for all . Further   As is integrable and is an upper bound for , the Lebesgue Dominated Convergence theorem says   Hence . I.e., converges to in the -norm.  "
},
{
  "id": "lem-step-dense",
  "level": "2",
  "url": "real-analysis-6-2-5.html#lem-step-dense",
  "type": "Lemma",
  "number": "10.3.9",
  "title": "",
  "body": " Let be a bounded closed interval, and let . The step functions on are dense in  "
},
{
  "id": "real-analysis-6-2-5-17",
  "level": "2",
  "url": "real-analysis-6-2-5.html#real-analysis-6-2-5-17",
  "type": "Proof",
  "number": "10.3.3",
  "title": "",
  "body": " Let be a Lebesgue measurable set. We will show that we can approximate with a step function in the -norm. Fix . By the outer regularity of the Lebesgue measure, there is an open set such that Since is open, is a disjoint union of countably many open intervals . Choose , so that   and let . Then   and   Note that, since is a finite union of disjoint intervals, is a set function. By the above calculations we have   As simple functions are linear combinations of characteristic functions, it follows now that step functions are dense in the simple functions in . Hence, by Proposition , the step functions are dense in .  "
},
{
  "id": "lem-Lp-separable",
  "level": "2",
  "url": "real-analysis-6-2-5.html#lem-Lp-separable",
  "type": "Lemma",
  "number": "10.3.10",
  "title": "",
  "body": " Let be a bounded closed interval, and let . The Banach space is separable.  "
},
{
  "id": "real-analysis-6-2-5-19",
  "level": "2",
  "url": "real-analysis-6-2-5.html#real-analysis-6-2-5-19",
  "type": "Proof",
  "number": "10.3.4",
  "title": "",
  "body": " Take an arbitrary step function   where is a partition of , let . Choose rationals such that, for ,   and let and . Choose such that for ,   and let be the step function   Then   Hence  We have shown that the collection of all step functions taking rational values on partitions of with rational interior endpoints is dense in the collection of all step functions. It follows from Lemma , that is dense in . It is not hard to see that is countable, and hence is separable.  "
},
{
  "id": "thm-Lp-separable",
  "level": "2",
  "url": "real-analysis-6-2-5.html#thm-Lp-separable",
  "type": "Theorem",
  "number": "10.3.11",
  "title": "",
  "body": " Let be a Lebesgue measurable set, and let . The Banach space is separable.  "
},
{
  "id": "real-analysis-6-2-5-22",
  "level": "2",
  "url": "real-analysis-6-2-5.html#real-analysis-6-2-5-22",
  "type": "Proof",
  "number": "10.3.5",
  "title": "",
  "body": " For a closed bounded interval , let be defined as in the proof of Lemma . That is, is all rational-valued step functions on defined using partitions of using rational values.  First assume that is bounded. Let be a closed bounded interval such that . Since is dense in the set of simple functions on , the set   is dense in the collection of simple functions on . Hence, is separable, by Proposition .  Assume now that is unbounded. For each , let . By the above argument, since is bounded, there is a countable set which is dense in Extend each to by setting for .  Take and fix By the continuity of integration, Proposition ,   Thus, we can choose such that   Since is dense in , there exists such that Thus   Thus . Hence, the countable set is dense in , and so is separable.  "
},
{
  "id": "thm-lp-separable",
  "level": "2",
  "url": "real-analysis-6-2-5.html#thm-lp-separable",
  "type": "Theorem",
  "number": "10.3.12",
  "title": "",
  "body": " Let be a non-empty set and take . Then is separable if and only if is countable.  "
},
{
  "id": "real-analysis-6-2-5-25",
  "level": "2",
  "url": "real-analysis-6-2-5.html#real-analysis-6-2-5-25",
  "type": "Proof",
  "number": "10.3.6",
  "title": "",
  "body": " If is finite, then , where is the cardinality of . Hence is separable.  If is countably infinite, then there is a bijection from to . This bijection defines an isometric isomorphism from to . We will thus assume that .  The simple functions in are the sequences which are finitely non-zero. Take simple and . For , choose such that   and let Then   and so Hence the finitely non-zero rational sequences are dense in the finitely non-zero sequences. As the finitely non-zero sequences are dense in by Proposition , it follows that the rational-valued simple functions are dense in . There are countably many finitely non-zero rational sequences, and hence is simple.  That is not separable when is uncountable is left as an exercise, Exercise . I recommend looking at the proof of Theorem before attempting Exercise .  "
},
{
  "id": "thm-linf-not-separable",
  "level": "2",
  "url": "real-analysis-6-2-5.html#thm-linf-not-separable",
  "type": "Theorem",
  "number": "10.3.13",
  "title": "",
  "body": " The Banach spaces and are not separable.  "
},
{
  "id": "real-analysis-6-2-5-28",
  "level": "2",
  "url": "real-analysis-6-2-5.html#real-analysis-6-2-5-28",
  "type": "Proof",
  "number": "10.3.7",
  "title": "",
  "body": " Consider first . For each , let   Each is bounded and measurable, and hence . Note that, if then   Suppose is a dense subset of . For each ,fix such that   Note that, if ,   Thus, when , In, particular, if then Hence, the collection is uncountable. Therefore, is uncountable, and hence is not separable.  The proof that is not separable is similar. We will outline the details. Let be the collection of all sequences in of zeros and ones. Note that this is an uncountable collection. Indeed, if we can identify the binary expansion of any with a sequence in , and hence and have the same cardinality. Further, if and , then is a sequence of and with at least one non-zero term. Thus, . Using in the role that played in , we can show that any dense set in has to be uncountable. Hence is not separable.  "
},
{
  "id": "real-analysis-6-2-6",
  "level": "1",
  "url": "real-analysis-6-2-6.html",
  "type": "Exercises",
  "number": "10.4",
  "title": "Exercises",
  "body": "  Cauchy-Schwarz inequality in Let and be two vectors in , and let be the polynomial    Show that for all .(Hint: write as a sum of squares).   Use (i) to prove the Cauchy-Schwarz inequality. That is, show that,  Cauchy-Schwarz inequality in (Hint: What does (i) tell us about the descriminant of ?)       Show that the -norm , defined in Example , defines a norm on . (HINT: Use Exercise for the triangle inequality).    Equip with the -norm. Let be a sequence in , with each   Show that sequence is a Cauchy sequence in , if and only if is a Cauchy sequence in for .    Show that with the -norm is a Banach space. (Hint: Consider Exercise ).    Let be an interval and let be the collection of all continuous real-valued bounded functions on . For let be the -norm    Show that with is a normed vector space.   Let be a sequence in and let . Show that converges to with respect to the -norm if and only if converges uniformly to .   Show that is a Banach space.      Let be an interval and let be the collection of all continuous real-valued functions on which vanish at infinity.   Show that is a vector subspace of .   Show that is a Banach space with the -norm.      Let be a continuous function on . Show that vanishes at infinity, i.e. , if and only if   Let be a continuous function on an open interval . Show that vanishes at infinity, i.e. , if and only if     Prove Proposition : Let be a real vector space, and let and be two norms on . The norm is equivalent to if and only if the norm is equivalent to    Let be an interval and let be the collection of all continuous real-valued compactly supported functions on .   Show that is a vector subspace of .   Show that is not a Banach space.      Let be an interval and let be the collection of all continuous real-valued compactly supported functions on .  Show that is a Banach space if and only if is a closed bounded interval, in which case     Let be a vector space, let be the collection of all finite a.e. measurable functions on , and define the equivalence relation on by if and only if a.e.  Show that the vector space operations on are well-defined. That is, show that if with and then ; and if and , then .    Let be a measure space. Let and be essentially bounded measurable functions on . Show that if , then is essentially bounded. Show that is essentially bounded.    The proof of Young's inequality, Lemma , relies on the fact that is a convex function. This will be proved in this exercise. Take .   Assume that . Show that  (HINT: First use the Mean Value Theorem to show that there is a with such that ).    Assume that . Show that    Take and let . Note that, by (i) and (ii),  Use these inequalities to show that   That is, show that is a convex function. convex function       Let be a measure space and take .   Show that  What can we conclude about ? (i.e. is in some -space?)    Use the polynomial  to prove the Cauchy-Schwarz inequality (Theorem ). I.e., prove     Show that the map given by  defines an inner-product on such that for all .       Let be an uncountable set, and let . Show that is not separable.   "
},
{
  "id": "exer-Cauchy-Schwarz-Rn",
  "level": "2",
  "url": "real-analysis-6-2-6.html#exer-Cauchy-Schwarz-Rn",
  "type": "Exercise",
  "number": "10.4.1",
  "title": "",
  "body": " Cauchy-Schwarz inequality in Let and be two vectors in , and let be the polynomial    Show that for all .(Hint: write as a sum of squares).   Use (i) to prove the Cauchy-Schwarz inequality. That is, show that,  Cauchy-Schwarz inequality in (Hint: What does (i) tell us about the descriminant of ?)     "
},
{
  "id": "exer-2-norm",
  "level": "2",
  "url": "real-analysis-6-2-6.html#exer-2-norm",
  "type": "Exercise",
  "number": "10.4.2",
  "title": "",
  "body": " Show that the -norm , defined in Example , defines a norm on . (HINT: Use Exercise for the triangle inequality).  "
},
{
  "id": "exer-Cauchy-in-Rn",
  "level": "2",
  "url": "real-analysis-6-2-6.html#exer-Cauchy-in-Rn",
  "type": "Exercise",
  "number": "10.4.3",
  "title": "",
  "body": " Equip with the -norm. Let be a sequence in , with each   Show that sequence is a Cauchy sequence in , if and only if is a Cauchy sequence in for .  "
},
{
  "id": "exer-Rn-Banach",
  "level": "2",
  "url": "real-analysis-6-2-6.html#exer-Rn-Banach",
  "type": "Exercise",
  "number": "10.4.4",
  "title": "",
  "body": " Show that with the -norm is a Banach space. (Hint: Consider Exercise ).  "
},
{
  "id": "exer-Cb-Banach",
  "level": "2",
  "url": "real-analysis-6-2-6.html#exer-Cb-Banach",
  "type": "Exercise",
  "number": "10.4.5",
  "title": "",
  "body": " Let be an interval and let be the collection of all continuous real-valued bounded functions on . For let be the -norm    Show that with is a normed vector space.   Let be a sequence in and let . Show that converges to with respect to the -norm if and only if converges uniformly to .   Show that is a Banach space.    "
},
{
  "id": "exer-C0-Banach",
  "level": "2",
  "url": "real-analysis-6-2-6.html#exer-C0-Banach",
  "type": "Exercise",
  "number": "10.4.6",
  "title": "",
  "body": " Let be an interval and let be the collection of all continuous real-valued functions on which vanish at infinity.   Show that is a vector subspace of .   Show that is a Banach space with the -norm.    "
},
{
  "id": "real-analysis-6-2-6-7",
  "level": "2",
  "url": "real-analysis-6-2-6.html#real-analysis-6-2-6-7",
  "type": "Exercise",
  "number": "10.4.7",
  "title": "",
  "body": " Let be a continuous function on . Show that vanishes at infinity, i.e. , if and only if   Let be a continuous function on an open interval . Show that vanishes at infinity, i.e. , if and only if   "
},
{
  "id": "exer-norm-equiv",
  "level": "2",
  "url": "real-analysis-6-2-6.html#exer-norm-equiv",
  "type": "Exercise",
  "number": "10.4.8",
  "title": "",
  "body": " Prove Proposition : Let be a real vector space, and let and be two norms on . The norm is equivalent to if and only if the norm is equivalent to  "
},
{
  "id": "exer-Cc-not-Banach",
  "level": "2",
  "url": "real-analysis-6-2-6.html#exer-Cc-not-Banach",
  "type": "Exercise",
  "number": "10.4.9",
  "title": "",
  "body": " Let be an interval and let be the collection of all continuous real-valued compactly supported functions on .   Show that is a vector subspace of .   Show that is not a Banach space.    "
},
{
  "id": "exer-Cc-Banach",
  "level": "2",
  "url": "real-analysis-6-2-6.html#exer-Cc-Banach",
  "type": "Exercise",
  "number": "10.4.10",
  "title": "",
  "body": " Let be an interval and let be the collection of all continuous real-valued compactly supported functions on .  Show that is a Banach space if and only if is a closed bounded interval, in which case   "
},
{
  "id": "exer-ae-vec-space",
  "level": "2",
  "url": "real-analysis-6-2-6.html#exer-ae-vec-space",
  "type": "Exercise",
  "number": "10.4.11",
  "title": "",
  "body": " Let be a vector space, let be the collection of all finite a.e. measurable functions on , and define the equivalence relation on by if and only if a.e.  Show that the vector space operations on are well-defined. That is, show that if with and then ; and if and , then .  "
},
{
  "id": "exer-Linf-vector-space",
  "level": "2",
  "url": "real-analysis-6-2-6.html#exer-Linf-vector-space",
  "type": "Exercise",
  "number": "10.4.12",
  "title": "",
  "body": " Let be a measure space. Let and be essentially bounded measurable functions on . Show that if , then is essentially bounded. Show that is essentially bounded.  "
},
{
  "id": "exer-exp-convex",
  "level": "2",
  "url": "real-analysis-6-2-6.html#exer-exp-convex",
  "type": "Exercise",
  "number": "10.4.13",
  "title": "",
  "body": " The proof of Young's inequality, Lemma , relies on the fact that is a convex function. This will be proved in this exercise. Take .   Assume that . Show that  (HINT: First use the Mean Value Theorem to show that there is a with such that ).    Assume that . Show that    Take and let . Note that, by (i) and (ii),  Use these inequalities to show that   That is, show that is a convex function. convex function     "
},
{
  "id": "exer-Cauchy-Schwarz",
  "level": "2",
  "url": "real-analysis-6-2-6.html#exer-Cauchy-Schwarz",
  "type": "Exercise",
  "number": "10.4.14",
  "title": "",
  "body": " Let be a measure space and take .   Show that  What can we conclude about ? (i.e. is in some -space?)    Use the polynomial  to prove the Cauchy-Schwarz inequality (Theorem ). I.e., prove     Show that the map given by  defines an inner-product on such that for all .     "
},
{
  "id": "exer-lp-not-separable",
  "level": "2",
  "url": "real-analysis-6-2-6.html#exer-lp-not-separable",
  "type": "Exercise",
  "number": "10.4.15",
  "title": "",
  "body": " Let be an uncountable set, and let . Show that is not separable.  "
},
{
  "id": "real-analysis-6-3-3",
  "level": "1",
  "url": "real-analysis-6-3-3.html",
  "type": "Section",
  "number": "11.1",
  "title": "Linear functionals",
  "body": " Linear functionals  As each of and have a norm, and thus a metric, we can define what it means for a map from to to be continuous. Explicitly, a map is continuous if for all there exists such that if satisfy , then  We will be primarily interested in linear maps between vectors. The following proposition gives another characterization of continuity for linear maps.   Let and be two normed vector spaces. Let be a linear map. Then is continuous if and only if there exists such that   for all .    First suppose that is continuous. There exists such that then . In particular, since is linear, if then . Take any non-zero . Fix with   Thus   and so   Conversely, suppose there is an such that for all . Take , and let . Suppose satisfy Then   Thus is continuous.    Let be a normed vector space. A linear functional is a continuous linear map from to .  Denote by the collection of all linear functionals on . linear functional The space is called the dual space of . dual space   If is a normed linear space, then its dual is a vector space under the usual operations of scaling and addition for functions:   for all , and . Further, the norm on induces a natural norm on .   Let be a normed vector space. For define by   We call the operator norm on . operator norm   It is relatively straightforward to show that the operator norm is indeed a norm on . We leave the details as an exericse, Exercise   Let be a normed vector space and let be the operator norm on the dual . Then is a norm on .  Further   for all   When is a normed vector space, with the operator norm will be a Banach space. Note, that is a Banach space even if itself is not a Banach space. We state this result below for posterity, but we will omit the proof. The proof itself is not too difficult. It will follow from an argument using the completeness of the real line; similar to the proof that a uniform limit of continuous functions is continuous.   Let be a normed vector space and let be the operator norm on the dual . Then is a norm on . Further is a Banach space with the operator norm.   "
},
{
  "id": "prop-bounded-cont",
  "level": "2",
  "url": "real-analysis-6-3-3.html#prop-bounded-cont",
  "type": "Proposition",
  "number": "11.1.1",
  "title": "",
  "body": " Let and be two normed vector spaces. Let be a linear map. Then is continuous if and only if there exists such that   for all .  "
},
{
  "id": "real-analysis-6-3-3-5",
  "level": "2",
  "url": "real-analysis-6-3-3.html#real-analysis-6-3-3-5",
  "type": "Proof",
  "number": "11.1.1",
  "title": "",
  "body": " First suppose that is continuous. There exists such that then . In particular, since is linear, if then . Take any non-zero . Fix with   Thus   and so   Conversely, suppose there is an such that for all . Take , and let . Suppose satisfy Then   Thus is continuous.  "
},
{
  "id": "real-analysis-6-3-3-6",
  "level": "2",
  "url": "real-analysis-6-3-3.html#real-analysis-6-3-3-6",
  "type": "Definition",
  "number": "11.1.2",
  "title": "",
  "body": " Let be a normed vector space. A linear functional is a continuous linear map from to .  Denote by the collection of all linear functionals on . linear functional The space is called the dual space of . dual space  "
},
{
  "id": "real-analysis-6-3-3-10",
  "level": "2",
  "url": "real-analysis-6-3-3.html#real-analysis-6-3-3-10",
  "type": "Definition",
  "number": "11.1.3",
  "title": "",
  "body": " Let be a normed vector space. For define by   We call the operator norm on . operator norm  "
},
{
  "id": "prop-operator-norm",
  "level": "2",
  "url": "real-analysis-6-3-3.html#prop-operator-norm",
  "type": "Proposition",
  "number": "11.1.4",
  "title": "",
  "body": " Let be a normed vector space and let be the operator norm on the dual . Then is a norm on .  Further   for all  "
},
{
  "id": "real-analysis-6-3-3-14",
  "level": "2",
  "url": "real-analysis-6-3-3.html#real-analysis-6-3-3-14",
  "type": "Theorem",
  "number": "11.1.5",
  "title": "",
  "body": " Let be a normed vector space and let be the operator norm on the dual . Then is a norm on . Further is a Banach space with the operator norm.  "
},
{
  "id": "real-analysis-6-3-4",
  "level": "1",
  "url": "real-analysis-6-3-4.html",
  "type": "Section",
  "number": "11.2",
  "title": "The dual of <span class=\"process-math\">\\(L^p\\)<\/span>-spaces",
  "body": " The dual of -spaces  In our study of -spaces so far we have, mostly, looked at arbitrary measure spaces. When studying dual spaces, our strongest results will come when we work with -finite measure spaces. Our first goal is to describe the linear functionals on when Here, Hölder's inequality will play a significant role. When , the study of the dual is more involved. We will discuss the dual of -spaces at the end of this section.  Let be a measure space, fix with and let be conjugate to . For , we define a linear map from to by   When , that is integrable follows from Hölders inequality; when , and so is integrable. The linearity of then follows from the linearity of integration. Further,   for all , and so is continuous by Proposition . Thus the map defines a map from to .   Let be a measure space, fix with and let be conjugate to . The map   is a linear isometric map (i.e. for all ).    The linearity of the map follows from the linearity of integration. Suppose and take By Hölder's inequality   for all Hence By Corollary , there is an with such that   and hence   When we can prove similar, but we need some restrictions on our measure space.   Let be a -finite measure space. The map   is a linear isometric map.    We, again, have that is linear, by the linearity of integration. Fix . It is clear that Fix . Let   By the definition of , has non-zero measure. Since is -finite, there is a such that   Let   Note   Thus and . Further   As this holds for all , we have that   We will show that, when , In the case we will work with a -finite space that the map is bijective. I.e., we will show that if then there is a such that . We need the following lemma first.   Let be a measure space, let and let be conjugate to . Suppose is a measurable function on such that is -finite. Let   If , then and    First assume , so that . Let be an increasing sequence of finite measure sets, such that   By the Simple Approximation Theorem, there is a sequence of simple functions converging pointwise to with . Let . For each , is a simple function which vanishes outside a set of finite measure. Thus, . For each , let be the function   As in the proof of Corollary , Now, by Fatou's Lemma, we have   Thus and By Hölder's inequality, , and so  Suppose now that and . We proceed in a way similar to the proof of Lemma . Fix and let   If , then since is -finite, there exists measurable such that   Let   Then and However, since is a simple function   This is a contradiction, hence . Therefore . That is clear.    Riesz Representation Theorem for -spaces  Riesz Representation Theorem for -spaces Let be a measure space, let and let be conjugate to . The map   is an isometric, linear bijection.  If is -finite, then the map   is an isometric, linear bijection.    Let and be conjugate with . That is a linear isometric map is shown in Lemma . It remains to show that is a surjective. In the proof we will first assume is a finite measure space; then a -finite measure space; finally we will just assume that is a measure space.  Assume is a finite measure space, and take Since is finite, for all Define a map on by   Note that if almost everywhere, then , and so In particular, Let be a countable collection of disjoint measurable sets, and let For each , let The sequence converges pointwise to . Thus, by the Lebesgue Dominated Convergence theorem, converges to with respect to the -norm. Thus, by the continuity of ,   We have shown that is a signed-measure on Clearly . By the Radon-Nikodym Theorem for signed-measures, Corollary , there is a integrable function on such that   for all . By the linearity of integration, if is a simple function, then   Thus   Hence, by Lemma , As for all simple functions , it follows from Proposition , that Thus is surjective.  Assume now that is -finite. Let be an increasing sequence of finite measure sets, such that We embed in be setting for for each . Note that this embedding preserves the -norm. Since , the above arguments shows that for each there is a such that   Thus, for all .  By the uniqueness of the Radon-Nikodym derivative in Corollary , if then almost everywhere. Thus, as elements of we have when We can thus define a function almost everywhere by   Thus, the sequence is an increasing sequence, converging pointwise a.e. to . Hence, by the Monotone Convergence Theorem,   Hence, .  Take any . The sequence converges pointwise to . By Hölders inequality, is integrable for all , and is integrable. It follows from the Lebesgue Dominated Convergence Theorem, that   Also, again by the Lebesgue Dominated Convergence Theorem,   Hence, by the continuity of ,   Therefore , completing the proof for the -finite case.  Now let be an arbitrary measure space. Again, if is measurable we embed into by setting functions to be on . By the above argument, if is -finite, then there is a such that   for all Note that, by the uniqueness of , if and are -finite with then almost everywhere. Thus Let   Take a sequence of -finite sets, such that converges to , and let Then is -finite, and for all .\\ Thus Suppose now that is -finite, with . Then   Thus and so almost everywhere. If , then by Theorem , the set   is -finite. Thus, the set is -finite, and   Hence , completing the proof for  When and the proof follows a similar vein of reasoning (when we assume is -finite). The details are left as an exercise, Exericse .    Theorem shows that in order for the dual of to be (isometrically isomorphic to) , it is sufficient that be -finite. But is it necessary that is -finite? The proof relies on two key steps: first we show in Lemma , that if is -finite, then the map is a norm preserving map from to ; then in Theorem we show that the map is surjective.  You will notice, that the proof of Lemma does not fully rely on the fact that is -finite. Indeed, the property we use is that if , then there is a with . Measure spaces with this property are called semi-finite measure space semi-finite . Whilst all -finite measure spaces are semi-finite, not all semi-finite measure spaces are -finite. E.g., if is an uncountable set and is the counting measure on all the subsets of , then is semi-finite but not -finite.  The proof of surjectivity in Theorem also does not tell the whole story. In order for the map to be surjective, a necessary and sufficient condition is that the measure space is localizable . Other than to say that being localizable is a stronger condition than being semi-finite, but a weaker condition than being -finite, we will say no more on the topic. We refer the interested reader to the treatise of Fremlin .  In lieu of a more in-depth discussion on the dual of when is not -finite, we refer the reader to Exercise and Exercise . In Exercise , an example is given of a measure space which is not -finite, but the dual of is . In Exercise , an example is given where the dual of is not .    The dual of  Notably absent from our discussions so far is the dual of . The dual of can be described, but the description is not as neat as for the dual of when . In this subsection we will briefly discuss the dual of . We leave the general theory of the dual of to a series of exercises: Exercise , Exercise , and Exercise .   Let be the collection of all sequences of real numbers that converge to . { } In Exercise we establish that is a separable Banach subspace for . For , we define a linear functional on by   Exercise shows that the map   is an isometric bijection. That is, .  In Exercise we show that if then there is an and a with for all such that   It is reasonable to believe that there are non-zero elements with . After all, is a not separable by Theorem , and is a separable by Exercise . That is larger than suggests that should be larger than . Exhibiting with this property is between difficult and impossible. However, with the Hahn-Banach theorem, a significant theorem in the field of Functional Analysis, one can show that such exist. Thus is not the same as under the standard isomorphism .   In fact is much larger than . We know that is separable and that is not separable. That is not separable guarantees that is also not separable, and so cannot be the same as under any map. There are a few ways to show that is not separable, but all fall outside the remit of this course. We quickly outline the details of two ways in the following remarks, one using topology and one using functional analysis. These details are included for your edification and to whet your appetite for further study. Don't stress too much if the details are confusing.   Consider the natural numbers with the discrete topology, i.e. the topology where every subsets of is open. Using the Stone-\\u{C}ech compactification from topology, it can be shown that there is a compact Hausdorff space containing a homeomorphic copy of , such that every bounded function on extends uniquely to a continuous bounded function on . The bounded functions on are simply . Thus, the Stone-\\u{C}ech compactification shows that . For each we can define a linear functional on by   One can show that, if , then The construction of guarantees that is uncountable. Using an argument similar to the proof of Theorem , we can use the uncountable collection to show that is not separable.  In Example we give a full description of the dual of using a class of signed measures on .    With functional analysis tools, we can say more. One can show that if is a Banach space which is not separable, then the dual space is also not separable. Proving that the dual of a non-separable space is non-separable relies on the Hahn-Banach theorem. Hahn-Banach theorem  Thus, since is not separable, we cannot have that is isomorphic to . We also know that is not separable by Theorem , and thus is not separable. As is separable, by Theorem , we must have that    "
},
{
  "id": "lem-holder-for-dual",
  "level": "2",
  "url": "real-analysis-6-3-4.html#lem-holder-for-dual",
  "type": "Lemma",
  "number": "11.2.1",
  "title": "",
  "body": " Let be a measure space, fix with and let be conjugate to . The map   is a linear isometric map (i.e. for all ).  "
},
{
  "id": "real-analysis-6-3-4-9",
  "level": "2",
  "url": "real-analysis-6-3-4.html#real-analysis-6-3-4-9",
  "type": "Proof",
  "number": "11.2.1",
  "title": "",
  "body": " The linearity of the map follows from the linearity of integration. Suppose and take By Hölder's inequality   for all Hence By Corollary , there is an with such that   and hence  "
},
{
  "id": "lem-holder-for-dual-p-1",
  "level": "2",
  "url": "real-analysis-6-3-4.html#lem-holder-for-dual-p-1",
  "type": "Lemma",
  "number": "11.2.2",
  "title": "",
  "body": " Let be a -finite measure space. The map   is a linear isometric map.  "
},
{
  "id": "real-analysis-6-3-4-12",
  "level": "2",
  "url": "real-analysis-6-3-4.html#real-analysis-6-3-4-12",
  "type": "Proof",
  "number": "11.2.2",
  "title": "",
  "body": " We, again, have that is linear, by the linearity of integration. Fix . It is clear that Fix . Let   By the definition of , has non-zero measure. Since is -finite, there is a such that   Let   Note   Thus and . Further   As this holds for all , we have that  "
},
{
  "id": "lem-functional-in-Lq",
  "level": "2",
  "url": "real-analysis-6-3-4.html#lem-functional-in-Lq",
  "type": "Lemma",
  "number": "11.2.3",
  "title": "",
  "body": " Let be a measure space, let and let be conjugate to . Suppose is a measurable function on such that is -finite. Let   If , then and  "
},
{
  "id": "real-analysis-6-3-4-15",
  "level": "2",
  "url": "real-analysis-6-3-4.html#real-analysis-6-3-4-15",
  "type": "Proof",
  "number": "11.2.3",
  "title": "",
  "body": " First assume , so that . Let be an increasing sequence of finite measure sets, such that   By the Simple Approximation Theorem, there is a sequence of simple functions converging pointwise to with . Let . For each , is a simple function which vanishes outside a set of finite measure. Thus, . For each , let be the function   As in the proof of Corollary , Now, by Fatou's Lemma, we have   Thus and By Hölder's inequality, , and so  Suppose now that and . We proceed in a way similar to the proof of Lemma . Fix and let   If , then since is -finite, there exists measurable such that   Let   Then and However, since is a simple function   This is a contradiction, hence . Therefore . That is clear.  "
},
{
  "id": "thm-riesz-rep-Lp",
  "level": "2",
  "url": "real-analysis-6-3-4.html#thm-riesz-rep-Lp",
  "type": "Theorem",
  "number": "11.2.4",
  "title": "Riesz Representation Theorem for <span class=\"process-math\">\\(L^p\\)<\/span>-spaces.",
  "body": " Riesz Representation Theorem for -spaces  Riesz Representation Theorem for -spaces Let be a measure space, let and let be conjugate to . The map   is an isometric, linear bijection.  If is -finite, then the map   is an isometric, linear bijection.  "
},
{
  "id": "real-analysis-6-3-4-17",
  "level": "2",
  "url": "real-analysis-6-3-4.html#real-analysis-6-3-4-17",
  "type": "Proof",
  "number": "11.2.4",
  "title": "",
  "body": " Let and be conjugate with . That is a linear isometric map is shown in Lemma . It remains to show that is a surjective. In the proof we will first assume is a finite measure space; then a -finite measure space; finally we will just assume that is a measure space.  Assume is a finite measure space, and take Since is finite, for all Define a map on by   Note that if almost everywhere, then , and so In particular, Let be a countable collection of disjoint measurable sets, and let For each , let The sequence converges pointwise to . Thus, by the Lebesgue Dominated Convergence theorem, converges to with respect to the -norm. Thus, by the continuity of ,   We have shown that is a signed-measure on Clearly . By the Radon-Nikodym Theorem for signed-measures, Corollary , there is a integrable function on such that   for all . By the linearity of integration, if is a simple function, then   Thus   Hence, by Lemma , As for all simple functions , it follows from Proposition , that Thus is surjective.  Assume now that is -finite. Let be an increasing sequence of finite measure sets, such that We embed in be setting for for each . Note that this embedding preserves the -norm. Since , the above arguments shows that for each there is a such that   Thus, for all .  By the uniqueness of the Radon-Nikodym derivative in Corollary , if then almost everywhere. Thus, as elements of we have when We can thus define a function almost everywhere by   Thus, the sequence is an increasing sequence, converging pointwise a.e. to . Hence, by the Monotone Convergence Theorem,   Hence, .  Take any . The sequence converges pointwise to . By Hölders inequality, is integrable for all , and is integrable. It follows from the Lebesgue Dominated Convergence Theorem, that   Also, again by the Lebesgue Dominated Convergence Theorem,   Hence, by the continuity of ,   Therefore , completing the proof for the -finite case.  Now let be an arbitrary measure space. Again, if is measurable we embed into by setting functions to be on . By the above argument, if is -finite, then there is a such that   for all Note that, by the uniqueness of , if and are -finite with then almost everywhere. Thus Let   Take a sequence of -finite sets, such that converges to , and let Then is -finite, and for all .\\ Thus Suppose now that is -finite, with . Then   Thus and so almost everywhere. If , then by Theorem , the set   is -finite. Thus, the set is -finite, and   Hence , completing the proof for  When and the proof follows a similar vein of reasoning (when we assume is -finite). The details are left as an exercise, Exericse .  "
},
{
  "id": "real-analysis-6-3-4-18",
  "level": "2",
  "url": "real-analysis-6-3-4.html#real-analysis-6-3-4-18",
  "type": "Remark",
  "number": "11.2.5",
  "title": "",
  "body": " Theorem shows that in order for the dual of to be (isometrically isomorphic to) , it is sufficient that be -finite. But is it necessary that is -finite? The proof relies on two key steps: first we show in Lemma , that if is -finite, then the map is a norm preserving map from to ; then in Theorem we show that the map is surjective.  You will notice, that the proof of Lemma does not fully rely on the fact that is -finite. Indeed, the property we use is that if , then there is a with . Measure spaces with this property are called semi-finite measure space semi-finite . Whilst all -finite measure spaces are semi-finite, not all semi-finite measure spaces are -finite. E.g., if is an uncountable set and is the counting measure on all the subsets of , then is semi-finite but not -finite.  The proof of surjectivity in Theorem also does not tell the whole story. In order for the map to be surjective, a necessary and sufficient condition is that the measure space is localizable . Other than to say that being localizable is a stronger condition than being semi-finite, but a weaker condition than being -finite, we will say no more on the topic. We refer the interested reader to the treatise of Fremlin .  In lieu of a more in-depth discussion on the dual of when is not -finite, we refer the reader to Exercise and Exercise . In Exercise , an example is given of a measure space which is not -finite, but the dual of is . In Exercise , an example is given where the dual of is not .  "
},
{
  "id": "ex-dual-of-linf",
  "level": "2",
  "url": "real-analysis-6-3-4.html#ex-dual-of-linf",
  "type": "Example",
  "number": "11.2.6",
  "title": "",
  "body": " Let be the collection of all sequences of real numbers that converge to . { } In Exercise we establish that is a separable Banach subspace for . For , we define a linear functional on by   Exercise shows that the map   is an isometric bijection. That is, .  In Exercise we show that if then there is an and a with for all such that   It is reasonable to believe that there are non-zero elements with . After all, is a not separable by Theorem , and is a separable by Exercise . That is larger than suggests that should be larger than . Exhibiting with this property is between difficult and impossible. However, with the Hahn-Banach theorem, a significant theorem in the field of Functional Analysis, one can show that such exist. Thus is not the same as under the standard isomorphism .  "
},
{
  "id": "real-analysis-6-3-4-19-5",
  "level": "2",
  "url": "real-analysis-6-3-4.html#real-analysis-6-3-4-19-5",
  "type": "Remark",
  "number": "11.2.7",
  "title": "",
  "body": " Consider the natural numbers with the discrete topology, i.e. the topology where every subsets of is open. Using the Stone-\\u{C}ech compactification from topology, it can be shown that there is a compact Hausdorff space containing a homeomorphic copy of , such that every bounded function on extends uniquely to a continuous bounded function on . The bounded functions on are simply . Thus, the Stone-\\u{C}ech compactification shows that . For each we can define a linear functional on by   One can show that, if , then The construction of guarantees that is uncountable. Using an argument similar to the proof of Theorem , we can use the uncountable collection to show that is not separable.  In Example we give a full description of the dual of using a class of signed measures on .  "
},
{
  "id": "real-analysis-6-3-4-19-6",
  "level": "2",
  "url": "real-analysis-6-3-4.html#real-analysis-6-3-4-19-6",
  "type": "Remark",
  "number": "11.2.8",
  "title": "",
  "body": " With functional analysis tools, we can say more. One can show that if is a Banach space which is not separable, then the dual space is also not separable. Proving that the dual of a non-separable space is non-separable relies on the Hahn-Banach theorem. Hahn-Banach theorem  Thus, since is not separable, we cannot have that is isomorphic to . We also know that is not separable by Theorem , and thus is not separable. As is separable, by Theorem , we must have that  "
},
{
  "id": "real-analysis-6-3-5",
  "level": "1",
  "url": "real-analysis-6-3-5.html",
  "type": "Section",
  "number": "11.3",
  "title": "Locally compact Hausdorff spaces",
  "body": " Locally compact Hausdorff spaces  As all continuous functions on are necessarily bounded, and is a Banach space with the -norm, see Example . In Section we will describe the dual space of . We will do this by provingt the (more general) Riesz-Markov-Kakutani Theorem. We begin with some topological preliminaries.  In this section we will review some topological facts. Most will be presented without proof. Details can be found in or (and umpteen more texts).  Let be a topological space. If , a set is a neighborhood of neighborhood if , and there is an open set such that   Take . A collection of open sets is an open cover open cover of if . The set is compact compact if given any open cover of , there is a finite subcover. That is, there are such that .  The following result gives a useful alternative characterization of compactness.   Let be a topological space. The following are equivalent:   is compact;   if is a collection of closed sets satisfying for any , then      Given a collection of topology spaces we can form the Cartesian product . The product topology on is the topology generated by the sets where, for each , is an open set, and for all but finitely many .   Tychonoff's Theorem  Tychonoff's Theorem Let be a collection of topological spaces, let with the product topology. If is compact for all , then is compact.   Tychonoff's Theorem is a non-trivial result. In fact, it can be shown that Tychonoff's Theorem is equivalent to the axiom of choice.  Recall that is Hausdorff Hausdorff if given with , there exist open sets such that   Compact Hausdorff spaces are very nice, but if we restrict to compact topological spaces we lose too many important examples. We instead restrict to locally compact spaces:   Let be a topological space. The space is locally compact if every point has a compact neighborhood.    Every compact space is locally compact.    The real line is locally compact and Hausdorff. Indeed, for any , the set is a compact neighborhood of . More generally, is locally compact and Hausdorff. Indeed, if , then the neighborhood is compact by the Heine-Borel theorem.    Every metric space is Hausdorff. However, not every metric space is locally compact. In particular, a Banach space is locally compact if and only if is finite dimensional.    Let be a topological space with the discrete topology, i.e. every subset of is open. Then is Hausdorff and locally compact. Indeed, if , then is a compact neighborhood of . If has an infinite cardinality, then is locally compact, but not compact.   Let be a locally compact Hausdorff space. We denote by the space of all continuous real-valued functions on . We denote by the space of all bounded continuous real-valued functions on . The space is a normed-vector space with the -norm norm -norm   A function  vanishes at infinity if, for all , there is a compact set , such that for all . Denote by the space of all continuous functions on which vanish at infinity.  A function is compactly supported continuous function compactly supported , or of compact support , if there is a compact set such that   When is compactly supported, we call the closure of in , the compact support of . We denote by the space of all continuous compactly supported functions on .  These definitions are consistent with the definitions in Example , Example , and Example . We have that   Both and are Banach spaces with the -norm. In general, is not a Banach space. The smallest Banach subspace of containing is . That is, is the closure of .  When we work with the real line, we can often find continuous functions that take desired values on certain sets. We have, for example, does this with piecewise linear functions many times throughout these notes. When working with a more general topological space, it is not clear that we can always find these nice continuous functions. The following proposition shows that for locally compact Hausdorff spaces, we can, at times, find continuous functions to do what we want.   Urysohn's Lemma  Urysohn's Lemma Let be a locally compact Hausdorff space. Let be compact and be open such that . There exists a continuous, compactly supported function such that for all and for all .   What we have stated here is actually just a special case of Urysohn's Lemma. When working in a metric space, the next example shows that the proof of Urysohn's Lemma is straightforward.   Suppose is a metric space with metric (not necessarily locally compact), and that with closed and open. For any closed set , let be the function on defined by For each closed , it can be shown that is a continuous function. Now, define a function on by   Then is a continuous function from to satisfying for , and for .    Let be a locally compact Hausdorff space, let be a compact subset, and let be an open cover for . A collection of continuous functions from to are partition of unity for subordinate to partition of unity if   for ;   for all ; and   the compact support of is a subset of for .     The following result is an application of Urysohn's Lemma.   Let be a locally compact Hausdorff space, be compact, and be an open cover of . There is a partition of unity for subordinate to .   Let be a locally compact Hausdorff space. We denote by the Borel sets in . That is, is the smallest -algebra of subsets of containing all the open subsets of . Recall that a measure on the measurable space is a Borel measure if for all compact sets . We will be primarily interested in a special type of Borel measure.   Let be a locally compact Hausdorff space and let be a Borel measure on . Take . The measure is outer regular measure outer regular on if   and inner regular measure inner regular on if   The measure is a Radon measure Radon measure if is outer regular on all Borel sets, and inner regular on all open sets.  A signed Borel measure on is a Radon signed measure Radon measure Radon signed measure if the measure of total variation is a Radon measure.    Let be the Lebesgue measure on the Borel subsets of . By Theorem , is a Radon measure.    Let be a Borel measure on . By Lemma , is outer regular on all Borel sets. By Exercise , is inner regular on open subsets , and hence is a Radon measure.    Let be a locally compact Hausdorff space, let be any pointy, and let be the Dirac measure at on the Borel sets . Then is a Radon measure.   "
},
{
  "id": "prop-compact-finite-intersection",
  "level": "2",
  "url": "real-analysis-6-3-5.html#prop-compact-finite-intersection",
  "type": "Proposition",
  "number": "11.3.1",
  "title": "",
  "body": " Let be a topological space. The following are equivalent:   is compact;   if is a collection of closed sets satisfying for any , then     "
},
{
  "id": "thm-tychonoff",
  "level": "2",
  "url": "real-analysis-6-3-5.html#thm-tychonoff",
  "type": "Theorem",
  "number": "11.3.2",
  "title": "Tychonoff’s Theorem.",
  "body": " Tychonoff's Theorem  Tychonoff's Theorem Let be a collection of topological spaces, let with the product topology. If is compact for all , then is compact.  "
},
{
  "id": "real-analysis-6-3-5-15",
  "level": "2",
  "url": "real-analysis-6-3-5.html#real-analysis-6-3-5-15",
  "type": "Definition",
  "number": "11.3.3",
  "title": "",
  "body": " Let be a topological space. The space is locally compact if every point has a compact neighborhood.  "
},
{
  "id": "real-analysis-6-3-5-16",
  "level": "2",
  "url": "real-analysis-6-3-5.html#real-analysis-6-3-5-16",
  "type": "Example",
  "number": "11.3.4",
  "title": "",
  "body": " Every compact space is locally compact.  "
},
{
  "id": "real-analysis-6-3-5-17",
  "level": "2",
  "url": "real-analysis-6-3-5.html#real-analysis-6-3-5-17",
  "type": "Example",
  "number": "11.3.5",
  "title": "",
  "body": " The real line is locally compact and Hausdorff. Indeed, for any , the set is a compact neighborhood of . More generally, is locally compact and Hausdorff. Indeed, if , then the neighborhood is compact by the Heine-Borel theorem.  "
},
{
  "id": "real-analysis-6-3-5-18",
  "level": "2",
  "url": "real-analysis-6-3-5.html#real-analysis-6-3-5-18",
  "type": "Example",
  "number": "11.3.6",
  "title": "",
  "body": " Every metric space is Hausdorff. However, not every metric space is locally compact. In particular, a Banach space is locally compact if and only if is finite dimensional.  "
},
{
  "id": "real-analysis-6-3-5-19",
  "level": "2",
  "url": "real-analysis-6-3-5.html#real-analysis-6-3-5-19",
  "type": "Example",
  "number": "11.3.7",
  "title": "",
  "body": " Let be a topological space with the discrete topology, i.e. every subset of is open. Then is Hausdorff and locally compact. Indeed, if , then is a compact neighborhood of . If has an infinite cardinality, then is locally compact, but not compact.  "
},
{
  "id": "real-analysis-6-3-5-30",
  "level": "2",
  "url": "real-analysis-6-3-5.html#real-analysis-6-3-5-30",
  "type": "Proposition",
  "number": "11.3.8",
  "title": "Urysohn’s Lemma.",
  "body": " Urysohn's Lemma  Urysohn's Lemma Let be a locally compact Hausdorff space. Let be compact and be open such that . There exists a continuous, compactly supported function such that for all and for all .  "
},
{
  "id": "real-analysis-6-3-5-32",
  "level": "2",
  "url": "real-analysis-6-3-5.html#real-analysis-6-3-5-32",
  "type": "Example",
  "number": "11.3.9",
  "title": "",
  "body": " Suppose is a metric space with metric (not necessarily locally compact), and that with closed and open. For any closed set , let be the function on defined by For each closed , it can be shown that is a continuous function. Now, define a function on by   Then is a continuous function from to satisfying for , and for .  "
},
{
  "id": "real-analysis-6-3-5-33",
  "level": "2",
  "url": "real-analysis-6-3-5.html#real-analysis-6-3-5-33",
  "type": "Definition",
  "number": "11.3.10",
  "title": "",
  "body": " Let be a locally compact Hausdorff space, let be a compact subset, and let be an open cover for . A collection of continuous functions from to are partition of unity for subordinate to partition of unity if   for ;   for all ; and   the compact support of is a subset of for .    "
},
{
  "id": "prop-decomp-of-unity",
  "level": "2",
  "url": "real-analysis-6-3-5.html#prop-decomp-of-unity",
  "type": "Proposition",
  "number": "11.3.11",
  "title": "",
  "body": " Let be a locally compact Hausdorff space, be compact, and be an open cover of . There is a partition of unity for subordinate to .  "
},
{
  "id": "real-analysis-6-3-5-37",
  "level": "2",
  "url": "real-analysis-6-3-5.html#real-analysis-6-3-5-37",
  "type": "Definition",
  "number": "11.3.12",
  "title": "",
  "body": " Let be a locally compact Hausdorff space and let be a Borel measure on . Take . The measure is outer regular measure outer regular on if   and inner regular measure inner regular on if   The measure is a Radon measure Radon measure if is outer regular on all Borel sets, and inner regular on all open sets.  A signed Borel measure on is a Radon signed measure Radon measure Radon signed measure if the measure of total variation is a Radon measure.  "
},
{
  "id": "real-analysis-6-3-5-38",
  "level": "2",
  "url": "real-analysis-6-3-5.html#real-analysis-6-3-5-38",
  "type": "Example",
  "number": "11.3.13",
  "title": "",
  "body": " Let be the Lebesgue measure on the Borel subsets of . By Theorem , is a Radon measure.  "
},
{
  "id": "real-analysis-6-3-5-39",
  "level": "2",
  "url": "real-analysis-6-3-5.html#real-analysis-6-3-5-39",
  "type": "Example",
  "number": "11.3.14",
  "title": "",
  "body": " Let be a Borel measure on . By Lemma , is outer regular on all Borel sets. By Exercise , is inner regular on open subsets , and hence is a Radon measure.  "
},
{
  "id": "real-analysis-6-3-5-40",
  "level": "2",
  "url": "real-analysis-6-3-5.html#real-analysis-6-3-5-40",
  "type": "Example",
  "number": "11.3.15",
  "title": "",
  "body": " Let be a locally compact Hausdorff space, let be any pointy, and let be the Dirac measure at on the Borel sets . Then is a Radon measure.  "
},
{
  "id": "sec-RMK",
  "level": "1",
  "url": "sec-RMK.html",
  "type": "Section",
  "number": "11.4",
  "title": "Linear functionals on <span class=\"process-math\">\\(C_0(X)\\)<\/span>",
  "body": " Linear functionals on  Let be a locally compact Hausdorff space. Our goal is to describe the dual space of . We begin with some examples.   Let be a locally compact Hausdorff space, and take any . The point-evaluation map   for all is linear. Further, for ,   Thus is a linear functional on with .  Let be any open neighborhood of . By Urysohn's Lemma, there is a continuous function such that and . Therefore,   and hence .    Let be a locally compact Hausdorff space with Borel sets , and let be a finite Radon measure on . By Corollary , every continuous real-valued function on is a measurable function on . Since is a finite measure, any bounded measurable function on is integrable. Thus, if , then is integrable. Define a linear map from to , by   Note that, if , then   Hence, is a linear functional on and .  Since is a Radon measure, there is an increasing sequence of compact subsets of such that   By Urysohn's Lemma, for each there is a compactly supported positive function on such that   For each ,   Hence, for each ,   Thus     Note that Example is a special case of Example . Indeed, if , and is the Dirac measure at , then   by Exercise .   Let be a finite Radon signed measure on a locally compact space . Let be the Jordan decomposition of . Then both and are finite Radon measures. If is a Borel measurable function on which is integrable with respect to , we can define the integral of with respect to by   We can use this to extend Example .   Let be a finite Radon signed measure on a locally compact Hausdorff space . For each define by   Clearly is linear, by the linearity of integration. Note that,   where the last equality follows from Exercise . Thus, for ,   where the last inequality comes from Exercise . Hence , with   In Example we showed for a signed measure . We have left open the question of the exact value of . This is answered in Theorem , where it is shown that .   Let be a locally compact Hausdorff space. A linear functional in the dual space of is positive if for all non-negative functions . linear functional positive    Note that, if is a positive linear functional, then   That is, the norm of can be calculated using only non-negative functions, see Exercise    The linear functionals described in Example (and Example ) are positive linear functionals. The linear functionals in Example are not necessarily positive.   Let be a finite Radon signed measure on a locally compact Hausdorff space . With the notation from Example and Example , we have that   when is the Jordan decomposition of . That is, is the difference of two positive linear functionals. We will show that we can write any linear functional on as the difference of two positive linear functionals. We have seen two theorems called the Jordan Decomposition Theorem: first for signed measures (Theorem ), and then for functions of bounded variation on closed bounded intervals of (Theorem ). In Proposition we saw that restricting Theorem to Borel signed measures on closed bounded intervals recovers Theorem . That is, the Jordan Decomposition of functions of bounded variation is a special case of the Jordan decomposition of signed measures. We will now state a third theorem called the Jordan Decomposition Theorem, this time for linear functionals. Whilst not yet clear, we will eventually see that this too can be viewed as a special case of the Jordan decomposition of signed measures.   Jordan Decomposition Theorem  Jordan Decomposition Theorem for linear functionals Let be a locally compact Hausdorff space and let be a linear functional on . There are positive linear functionals such that   ; and        We will first define on non-negative functions. When with let   As , it follows that for all in . Also, if , then   thus .  We want to show that is linear on the non-negative functions. If and , then . If and , then   Thus   Conversely, if , let and . Then and , and so   Hence   Therefore .  We will now extend to all of . If , then , where is the positive part of , and is the negative part of . Define   Note that, if where , then   and so, by the linearity of on positive functions,   Thus, if . Then   and so . It is straightforward to show that   for all scalars and . Thus is linear. Further, for any ,   Thus and .  Let . Then , and if then   Thus, is positive.  It remains to show that . Since, , it is immediate that   Take . Take non-negative with such that   Let Then, and   Take any with . Then   and so . Thus   Taking the supremum over all with in we get   This holds for all , and hence . It now follows that , as desired.    Let be a locally compact Hausdorff space, and let be a linear functional on . If and are positive linear functionals in such that and , then we call and the Jordan decomposition of . Jordan decomposition of a linear functional    You may have concerns with the use of the word the in the above definition. Uniqueness was never proved in Theorem . Rather than proving uniqueness directly (and justifying the terminology), we will leave this quibble for now. The Jordan decomposition of a linear functional is unique; the uniqueness will be addressed in Corollary .   The following theorem goes by several names. Some sources call it the Riesz Representation Theorem; some call it Riesz-Markov Theorem; some call it the Riesz-Markov-Kakutani Theorem. We will leave it unnamed, saving the name Riesz-Markov-Kakutani Theorem for the result that usual bears the name, Theorem .   Let be a locally compact Hausdorff space and let be a positive linear functional on . There is a unique finite Radon measure on such that   for all . Further, .    For the purposes of this proof, we introduce a piece of notation: if is an open set, and satisfies and has compact support inside , we will write .  When is a non-empty open set, define   and define . For arbitrary , define   Note that, if and are open with , then . Hence, if is open, . We will show that is an outer measure whose measurable sets include the Borel sets. We will then show that restricts to a finite Radon measure on the Borel sets satisfying   for all .  Let be a collection of open sets, and let be an open set satisfying   Take with , and let be the compact support of . Since is compact, there is an , such that   By Proposition~{prop: decomp of unity} there are functions , such that for each , and   for all . Hence , and for . Hence   Therefore,   It follows that if , then   Hence, by Theorem , is an outer measure.  To show that Borel sets a -measurable, it suffices to show that every open is -open. Fix open . Take an open set , and . Fix . Take , such that Let be the compact support of . Then is closed, and so is open. Take , such that Then , and   Hence . As is subadditive, it follows that . Now, suppose is an arbitrary set with . Fix . There is an open set , with , such that   Using that is open,   As this holds for all , it folloows that , and hence . We have thus shown that all open subsets of are -measurable. Therefore all Borel sets are -measurable.  Let be the restriction of to the Borel sets. We show that is a finite Radon measure. That is outer regular follows immediately from the definition of . It remains to show that for all compact , and that is inner regular on open sets. Fix a compact set , and fix non-negative such that for all (note that such an exists by Urysohn's Lemma). For let   Then and . If , then   Since is a positive linear functional, it follows that   Taking the supremum over all , we have   As this holds for all , it follows that   Now take any open set with . By Urysohn's Lemma, there is a such that for all . Thus   Since is outer regular on , it follows that   Hence . Take now any open set . Take any , and choose such that . Let be the compact support of . Note, if and for all , then , and therefore . Thus, by , . We have shown that if , then there is a compact set , such that . It follows that   That is, is inner regular on . Thus is a Radon measure. Finally,   Hence is a finite Radon measure, and .  We will now show that   for all . Fix with and fix . For , let   Let be the compact support of . For , let   Equivalently,   Then for , and .  For each ,   Note, if for an open set , then . Thus, . Hence, since is outer regular and by ,   Since , we have that   Hence   Taking the limit as , we see that   As every element of is a linear combination of norm one positive functions, we have for all , as desired.  It remains to show that is unique. Suppose is a finite Radon measure on that also satisfies for all . Take an open set . If , then   Also, if is compact, then by Urysohn's lemma there is an such that for all . Thus,   Since is inner regular on , it follows that   Hence on all open subsets of . As and are outer regular on all Borel sets, it follows that .   We have shown that every positive linear functional on is given by integration with respect to a finite Radon measure; and we have shown that every linear functional on can be written as the difference of two positive linear functionals. We will piece these two things together to give a complete description of the dual space .  We first introduce some notation. When is a locally compact Hausdorff space, we denote by all finite Radon measure on . Radon measure In Exercise it is shown that is a vector space. We put a norm on by setting, for ,   where is the total variation of . That defines is also left to Exercise .   Riesz-Markov-Kakutani Theorem  Riesz-Markov-Kakutani Theorem Let be a locally compact Hausdorff space and let be the space of finite Radon measures on . If , then there is a satisfying   for all and    Take . By Theorem , there are positive linear functionals and such that and . Both and restrict to positive linear functionals on . Thus, by Theorem , there are finite Radon measures and on such that, for ,   Further, and . As is dense in , we have   for all .  Let . Then . Let be the Jordan decomposition of . Then, , and so, by Exercise ,   for all . Rearranging the above equality, we get   for all . By Example ,   Since , by Proposition we also have , and so . Therefore .  We will now prove uniqueness. Suppose also satisfies for all . Let be the Jordan decomposition of . Then, for , two applications of Exercise give   By the uniqueness in Theorem , , and hence .   The following corollary follows immediately from Theorem .   Let be a locally compact Hausdorff space, and let be the finite Radon signed measures on . Let be the map   defined by   for all . Then is an isometric isomorphism.   We can now prove that the Jordan decomposition of a linear functional on is unique, using the uniqueness of the Jordan decomposition for signed measures.   Let be a locally compact Hausdorff space, and let be a linear functional on . If are positive linear functionals on such that and , then and where is the Jordan decomposition of .    Let be positive linear functionals on such that and . By Theorem , there is a finite Radon signed measure , and finite Radon measures and such that , , and ; and for all   Thus, for all ,   Hence, by the uniqueness of from Theorem , . We also have that   Therefore, by Proposition , is the Jordan decomposition of . That is and . As the Jordan decomposition of the signed measure is unique, by Theorem , it follows that and where is the Jordan decomposition of .    The set of natural numbers with the discrete topology is a locally compact Hausdorff space. If is the collection of all sequences which converge to , then . By Exercise , the dual of is ; and by Corollary the dual of is , the space of all finite Radon signed measures on . Thus is isometrically isomorphic .  Explicitly, the maps between and are given as follows: for , the function on subsets of defined by   defines a finite Radon signed measure on . For , we can define a sequence . Then . These two operations are clearly inverses of eachother.    Again, consider the set of natural numbers with the discrete topology. There is a compact Hausdorff space containing as a dense subset such that   The space is called the Stone-\\u{C}ech compactification of . Note that . Thus, by Corollary ,   That is, the dual of is (isometrically isomorphic to) the Radon signed measures on the Stone-\\u{C}ech compactification of .    Let be a locally compact Hausdorff space. Take , and let be the Jordan decomposition of . Let be the finite Radon signed measure such that   from Theorem . Let be the Jordan decomposition of . In Corollary it is shown that and are the unique measures such that   In other words, the Jordan decomposition for linear functionals on gives the Jordan decomposition for finite Radon signed measures on (via the Riesz-Markov-Kakutani Theorem). In this way, the Jordan decomposition for linear functionals can be seen as a special case of the Jordan decomposition for signed measures.    Let be a closed bounded interval on , and let be a right-continuous function of bounded variation on . By Theorem there is a unique Borel signed measure on such that . Let be the linear functional on defined by .  Now let , , and be the Jordan decompositions of , , and respectively. Then, by Proposition ,   and, as discussed in Remark ,   Thus, the Jordan decomposition for linear functionals on recovers the Jordan decomposition for right-continuous functions of bounded variation on .    Riesz's result and Riemann-Stieltjes integration  Riesz gave a description of the dual of , for a closed bounded interval . Riesz described the linear functionals on not in terms of integration with respect to Borel measures on , but in terms of Reimann-Stieltjes integrals. Riemann-Stieltjes integral  Let be an increasing on the closed interval , and let be a continuous function on , and let be a continuous function on . Let be a partition of with   We define the lower Darboux-Stieltjes sum by   and the upper Darboux-Stieltjes sum by   The Riemann-Stieltjes integral of with respect to , Riemann-Stieltjes integral  , is defined as   Note that, if , then the Riemann-Stieltjes integral is the same as the Riemann integral. For arbitrary increasing , the theory of Riemann-Stieltjes integrals aligns closely with that of Riemann integrals.  More generally, if is a function of bounded variation, we can define the Riemann-Stieltjes integral , either by considering sums of the form   for partitions of , and ; or by defining   where is the Jordan decomposition of .  Let be a linear functional on . Riesz constructs a function of bounded variation using . One way to do this, as done in , is to extend the domain of to contain bounded point-wise limits of increasing continuous functions. The function is then defined by   It is then shown that that   for all .  One can show that the function is right-continuous. Thus, by Theorem , there is a Borel signed measure on such that for all . It can be shown that, if is a continuous function on then   Thus   and we recover the measure theoretic description of the dual of .   "
},
{
  "id": "ex-point-evaluation",
  "level": "2",
  "url": "sec-RMK.html#ex-point-evaluation",
  "type": "Example",
  "number": "11.4.1",
  "title": "",
  "body": " Let be a locally compact Hausdorff space, and take any . The point-evaluation map   for all is linear. Further, for ,   Thus is a linear functional on with .  Let be any open neighborhood of . By Urysohn's Lemma, there is a continuous function such that and . Therefore,   and hence .  "
},
{
  "id": "ex-radon-measure-to-functional",
  "level": "2",
  "url": "sec-RMK.html#ex-radon-measure-to-functional",
  "type": "Example",
  "number": "11.4.2",
  "title": "",
  "body": " Let be a locally compact Hausdorff space with Borel sets , and let be a finite Radon measure on . By Corollary , every continuous real-valued function on is a measurable function on . Since is a finite measure, any bounded measurable function on is integrable. Thus, if , then is integrable. Define a linear map from to , by   Note that, if , then   Hence, is a linear functional on and .  Since is a Radon measure, there is an increasing sequence of compact subsets of such that   By Urysohn's Lemma, for each there is a compactly supported positive function on such that   For each ,   Hence, for each ,   Thus   "
},
{
  "id": "sec-RMK-5",
  "level": "2",
  "url": "sec-RMK.html#sec-RMK-5",
  "type": "Remark",
  "number": "11.4.3",
  "title": "",
  "body": " Note that Example is a special case of Example . Indeed, if , and is the Dirac measure at , then   by Exercise .  "
},
{
  "id": "ex-radon-signed-measure-to-functional",
  "level": "2",
  "url": "sec-RMK.html#ex-radon-signed-measure-to-functional",
  "type": "Example",
  "number": "11.4.4",
  "title": "",
  "body": " Let be a finite Radon signed measure on a locally compact Hausdorff space . For each define by   Clearly is linear, by the linearity of integration. Note that,   where the last equality follows from Exercise . Thus, for ,   where the last inequality comes from Exercise . Hence , with  "
},
{
  "id": "sec-RMK-11",
  "level": "2",
  "url": "sec-RMK.html#sec-RMK-11",
  "type": "Definition",
  "number": "11.4.5",
  "title": "",
  "body": " Let be a locally compact Hausdorff space. A linear functional in the dual space of is positive if for all non-negative functions . linear functional positive  "
},
{
  "id": "sec-RMK-12",
  "level": "2",
  "url": "sec-RMK.html#sec-RMK-12",
  "type": "Remark",
  "number": "11.4.6",
  "title": "",
  "body": " Note that, if is a positive linear functional, then   That is, the norm of can be calculated using only non-negative functions, see Exercise  "
},
{
  "id": "sec-RMK-13",
  "level": "2",
  "url": "sec-RMK.html#sec-RMK-13",
  "type": "Example",
  "number": "11.4.7",
  "title": "",
  "body": " The linear functionals described in Example (and Example ) are positive linear functionals. The linear functionals in Example are not necessarily positive.  "
},
{
  "id": "thm-jordan-decomp-functional",
  "level": "2",
  "url": "sec-RMK.html#thm-jordan-decomp-functional",
  "type": "Theorem",
  "number": "11.4.8",
  "title": "Jordan Decomposition Theorem.",
  "body": " Jordan Decomposition Theorem  Jordan Decomposition Theorem for linear functionals Let be a locally compact Hausdorff space and let be a linear functional on . There are positive linear functionals such that   ; and      "
},
{
  "id": "sec-RMK-18",
  "level": "2",
  "url": "sec-RMK.html#sec-RMK-18",
  "type": "Proof",
  "number": "11.4.1",
  "title": "",
  "body": " We will first define on non-negative functions. When with let   As , it follows that for all in . Also, if , then   thus .  We want to show that is linear on the non-negative functions. If and , then . If and , then   Thus   Conversely, if , let and . Then and , and so   Hence   Therefore .  We will now extend to all of . If , then , where is the positive part of , and is the negative part of . Define   Note that, if where , then   and so, by the linearity of on positive functions,   Thus, if . Then   and so . It is straightforward to show that   for all scalars and . Thus is linear. Further, for any ,   Thus and .  Let . Then , and if then   Thus, is positive.  It remains to show that . Since, , it is immediate that   Take . Take non-negative with such that   Let Then, and   Take any with . Then   and so . Thus   Taking the supremum over all with in we get   This holds for all , and hence . It now follows that , as desired.  "
},
{
  "id": "sec-RMK-19",
  "level": "2",
  "url": "sec-RMK.html#sec-RMK-19",
  "type": "Definition",
  "number": "11.4.9",
  "title": "",
  "body": " Let be a locally compact Hausdorff space, and let be a linear functional on . If and are positive linear functionals in such that and , then we call and the Jordan decomposition of . Jordan decomposition of a linear functional  "
},
{
  "id": "sec-RMK-20",
  "level": "2",
  "url": "sec-RMK.html#sec-RMK-20",
  "type": "Remark",
  "number": "11.4.10",
  "title": "",
  "body": " You may have concerns with the use of the word the in the above definition. Uniqueness was never proved in Theorem . Rather than proving uniqueness directly (and justifying the terminology), we will leave this quibble for now. The Jordan decomposition of a linear functional is unique; the uniqueness will be addressed in Corollary .  "
},
{
  "id": "thm-RMK-positive",
  "level": "2",
  "url": "sec-RMK.html#thm-RMK-positive",
  "type": "Theorem",
  "number": "11.4.11",
  "title": "",
  "body": " Let be a locally compact Hausdorff space and let be a positive linear functional on . There is a unique finite Radon measure on such that   for all . Further, .  "
},
{
  "id": "sec-RMK-23",
  "level": "2",
  "url": "sec-RMK.html#sec-RMK-23",
  "type": "Proof",
  "number": "11.4.2",
  "title": "",
  "body": " For the purposes of this proof, we introduce a piece of notation: if is an open set, and satisfies and has compact support inside , we will write .  When is a non-empty open set, define   and define . For arbitrary , define   Note that, if and are open with , then . Hence, if is open, . We will show that is an outer measure whose measurable sets include the Borel sets. We will then show that restricts to a finite Radon measure on the Borel sets satisfying   for all .  Let be a collection of open sets, and let be an open set satisfying   Take with , and let be the compact support of . Since is compact, there is an , such that   By Proposition~{prop: decomp of unity} there are functions , such that for each , and   for all . Hence , and for . Hence   Therefore,   It follows that if , then   Hence, by Theorem , is an outer measure.  To show that Borel sets a -measurable, it suffices to show that every open is -open. Fix open . Take an open set , and . Fix . Take , such that Let be the compact support of . Then is closed, and so is open. Take , such that Then , and   Hence . As is subadditive, it follows that . Now, suppose is an arbitrary set with . Fix . There is an open set , with , such that   Using that is open,   As this holds for all , it folloows that , and hence . We have thus shown that all open subsets of are -measurable. Therefore all Borel sets are -measurable.  Let be the restriction of to the Borel sets. We show that is a finite Radon measure. That is outer regular follows immediately from the definition of . It remains to show that for all compact , and that is inner regular on open sets. Fix a compact set , and fix non-negative such that for all (note that such an exists by Urysohn's Lemma). For let   Then and . If , then   Since is a positive linear functional, it follows that   Taking the supremum over all , we have   As this holds for all , it follows that   Now take any open set with . By Urysohn's Lemma, there is a such that for all . Thus   Since is outer regular on , it follows that   Hence . Take now any open set . Take any , and choose such that . Let be the compact support of . Note, if and for all , then , and therefore . Thus, by , . We have shown that if , then there is a compact set , such that . It follows that   That is, is inner regular on . Thus is a Radon measure. Finally,   Hence is a finite Radon measure, and .  We will now show that   for all . Fix with and fix . For , let   Let be the compact support of . For , let   Equivalently,   Then for , and .  For each ,   Note, if for an open set , then . Thus, . Hence, since is outer regular and by ,   Since , we have that   Hence   Taking the limit as , we see that   As every element of is a linear combination of norm one positive functions, we have for all , as desired.  It remains to show that is unique. Suppose is a finite Radon measure on that also satisfies for all . Take an open set . If , then   Also, if is compact, then by Urysohn's lemma there is an such that for all . Thus,   Since is inner regular on , it follows that   Hence on all open subsets of . As and are outer regular on all Borel sets, it follows that .  "
},
{
  "id": "thm-RMK",
  "level": "2",
  "url": "sec-RMK.html#thm-RMK",
  "type": "Theorem",
  "number": "11.4.12",
  "title": "Riesz-Markov-Kakutani Theorem.",
  "body": " Riesz-Markov-Kakutani Theorem  Riesz-Markov-Kakutani Theorem Let be a locally compact Hausdorff space and let be the space of finite Radon measures on . If , then there is a satisfying   for all and  "
},
{
  "id": "sec-RMK-29",
  "level": "2",
  "url": "sec-RMK.html#sec-RMK-29",
  "type": "Proof",
  "number": "11.4.3",
  "title": "",
  "body": " Take . By Theorem , there are positive linear functionals and such that and . Both and restrict to positive linear functionals on . Thus, by Theorem , there are finite Radon measures and on such that, for ,   Further, and . As is dense in , we have   for all .  Let . Then . Let be the Jordan decomposition of . Then, , and so, by Exercise ,   for all . Rearranging the above equality, we get   for all . By Example ,   Since , by Proposition we also have , and so . Therefore .  We will now prove uniqueness. Suppose also satisfies for all . Let be the Jordan decomposition of . Then, for , two applications of Exercise give   By the uniqueness in Theorem , , and hence .  "
},
{
  "id": "cor-RMK-Banach",
  "level": "2",
  "url": "sec-RMK.html#cor-RMK-Banach",
  "type": "Corollary",
  "number": "11.4.13",
  "title": "",
  "body": " Let be a locally compact Hausdorff space, and let be the finite Radon signed measures on . Let be the map   defined by   for all . Then is an isometric isomorphism.  "
},
{
  "id": "cor-jordan-unique",
  "level": "2",
  "url": "sec-RMK.html#cor-jordan-unique",
  "type": "Corollary",
  "number": "11.4.14",
  "title": "",
  "body": " Let be a locally compact Hausdorff space, and let be a linear functional on . If are positive linear functionals on such that and , then and where is the Jordan decomposition of .  "
},
{
  "id": "sec-RMK-34",
  "level": "2",
  "url": "sec-RMK.html#sec-RMK-34",
  "type": "Proof",
  "number": "11.4.4",
  "title": "",
  "body": " Let be positive linear functionals on such that and . By Theorem , there is a finite Radon signed measure , and finite Radon measures and such that , , and ; and for all   Thus, for all ,   Hence, by the uniqueness of from Theorem , . We also have that   Therefore, by Proposition , is the Jordan decomposition of . That is and . As the Jordan decomposition of the signed measure is unique, by Theorem , it follows that and where is the Jordan decomposition of .  "
},
{
  "id": "sec-RMK-35",
  "level": "2",
  "url": "sec-RMK.html#sec-RMK-35",
  "type": "Example",
  "number": "11.4.15",
  "title": "",
  "body": " The set of natural numbers with the discrete topology is a locally compact Hausdorff space. If is the collection of all sequences which converge to , then . By Exercise , the dual of is ; and by Corollary the dual of is , the space of all finite Radon signed measures on . Thus is isometrically isomorphic .  Explicitly, the maps between and are given as follows: for , the function on subsets of defined by   defines a finite Radon signed measure on . For , we can define a sequence . Then . These two operations are clearly inverses of eachother.  "
},
{
  "id": "ex-dual-of-ell-inf",
  "level": "2",
  "url": "sec-RMK.html#ex-dual-of-ell-inf",
  "type": "Example",
  "number": "11.4.16",
  "title": "",
  "body": " Again, consider the set of natural numbers with the discrete topology. There is a compact Hausdorff space containing as a dense subset such that   The space is called the Stone-\\u{C}ech compactification of . Note that . Thus, by Corollary ,   That is, the dual of is (isometrically isomorphic to) the Radon signed measures on the Stone-\\u{C}ech compactification of .  "
},
{
  "id": "rem-jordan-comparison",
  "level": "2",
  "url": "sec-RMK.html#rem-jordan-comparison",
  "type": "Remark",
  "number": "11.4.17",
  "title": "",
  "body": " Let be a locally compact Hausdorff space. Take , and let be the Jordan decomposition of . Let be the finite Radon signed measure such that   from Theorem . Let be the Jordan decomposition of . In Corollary it is shown that and are the unique measures such that   In other words, the Jordan decomposition for linear functionals on gives the Jordan decomposition for finite Radon signed measures on (via the Riesz-Markov-Kakutani Theorem). In this way, the Jordan decomposition for linear functionals can be seen as a special case of the Jordan decomposition for signed measures.  "
},
{
  "id": "sec-RMK-38",
  "level": "2",
  "url": "sec-RMK.html#sec-RMK-38",
  "type": "Remark",
  "number": "11.4.18",
  "title": "",
  "body": " Let be a closed bounded interval on , and let be a right-continuous function of bounded variation on . By Theorem there is a unique Borel signed measure on such that . Let be the linear functional on defined by .  Now let , , and be the Jordan decompositions of , , and respectively. Then, by Proposition ,   and, as discussed in Remark ,   Thus, the Jordan decomposition for linear functionals on recovers the Jordan decomposition for right-continuous functions of bounded variation on .  "
},
{
  "id": "real-analysis-6-3-7",
  "level": "1",
  "url": "real-analysis-6-3-7.html",
  "type": "Exercises",
  "number": "11.5",
  "title": "Exercises",
  "body": "  Prove Proposition . That is, show that the operator norm is a norm on the dual space , where is a normed vector space.  Further show that   for all    Prove Theorem for the case . That is, assuming that is a -finite measure space, show that if that there is a with such that   for all .    Let be a non-empty set, and let be the counting measure on the -algebra of all subsets of . We will show that by the same isomorphism used in Theorem .   For each , let . Show that is a countable set, and that    Take . Define  for all . Show that is a linear functional on with . (You should be able to prove this directly without reference to the proof of Lemma ).    Take . For each , let be the function  Show that with , for all .  Define a function on by . Show that . Show that .       Let be an uncountable set, and let be the counting measure on the -algebra of all subsets of . Let be the restriction of to the -algebra of all subsets of which are either countable or cocountable (see Exercise for more on .) We will show that is not . Exercise should be completed before this exercise.   Show that .   Show that a simple function on must be constant on a cocountable set. Conclude that .   Show that the map is not an isomorphism from to .      { } Denote by all sequences of real numbers which converges to ; and for each . Note that .   Show that is a Banach space with the -norm.   Show that the collection of sequences which are for all but finitely many terms are dense in .   Show that is separable.      { } dual of Denote by all sequences of real numbers which converges to ; and for each , denote by the sequence which is in the th position, and in all other positions.   Take . Show that the map  defines a linear functional on , with .    Take . For each , let . Show that and that . (HINT: consider where ).   Show that the map is an isometric linear bijection from to .       Show that, if , then the map defined by  for all is a linear functional on .    Take any . For each , let , where is defined as in Exercise . Show that .   Take and let be as in part (ii). Show that for all .   Show that if , then there is an and a with such that       Let be a measurable space. A finitely additive signed measure signed measure finitely additive on is a function such that   ; and   when are disjoint sets in .    A finitely additive signed measure is bounded signed measure bounded finitely additive if    Show that the collection of all bounded finitely additive signed measures on forms a vector space.   If is a bounded finitely additive signed measure, let . Show that is a norm on the vector space of bounded finitely additive signed measures on .      Let be a measurable space and let be a bounded finitely additive signed measure on .   Let be a simple function, where are distinct, and are disjoint. Define by  Show that     Let be a bounded, measurable function on . Let be a sequence of simple functions with for all , which converge uniformly to (Such a sequence exists by Exercise ). Define by  Show that is independent on the choice of sequence .       Let be a measure space and let be the normed vector space of all bounded finitely additive signed measures on which are absolutely continuous with respect to . That is, is the collection of all bounded finitely additive signed measures such that whenever .   Show that  for all and .    For , define by  Show that is a bounded linear functional on such that    Let be a bounded linear functional on . Define by for all . Show that and that   Show that the map defined by is a bijective linear map with That is, conclude    The above result is known as the Kantorovitch Representation Theorem. Kantorovitch Representation Theorem    Prove Proposition . That is, show that is compact, if and only if whenever is a collection of closed sets satisfying for any , then   (HINT: Note that if and only if is an open cover of .)    Let be a Borel measure on . Show that is inner regular on all open subsets . (HINT: consider the three cases, (i) ; (ii) and is a disjoint union of finitely many open intervals; and (iii) and is a disjoint union of infinitely many open intervals.)    Let be a locally compact Hausdorff space. Show that is dense in .    Let be a locally compact Hausdorff space and let be a positive linear functional on . Show that   If is compact and is a positive linear functional on , show that .    Let be a locally compact Hausdorff space and let be all finite Radon signed measures on .   Show that is a vector space under the operations  for and .    Show that defines a norm on , where  for all . (Recall, that is the total variation of .)      "
},
{
  "id": "exer-operator-norm",
  "level": "2",
  "url": "real-analysis-6-3-7.html#exer-operator-norm",
  "type": "Exercise",
  "number": "11.5.1",
  "title": "",
  "body": " Prove Proposition . That is, show that the operator norm is a norm on the dual space , where is a normed vector space.  Further show that   for all  "
},
{
  "id": "exer-riesz-rep-p-1",
  "level": "2",
  "url": "real-analysis-6-3-7.html#exer-riesz-rep-p-1",
  "type": "Exercise",
  "number": "11.5.2",
  "title": "",
  "body": " Prove Theorem for the case . That is, assuming that is a -finite measure space, show that if that there is a with such that   for all .  "
},
{
  "id": "exer-yes-dual",
  "level": "2",
  "url": "real-analysis-6-3-7.html#exer-yes-dual",
  "type": "Exercise",
  "number": "11.5.3",
  "title": "",
  "body": " Let be a non-empty set, and let be the counting measure on the -algebra of all subsets of . We will show that by the same isomorphism used in Theorem .   For each , let . Show that is a countable set, and that    Take . Define  for all . Show that is a linear functional on with . (You should be able to prove this directly without reference to the proof of Lemma ).    Take . For each , let be the function  Show that with , for all .  Define a function on by . Show that . Show that .     "
},
{
  "id": "exer-not-dual",
  "level": "2",
  "url": "real-analysis-6-3-7.html#exer-not-dual",
  "type": "Exercise",
  "number": "11.5.4",
  "title": "",
  "body": " Let be an uncountable set, and let be the counting measure on the -algebra of all subsets of . Let be the restriction of to the -algebra of all subsets of which are either countable or cocountable (see Exercise for more on .) We will show that is not . Exercise should be completed before this exercise.   Show that .   Show that a simple function on must be constant on a cocountable set. Conclude that .   Show that the map is not an isomorphism from to .    "
},
{
  "id": "exer-c0",
  "level": "2",
  "url": "real-analysis-6-3-7.html#exer-c0",
  "type": "Exercise",
  "number": "11.5.5",
  "title": "",
  "body": " { } Denote by all sequences of real numbers which converges to ; and for each . Note that .   Show that is a Banach space with the -norm.   Show that the collection of sequences which are for all but finitely many terms are dense in .   Show that is separable.    "
},
{
  "id": "exer-dual-of-c0",
  "level": "2",
  "url": "real-analysis-6-3-7.html#exer-dual-of-c0",
  "type": "Exercise",
  "number": "11.5.6",
  "title": "",
  "body": " { } dual of Denote by all sequences of real numbers which converges to ; and for each , denote by the sequence which is in the th position, and in all other positions.   Take . Show that the map  defines a linear functional on , with .    Take . For each , let . Show that and that . (HINT: consider where ).   Show that the map is an isometric linear bijection from to .    "
},
{
  "id": "exer-dual-of-linf",
  "level": "2",
  "url": "real-analysis-6-3-7.html#exer-dual-of-linf",
  "type": "Exercise",
  "number": "11.5.7",
  "title": "",
  "body": "  Show that, if , then the map defined by  for all is a linear functional on .    Take any . For each , let , where is defined as in Exercise . Show that .   Take and let be as in part (ii). Show that for all .   Show that if , then there is an and a with such that     "
},
{
  "id": "exer-norm-on-bfa",
  "level": "2",
  "url": "real-analysis-6-3-7.html#exer-norm-on-bfa",
  "type": "Exercise",
  "number": "11.5.8",
  "title": "",
  "body": " Let be a measurable space. A finitely additive signed measure signed measure finitely additive on is a function such that   ; and   when are disjoint sets in .    A finitely additive signed measure is bounded signed measure bounded finitely additive if    Show that the collection of all bounded finitely additive signed measures on forms a vector space.   If is a bounded finitely additive signed measure, let . Show that is a norm on the vector space of bounded finitely additive signed measures on .    "
},
{
  "id": "exer-bfa-integral",
  "level": "2",
  "url": "real-analysis-6-3-7.html#exer-bfa-integral",
  "type": "Exercise",
  "number": "11.5.9",
  "title": "",
  "body": " Let be a measurable space and let be a bounded finitely additive signed measure on .   Let be a simple function, where are distinct, and are disjoint. Define by  Show that     Let be a bounded, measurable function on . Let be a sequence of simple functions with for all , which converge uniformly to (Such a sequence exists by Exercise ). Define by  Show that is independent on the choice of sequence .     "
},
{
  "id": "exer-kantor",
  "level": "2",
  "url": "real-analysis-6-3-7.html#exer-kantor",
  "type": "Exercise",
  "number": "11.5.10",
  "title": "",
  "body": " Let be a measure space and let be the normed vector space of all bounded finitely additive signed measures on which are absolutely continuous with respect to . That is, is the collection of all bounded finitely additive signed measures such that whenever .   Show that  for all and .    For , define by  Show that is a bounded linear functional on such that    Let be a bounded linear functional on . Define by for all . Show that and that   Show that the map defined by is a bijective linear map with That is, conclude    The above result is known as the Kantorovitch Representation Theorem. Kantorovitch Representation Theorem  "
},
{
  "id": "real-analysis-6-3-7-11",
  "level": "2",
  "url": "real-analysis-6-3-7.html#real-analysis-6-3-7-11",
  "type": "Exercise",
  "number": "11.5.11",
  "title": "",
  "body": " Prove Proposition . That is, show that is compact, if and only if whenever is a collection of closed sets satisfying for any , then   (HINT: Note that if and only if is an open cover of .)  "
},
{
  "id": "exer-Borel-on-R-Radon",
  "level": "2",
  "url": "real-analysis-6-3-7.html#exer-Borel-on-R-Radon",
  "type": "Exercise",
  "number": "11.5.12",
  "title": "",
  "body": " Let be a Borel measure on . Show that is inner regular on all open subsets . (HINT: consider the three cases, (i) ; (ii) and is a disjoint union of finitely many open intervals; and (iii) and is a disjoint union of infinitely many open intervals.)  "
},
{
  "id": "real-analysis-6-3-7-13",
  "level": "2",
  "url": "real-analysis-6-3-7.html#real-analysis-6-3-7-13",
  "type": "Exercise",
  "number": "11.5.13",
  "title": "",
  "body": " Let be a locally compact Hausdorff space. Show that is dense in .  "
},
{
  "id": "exer-norm-of-positive",
  "level": "2",
  "url": "real-analysis-6-3-7.html#exer-norm-of-positive",
  "type": "Exercise",
  "number": "11.5.14",
  "title": "",
  "body": " Let be a locally compact Hausdorff space and let be a positive linear functional on . Show that   If is compact and is a positive linear functional on , show that .  "
},
{
  "id": "exer-radon-vec-space",
  "level": "2",
  "url": "real-analysis-6-3-7.html#exer-radon-vec-space",
  "type": "Exercise",
  "number": "11.5.15",
  "title": "",
  "body": " Let be a locally compact Hausdorff space and let be all finite Radon signed measures on .   Show that is a vector space under the operations  for and .    Show that defines a norm on , where  for all . (Recall, that is the total variation of .)     "
},
{
  "id": "sec-nowhere-diff",
  "level": "1",
  "url": "sec-nowhere-diff.html",
  "type": "Section",
  "number": "A.12.1",
  "title": "Nowhere differentiable functions",
  "body": " Nowhere differentiable functions  In 1872, Karl Weierstrass Weierstrass, Karl gave an example of a real valued function which is nowhere differentiable. This put an end to several decades of attempts by mathematicians to determine to what extent continuity determined differentiability. Whilst nowhere differentiable functions were difficult to discover, they are, in fact, very common. If we put the norm on , then the nowhere differentiable functions form a dense subset in . Further, there is a natural probability measure on (the classical Wiener measure) with which the nowhere differentiable functions have measure .  Before we begin, we should discuss what it means for a function to be differentiable. Let be a function whose domain includes a point and an open interval containing . The derivative at the point is defined as   when the limit exists. If the limit does not exist, or if we say is not differentiable at .  Thus, there is some ambiguity in the literature on what it means for a function to be nowhere differentiable. The Weierstrass function in Section is nowhere differentiable in our sense. That is,   does not exist at any . The example in Section is nowhere differentiable in the sense of the more restrictive sense of the derivative:   is either , or the limit does not exist at each .   The Weierstrass function  In this section we study the Weierstrass function, introduced by Weierstrass in 1872. This is, perhaps, the most historically significant example of a nowhere differentiable function: whilst it was not the first example ever written down, it was the first widely known example. For our discussion we will closely follow Weierstrass's own description of the function, see e.g. . The rough idea is to create a function that oscillates wildly at every point.  Fix an odd integer and real value with such that   Define, for all , Weierstrass function   We call the Weierstrass function . A straightforward application of the Weierstrass -test shows that is uniformly convergent, and hence continuous.  Now fix any . For each positive integer , there is an integer such that   Let We define values, and by   Then   and   Thus Further,  Now,   Fix . Using the trigonometric identity   we have   It follows that   Since is an odd number, we have   Hence   For each ,   Further, since , . Hence   Putting all of this together, there is a and such that   By a similar analysis, there is a and such that   Since we have assumed ,   Thus, and have opposite signs for each . Now, since   it follows that is not differentiable at .    Takagi's example  We present now an example of a function which has does not have a finite derivative at any point. Unlike the Weierstrass function discussed in Section , this function does have infinite derivative at some points (rather than the derivative not being defined). This example was first described by Takagi in 1903. It can be found in , see also . A similar function was independently discovered by Van Der Waerden in 1930 . Riesz and Sz.-Nagy's text begins with a presentation of Van Der Waerden's example.  We present Takagi's example because it is more intuitive than the Weierstrass function. The simplest example of a function not differentiable at a point is . This function is not differentiable at ; there is a sharp point at . The idea behind Takagi's example is to create a function made from a series of increasingly many `sharp points'.  Let   where is the floor function (i.e. rounded down to the nearest integer) and is the ceiling function (i.e. rounded up to the nearest integer). The function is not differentiable at any point where . At all other points,      Define a function on the closed interval by   The series is uniformly convergent by the Weierstrass -test; and hence is continuous.     Takagi's example in .    Fix . We can write as a series   where each Note that this series expression may not be unique, e.g.   In these circumstances, we choose the finite sum instead of the infinite. Note that, for each ,   For each let   That is, is the number of ones in the list , and is the number of zeros in the list .  Suppose . Let Then, for ,   Let   Then   For , if , , and , let Then, again   We these values for   we can find a subsequence of such that   either does not exist, or is Thus does not have a finite derivative at any point.  There is nothing special about the role of in this example. Van der Waerden used base 10 for his example:   Similarly analysis can be done for other bases.     Van der Waerden's example has the same basic idea as Takagi's example from .     "
},
{
  "id": "fig-Tak1",
  "level": "2",
  "url": "sec-nowhere-diff.html#fig-Tak1",
  "type": "Figure",
  "number": "A.12.1.1",
  "title": "",
  "body": "  "
},
{
  "id": "fig-Tak2",
  "level": "2",
  "url": "sec-nowhere-diff.html#fig-Tak2",
  "type": "Figure",
  "number": "A.12.1.2",
  "title": "",
  "body": "   Takagi's example in .   "
},
{
  "id": "fig-Tak3",
  "level": "2",
  "url": "sec-nowhere-diff.html#fig-Tak3",
  "type": "Figure",
  "number": "A.12.1.3",
  "title": "",
  "body": "   Van der Waerden's example has the same basic idea as Takagi's example from .   "
},
{
  "id": "sec-diff-ae",
  "level": "1",
  "url": "sec-diff-ae.html",
  "type": "Section",
  "number": "A.12.2",
  "title": "Differentiable almost everywhere functions",
  "body": " Differentiable almost everywhere functions  The examples presented in this section illustrate further the stark difference between continuity and differentiability. Further, they show the strength of the Lebesgue integral over the Riemann integral. The examples below are all continuous functions with defined (almost) everywhere, but is not Riemann integrable. However, in these examples will be Lebesgue integrable.   Schwarz's example  Schwarz published the following example in 1873 .  Schwarz presented this function in order to show that it is possible for a continuous function to be differentiable on some points, but for to be undefined on a dense set. Thus, differentiability is not a local property. It was perhaps the first such example. This example served to dispute earlier conjectures on the nature of differentiability. Explicitly, Schwarz gives exhibits a continuous increasing function on which is not differentiable on any dyadic rational, i.e. is not differentiable on any rational of the form , where are integers.  Before we give the example, we first introduce a continuous function on . Define by   where is the floor function (i.e. rounded down to the nearest integer).     The function used to construct Schwarz's example in    The function is continuous on all of , and is differentiable on all non-integer values. Indeed, it is not hard to show for a   If then , and so, if then   Thus, for ,   On the other hand, for and   and so, by an application of L'H\\^{o}pital's rule,   Thus is not differentiable on : the right-sided derivative is and the left-sided derivative is on .  We now define the function by   Note that is uniformly convergent on all compact subsets of , and so is continuous. This can be shown, e.g., using the inequality A better, indeed the best, linear upper bound for is , but there is no need for precision here. together with the Weierstrass -test.  We will now study . The basic idea is that, since is not differentiable on the integers, is not differentiable on dyadic rationals.  Suppose for some non-negative integers and . If , then   Hence   Taking still, we now consider the left sided derivative. Consider . For , is an integer. Note, for any integer and , if , then and so   Thus, for   By the Weierstrass -test we see that   is uniformly convergent for Take the limit as we get a left-sided derivative as   The above set shows that there is a dense set on which is not differentiable. Since is increasing and continuous, is defined almost everywhere, by Corollary . Alternatively, a similar analysis to the above can explicitly show that exists for when is not a dyadic rational.    A function that is not differentiable on a prescribed set  Corollary tells us that if is continuous of bounded variation then is defined almost everywhere. We will now show that given with , there is a continuous function of bounded variation which is not differentiable at any point in , but differentiable at all other points. I believe this construction is due to Riesz and Sz.-Nagy; it can be found in their book .  Let be a closed interval, and let be a set with Lebesgue measure . By Exercise , there is a countable family of open intervals in such that, for each there is an infinite subsequence of natural numbers such that for each and   Fix such a collection and define a function on by   where is the length function on intervals in .   "
},
{
  "id": "fig-Schwarz1",
  "level": "2",
  "url": "sec-diff-ae.html#fig-Schwarz1",
  "type": "Figure",
  "number": "A.12.2.1",
  "title": "",
  "body": "   The function used to construct Schwarz's example in   "
},
{
  "id": "sec-diff-bounded",
  "level": "1",
  "url": "sec-diff-bounded.html",
  "type": "Section",
  "number": "A.12.3",
  "title": "Differentiable functions with bounded derivative",
  "body": " Differentiable functions with bounded derivative  In this section we will look at examples of functions that are differentiable everywhere, with bounded derivative, but for which the derivative is not Riemann integrable. By Exercise these functions will be absolutely continuous. Hence, the examples in this example do not satisfy the conclusion of the Fundamental Theorem of Calculus, Theorem (which uses Riemann integration), but the Fundamental Theorem of Lebesgue Integration, Theorem , will apply.   Volterra's function  In this section we will present Volterra's function, introduced by Voltera in 1881 . This example was likely had an influence on Lebesgue; it is cited in Lebesgue's 1902 thesis . Volterra presented this example in answer to a question of Dini on when a function can be described as an integral of its derivative. Our presentation owes something to Stromberg's text .  Consider the function defined by   The function is differentiable everywhere, with derivative   Whilst is defined everywhere (and is bounded), is not continuous at .     The function used to construct Volterra's function in Section .    The idea behind the Volterra function is to create a function which behaves on some suitably large set the way behaves at . Before defining , we must first introduce the desired set.  We will construct a set called the Smith-Volterra-Cantor set. Smith-Volterra-Cantor set This construction is very similar to the construction of the Cantor set in, Example . The difference is, instead of removing the middle third from intervals, we will remove the middle quarter.  Let . Create be removing the middle quarter from . Thus   Create be reomving the middle quarter from each of the two intervals in . Thus   Continue in this manner to create a sequence of closed sets . The {Smith-Volterra-Cantor} set Smith-Volterra-Cantor set is defined as   Like the Cantor set , is nowhere dense. That is, does not contain any intervals as subsets. However, unlike the Cantor set, has positive Lebesgue measure. Indeed, if then   Thus  The Smith-Volterra-Cantor set is closed, hence is open. Let , where the intervals are disjoint. We define Volterra's function on as follows. Volterra's function For , let . For each , let For let   An illustration of Volterra's function is given in Figure . Since is a continuous function, and , is a continuous function.     Volterra's function.    By construction, on each interval , is a bounded continuous function.  Take now and fix . If , then   Otherwise, , i.e. for some . Thus for some natural number and real . If , then   If , then   Finally, if , then for some , and . Thus   It follows that   One can similarly show that   and hence for .  Hence is defined on all of Further, since for   That is, is bounded.  Fix now . For each , Hence, there is an such that As converges to , and does not converge to , is not continuous at any point in .  Note that since is continuous and is bounded, is absolutely continuous by Exercise . Hence is Lebesgue integrable. However, since the set of discontinuities of has Lebesuge measure , it follows from Theorem that is not Riemann integrable.    Simpler example   "
},
{
  "id": "fig-Volterra1",
  "level": "2",
  "url": "sec-diff-bounded.html#fig-Volterra1",
  "type": "Figure",
  "number": "A.12.3.1",
  "title": "",
  "body": "   The function used to construct Volterra's function in Section .   "
},
{
  "id": "fig-Volterra2",
  "level": "2",
  "url": "sec-diff-bounded.html#fig-Volterra2",
  "type": "Figure",
  "number": "A.12.3.2",
  "title": "",
  "body": "   Volterra's function.   "
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
  "type": "References",
  "number": "",
  "title": "References",
  "body": "  Agler, Jim, McCarthy, John E.  Pick interpolation and {H  2002  44  American Mathematical Society, Providence, RI     Allaart, Pieter C., Kawamura, Kiko  The {T  Real Anal. Exchange  2011\/12  37  1     Blass, Andreas  Existence of bases implies the axiom of choice  Axiomatic set theory ({B  1984  31  Amer. Math. Soc., Providence, RI     Dini, U.  Fondamenti Per La Teorica Delle Funzioni Di Variabili Reali  1878    Dudley, R. M.  Real analysis and probability  2002  74  Cambridge University Press, Cambridge     Folland, Gerald B.  Real analysis  1999  John Wiley & Sons, Inc., New York     Fremlin, D.H.  Measure Theory  II  https:\/\/www1.essex.ac.uk\/maths\/people\/fremlin\/mt.htm    Riesz, Frigyes, Sz.-Nagy, B\\'ela  Functional analysis  1990  Dover Publications, Inc., New York     Lebesgue, Henri  Int{\\'e  Annali di Matematica Pura ed Applicata (1898-1922)  1902  7  1  Springer     Riesz, Frigyes  Sur les op\\'{e  Comptes rendus hebdomadaires des s\\'{e  1909  149     Riesz, Frigyes  Sur les op\\'{e  2015    Royden, H.L., Fitzpatrick, P.M.  Real Analysis  2017  Pearson    Schwarz, HA  Neues Beispiel einer stetigen, nicht differentiirbaren Funktion  1874  Schaffhausen    Stromberg, Karl R.  Introduction to classical real analysis  1981  Wadsworth International, Belmont, CA     Takagi, Teiji  Collected papers  2014  Springer, Heidelberg     Thim, Johan  Continuous nowhere differentiable functions ({D  2003    Classics on fractals  2004  Westview Press. Advanced Book Program, Boulder, CO     van der Waerden, B. L.  Ein einfaches {B  Math. Z.  1930  32  1     Volterra, Vito  Sui principi del calcolo integrale  Opere matematiche: memorie e note\/Vito Volterra  1881  1  Accademia Nazionale dei Lincei     Weierstrass, Karl  Mathematische {W  1967  Georg Olms Verlagsbuchhandlung, Hildesheim; Johnson Reprint Corp., New York     Willard, Stephen  General topology  2004  Dover Publications, Inc., Mineola, NY    "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
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
