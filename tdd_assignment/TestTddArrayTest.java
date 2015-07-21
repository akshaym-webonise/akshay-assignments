import static org.junit.Assert.assertArrayEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class TestTddArrayTest {

	private TddArray tdd; 
	
	@Before
	public void init() {
		System.out.println("Before");
		tdd = new TddArray();
	}

	@After
	public void teardown() {
		System.out.println("testing done");
	}
	
	@Test
	public void testRemoveDuplicateElements() {
		int[] arr = new int[] { 1, 1, 1, 2, 3, 3, 3, 4, 3, 3 };
		int[] resultArr = tdd.removeDuplicates(arr);
		
		assertArrayEquals(new int[] {1, 2, 3, 4, 3, 0, 0, 0, 0, 0},  resultArr);
	
	}

	
	@Test
	public void testRemoveAllElement() {
		int[] arr = new int[] { 1, 1, 1, 1, 1, 1 };
		int[] resultArr = tdd.removeDuplicates(arr);
		
		assertArrayEquals(new int[] {1, 0, 0, 0, 0, 0},  resultArr);
	}

	
	@Test
	public void testRemoveOnEmpty() {
		int[] arr = new int[] { };
		int[] resultArr = tdd.removeDuplicates(arr);
		
		assertArrayEquals(new int[] {},  resultArr);
	}
	
	@Test
	public void testRemovalOnDistinctElements() {
		int[] arr = new int[]{ 1, 2, 3, 4, 5, 6 };
		int[] resultArr = tdd.removeDuplicates(arr);
		
		assertArrayEquals(new int[]{ 1, 2, 3, 4, 5, 6 },  resultArr);
	}
}