package comzexi.bootjpa.controller;

import comzexi.bootjpa.dao.UserRepository;
import comzexi.bootjpa.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@Controller
public class UserController {
    @Autowired
    UserRepository userRepository;

    @RequestMapping("toAdd")
    @ResponseBody
    public Map<String, Object> toAdd(User user) {
        Map<String, Object> map = new HashMap<String, Object>();
        Example<User> example = Example.of(user);
        if (userRepository.exists(example)) {
            //已存在用户
            map.put("result", "error");
        } else {
            userRepository.save(user);
            map.put("result", "success");
        }
        return map;
    }


    @RequestMapping("denglu")
    public String denglu() {
        return "denglu";
    }

    @RequestMapping("zhuce")
    public String zhuce() {
        return "zhuce";
    }

    @RequestMapping("todenglu")
    @ResponseBody
    public Map<String, Object> denglu(User user, HttpSession session) {
        Map<String, Object> map = new HashMap<String, Object>();
        User byUser = userRepository.findByUser(user.getPhone(), user.getPassword());
        if (byUser != null) {
            session.setAttribute("user", user);
            map.put("result", "success");
        } else {
            map.put("result", "error");
        }
        return map;
    }

    @RequestMapping("/dd")
    public String dd() {
        return "dd";
    }

    @RequestMapping("/index")
    public String index() {
        return "index";
    }

    @RequestMapping("/remen")
    public String remen() {
        return "remen";
    }

    @RequestMapping("/yxff")
    public String yxff() {
        return "yxff";
    }

    @RequestMapping("/yxjy")
    public String yxjy() {
        return "yxjy";
    }

    @RequestMapping("/seo")
    public String seo() {
        return "seo";
    }

    @RequestMapping("/about")
    public String about() {
        return "about";
    }

    @RequestMapping("/zhifu")
    public String zhifu() {
        return "zhifu";
    }
}
