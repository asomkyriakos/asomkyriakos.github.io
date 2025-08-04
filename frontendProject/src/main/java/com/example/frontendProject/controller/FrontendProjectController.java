package com.example.frontendProject.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequiredArgsConstructor
public class FrontendProjectController{

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @GetMapping("/popup")
    public String popup() {
        return "popup";
    }

}
