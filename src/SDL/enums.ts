// This file is auto generated. To update the file make changes to the code generator.

import { SCANCODE_TO_KEYCODE } from "./keycode.ts";

// ArrayOrder
export const ARRAYORDER_NONE = 0;
export const ARRAYORDER_RGB = 1;
export const ARRAYORDER_RGBA = 2;
export const ARRAYORDER_ARGB = 3;
export const ARRAYORDER_BGR = 4;
export const ARRAYORDER_BGRA = 5;
export const ARRAYORDER_ABGR = 6;

// BitmapOrder
export const BITMAPORDER_NONE = 0;
export const BITMAPORDER_4321 = 1;
export const BITMAPORDER_1234 = 2;

// EventType
export const FIRSTEVENT = 0;
export const QUIT = 0x100;
export const APP_TERMINATING = 257;
export const APP_LOWMEMORY = 258;
export const APP_WILLENTERBACKGROUND = 259;
export const APP_DIDENTERBACKGROUND = 260;
export const APP_WILLENTERFOREGROUND = 261;
export const APP_DIDENTERFOREGROUND = 262;
export const LOCALECHANGED = 263;
export const DISPLAYEVENT = 0x150;
export const WINDOWEVENT = 0x200;
export const SYSWMEVENT = 513;
export const KEYDOWN = 0x300;
export const KEYUP = 769;
export const TEXTEDITING = 770;
export const TEXTINPUT = 771;
export const KEYMAPCHANGED = 772;
export const MOUSEMOTION = 0x400;
export const MOUSEBUTTONDOWN = 1025;
export const MOUSEBUTTONUP = 1026;
export const MOUSEWHEEL = 1027;
export const JOYAXISMOTION = 0x600;
export const JOYBALLMOTION = 1537;
export const JOYHATMOTION = 1538;
export const JOYBUTTONDOWN = 1539;
export const JOYBUTTONUP = 1540;
export const JOYDEVICEADDED = 1541;
export const JOYDEVICEREMOVED = 1542;
export const CONTROLLERAXISMOTION = 0x650;
export const CONTROLLERBUTTONDOWN = 1617;
export const CONTROLLERBUTTONUP = 1618;
export const CONTROLLERDEVICEADDED = 1619;
export const CONTROLLERDEVICEREMOVED = 1620;
export const CONTROLLERDEVICEREMAPPED = 1621;
export const CONTROLLERTOUCHPADDOWN = 1622;
export const CONTROLLERTOUCHPADMOTION = 1623;
export const CONTROLLERTOUCHPADUP = 1624;
export const CONTROLLERSENSORUPDATE = 1625;
export const FINGERDOWN = 0x700;
export const FINGERUP = 1793;
export const FINGERMOTION = 1794;
export const DOLLARGESTURE = 0x800;
export const DOLLARRECORD = 2049;
export const MULTIGESTURE = 2050;
export const CLIPBOARDUPDATE = 0x900;
export const DROPFILE = 0x1000;
export const DROPTEXT = 4097;
export const DROPBEGIN = 4098;
export const DROPCOMPLETE = 4099;
export const AUDIODEVICEADDED = 0x1100;
export const AUDIODEVICEREMOVED = 4353;
export const SENSORUPDATE = 0x1200;
export const RENDER_TARGETS_RESET = 0x2000;
export const RENDER_DEVICE_RESET = 8193;
export const POLLSENTINEL = 0x7F00;
export const USEREVENT = 0x8000;
export const LASTEVENT = 0xFFFF;

// Init
export const INIT_TIMER = 0x00000001;
export const INIT_AUDIO = 0x00000010;
export const INIT_VIDEO = 0x00000020;
export const INIT_JOYSTICK = 0x00000200;
export const INIT_HAPTIC = 0x00001000;
export const INIT_GAMECONTROLLER = 0x00002000;
export const INIT_EVENTS = 0x00004000;
export const INIT_SENSOR = 0x00008000;
export const INIT_NOPARACHUTE = 0x00100000;
export const INIT_EVERYTHING =
  (INIT_TIMER | INIT_AUDIO | INIT_VIDEO | INIT_EVENTS | INIT_JOYSTICK | INIT_HAPTIC | INIT_GAMECONTROLLER |
    INIT_SENSOR);

