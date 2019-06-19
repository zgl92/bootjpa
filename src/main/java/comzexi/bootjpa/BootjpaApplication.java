package comzexi.bootjpa;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.server.ConfigurableWebServerFactory;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;


/**
 * @author zgl
 */
@SpringBootApplication
public class BootjpaApplication extends SpringBootServletInitializer implements WebServerFactoryCustomizer<ConfigurableWebServerFactory> {

    public static void main(String[] args) {
        SpringApplication.run(BootjpaApplication.class, args);
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {

        //此处的Application.class为带有@SpringBootApplication注解的启动类
        return builder.sources(BootjpaApplication.class);
    }


    @Override
    public void customize(ConfigurableWebServerFactory factory) {
            factory.setPort(80);
    }
}
