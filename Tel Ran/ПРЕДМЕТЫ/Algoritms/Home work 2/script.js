
// Провести ассимптотический анализ для каждой функции.
// Написать time complexity  и space complexity

// 1)
// function test1(n) {
// 	if (n == 1) return;					// O(1)
// 	for (i = 1; i <= n; i++)		// O(n)
// 		for (j = n; j >= 1; j--)	// O(n->1) => O(n)
// 			console.out('*');
//}

// *time complexity O(n^2)
// *space complexity O(1)


// ==========================================================
// 2)
// function test2(n)
// {
// let a = 0;										// T(1)
// for (i = 0; i < n; i++)			// O(n)
//     for (j = n; j > i; j--)	// O(n -> n/2) => O(n)
//         a = a + i + j;
// }

// *time complexity O(n^2)
// *space complexity O(1)

// ==========================================================
// 3)
// function test3(n)
// {
// let i, j, a = 0;								// T(a = 1) => T(1)
// for (i = n/2; i <= n; i++)			// O(n/2 -> n) => O(n)
//     for (j = 2; j <= n; j=j*2)	// o(j*2 -> n) => O(n/2) => O(n)
//         a=a+n/2;
// }

// *time complexity O(n^2)
// *space complexity O(1)



//списал.  не понимаю сути самой задачи. должен подумать на логику что это или что? я не понимаю.