// Scancode
export const SCANCODE_UNKNOWN = 0;
export const SCANCODE_A = 4;
export const SCANCODE_B = 5;
export const SCANCODE_C = 6;
export const SCANCODE_D = 7;
export const SCANCODE_E = 8;
export const SCANCODE_F = 9;
export const SCANCODE_G = 10;
export const SCANCODE_H = 11;
export const SCANCODE_I = 12;
export const SCANCODE_J = 13;
export const SCANCODE_K = 14;
export const SCANCODE_L = 15;
export const SCANCODE_M = 16;
export const SCANCODE_N = 17;
export const SCANCODE_O = 18;
export const SCANCODE_P = 19;
export const SCANCODE_Q = 20;
export const SCANCODE_R = 21;
export const SCANCODE_S = 22;
export const SCANCODE_T = 23;
export const SCANCODE_U = 24;
export const SCANCODE_V = 25;
export const SCANCODE_W = 26;
export const SCANCODE_X = 27;
export const SCANCODE_Y = 28;
export const SCANCODE_Z = 29;
export const SCANCODE_1 = 30;
export const SCANCODE_2 = 31;
export const SCANCODE_3 = 32;
export const SCANCODE_4 = 33;
export const SCANCODE_5 = 34;
export const SCANCODE_6 = 35;
export const SCANCODE_7 = 36;
export const SCANCODE_8 = 37;
export const SCANCODE_9 = 38;
export const SCANCODE_0 = 39;
export const SCANCODE_RETURN = 40;
export const SCANCODE_ESCAPE = 41;
export const SCANCODE_BACKSPACE = 42;
export const SCANCODE_TAB = 43;
export const SCANCODE_SPACE = 44;
export const SCANCODE_MINUS = 45;
export const SCANCODE_EQUALS = 46;
export const SCANCODE_LEFTBRACKET = 47;
export const SCANCODE_RIGHTBRACKET = 48;
export const SCANCODE_BACKSLASH = 49;
export const SCANCODE_NONUSHASH = 50;
export const SCANCODE_SEMICOLON = 51;
export const SCANCODE_APOSTROPHE = 52;
export const SCANCODE_GRAVE = 53;
export const SCANCODE_COMMA = 54;
export const SCANCODE_PERIOD = 55;
export const SCANCODE_SLASH = 56;
export const SCANCODE_CAPSLOCK = 57;
export const SCANCODE_F1 = 58;
export const SCANCODE_F2 = 59;
export const SCANCODE_F3 = 60;
export const SCANCODE_F4 = 61;
export const SCANCODE_F5 = 62;
export const SCANCODE_F6 = 63;
export const SCANCODE_F7 = 64;
export const SCANCODE_F8 = 65;
export const SCANCODE_F9 = 66;
export const SCANCODE_F10 = 67;
export const SCANCODE_F11 = 68;
export const SCANCODE_F12 = 69;
export const SCANCODE_PRINTSCREEN = 70;
export const SCANCODE_SCROLLLOCK = 71;
export const SCANCODE_PAUSE = 72;
export const SCANCODE_INSERT = 73;
export const SCANCODE_HOME = 74;
export const SCANCODE_PAGEUP = 75;
export const SCANCODE_DELETE = 76;
export const SCANCODE_END = 77;
export const SCANCODE_PAGEDOWN = 78;
export const SCANCODE_RIGHT = 79;
export const SCANCODE_LEFT = 80;
export const SCANCODE_DOWN = 81;
export const SCANCODE_UP = 82;
export const SCANCODE_NUMLOCKCLEAR = 83;
export const SCANCODE_KP_DIVIDE = 84;
export const SCANCODE_KP_MULTIPLY = 85;
export const SCANCODE_KP_MINUS = 86;
export const SCANCODE_KP_PLUS = 87;
export const SCANCODE_KP_ENTER = 88;
export const SCANCODE_KP_1 = 89;
export const SCANCODE_KP_2 = 90;
export const SCANCODE_KP_3 = 91;
export const SCANCODE_KP_4 = 92;
export const SCANCODE_KP_5 = 93;
export const SCANCODE_KP_6 = 94;
export const SCANCODE_KP_7 = 95;
export const SCANCODE_KP_8 = 96;
export const SCANCODE_KP_9 = 97;
export const SCANCODE_KP_0 = 98;
export const SCANCODE_KP_PERIOD = 99;
export const SCANCODE_NONUSBACKSLASH = 100;
export const SCANCODE_APPLICATION = 101;
export const SCANCODE_POWER = 102;
export const SCANCODE_KP_EQUALS = 103;
export const SCANCODE_F13 = 104;
export const SCANCODE_F14 = 105;
export const SCANCODE_F15 = 106;
export const SCANCODE_F16 = 107;
export const SCANCODE_F17 = 108;
export const SCANCODE_F18 = 109;
export const SCANCODE_F19 = 110;
export const SCANCODE_F20 = 111;
export const SCANCODE_F21 = 112;
export const SCANCODE_F22 = 113;
export const SCANCODE_F23 = 114;
export const SCANCODE_F24 = 115;
export const SCANCODE_EXECUTE = 116;
export const SCANCODE_HELP = 117;
export const SCANCODE_MENU = 118;
export const SCANCODE_SELECT = 119;
export const SCANCODE_STOP = 120;
export const SCANCODE_AGAIN = 121;
export const SCANCODE_UNDO = 122;
export const SCANCODE_CUT = 123;
export const SCANCODE_COPY = 124;
export const SCANCODE_PASTE = 125;
export const SCANCODE_FIND = 126;
export const SCANCODE_MUTE = 127;
export const SCANCODE_VOLUMEUP = 128;
export const SCANCODE_VOLUMEDOWN = 129;
export const SCANCODE_KP_COMMA = 133;
export const SCANCODE_KP_EQUALSAS400 = 134;
export const SCANCODE_INTERNATIONAL1 = 135;
export const SCANCODE_INTERNATIONAL2 = 136;
export const SCANCODE_INTERNATIONAL3 = 137;
export const SCANCODE_INTERNATIONAL4 = 138;
export const SCANCODE_INTERNATIONAL5 = 139;
export const SCANCODE_INTERNATIONAL6 = 140;
export const SCANCODE_INTERNATIONAL7 = 141;
export const SCANCODE_INTERNATIONAL8 = 142;
export const SCANCODE_INTERNATIONAL9 = 143;
export const SCANCODE_LANG1 = 144;
export const SCANCODE_LANG2 = 145;
export const SCANCODE_LANG3 = 146;
export const SCANCODE_LANG4 = 147;
export const SCANCODE_LANG5 = 148;
export const SCANCODE_LANG6 = 149;
export const SCANCODE_LANG7 = 150;
export const SCANCODE_LANG8 = 151;
export const SCANCODE_LANG9 = 152;
export const SCANCODE_ALTERASE = 153;
export const SCANCODE_SYSREQ = 154;
export const SCANCODE_CANCEL = 155;
export const SCANCODE_CLEAR = 156;
export const SCANCODE_PRIOR = 157;
export const SCANCODE_RETURN2 = 158;
export const SCANCODE_SEPARATOR = 159;
export const SCANCODE_OUT = 160;
export const SCANCODE_OPER = 161;
export const SCANCODE_CLEARAGAIN = 162;
export const SCANCODE_CRSEL = 163;
export const SCANCODE_EXSEL = 164;
export const SCANCODE_KP_00 = 176;
export const SCANCODE_KP_000 = 177;
export const SCANCODE_THOUSANDSSEPARATOR = 178;
export const SCANCODE_DECIMALSEPARATOR = 179;
export const SCANCODE_CURRENCYUNIT = 180;
export const SCANCODE_CURRENCYSUBUNIT = 181;
export const SCANCODE_KP_LEFTPAREN = 182;
export const SCANCODE_KP_RIGHTPAREN = 183;
export const SCANCODE_KP_LEFTBRACE = 184;
export const SCANCODE_KP_RIGHTBRACE = 185;
export const SCANCODE_KP_TAB = 186;
export const SCANCODE_KP_BACKSPACE = 187;
export const SCANCODE_KP_A = 188;
export const SCANCODE_KP_B = 189;
export const SCANCODE_KP_C = 190;
export const SCANCODE_KP_D = 191;
export const SCANCODE_KP_E = 192;
export const SCANCODE_KP_F = 193;
export const SCANCODE_KP_XOR = 194;
export const SCANCODE_KP_POWER = 195;
export const SCANCODE_KP_PERCENT = 196;
export const SCANCODE_KP_LESS = 197;
export const SCANCODE_KP_GREATER = 198;
export const SCANCODE_KP_AMPERSAND = 199;
export const SCANCODE_KP_DBLAMPERSAND = 200;
export const SCANCODE_KP_VERTICALBAR = 201;
export const SCANCODE_KP_DBLVERTICALBAR = 202;
export const SCANCODE_KP_COLON = 203;
export const SCANCODE_KP_HASH = 204;
export const SCANCODE_KP_SPACE = 205;
export const SCANCODE_KP_AT = 206;
export const SCANCODE_KP_EXCLAM = 207;
export const SCANCODE_KP_MEMSTORE = 208;
export const SCANCODE_KP_MEMRECALL = 209;
export const SCANCODE_KP_MEMCLEAR = 210;
export const SCANCODE_KP_MEMADD = 211;
export const SCANCODE_KP_MEMSUBTRACT = 212;
export const SCANCODE_KP_MEMMULTIPLY = 213;
export const SCANCODE_KP_MEMDIVIDE = 214;
export const SCANCODE_KP_PLUSMINUS = 215;
export const SCANCODE_KP_CLEAR = 216;
export const SCANCODE_KP_CLEARENTRY = 217;
export const SCANCODE_KP_BINARY = 218;
export const SCANCODE_KP_OCTAL = 219;
export const SCANCODE_KP_DECIMAL = 220;
export const SCANCODE_KP_HEXADECIMAL = 221;
export const SCANCODE_LCTRL = 224;
export const SCANCODE_LSHIFT = 225;
export const SCANCODE_LALT = 226;
export const SCANCODE_LGUI = 227;
export const SCANCODE_RCTRL = 228;
export const SCANCODE_RSHIFT = 229;
export const SCANCODE_RALT = 230;
export const SCANCODE_RGUI = 231;
export const SCANCODE_MODE = 257;
export const SCANCODE_AUDIONEXT = 258;
export const SCANCODE_AUDIOPREV = 259;
export const SCANCODE_AUDIOSTOP = 260;
export const SCANCODE_AUDIOPLAY = 261;
export const SCANCODE_AUDIOMUTE = 262;
export const SCANCODE_MEDIASELECT = 263;
export const SCANCODE_WWW = 264;
export const SCANCODE_MAIL = 265;
export const SCANCODE_CALCULATOR = 266;
export const SCANCODE_COMPUTER = 267;
export const SCANCODE_AC_SEARCH = 268;
export const SCANCODE_AC_HOME = 269;
export const SCANCODE_AC_BACK = 270;
export const SCANCODE_AC_FORWARD = 271;
export const SCANCODE_AC_STOP = 272;
export const SCANCODE_AC_REFRESH = 273;
export const SCANCODE_AC_BOOKMARKS = 274;
export const SCANCODE_BRIGHTNESSDOWN = 275;
export const SCANCODE_BRIGHTNESSUP = 276;
export const SCANCODE_DISPLAYSWITCH = 277;
export const SCANCODE_KBDILLUMTOGGLE = 278;
export const SCANCODE_KBDILLUMDOWN = 279;
export const SCANCODE_KBDILLUMUP = 280;
export const SCANCODE_EJECT = 281;
export const SCANCODE_SLEEP = 282;
export const SCANCODE_APP1 = 283;
export const SCANCODE_APP2 = 284;
export const SCANCODE_AUDIOREWIND = 285;
export const SCANCODE_AUDIOFASTFORWARD = 286;
export const NUM_SCANCODES = 512;

