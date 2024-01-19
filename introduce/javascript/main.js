const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//--------------------------------------

let backColor = document.querySelectorAll("[data-bgcolor]");
console.log(backColor);

backColor.forEach((colorSection, i) => {
  let prevBg = i === 0 ? "" : backColor[i - 1].dataset.backColor;

  ScrollTrigger.create({
    trigger: colorSection,
    start: "top 50%",
    end: "bottom 5%",

    onEnter: () =>
      gsap.to("#contents", {
        backgroundColor: colorSection.dataset.bgcolor,
      }),
    onLeaveBack: () =>
      gsap.to("#contents", {
        backgroundColor: prevBg,
      }),
  });
});

const horSection = gsap.utils.toArray(".port_desc .port");

const horiz = gsap.to(horSection, {
  xPercent: -30 * (horSection.length - 1),
  scrollTrigger: {
    trigger: ".port_desc",
    start: "top 20%",
    end: "+=1500",
    scrub: 1,
    pin: true,
  },
});

let executed = false;

function animateSkills() {
  document.querySelectorAll(".skill-per").forEach((perElement) => {
    gsap.to(perElement, {
      duration: 2,
      width: perElement.getAttribute("per") + "%",
      onUpdate: function () {
        console.log(perElement.style.width);
        perElement.setAttribute(
          "per",
          Math.ceil(this.progress() * parseInt(perElement.style.width)) + "%"
        );
      },
    });
  });
}

ScrollTrigger.create({
  trigger: ".main",
  start: "top 30%",
  onEnter: () => {
    if (!executed) {
      animateSkills();
      executed = true;
    }
  },
});

//--------------------------------------------my motto

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".about_intro .text div").forEach(createSpan);
  
    var tl = gsap.timeline();
  
    document.querySelectorAll(".about_intro .text div span").forEach((span, i) => {
        tl.to(span, {autoAlpha: 1, duration: 0.1}, i * 0.1);
    });
  });
  
  function createSpan(element) {
    let textContent = element.textContent.split("");
    let spanWrappedText = textContent.map(char => {
        return `<span style="opacity: 0;">${char}</span>`;
    }).join("");
  
    element.innerHTML = spanWrappedText;
  }
  

//--------------------------------------------

// ---------------------------------- my school project

document.addEventListener("DOMContentLoaded", function () {
  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.session.setMode("ace/mode/python");
  editor.setValue(
    `import openai
  
  openai.api_key = "my-api-key"
  
  messages = []
  while True:
      user_content = input("user : ")
      messages.append({"role": "user", "content": f"{user_content}"})
  
      completion = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=messages)
  
      assistant_content = completion.choices[0].message["content"].strip()
  
      messages.append({"role": "assistant", "content": f"{assistant_content}"})
  
      print(f"GPT : {assistant_content}")`,
    1
  );
});

