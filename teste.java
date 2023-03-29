public class teste {

	public static void main(String[] args) {
	
		
		boolean primo=true;
		int k;
		int qntprim=0;
		//2147483647
		System.out.println("Números primos calculados:");
		for(int i=2; i<2147483647; i++) {
			for(int j=2; j<=i; j++) {
				k=i%j;
				
				if(j!=i) {
					if(k==0) {
						primo=false;
						j=i-1;
					}
					
				}
				
			}
			if(primo==true) {
				System.out.println(i);
				qntprim++;
			}
			primo=true;
			
		}
		System.out.println("Quantidade de números primos calculados: "+qntprim);

}
}