// KeyCode
export const SDLK_UNKNOWN = 0;
export const SDLK_RETURN = "\r";
export const SDLK_ESCAPE = "\x1B";
export const SDLK_BACKSPACE = "\b";
export const SDLK_TAB = "\t";
export const SDLK_SPACE = " ";
export const SDLK_EXCLAIM = "!";
export const SDLK_QUOTEDBL = '"';
export const SDLK_HASH = "#";
export const SDLK_PERCENT = "%";
export const SDLK_DOLLAR = "$";
export const SDLK_AMPERSAND = "&";
export const SDLK_QUOTE = "'";
export const SDLK_LEFTPAREN = "(";
export const SDLK_RIGHTPAREN = ")";
export const SDLK_ASTERISK = "*";
export const SDLK_PLUS = "+";
export const SDLK_COMMA = ",";
export const SDLK_MINUS = "-";
export const SDLK_PERIOD = ".";
export const SDLK_SLASH = "/";
export const SDLK_0 = "0";
export const SDLK_1 = "1";
export const SDLK_2 = "2";
export const SDLK_3 = "3";
export const SDLK_4 = "4";
export const SDLK_5 = "5";
export const SDLK_6 = "6";
export const SDLK_7 = "7";
export const SDLK_8 = "8";
export const SDLK_9 = "9";
export const SDLK_COLON = ":";
export const SDLK_SEMICOLON = "";
export const SDLK_LESS = "<";
export const SDLK_EQUALS = "=";
export const SDLK_GREATER = ">";
export const SDLK_QUESTION = "?";
export const SDLK_AT = "@";
export const SDLK_LEFTBRACKET = "[";
export const SDLK_BACKSLASH = "\\";
export const SDLK_RIGHTBRACKET = "]";
export const SDLK_CARET = "^";
export const SDLK_UNDERSCORE = "_";
export const SDLK_BACKQUOTE = "`";
export const SDLK_a = "a";
export const SDLK_b = "b";
export const SDLK_c = "c";
export const SDLK_d = "d";
export const SDLK_e = "e";
export const SDLK_f = "f";
export const SDLK_g = "g";
export const SDLK_h = "h";
export const SDLK_i = "i";
export const SDLK_j = "j";
export const SDLK_k = "k";
export const SDLK_l = "l";
export const SDLK_m = "m";
export const SDLK_n = "n";
export const SDLK_o = "o";
export const SDLK_p = "p";
export const SDLK_q = "q";
export const SDLK_r = "r";
export const SDLK_s = "s";
export const SDLK_t = "t";
export const SDLK_u = "u";
export const SDLK_v = "v";
export const SDLK_w = "w";
export const SDLK_x = "x";
export const SDLK_y = "y";
export const SDLK_z = "z";
export const SDLK_CAPSLOCK = SCANCODE_TO_KEYCODE(SCANCODE_CAPSLOCK);
export const SDLK_F1 = SCANCODE_TO_KEYCODE(SCANCODE_F1);
export const SDLK_F2 = SCANCODE_TO_KEYCODE(SCANCODE_F2);
export const SDLK_F3 = SCANCODE_TO_KEYCODE(SCANCODE_F3);
export const SDLK_F4 = SCANCODE_TO_KEYCODE(SCANCODE_F4);
export const SDLK_F5 = SCANCODE_TO_KEYCODE(SCANCODE_F5);
export const SDLK_F6 = SCANCODE_TO_KEYCODE(SCANCODE_F6);
export const SDLK_F7 = SCANCODE_TO_KEYCODE(SCANCODE_F7);
export const SDLK_F8 = SCANCODE_TO_KEYCODE(SCANCODE_F8);
export const SDLK_F9 = SCANCODE_TO_KEYCODE(SCANCODE_F9);
export const SDLK_F10 = SCANCODE_TO_KEYCODE(SCANCODE_F10);
export const SDLK_F11 = SCANCODE_TO_KEYCODE(SCANCODE_F11);
export const SDLK_F12 = SCANCODE_TO_KEYCODE(SCANCODE_F12);
export const SDLK_PRINTSCREEN = SCANCODE_TO_KEYCODE(SCANCODE_PRINTSCREEN);
export const SDLK_SCROLLLOCK = SCANCODE_TO_KEYCODE(SCANCODE_SCROLLLOCK);
export const SDLK_PAUSE = SCANCODE_TO_KEYCODE(SCANCODE_PAUSE);
export const SDLK_INSERT = SCANCODE_TO_KEYCODE(SCANCODE_INSERT);
export const SDLK_HOME = SCANCODE_TO_KEYCODE(SCANCODE_HOME);
export const SDLK_PAGEUP = SCANCODE_TO_KEYCODE(SCANCODE_PAGEUP);
export const SDLK_DELETE = "\x7F";
export const SDLK_END = SCANCODE_TO_KEYCODE(SCANCODE_END);
export const SDLK_PAGEDOWN = SCANCODE_TO_KEYCODE(SCANCODE_PAGEDOWN);
export const SDLK_RIGHT = SCANCODE_TO_KEYCODE(SCANCODE_RIGHT);
export const SDLK_LEFT = SCANCODE_TO_KEYCODE(SCANCODE_LEFT);
export const SDLK_DOWN = SCANCODE_TO_KEYCODE(SCANCODE_DOWN);
export const SDLK_UP = SCANCODE_TO_KEYCODE(SCANCODE_UP);
export const SDLK_NUMLOCKCLEAR = SCANCODE_TO_KEYCODE(SCANCODE_NUMLOCKCLEAR);
export const SDLK_KP_DIVIDE = SCANCODE_TO_KEYCODE(SCANCODE_KP_DIVIDE);
export const SDLK_KP_MULTIPLY = SCANCODE_TO_KEYCODE(SCANCODE_KP_MULTIPLY);
export const SDLK_KP_MINUS = SCANCODE_TO_KEYCODE(SCANCODE_KP_MINUS);
export const SDLK_KP_PLUS = SCANCODE_TO_KEYCODE(SCANCODE_KP_PLUS);
export const SDLK_KP_ENTER = SCANCODE_TO_KEYCODE(SCANCODE_KP_ENTER);
export const SDLK_KP_1 = SCANCODE_TO_KEYCODE(SCANCODE_KP_1);
export const SDLK_KP_2 = SCANCODE_TO_KEYCODE(SCANCODE_KP_2);
export const SDLK_KP_3 = SCANCODE_TO_KEYCODE(SCANCODE_KP_3);
export const SDLK_KP_4 = SCANCODE_TO_KEYCODE(SCANCODE_KP_4);
export const SDLK_KP_5 = SCANCODE_TO_KEYCODE(SCANCODE_KP_5);
export const SDLK_KP_6 = SCANCODE_TO_KEYCODE(SCANCODE_KP_6);
export const SDLK_KP_7 = SCANCODE_TO_KEYCODE(SCANCODE_KP_7);
export const SDLK_KP_8 = SCANCODE_TO_KEYCODE(SCANCODE_KP_8);
export const SDLK_KP_9 = SCANCODE_TO_KEYCODE(SCANCODE_KP_9);
export const SDLK_KP_0 = SCANCODE_TO_KEYCODE(SCANCODE_KP_0);
export const SDLK_KP_PERIOD = SCANCODE_TO_KEYCODE(SCANCODE_KP_PERIOD);
export const SDLK_APPLICATION = SCANCODE_TO_KEYCODE(SCANCODE_APPLICATION);
export const SDLK_POWER = SCANCODE_TO_KEYCODE(SCANCODE_POWER);
export const SDLK_KP_EQUALS = SCANCODE_TO_KEYCODE(SCANCODE_KP_EQUALS);
export const SDLK_F13 = SCANCODE_TO_KEYCODE(SCANCODE_F13);
export const SDLK_F14 = SCANCODE_TO_KEYCODE(SCANCODE_F14);
export const SDLK_F15 = SCANCODE_TO_KEYCODE(SCANCODE_F15);
export const SDLK_F16 = SCANCODE_TO_KEYCODE(SCANCODE_F16);
export const SDLK_F17 = SCANCODE_TO_KEYCODE(SCANCODE_F17);
export const SDLK_F18 = SCANCODE_TO_KEYCODE(SCANCODE_F18);
export const SDLK_F19 = SCANCODE_TO_KEYCODE(SCANCODE_F19);
export const SDLK_F20 = SCANCODE_TO_KEYCODE(SCANCODE_F20);
export const SDLK_F21 = SCANCODE_TO_KEYCODE(SCANCODE_F21);
export const SDLK_F22 = SCANCODE_TO_KEYCODE(SCANCODE_F22);
export const SDLK_F23 = SCANCODE_TO_KEYCODE(SCANCODE_F23);
export const SDLK_F24 = SCANCODE_TO_KEYCODE(SCANCODE_F24);
export const SDLK_EXECUTE = SCANCODE_TO_KEYCODE(SCANCODE_EXECUTE);
export const SDLK_HELP = SCANCODE_TO_KEYCODE(SCANCODE_HELP);
export const SDLK_MENU = SCANCODE_TO_KEYCODE(SCANCODE_MENU);
export const SDLK_SELECT = SCANCODE_TO_KEYCODE(SCANCODE_SELECT);
export const SDLK_STOP = SCANCODE_TO_KEYCODE(SCANCODE_STOP);
export const SDLK_AGAIN = SCANCODE_TO_KEYCODE(SCANCODE_AGAIN);
export const SDLK_UNDO = SCANCODE_TO_KEYCODE(SCANCODE_UNDO);
export const SDLK_CUT = SCANCODE_TO_KEYCODE(SCANCODE_CUT);
export const SDLK_COPY = SCANCODE_TO_KEYCODE(SCANCODE_COPY);
export const SDLK_PASTE = SCANCODE_TO_KEYCODE(SCANCODE_PASTE);
export const SDLK_FIND = SCANCODE_TO_KEYCODE(SCANCODE_FIND);
export const SDLK_MUTE = SCANCODE_TO_KEYCODE(SCANCODE_MUTE);
export const SDLK_VOLUMEUP = SCANCODE_TO_KEYCODE(SCANCODE_VOLUMEUP);
export const SDLK_VOLUMEDOWN = SCANCODE_TO_KEYCODE(SCANCODE_VOLUMEDOWN);
export const SDLK_KP_COMMA = SCANCODE_TO_KEYCODE(SCANCODE_KP_COMMA);
export const SDLK_KP_EQUALSAS400 = SCANCODE_TO_KEYCODE(SCANCODE_KP_EQUALSAS400);
export const SDLK_ALTERASE = SCANCODE_TO_KEYCODE(SCANCODE_ALTERASE);
export const SDLK_SYSREQ = SCANCODE_TO_KEYCODE(SCANCODE_SYSREQ);
export const SDLK_CANCEL = SCANCODE_TO_KEYCODE(SCANCODE_CANCEL);
export const SDLK_CLEAR = SCANCODE_TO_KEYCODE(SCANCODE_CLEAR);
export const SDLK_PRIOR = SCANCODE_TO_KEYCODE(SCANCODE_PRIOR);
export const SDLK_RETURN2 = SCANCODE_TO_KEYCODE(SCANCODE_RETURN2);
export const SDLK_SEPARATOR = SCANCODE_TO_KEYCODE(SCANCODE_SEPARATOR);
export const SDLK_OUT = SCANCODE_TO_KEYCODE(SCANCODE_OUT);
export const SDLK_OPER = SCANCODE_TO_KEYCODE(SCANCODE_OPER);
export const SDLK_CLEARAGAIN = SCANCODE_TO_KEYCODE(SCANCODE_CLEARAGAIN);
export const SDLK_CRSEL = SCANCODE_TO_KEYCODE(SCANCODE_CRSEL);
export const SDLK_EXSEL = SCANCODE_TO_KEYCODE(SCANCODE_EXSEL);
export const SDLK_KP_00 = SCANCODE_TO_KEYCODE(SCANCODE_KP_00);
export const SDLK_KP_000 = SCANCODE_TO_KEYCODE(SCANCODE_KP_000);
export const SDLK_THOUSANDSSEPARATOR = SCANCODE_TO_KEYCODE(SCANCODE_THOUSANDSSEPARATOR);
export const SDLK_DECIMALSEPARATOR = SCANCODE_TO_KEYCODE(SCANCODE_DECIMALSEPARATOR);
export const SDLK_CURRENCYUNIT = SCANCODE_TO_KEYCODE(SCANCODE_CURRENCYUNIT);
export const SDLK_CURRENCYSUBUNIT = SCANCODE_TO_KEYCODE(SCANCODE_CURRENCYSUBUNIT);
export const SDLK_KP_LEFTPAREN = SCANCODE_TO_KEYCODE(SCANCODE_KP_LEFTPAREN);
export const SDLK_KP_RIGHTPAREN = SCANCODE_TO_KEYCODE(SCANCODE_KP_RIGHTPAREN);
export const SDLK_KP_LEFTBRACE = SCANCODE_TO_KEYCODE(SCANCODE_KP_LEFTBRACE);
export const SDLK_KP_RIGHTBRACE = SCANCODE_TO_KEYCODE(SCANCODE_KP_RIGHTBRACE);
export const SDLK_KP_TAB = SCANCODE_TO_KEYCODE(SCANCODE_KP_TAB);
export const SDLK_KP_BACKSPACE = SCANCODE_TO_KEYCODE(SCANCODE_KP_BACKSPACE);
export const SDLK_KP_A = SCANCODE_TO_KEYCODE(SCANCODE_KP_A);
export const SDLK_KP_B = SCANCODE_TO_KEYCODE(SCANCODE_KP_B);
export const SDLK_KP_C = SCANCODE_TO_KEYCODE(SCANCODE_KP_C);
export const SDLK_KP_D = SCANCODE_TO_KEYCODE(SCANCODE_KP_D);
export const SDLK_KP_E = SCANCODE_TO_KEYCODE(SCANCODE_KP_E);
export const SDLK_KP_F = SCANCODE_TO_KEYCODE(SCANCODE_KP_F);
export const SDLK_KP_XOR = SCANCODE_TO_KEYCODE(SCANCODE_KP_XOR);
export const SDLK_KP_POWER = SCANCODE_TO_KEYCODE(SCANCODE_KP_POWER);
export const SDLK_KP_PERCENT = SCANCODE_TO_KEYCODE(SCANCODE_KP_PERCENT);
export const SDLK_KP_LESS = SCANCODE_TO_KEYCODE(SCANCODE_KP_LESS);
export const SDLK_KP_GREATER = SCANCODE_TO_KEYCODE(SCANCODE_KP_GREATER);
export const SDLK_KP_AMPERSAND = SCANCODE_TO_KEYCODE(SCANCODE_KP_AMPERSAND);
export const SDLK_KP_DBLAMPERSAND = SCANCODE_TO_KEYCODE(SCANCODE_KP_DBLAMPERSAND);
export const SDLK_KP_VERTICALBAR = SCANCODE_TO_KEYCODE(SCANCODE_KP_VERTICALBAR);
export const SDLK_KP_DBLVERTICALBAR = SCANCODE_TO_KEYCODE(SCANCODE_KP_DBLVERTICALBAR);
export const SDLK_KP_COLON = SCANCODE_TO_KEYCODE(SCANCODE_KP_COLON);
export const SDLK_KP_HASH = SCANCODE_TO_KEYCODE(SCANCODE_KP_HASH);
export const SDLK_KP_SPACE = SCANCODE_TO_KEYCODE(SCANCODE_KP_SPACE);
export const SDLK_KP_AT = SCANCODE_TO_KEYCODE(SCANCODE_KP_AT);
export const SDLK_KP_EXCLAM = SCANCODE_TO_KEYCODE(SCANCODE_KP_EXCLAM);
export const SDLK_KP_MEMSTORE = SCANCODE_TO_KEYCODE(SCANCODE_KP_MEMSTORE);
export const SDLK_KP_MEMRECALL = SCANCODE_TO_KEYCODE(SCANCODE_KP_MEMRECALL);
export const SDLK_KP_MEMCLEAR = SCANCODE_TO_KEYCODE(SCANCODE_KP_MEMCLEAR);
export const SDLK_KP_MEMADD = SCANCODE_TO_KEYCODE(SCANCODE_KP_MEMADD);
export const SDLK_KP_MEMSUBTRACT = SCANCODE_TO_KEYCODE(SCANCODE_KP_MEMSUBTRACT);
export const SDLK_KP_MEMMULTIPLY = SCANCODE_TO_KEYCODE(SCANCODE_KP_MEMMULTIPLY);
export const SDLK_KP_MEMDIVIDE = SCANCODE_TO_KEYCODE(SCANCODE_KP_MEMDIVIDE);
export const SDLK_KP_PLUSMINUS = SCANCODE_TO_KEYCODE(SCANCODE_KP_PLUSMINUS);
export const SDLK_KP_CLEAR = SCANCODE_TO_KEYCODE(SCANCODE_KP_CLEAR);
export const SDLK_KP_CLEARENTRY = SCANCODE_TO_KEYCODE(SCANCODE_KP_CLEARENTRY);
export const SDLK_KP_BINARY = SCANCODE_TO_KEYCODE(SCANCODE_KP_BINARY);
export const SDLK_KP_OCTAL = SCANCODE_TO_KEYCODE(SCANCODE_KP_OCTAL);
export const SDLK_KP_DECIMAL = SCANCODE_TO_KEYCODE(SCANCODE_KP_DECIMAL);
export const SDLK_KP_HEXADECIMAL = SCANCODE_TO_KEYCODE(SCANCODE_KP_HEXADECIMAL);
export const SDLK_LCTRL = SCANCODE_TO_KEYCODE(SCANCODE_LCTRL);
export const SDLK_LSHIFT = SCANCODE_TO_KEYCODE(SCANCODE_LSHIFT);
export const SDLK_LALT = SCANCODE_TO_KEYCODE(SCANCODE_LALT);
export const SDLK_LGUI = SCANCODE_TO_KEYCODE(SCANCODE_LGUI);
export const SDLK_RCTRL = SCANCODE_TO_KEYCODE(SCANCODE_RCTRL);
export const SDLK_RSHIFT = SCANCODE_TO_KEYCODE(SCANCODE_RSHIFT);
export const SDLK_RALT = SCANCODE_TO_KEYCODE(SCANCODE_RALT);
export const SDLK_RGUI = SCANCODE_TO_KEYCODE(SCANCODE_RGUI);
export const SDLK_MODE = SCANCODE_TO_KEYCODE(SCANCODE_MODE);
export const SDLK_AUDIONEXT = SCANCODE_TO_KEYCODE(SCANCODE_AUDIONEXT);
export const SDLK_AUDIOPREV = SCANCODE_TO_KEYCODE(SCANCODE_AUDIOPREV);
export const SDLK_AUDIOSTOP = SCANCODE_TO_KEYCODE(SCANCODE_AUDIOSTOP);
export const SDLK_AUDIOPLAY = SCANCODE_TO_KEYCODE(SCANCODE_AUDIOPLAY);
export const SDLK_AUDIOMUTE = SCANCODE_TO_KEYCODE(SCANCODE_AUDIOMUTE);
export const SDLK_MEDIASELECT = SCANCODE_TO_KEYCODE(SCANCODE_MEDIASELECT);
export const SDLK_WWW = SCANCODE_TO_KEYCODE(SCANCODE_WWW);
export const SDLK_MAIL = SCANCODE_TO_KEYCODE(SCANCODE_MAIL);
export const SDLK_CALCULATOR = SCANCODE_TO_KEYCODE(SCANCODE_CALCULATOR);
export const SDLK_COMPUTER = SCANCODE_TO_KEYCODE(SCANCODE_COMPUTER);
export const SDLK_AC_SEARCH = SCANCODE_TO_KEYCODE(SCANCODE_AC_SEARCH);
export const SDLK_AC_HOME = SCANCODE_TO_KEYCODE(SCANCODE_AC_HOME);
export const SDLK_AC_BACK = SCANCODE_TO_KEYCODE(SCANCODE_AC_BACK);
export const SDLK_AC_FORWARD = SCANCODE_TO_KEYCODE(SCANCODE_AC_FORWARD);
export const SDLK_AC_STOP = SCANCODE_TO_KEYCODE(SCANCODE_AC_STOP);
export const SDLK_AC_REFRESH = SCANCODE_TO_KEYCODE(SCANCODE_AC_REFRESH);
export const SDLK_AC_BOOKMARKS = SCANCODE_TO_KEYCODE(SCANCODE_AC_BOOKMARKS);
export const SDLK_BRIGHTNESSDOWN = SCANCODE_TO_KEYCODE(SCANCODE_BRIGHTNESSDOWN);
export const SDLK_BRIGHTNESSUP = SCANCODE_TO_KEYCODE(SCANCODE_BRIGHTNESSUP);
export const SDLK_DISPLAYSWITCH = SCANCODE_TO_KEYCODE(SCANCODE_DISPLAYSWITCH);
export const SDLK_KBDILLUMTOGGLE = SCANCODE_TO_KEYCODE(SCANCODE_KBDILLUMTOGGLE);
export const SDLK_KBDILLUMDOWN = SCANCODE_TO_KEYCODE(SCANCODE_KBDILLUMDOWN);
export const SDLK_KBDILLUMUP = SCANCODE_TO_KEYCODE(SCANCODE_KBDILLUMUP);
export const SDLK_EJECT = SCANCODE_TO_KEYCODE(SCANCODE_EJECT);
export const SDLK_SLEEP = SCANCODE_TO_KEYCODE(SCANCODE_SLEEP);
export const SDLK_APP1 = SCANCODE_TO_KEYCODE(SCANCODE_APP1);
export const SDLK_APP2 = SCANCODE_TO_KEYCODE(SCANCODE_APP2);
export const SDLK_AUDIOREWIND = SCANCODE_TO_KEYCODE(SCANCODE_AUDIOREWIND);
export const SDLK_AUDIOFASTFORWARD = SCANCODE_TO_KEYCODE(SCANCODE_AUDIOFASTFORWARD);

