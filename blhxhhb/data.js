let anshan2 = {
	width: 37,
	height: 22,
	colors: {
		'A': "#312829",
		'B': "#FFFFFF",
		'C': "#FFD373",
		'D': "#73FFAD",
		'E': "#7382FF",
		'F': "#F7695A",
		'G': "#FFD7C6",
		'Z': "#B5AEA5"
	},
	patterns: [
		"FCFFFCCFFFFCFFBAEEEEAAAAAAAAAAAAAAZEEAFCFFFFFFFCFBBAZAAEAAAAAAAAAAAAABBBZEZAFAAAAAAAFBAAZZZZZAAAAAAAAAAAAABBCBZZZAACCBBCCAAZZZZZZAAAAAZAZCACAABBCCBBZZZZAAAAAAZZZZZZZZAZAAAAAAAAAAABBBBBBZZZAAAZAZZZZZZZZZZAAAZAAAAAAAZAAABBEAZZAGGAAAAZZZZZZZZZAAAZAAAAAAAGZAZAEFFZAGGACBBCAZZZZZZZZAAZGGGGGGGGGGAAAAFAZAAAAAAAAAAAZZZZZZAAAAAAGGGGAAAAGAAFAAFBCFFBCFBCBAZZZZZAAGAAAGGGGGAAAGAAFFFFCFFFFFCFFCBAZZZAZAGAABGGGGGAABGAGAFFCFFFFFFFCFFCBAZZAZAGAAAGGGGGAAAGGGCFFCFFFFFFFCFFFCBAAAAGGGGGGGGGGGGGGGGCAFCFFFCFFFCFFFCABAAAGGGGGGGGGGGGGGAAFACFFFCFCFFFCFFCABBBAAGGGGGGAGGGGGAAAFECFFFFCFFFFCFFFCABBBZAAGGGGGGGGAAAAAAECFFFCCCFFFCFFFCABBBBZAAAAEEZEEAAAAAAECFCFFCFFCFCFFFCABBBBCBGABCEECCZAAAAAECFFCFCFCFFCFFFCAZBBCBGABBEECBBEZZAAAACZFFCCCFFFCZFFCAAZZCGGBEEGGECBBEGGAAAZCZFFFFFFCZFFFAZZAAAAABCEEECBBBEGGBAZZCZFFFFFFCZFAAZZZZZAAABBCCCBBBBABBZAZ",
		"ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZAACCBZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZACCBZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZAAACCBBZZZZZZZZZZZZZZZZZZZZZZZZZZZZAACCCCCCCBZZZZZZZZZBZZZZZZZZZZZZZZZZACCCCCCCCCCBZZZZZZZZZCZZZZZZZZZZZZZZACCCCCCCCCCCCBZZZZZZZZBZZZZBZZZZZZZZACCCCACCCCCCCACBZZZZBZZZCZZCZZZZZZZZZACCCCCACCCCCACCBZZZZZCZZZZZBZZZZZZZZACCCCCCCACCCACCCCBZZZZZBCZZBZZZZZZZZACCCCCCAACCCCCAACCBZZZZZZZZCZZZZZZZZACCCCCZZCCCCFFCCCZCBZZZZZZZCZZZZZZZZACCCCCCCCCCCCCCCCCCCAZZZAZBBBBZZZZZZZAAACCCCCCCCCCCCCCCCCCAAAZZFFFFAZZZZZZZZACCCCCCCCCCCCCCCCCCCAZZZFCCCAZZZZZZZZACCCCCCCCCCCCCCCCCAAZZZZFFFFAZZZZZZZZACCCCCCCCCCCCCCCCCAZZZZZFFFFAZZZZZZZZACCCCCCCCCCCCCCCCAZZZZZFFFFFAZZZZZZZZACCCCCCCCCCCCCCCCAZZZZZFFFFFAZZZZZZZZZACCCCCCCCCCCCCCCAZZZZZFFFFAZZZZZZZZZZACCCCCCCCCCCCCCAZZZZZZFFFFAZZZZZZZZZZZACCCCCCCCCCCCAZZZZZZZFCCCAZZZZZZ",
		"ZZZZZZZZZZZZZZZZZZZZZAAZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZAAAAAAAZZZZZZZZZZZAAAAAAZZZZZZZZZBBAABBBBBAAAABBAZZAAAAFFFCFCAZZZZZZZBCCABAAAAABBAACCCAZFFFFFFFCFCAZZZZZAACCAAAAAAAAAAAAACCAAFFFFFFAAAAAZZZZAAACAAAACACACAAAAAACZAAAAAAAZCAZZZZZAAAZAAAAAAACACAAAAAAAAZZZZZZZFCAZZZZAAZZZACAAGAAAAAAAAACAAAZFFFFFFFCAZZZAZZZZZACAAGGAAAAAGAACAAAZFFFFAFFFCAZZAZZZZZAAAAAAAAAAAAGAAAAAZFAFAAAFFCAZZZAZZZAAAAAAFGGGGAFGAAAAAZFAFFZAFFCAZZZAZAAZAAAGFBGGGGFBGGAAAZAAAZAAAAFCAZZZZAZZZAAAGFFGGGGFFGGAAAZAFAFFAZFFCAZZZZZZZZAAAGGGGGGGGGGGAAAZZFAFAFAAFCAZAZZZZZZZAAAGGGGFGGGGAAAZZZFFFFFFFFFCAGAZZAAAAAGGGGGGGGGGGGAZZZZFFFZAAAFFCAGGAABBBBBAAZZZACCAAZZZZZZZFFFAFAFFFCAGGAAABBBBBBAAAEAAAAAAZZZZZFFFAAAAFFCAAGAAAZBBBBBBEEEEEEEBBAZZZZCFFFFAFFFCAZAAAAAZZZZZZBCCCCGCCBBAAZZCFAAFAFAFCAZZAAAAAAAAAAEEBBBCBBZBBBAACFFFFFFFFCAZZZZZZZZZZZZAEZBBBBZEABBBB",
		"ZZZZZZZZZZZZZZAAZZZZZZZZZZZZZZZZZZZZZZZZZZZZAAAAAAAZZZZZZZZZZZZZZZZZZZZZZZZZABBAAAABBBBBAABBZZZZZZZZZAAAAAAZZZZZACCCAABBAAAAABACCBZZZZZZZACFCFFFAAAAAACCAAAAAAAAAAAAACCAAZZZZZACFCFFFFFFFAZCAAAZAZFAFAFAAACCAAAZZZZAAAAAFFFFFFZAAAZAZZZFAFAAAAAACZAAAZZZZZACZAAAAAAZAAABZZAAAAAAAGAAFAZZZAAZZZZACFZZZZZZZAAABAAGAAAAAGGAAFAZZZZZAZZZACFFFFFFFZAAAAAGAAAAAAAAAAAAZZZZZAZZACFFFFFFFFZAAAAAGAFGGGGAFAAAAAZZZAZZZACFFAFFZAAZAAAAGGFBGGGGFBGAAAZAAZAZZZACFAAAFAFFZZAAAGGFFGGGGFFGAAAZZZAZZZZACFZAZFAAAAZAAAGGGGGGGGGGGAAAZZZZZZZZACFAAAFAZAAZZAAAGGGGFGGGGAAAZZZZZZZAZACFAAAFAFAAZZZAGGGGGGGGGGGGAAAAAZZAGACFFFAFFFFAZAZZZZZAACCAZZZAABBBBBAAGGACFFFFFAFFFZAZZZAAAAAAFAAABBBBBBAAAGGACFFFAAAAAFZZZZABBCCECCFFBBBBBBZAAAGAACFFFZAAZFFZZAABBAAGAAACBZZZZZZACACAZACFFAAAAAACAABBBZCAACCCFFAAAAAAAAAAZZACFFFAAAAFCBBBBZFFCCFFFFAZZZZZZZZZZZZACFFAAZZAAC",
		"ZZZZAFFFAZZADDDBAZZDZZADDBAZZZZZZZZZZZZZZZAFAZZZADDBAAADAAADDDBAZZZZZZZZZZZZAZZZAZZAADDDDDDDDDADDDDBAZZZZZZZAZZZAFAZZZZABBADDDDDBDDBDDBDBAZZZZZZAFAZAFCAZZZZZAADDDBDDBBDDBDBBBDAZZZZACFFAFFCFAZZZABADDDDDDDDDDDDDBBBAZZZZAFCFFFCFFFAZZAADDDZZDDDDZDDDDDBDAZZZAFFFCCCFFFFAZZADDDAAAGDDDAAAADDDDAZZZAFFFFFFFCFFFAZADADZZZGGDDZZZGDDDDAZZZAFFCFFFCFCFFAADDAZCZBGGGDCZBGDDDDAZZAFFCFCFFFCFFAAADDAGCCCGGGGCCCGDDDDAZAAFFFCFFFFFFACCCAAFGGGGGGGGGGGFFDDDDABCAFFFFFAFFACCCABAGGGGGGGGGGGGGDDDDABCCCAFFFFZAFACCCABAGGGGGAAGGGGGGADAABACCCAAFFAZZAACCCCBBAAGGGGGGGGGGADAZBBACCCADAAZZZZACCCABBBZAAAAAAAAAAZAZBBBCCCCADAZZZZZACCAABBBBZABFCCFABABBBBBBACCCADAZZZZZACCAABBBBBBAFFGFBAZBBBBBBAACCCAAZZZZZZACACCZBBBBABGGAAZBBBBZZZZACCCAZZZZZZZZAAAAAZZBBBAAAABBBBZZAAAAAAAAZZZAZZZZZZZZADAAZBBBABBBBBBAADDDAZZZZZZAFZZZZZZZZADDAZBABBBABBBZADDDDAZZZZZAFF",
		"ZZZZAAAAFBBBAZZZZAFFFFBFAAZZZZZZZZZZZZZZAFFFFFFBBBAZZAEBBFFBFBBAZZZZZZZZZZZZZAFFFFBBBFFBAZAEFFBBFFBFBAZZZZZZZZZZZAFFBBBFFBFFFBAZAEFFFBBFBBAZZAAZZZZZZZABBFFFFFBFFBAZZAEFFFBFBBBAZAFFAAZZZZAEEFBFFFBFFBAZZZZAEFBFFFBAZAFFCFFAAZZZAAEFBFFBFBAZZZZZAEFBFFBAAAAAACFFFFAZZZZAEFBFFBAZZZZAAAAEFBBAFFFABBAZFFFFZAAAAAEFFBAZZZZZZAAAABAAFFABBBBBAZFFFAAAAAAAEFAZZZZZZZZAFFAFFABBBBBBFFAZFFZZAAAAAAAZZZZZAAAAAFFFABBBBBBFFFFFACFZZZZZZZZZZZZAAFFFAFFAABBBBBBFFFFFFFACZZZZZZZZZZZACFFFFAAABBBBBBFFFFFFFFFFAZZZZZZZZZZZAZCFFAABBBBBBFFFFCCFFFFFFFZZZZZZZZZZZAZFCCABBBBBFFFFFCFFCFFFFFFZZZZZZZZZZZAZFFFABBBBFFFFFFCCFCFFFCFFZZZZZZZZAAAAZFFFFABFFFFFFFFFCCCCFCFFCZZZZAAAAAAAAZFFFFCAZFFFFFFFFFFFCCFFCCZZZAAAAAAAAAAZFFFCFAZFFFFFFFFFCFCFFFCZZZZAAAAAAAAAZFFFFCCAZFFFFFFFCFFFCFFCZZZZZZAAAAAAAZFFFFFCFAZFFFFFFFFCFFCFCZZZZZZZAAAAAAZFFCCCCCCAZFFFFFCCCCCCCC",
		"ZZZZZZZZZACAFEEAACCCAAZZAAZAAZZZZZZZZZZZZZZZZAAAEEBBBAAAAZZZACCACCAZAZZZZZZZZZZZZZAAAFBBAABAAAAZAAACAAACACAZZZZZZZZZZZAAAAFBBAABAAAAAFFCFFFFFAACAAZZZAAAAZZAAZFFABBBAAFBCFBFBFBBCBFFAACAAAFFFZAAZZFFFFAAAFFBFFCFCFFFFCFFBCFACCAFFFFFFFFFFFFFFFFBAEEBCFCFFCFCFCFFCAAZAFFFDFDFDFDFFFFFAEEBFCFCFCFFFCFFBFFAZAFDDBDBDBDBDDFFAABBFCFFFCFFFCFFFCFCFZZAABABABABABADFFFAEEBFFFCFFFCFFAAFBFZZZAAAAAAAAAAADFFAEEBAFAAAAAAAFACCAFBZZZZAZAZAZAAADFFAAEBAAAACCCCCAACCCAZFZZZZZZZZZAABBFFFFAAACCACCCCCACCCCAFFZZZZZZZZAABBAFFFFAACCCCACCCCCACCCCAZZFZZZZZAABBAFFFFFZAACCCZCCFFCCCCZCCAFFZZZZAABBAFFFFFFZAACCCCCCCCCCCCCCCCAFZFZZZAFFFFFFFFFZAAACCCCCCCCCCCCCCCCAFFAZZZAAFFFFFFFZAAAACCCCCCCCCCCCCCCCAAAAZZZZZACCFFZAAAAAACCCCCCCCCCCCCCCCAAAAZZZZZZAACZAAAZZACCCCCCCCCCCCCCCCCAAAAZZZZZZZAAAZZZZZACCCCCCCCCCCCCCCCCAAAZZZZZZZZZZZZZZZZACCCCCCCCCCCCCCCCCAAZZ",
		"ZAZFAAZZZZZZZZZZAZFFFFAZZZAZFFAZZZZZZAZFFFCAZZAAAAAAAAAZFFFFAAAAAAFFAZZZZZAZFCCBAAAZFFFFFCCFAZFFFFFACAAAFFAZZZZZACBBFFFFFCFFFCFFAFFFFFFFFACCAFAAZZZZACBFCCFFCCFCCCFFAFFBBBFFFFFAAFFBAZZZZAFFFFFCCFFFFFFFCAFBABBBBBFFFBBBBBAZZZACCFFFFFFCFFFFCFABBAAAAAAAFECCBAAAZZZFFFCFFFCCFCFFCFAFCCCABCABAFEECCBCBAZZFFFFCCCFFFFCCFFAFFCCABCCCAFFEEEBCCAZZAFFAAFFFFFFFAFFAFFFFCABBAEFFFFFABAAZZAAACCAZAAAAAAFFFAFFFFCAAEFFFFFFEACAZZAAACCCAACCCCAFFFFAFFFFEEFFFFACAFEAZZZAAAACCCCACCCAFFFFCAFFFFFFFFCCCCFFFAZZAAAACCCCACCCCAFCCCFAFFFFFBBAAABFFFAZZAAAACCCZCCCFFACFFCFABFFBBAABBBABFFAAZAAAACCCCCCCCCCACFFCCABBAABBCCCBABBAAZAAAACCCCCCCCCCAFCCCFABACCCCCCCCCABAAAZAAACCCCCCCCCCACFFCFFAFFBBBBBBBBFAAAAZAAACCCCCCCCCCAFCFFBBAAAFFFFFFFFAAAAAZZAACCCCCCCCCCCAFFBAAAZZAAAAAAAAAAAAZZZAACCCCCCCCCCCABBAACAZZZZZZZZZZAAAZZZZZACCCCCCCCCCCCAAACCAZZZZZZZZZZZZZZZ"
	]
};
let albacore1 = {
	width: 37,
	height: 22,
	colors: {
		'A': "#FFFFFF",
		'B': "#352828",
		'C': "#FFD371",
		'D': "#71FFAC",
		'E': "#7181FF",
		'F': "#FF7194",
		'G': "#FBD7C2",
		'Z': "#BAAFAA"
	},
	patterns: [
		"ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZBBZZZZZZZZZZZZZZZZZZZZZZZZZZBZZZZZZZBCBZZZZBZZZZZZZZZZZZZZZZZZZZBZZBZZZZBCCBZZBZZBZZZZZZZZZZZZZZZZZZBZZBZZZZZBCBZZZZBZZBZZZZZZZZZZZZZZZZZBZZBZZZZZBCBZZZZBZZBZZZZZZZZZZZZZZZZZZBZZBZZZZBCBZZZBZZBZZZZZZZZZZZZZZZZZZZZBZZZZZBCCBZZZZZBZZZZZZZZZZZZZZZZZZZZZZZZZZZBCBZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZBCBZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZBCBZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZBCBZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZBBBBCBBBBBZZZZZZZZZZZZZZZZZAZZZZZZZBBCCCCCCCCCCBBZZZZZZZZAZZZZZZZAAZZZZBCACACACCCACCCABZZZZZAAZZZZZZZZAAAZZBCCCACACCCACBCCCABZZZAAAAZZZZZZAAAAABCCCCCCCCCCCCGBCCCABZAAAAAAZZZZZZAAABCCCCCCCCBCCCBGBCCCCABAAAAAZZZZZZEAEBBCCCCCCCBGCCBAFABCCCCBBBBAAAZZZZZZEBBCCCBZAFFGGGGGAFFGBCCCCBBEBAEZZZZZBBEBBCCBGAFFGGGGGAFFGGZCCBBEBAECBZZZBCCBEBCCBGGGGGGGGGGGGGGZCBBEBCCCCCBZ",
		"CCCCCCCZCCCCCCCCCCCBZZZZZZZZZZZZZZZZZCCCCCCCZCCCCCCCCCBBZZZZZZBZZZZZZZZZZZCCCCCCCZCCCCCCCCBDBBBZZZZZBZZZZZZZZZZBCCCCCCZCCCCCCBBDDBAABBZZZBZZBZZZZZZZBBBCCCCZCCCCCBADDDBAAAABZZZBZZBZZZZZZBBDBCCCZCCCBBAAADBAAAAAABZZZZZZBZZZZZZBDDBBCZCCBADDAGBZAAAAACCBZZZZZBZZZZZCZBDDDBCBCAAADBBZCBZAACBCBBZZZZZBZZZZCCZBDDDBABDAGBZZCCCBZACBCCBZZZZZBZZZZCCCZBBBAACBBBZCCCCCBZAACCBBZZZZBZZBZZCCCCZBZACCCBZCCCCCCCBACBCBBZZZZZZZBZZBCCCCBACCCBCCCCCCCCCBZCCCBZZZZZZZBZZZDBCCCBACCBCCCCBCCCCCBBCCBZZZZZZBBZZZZDBCCCCBBBCCCCBBCCCCCBABBZZBBZZZZZZZZZDBCCCCCZCCCCCBCCCCCBFAAZZBAABBZZZZZZZDDBCCCCZCCCCCCCCCBBAFFFABAFBFBZZZZZZZDDBCCCCZCCCCCCCCBFFFAAFBAFFFBBZZZZZZZDDDBCCCZCCCCCCBBFFFFFFABFZFFFBZZZZZZZDDDBCCCZCCCCCBFFFFFFFFFBBFZZZBAZZZZZZADDDBCCZCCCBBFFFFFFFFFFFFBBBBBAAZZZZZZADDDBCZCCBAFFFFFFFFFFFFFFAFFFFAAZZZZZZAAFFBZBBFFAFFFFFFFFFFFAFFAAFFFFAZZZ",
		"ZZZZZZZZZZZZZBEEEEECCCCCCCBCZBCBCZBZZZZZZZZZZZZZZZZBECBBBBBBBBBZBBZBZBBZZZZZZZZZZZZZZZZZZBBCCCCCCCCCCCCCCCCZBZZZZZZZZZZZZZZZZZBCABCACCACACACCACCCBZZZZZZZZAZZZZZZZBCABZBCABCACACACCACCBZZZZZZZZAZZAZZZZBCBZGBCCGBCCCCCCCCCCCBZZZZZZAAAZZZZZBBCZGGGBCGBCCCCCCCCCCCBZZZZAAAAAAAZZBEEBGGGGBCGGBCCCCCCCCCCBZZZZZZAAAZZZZBFFBBBBBGGGBBBBZBCCCCCCBZZZZZZZAZZZZZZBEBGEEAGGGGEEAGBCCCCCCCBZZZZZZAZZZZZZZBBGEEEGGGGEEEBCACCCACABZZAZZZAZZZZZZZBCGGGGGGGGGGGBCCCBCCCCBZAAAZZZZZZZZZBCCGGGGGGGGGGBCCCCBCCCCBZZAZZZZZZZZZZBCCGGGGGGGGBGBCCCCBCCCCBZZZZZZZZZZZZZBCBCGGGGBBBGGBCCCBZCCCBZZZZZZZZZBZZZZZBZBBGGGGGGGGBCCBZCCCBZZZZZZZZZBBZZZZZZZZZBBBBBBBBBBBBBBBBZZZZZZZZZZBBZZZZZZZZBFBEBCBEBFBBBBBZZZZZZZZZZBBZBBZZZZZZZBFBECCCBEFBBBBBZBBZZZZZZZBBBBBZZZZZZZZBFBBCBEBBFBBEEBZZBZZZZZZBBBBCBZZZZZBBGBAAAABGGGEBCEEBZBZZZZZZBBBBCEBZZZBGGBAAAAAABGGGGBCEEBZZ",
		"ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZBZZZZZZZZZZZZZZZZZZZZZZZZZZZZBZZZZZZBZZZZZZZZZZZZZZZZBBZZZZZZZZZZBZZZZBBZZZZZZZZZZZZZZZZZBACBBBBZZZZZBZZZZBCCCZZZCZZZZZZZZZZZZBCCCCCCBZZZZBZZZBCCCCBCCZZBZZZZZZZZZZCBCCCBCCBZZZZZZBCCCCCCCZZBZZZZZZZZZZZCBCCCBCCBZZZZZBCACCCCCCCZZCZZZZZZZBBBCCFFCCCCCBZZZBCACCCCCCCCCCZZZZZZBBCCCCCCCCCCCCBZZZBCCCCCCCCCCCCZZZZZBCCCCCCCCCCCCCCBZZBCCCCCCCCCCCCCBZZZBCCCCCCCCCCCCCBCBZZBCBCCCCCBCCCCBCZZBCCCCCCCCCCCCCCCBBZZBCCBCCCBCCCCBCCZZBCCCCCCCCCCCCCCCCCBZBCBCCCCCBCCCCCBZBCCCCCCCCCCCCCCCCCCBZZBCCFFCCCCCCCCBZBCCCCCCCCCCCCCCCCCCBZZZBCCFFCCCCCCCBZBCCCCCCCCCCCCCCCCCBZZZZZBCFFCCCCCCBZZBACCCCCCCBBBBBBBBBZZZZZZZBBBBBBBBBZZZBBBBBBBBBBZBZBZBZBZBZZZBZBZBZBZBZBZBZZBZBZBZBZZBZBZBZBZBZZZZZBZBZBZBZBZBZZZZBZBZBZBZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ",
		"AAAAAAAAAAAAZBBBEABZZZZZZZZZZZZZZZZZZAAAAAAAAAABBBEAAAAABZZZZZZZZZZZZZZZZZAAAAAAAABBEAABAAAAAABZZZZZZBBBBBBBZZZZAAAAABBAAAEAAZEAAAAABZZZZBGGGGBFBZZZZZAABBEAZAAAAAGGEAAAABZZZBGGGGBZFFBZZZZZBEAAAGZAAAAGGGBAAABZZZBBCFAAZZFBZZZZBEAAAAGGZAAAGGBGGAABZBBFFCCFAAAAZBZBBAEAAAGAGGGAAGBGGGGABBAFFFFCFAAAABBZEZAEAAAGGGGGAGGBBBBGGBBAAFFFAAAABBZZZAAAEAAAGBBBBGGGGGGGGBBAAAFFAAABBBZZZZAAAAEAGGGGGBGGGGGGBBFAAAAAAGGBAABZZZZAAAAAEEGGGBGGGGGBBFFCFBBAABBBAAABZZZZEAAAAAZGGBGGGGGGBFFBBBZZBBAAAAAABZZZZEAAAAAAGGGGGGGGGBBBGGBZZZBAAAAAABZZZZAEAAAAAAAGGGGGGGGGGGBZZZZBAAAAABZZZZZAAZAAAAAAAAGGGGGGGGBABZBBAZAAAABZZZZZAAAEBBAAAAGAGGGGGBBEAABAAAAAAAABZZZZZAAAAEEBAAAGAGGGBBGGGGGBAAAAAABBZZZZZZBAAABEEAAEABBBBGGBGGGGGBAAABBZZZZZZZZEBAAABEAEBGBZZGGGGBGGGGBBBBZZZZZZZZZZEBZAAABEBGGGBGGGAAABGBBBABZZZZZZZZZZZEEBZAAABGGGGBAAAAAAABZBEAABZZZZZZZZZZ",
		"ZZZBBZBAAAAAABZZZZZZZZBZZBZZZZZZZZZZZZZBAFBCAAAAAAABZZZZZZBBZZBBZZZZZZZZZZZBAABCACBAAGBAABZZZZBBBZZBBBZZZZZZZZZAAAABAAABGAABAABZZZZBBBZZBBBZZZZZZZZZZZABAAAAGGGGGGABZZZZBBBZZBBBZZZZZZZZZZABZBAAAGGFFGGBZZZZZZBBBBBBZZZZZZZZZZZZZZZBBABBBBBBZZZZZZZBBBCCZBZZZZZZZZZZZBBBGGBZZZGGGBBBBZZZZBBZCCBZZZZZZZZZZBGGGGGGGGGGGGGGGGBZZBBBCZCBZZZZZZZZZBAAZBBGGGGGGGGBBBGABBZZBCCZBZZBDDDBZZBAZEEEBBBBBBBBEEEEAABBCBBBBZZBDDDDDBZABBBCBAAAAAAAABBCBAAACCBBBZZBDDAADDABBAAZAAZAAZAAZAAZAABAACCBBBZZBDDAADDABBAAZAAZAAZAAZAAZAABBBCCBBBZZBAAADDAABBAAZAAZAAZAAZAAZAABZZBCBBBZZBAAADDAABBAAZAAZAAZAAZAAZAABZZZBBBBZZBAADDAAABBAAZAAZAAZAAZAAZAAABZZBBBBZBAAADDAAABBAAZAAZAAZAAZAAZAAABZZBBBBZZBAAAAAAABBAABAAZAAZAAZAAZABABZZBBBBZZZBADDAABZBBBBBAZAAZAAZAAZABBBZZBBBBZZZZBDDBBZZBCCBBAZAAZAAZAAZABCBZZBBBBZZZZZZZZZZZBBBBBAZBAZBAZBAZABBBZZBBBBZZZZZZZZZZZ",
		"BBBBZBFFBZCZZCZZCZZZZCZZCZZZZBBFFFFBZAAAABBAFBZZCZZCZZCZZCZZCZZZBBFFFFFFFBBBBBABAABCZZCZZCZZZZZZCZZZBFFBBBBBBFFAAAZBBAABZCZZCZZZZZZZZZZZBFBBZZBBBBBFAAAAABABZZZCZZZBBZZZBBZZBBBZZZBBFFFFFAAAAABABBZZZZZBGGBZBGABZZZZZZBFFFFFFFAAAAABBAABZZZBGGGBZBGAABZZZBBFFAFAFAFAAAAAAAAABZZZBGGGGBGGAABZZBFBFFFAFAFFAAZAAAAFFBBZZBGGGGBAAAABZBFFBFFFFZFFFAAGZAAAAFABZBGZGGGBAAAZABBFBFZFFZGGFFAAGGZAAAAABZBGGGGGBAAAAABFFFZFFFGGGFFAAGBBBAAAABZZBGGGGBAAAABZFZFFFFFBGGFFGAGGBGAAAABZBAEGGGBAAAAABFBFFFFGBGGFGGGGGBGAAAZBBAAZEEBZBZZAAABBFFFFGBGGGGGGGGGGAAZBBAEAAEBZZZBAAAAABFFFFGGGGGGGGGGGGAAZBAAAEAEBZZBFBAAAAABFFFGGGBGGBBGGGAAABEAAAAEEBZBFZFBAAAAABFFGGGGBBGGGGGAABAAEAAAAEBZBFZFFBAAAAABFBGGGGGBBBZBAABEAAAAAABZZBFFFBZBAAABZBZBBBBBGGGBEAABGEAAAAABZZZBFFBZZBABZGGBCCBBBGGBEEABGGGBAAAABZZZBFFBZZZBZGGGCEABBAEBEECABGGBZBAAZBZZZZBFBZZBFBGCCEEEAEA"
	]
};