document.addEventListener("DOMContentLoaded", function () {
  var editor = ace.edit("codeEditor");
  editor.setTheme("ace/theme/monokai");
  editor.session.setMode("ace/mode/java");
  editor.setValue(
    `import javax.swing.*;
  import java.awt.*;
  import java.awt.event.*;
  import java.text.DecimalFormat;
  
  class Calculator extends Frame implements WindowListener, ActionListener
  {	
      private Label dispL, inputL;
      private JButton[] button;  
      StringBuffer sb= new StringBuffer();
      DecimalFormat df= new DecimalFormat("#,##0");  
      private String disp;   
      private int op;   
      public double result; 
      public double number;
      boolean opClick=false;
  
      public Calculator(){
          super("미니 계산기");
  
          Panel whole = new Panel();  
          Panel p1 = new Panel();  
          Panel p2 = new Panel();  
          Panel p3 = new Panel(); 
          Panel p4 = new Panel();
          Panel p5 = new Panel(); 
          Panel p6 = new Panel();
          Panel p7 = new Panel();
          
          
          String[] buttonName = {"7","8","9","/","4","5","6","*","1","2","3","-",".","0","=","+","Back","C"};
          button = new JButton[18];
          for(int i=0;i<18;i++){
               button[i]=new JButton(buttonName[i]);
          }
          
          
          dispL= new Label("0",Label.RIGHT);
          dispL.setBackground(new Color(139,158,226));
          inputL= new Label("0", Label.RIGHT);
          inputL.setBackground(new Color(139,158,226));
          
          
          whole.setLayout(new GridLayout(7,1,5,5));
          p1.setLayout(new GridLayout(1,1,5,5));
          p1.add(dispL);
          p2.setLayout(new GridLayout(1,1,5,5));
          p2.add(inputL);
          p3.setLayout(new GridLayout(1,2));
          p3.add(button[16]);
          p3.add(button[17]);
          p4.setLayout(new GridLayout(1,4));
          for(int i=0;i<4;i++) { p4.add(button[i]); }
          p5.setLayout(new GridLayout(1,4));
          for(int i=4;i<8;i++) { p5.add(button[i]); }
          p6.setLayout(new GridLayout(1,4));
          for(int i=8;i<12;i++) { p6.add(button[i]); }
          p7.setLayout(new GridLayout(1,4));
          for(int i=12;i<16;i++) { p7.add(button[i]);	}
  
          
          whole.add(p1);
          whole.add(p2);
          whole.add(p3);
          whole.add(p4);
          whole.add(p5);
          whole.add(p6);
          whole.add(p7);
          add("Center", whole);
  
          
          setBounds(900,180,350,500);
          setBackground(new Color(105,132,224));
          setVisible(true);
          
          for(int i=0;i<18;i++){ button[i].addActionListener(this); }
          this.addWindowListener(this);
      }
  
          
          public void actionPerformed(ActionEvent e){
              
              if(op==61){  
                  sb.delete(0,sb.length());
                  sb.append(result);
                  disp="";
                  op=0;
                  dispL.setText(disp);
              }
              
              if(e.getActionCommand()=="1"){ sb.append(1); } 
              else if(e.getActionCommand()=="2"){ sb.append(2); }
              else if(e.getActionCommand()=="3"){ sb.append(3); }
              else if(e.getActionCommand()=="4"){ sb.append(4); }
              else if(e.getActionCommand()=="5"){ sb.append(5); }
              else if(e.getActionCommand()=="6"){ sb.append(6); }
              else if(e.getActionCommand()=="7"){ sb.append(7); }
              else if(e.getActionCommand()=="8"){ sb.append(8); }
              else if(e.getActionCommand()=="9"){ sb.append(9); }
              else if(e.getActionCommand()=="0"){ sb.append(0); }
              else if(e.getActionCommand()=="C"){ 
                  sb.delete(0,sb.length()); 
                  dispL.setText("0"); 
                  disp=""; 
                  result=0;
                  op=0;
                  }
              else if(e.getActionCommand()=="Back"){ 
                  if(sb.length()>0) sb=sb.delete(sb.length()-1,sb.length());
                  else sb.delete(0,sb.length());
              }
              else if(e.getActionCommand()=="."){ 
                  if(sb.indexOf(".")==-1){
                      if(inputL.getText().equals("0")){
                          sb.append("0.");
                      } else{
                          sb.append(".");
                      }
                  } 
              } else { 
                  
                  opClick=true;
                  
                  if(disp!=null) disp+=sb.toString();
                  else disp=sb.toString();
                  
                  if(op==0){
                      result=Double.parseDouble(sb.toString());
                      
                      op=e.getActionCommand().hashCode();
                      disp+=e.getActionCommand();
                      dispL.setText(disp);
                  } else {
                      disp+=e.getActionCommand();
                      if(op==43){  
                          result+=Double.parseDouble(sb.toString());
                          dispL.setText(disp);
                          } 
                      else if(op==45){   
                          result-=Double.parseDouble(sb.toString());
                          dispL.setText(disp);
                          } 
                      else if(op==42){  
                          result*=Double.parseDouble(sb.toString());
                          dispL.setText(disp);
                          } 
                      else if(op==47){  
                          result/=Double.parseDouble(sb.toString());
                          dispL.setText(disp);
                      } 
                      op=e.getActionCommand().hashCode();
                  }
                  sb.delete(0,sb.length());
              }
              
              String temp;
              String temp2;
              if(sb.length()>0){
                  
                  if(sb.indexOf(".")!=-1){
                      if(sb.indexOf(".")==sb.length()-1){
                          
                          temp=sb.substring(0,sb.indexOf("."));
                          temp=df.format(Integer.parseInt(temp));
                          temp+=".";
                          inputL.setText(temp);
                      } else {
                          
                          temp=sb.substring(0,sb.indexOf("."));
                          temp2=sb.substring(sb.indexOf(".")+1, sb.length());
                          temp=df.format(Integer.parseInt(temp));
                          temp+=".";
                          temp+=temp2;
                          inputL.setText(temp);
                      }
                  } else {
                      temp=sb.toString();
                      temp=df.format(Integer.parseInt((temp)));
                      inputL.setText(temp);
                  }
              } else inputL.setText("0");
              
              if(opClick==true||op==61){
                      inputL.setText(Double.toString(result));
                      opClick=false;
              }
          }
  
          
          public void windowActivated(WindowEvent e){}
          public void windowClosed(WindowEvent e){} 
          public void windowClosing(WindowEvent e){ System.exit(0); }  
          public void windowDeactivated(WindowEvent e){}
          public void windowDeiconified(WindowEvent e){}
          public void windowIconified(WindowEvent e){}
          public void windowOpened(WindowEvent e){}
  
      public static void main(String[] args) 
      {
          Calculator c = new Calculator();
      }
  }
  public static void main(String[] args) {
    Calculator c = new Calculator();
  }`,
    1
  );
  editor.setFontSize(14);
});

// -------------------------- my school project end