// PackedLayout
export const PACKEDLAYOUT_NONE = 0;
export const PACKEDLAYOUT_332 = 1;
export const PACKEDLAYOUT_4444 = 2;
export const PACKEDLAYOUT_1555 = 3;
export const PACKEDLAYOUT_5551 = 4;
export const PACKEDLAYOUT_565 = 5;
export const PACKEDLAYOUT_8888 = 6;
export const PACKEDLAYOUT_2101010 = 7;
export const PACKEDLAYOUT_1010102 = 8;

// PackedOrder
export const PACKEDORDER_NONE = 0;
export const PACKEDORDER_XRGB = 1;
export const PACKEDORDER_RGBX = 2;
export const PACKEDORDER_ARGB = 3;
export const PACKEDORDER_RGBA = 4;
export const PACKEDORDER_XBGR = 5;
export const PACKEDORDER_BGRX = 6;
export const PACKEDORDER_ABGR = 7;
export const PACKEDORDER_BGRA = 8;

// PixelType
export const PIXELTYPE_UNKNOWN = 0;
export const PIXELTYPE_INDEX1 = 1;
export const PIXELTYPE_INDEX4 = 2;
export const PIXELTYPE_INDEX8 = 3;
export const PIXELTYPE_PACKED8 = 4;
export const PIXELTYPE_PACKED16 = 5;
export const PIXELTYPE_PACKED32 = 6;
export const PIXELTYPE_ARRAYU8 = 7;
export const PIXELTYPE_ARRAYU16 = 8;
export const PIXELTYPE_ARRAYU32 = 9;
export const PIXELTYPE_ARRAYF16 = 10;
export const PIXELTYPE_ARRAYF32 = 11;

