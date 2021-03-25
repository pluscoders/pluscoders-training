import com.hello.LoggerBuilder;
import com.hello.Logger;

public class Hello {
    public static void main(String[] args) {
        Logger logger = new LoggerBuilder().withPrefix().withDate().withDash().build();
        logger.print("Patata");
    }
}