// RendererFlags
export const RENDERER_SOFTWARE = 0x00000001;
export const RENDERER_ACCELERATED = 0x00000002;
export const RENDERER_PRESENTVSYNC = 0x00000004;
export const RENDERER_TARGETTEXTURE = 0x00000008;

// RendererFlip
export const FLIP_NONE = 0x00000000;
export const FLIP_HORIZONTAL = 0x00000001;
export const FLIP_VERTICAL = 0x00000002;

// ScaleMode
export const ScaleModeNearest = 0;
export const ScaleModeLinear = 1;
export const ScaleModeBest = 2;

// TextureAccess
export const TEXTUREACCESS_STATIC = 0;
export const TEXTUREACCESS_STREAMING = 1;
export const TEXTUREACCESS_TARGET = 2;

// TextureModulate
export const TEXTUREMODULATE_NONE = 0x00000000;
export const TEXTUREMODULATE_COLOR = 0x00000001;
export const TEXTUREMODULATE_ALPHA = 0x00000002;

// WindowEventID
export const WINDOWEVENT_NONE = 0;
export const WINDOWEVENT_SHOWN = 1;
export const WINDOWEVENT_HIDDEN = 2;
export const WINDOWEVENT_EXPOSED = 3;
export const WINDOWEVENT_MOVED = 4;
export const WINDOWEVENT_RESIZED = 5;
export const WINDOWEVENT_SIZE_CHANGED = 6;
export const WINDOWEVENT_MINIMIZED = 7;
export const WINDOWEVENT_MAXIMIZED = 8;
export const WINDOWEVENT_RESTORED = 9;
export const WINDOWEVENT_ENTER = 10;
export const WINDOWEVENT_LEAVE = 11;
export const WINDOWEVENT_FOCUS_GAINED = 12;
export const WINDOWEVENT_FOCUS_LOST = 13;
export const WINDOWEVENT_CLOSE = 14;
export const WINDOWEVENT_TAKE_FOCUS = 15;
export const WINDOWEVENT_HIT_TEST = 16;
export const WINDOWEVENT_ICCPROF_CHANGED = 17;
export const WINDOWEVENT_DISPLAY_CHANGED = 18;

// WindowFlags
export const WINDOW_FULLSCREEN = 0x00000001;
export const WINDOW_OPENGL = 0x00000002;
export const WINDOW_SHOWN = 0x00000004;
export const WINDOW_HIDDEN = 0x00000008;
export const WINDOW_BORDERLESS = 0x00000010;
export const WINDOW_RESIZABLE = 0x00000020;
export const WINDOW_MINIMIZED = 0x00000040;
export const WINDOW_MAXIMIZED = 0x00000080;
export const WINDOW_MOUSE_GRABBED = 0x00000100;
export const WINDOW_INPUT_FOCUS = 0x00000200;
export const WINDOW_MOUSE_FOCUS = 0x00000400;
export const WINDOW_FULLSCREEN_DESKTOP = (WINDOW_FULLSCREEN | 0x00001000);
export const WINDOW_FOREIGN = 0x00000800;
export const WINDOW_ALLOW_HIGHDPI = 0x00002000;
export const WINDOW_MOUSE_CAPTURE = 0x00004000;
export const WINDOW_ALWAYS_ON_TOP = 0x00008000;
export const WINDOW_SKIP_TASKBAR = 0x00010000;
export const WINDOW_UTILITY = 0x00020000;
export const WINDOW_TOOLTIP = 0x00040000;
export const WINDOW_POPUP_MENU = 0x00080000;
export const WINDOW_KEYBOARD_GRABBED = 0x00100000;
export const WINDOW_VULKAN = 0x10000000;
export const WINDOW_METAL = 0x20000000;
export const WINDOW_INPUT_GRABBED = WINDOW_MOUSE_GRABBED;

// WindowPos
export const WINDOWPOS_UNDEFINED = 0x1fff0000;
export const WINDOWPOS_CENTERED = 0x2FFF0000;
