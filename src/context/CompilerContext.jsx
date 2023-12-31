import React, { createContext, useContext, useState } from "react";

const CompilerContext = createContext();

export const CompilerProvider = ({ children }) => {
  const [compileResult, setCompileResult] = useState([]);

  const [compileError, setCompileError] = useState([]);

  const [compileErrorLex, setCompileErrorLex] = useState([]);

  function resetStates() {
    setCompileResult([]);
    setCompileError([]);
    setCompileErrorLex([]);
  }

  var gramatica = (function () {
    var o = function (k, v, o, l) {
        for (o = o || {}, l = k.length; l--; o[k[l]] = v);
        return o;
      },
      $V0 = [1, 4],
      $V1 = [1, 5],
      $V2 = [1, 6],
      $V3 = [1, 16],
      $V4 = [1, 12],
      $V5 = [1, 13],
      $V6 = [1, 14],
      $V7 = [1, 15],
      $V8 = [1, 17],
      $V9 = [1, 21],
      $Va = [1, 20],
      $Vb = [1, 22],
      $Vc = [1, 23],
      $Vd = [10, 11, 14, 15, 16, 17, 22],
      $Ve = [2, 5, 7, 12],
      $Vf = [10, 11, 14, 15, 22];
    var parser = {
      trace: function trace() {},
      yy: {},
      symbols_: {
        error: 2,
        ini: 3,
        instrucciones: 4,
        EOF: 5,
        instruccion: 6,
        IMPRIMIR: 7,
        CORIZQ: 8,
        expresion: 9,
        CORDER: 10,
        PTCOMA: 11,
        VARIABLE: 12,
        ASIGNACION: 13,
        MENOS: 14,
        MAS: 15,
        POR: 16,
        DIVIDIDO: 17,
        ENTERO: 18,
        DECIMAL: 19,
        CADENA: 20,
        PARIZQ: 21,
        PARDER: 22,
        $accept: 0,
        $end: 1,
      },
      terminals_: {
        2: "error",
        5: "EOF",
        7: "IMPRIMIR",
        8: "CORIZQ",
        10: "CORDER",
        11: "PTCOMA",
        12: "VARIABLE",
        13: "ASIGNACION",
        14: "MENOS",
        15: "MAS",
        16: "POR",
        17: "DIVIDIDO",
        18: "ENTERO",
        19: "DECIMAL",
        20: "CADENA",
        21: "PARIZQ",
        22: "PARDER",
      },
      productions_: [
        0,
        [3, 2],
        [4, 2],
        [4, 1],
        [4, 1],
        [6, 5],
        [6, 4],
        [9, 2],
        [9, 3],
        [9, 3],
        [9, 3],
        [9, 3],
        [9, 1],
        [9, 1],
        [9, 1],
        [9, 1],
        [9, 3],
      ],
      performAction: function anonymous(
        yytext,
        yyleng,
        yylineno,
        yy,
        yystate /* action[1] */,
        $$ /* vstack */,
        _$ /* lstack */
      ) {
        /* this == yyval */

        var $0 = $$.length - 1;
        switch (yystate) {
          case 4:
            // setCompileErrorTemp(
            //   "Este es un error sintáctico: " +
            //     yytext +
            //     ", en la linea: " +
            //     this._$.first_line +
            //     ", en la columna: " +
            //     this._$.first_column
            // );

            setCompileError((prevCompileError) => [
              ...prevCompileError,
              "Este es un error sintáctico: " +
                yytext +
                ", en la linea: " +
                this._$.first_line +
                ", en la columna: " +
                this._$.first_column,
            ]);

            break;
          case 5:
            //console.log($$[$0 - 2]);
            //setCompileResultTemp($$[$0 - 2]);
            setCompileResult((prevCompileResult) => [
              ...prevCompileResult,
              $$[$0 - 2],
            ]);
            break;
          case 6:
            memoria[$$[$0 - 3]] = $$[$0 - 1];

            break;
          case 7:
            this.$ = $$[$0] * -1;
            break;
          case 8:
            this.$ = $$[$0 - 2] + $$[$0];
            break;
          case 9:
            this.$ = $$[$0 - 2] - $$[$0];
            break;
          case 10:
            this.$ = $$[$0 - 2] * $$[$0];
            break;
          case 11:
            this.$ = $$[$0 - 2] / $$[$0];
            break;
          case 12:
          case 13:
            this.$ = Number($$[$0]);
            break;
          case 14:
            this.$ = $$[$0].slice(1, -1);
            break;
          case 15:
            this.$ = memoria[$$[$0]];
            break;
          case 16:
            this.$ = $$[$0 - 1];
            break;
        }
      },
      table: [
        { 2: $V0, 3: 1, 4: 2, 6: 3, 7: $V1, 12: $V2 },
        { 1: [3] },
        { 5: [1, 7] },
        { 2: $V0, 4: 8, 5: [2, 3], 6: 3, 7: $V1, 12: $V2 },
        { 5: [2, 4] },
        { 8: [1, 9] },
        { 13: [1, 10] },
        { 1: [2, 1] },
        { 5: [2, 2] },
        { 9: 11, 12: $V3, 14: $V4, 18: $V5, 19: $V6, 20: $V7, 21: $V8 },
        { 9: 18, 12: $V3, 14: $V4, 18: $V5, 19: $V6, 20: $V7, 21: $V8 },
        { 10: [1, 19], 14: $V9, 15: $Va, 16: $Vb, 17: $Vc },
        { 9: 24, 12: $V3, 14: $V4, 18: $V5, 19: $V6, 20: $V7, 21: $V8 },
        o($Vd, [2, 12]),
        o($Vd, [2, 13]),
        o($Vd, [2, 14]),
        o($Vd, [2, 15]),
        { 9: 25, 12: $V3, 14: $V4, 18: $V5, 19: $V6, 20: $V7, 21: $V8 },
        { 11: [1, 26], 14: $V9, 15: $Va, 16: $Vb, 17: $Vc },
        { 11: [1, 27] },
        { 9: 28, 12: $V3, 14: $V4, 18: $V5, 19: $V6, 20: $V7, 21: $V8 },
        { 9: 29, 12: $V3, 14: $V4, 18: $V5, 19: $V6, 20: $V7, 21: $V8 },
        { 9: 30, 12: $V3, 14: $V4, 18: $V5, 19: $V6, 20: $V7, 21: $V8 },
        { 9: 31, 12: $V3, 14: $V4, 18: $V5, 19: $V6, 20: $V7, 21: $V8 },
        o($Vd, [2, 7]),
        { 14: $V9, 15: $Va, 16: $Vb, 17: $Vc, 22: [1, 32] },
        o($Ve, [2, 6]),
        o($Ve, [2, 5]),
        o($Vf, [2, 8], { 16: $Vb, 17: $Vc }),
        o($Vf, [2, 9], { 16: $Vb, 17: $Vc }),
        o($Vd, [2, 10]),
        o($Vd, [2, 11]),
        o($Vd, [2, 16]),
      ],
      defaultActions: { 4: [2, 4], 7: [2, 1], 8: [2, 2] },
      parseError: function parseError(str, hash) {
        if (hash.recoverable) {
          this.trace(str);
        } else {
          var error = new Error(str);
          error.hash = hash;
          throw error;
        }
      },
      parse: function parse(input) {
        var self = this,
          stack = [0],
          tstack = [], // token stack
          vstack = [null], // semantic value stack
          lstack = [], // location stack
          table = this.table,
          yytext = "",
          yylineno = 0,
          yyleng = 0,
          recovering = 0,
          TERROR = 2,
          EOF = 1;

        var args = lstack.slice.call(arguments, 1);

        //this.reductionCount = this.shiftCount = 0;

        var lexer = Object.create(this.lexer);
        var sharedState = { yy: {} };
        // copy state
        for (var k in this.yy) {
          if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
          }
        }

        lexer.setInput(input, sharedState.yy);
        sharedState.yy.lexer = lexer;
        sharedState.yy.parser = this;
        if (typeof lexer.yylloc == "undefined") {
          lexer.yylloc = {};
        }
        var yyloc = lexer.yylloc;
        lstack.push(yyloc);

        var ranges = lexer.options && lexer.options.ranges;

        if (typeof sharedState.yy.parseError === "function") {
          this.parseError = sharedState.yy.parseError;
        } else {
          this.parseError = Object.getPrototypeOf(this).parseError;
        }

        function popStack(n) {
          stack.length = stack.length - 2 * n;
          vstack.length = vstack.length - n;
          lstack.length = lstack.length - n;
        }

        _token_stack: var lex = function () {
          var token;
          token = lexer.lex() || EOF;
          // if token isn't its numeric value, convert
          if (typeof token !== "number") {
            token = self.symbols_[token] || token;
          }
          return token;
        };

        var symbol,
          preErrorSymbol,
          state,
          action,
          a,
          r,
          yyval = {},
          p,
          len,
          newState,
          expected;
        while (true) {
          // retreive state number from top of stack
          state = stack[stack.length - 1];

          // use default actions if available
          if (this.defaultActions[state]) {
            action = this.defaultActions[state];
          } else {
            if (symbol === null || typeof symbol == "undefined") {
              symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
          }

          // handle parse error
          _handle_error: if (
            typeof action === "undefined" ||
            !action.length ||
            !action[0]
          ) {
            var error_rule_depth;
            var errStr = "";

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
              var stack_probe = stack.length - 1;
              var depth = 0;

              // try to recover from error
              for (;;) {
                // check for error recovery rule in this state
                if (TERROR.toString() in table[state]) {
                  return depth;
                }
                if (state === 0 || stack_probe < 2) {
                  return false; // No suitable error recovery rule available.
                }
                stack_probe -= 2; // popStack(1): [symbol, action]
                state = stack[stack_probe];
                ++depth;
              }
            }

            if (!recovering) {
              // first see if there's any chance at hitting an error recovery rule:
              error_rule_depth = locateNearestErrorRecoveryRule(state);

              // Report error
              expected = [];
              for (p in table[state]) {
                if (this.terminals_[p] && p > TERROR) {
                  expected.push("'" + this.terminals_[p] + "'");
                }
              }
              if (lexer.showPosition) {
                errStr =
                  "Parse error on line " +
                  (yylineno + 1) +
                  ":\n" +
                  lexer.showPosition() +
                  "\nExpecting " +
                  expected.join(", ") +
                  ", got '" +
                  (this.terminals_[symbol] || symbol) +
                  "'";
              } else {
                errStr =
                  "Parse error on line " +
                  (yylineno + 1) +
                  ": Unexpected " +
                  (symbol == EOF
                    ? "end of input"
                    : "'" + (this.terminals_[symbol] || symbol) + "'");
              }
              this.parseError(errStr, {
                text: lexer.match,
                token: this.terminals_[symbol] || symbol,
                line: lexer.yylineno,
                loc: yyloc,
                expected: expected,
                recoverable: error_rule_depth !== false,
              });
            } else if (preErrorSymbol !== EOF) {
              error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
              if (symbol === EOF || preErrorSymbol === EOF) {
                throw new Error(
                  errStr ||
                    "Parsing halted while starting to recover from another error."
                );
              }

              // discard current lookahead and grab another
              yyleng = lexer.yyleng;
              yytext = lexer.yytext;
              yylineno = lexer.yylineno;
              yyloc = lexer.yylloc;
              symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
              throw new Error(
                errStr ||
                  "Parsing halted. No suitable error recovery rule available."
              );
            }
            popStack(error_rule_depth);

            preErrorSymbol = symbol == TERROR ? null : symbol; // save the lookahead token
            symbol = TERROR; // insert generic error symbol as new lookahead
            state = stack[stack.length - 1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
          }

          // this shouldn't happen, unless resolve defaults are off
          if (action[0] instanceof Array && action.length > 1) {
            throw new Error(
              "Parse Error: multiple actions possible at state: " +
                state +
                ", token: " +
                symbol
            );
          }

          switch (action[0]) {
            case 1: // shift
              //this.shiftCount++;

              stack.push(symbol);
              vstack.push(lexer.yytext);
              lstack.push(lexer.yylloc);
              stack.push(action[1]); // push state
              symbol = null;
              if (!preErrorSymbol) {
                // normal execution/no error
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                  recovering--;
                }
              } else {
                // error just occurred, resume old lookahead f/ before error
                symbol = preErrorSymbol;
                preErrorSymbol = null;
              }
              break;

            case 2:
              // reduce
              //this.reductionCount++;

              len = this.productions_[action[1]][1];

              // perform semantic action
              yyval.$ = vstack[vstack.length - len]; // default to $$ = $1
              // default location, uses first token for firsts, last for lasts
              yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column,
              };
              if (ranges) {
                yyval._$.range = [
                  lstack[lstack.length - (len || 1)].range[0],
                  lstack[lstack.length - 1].range[1],
                ];
              }
              r = this.performAction.apply(
                yyval,
                [
                  yytext,
                  yyleng,
                  yylineno,
                  sharedState.yy,
                  action[1],
                  vstack,
                  lstack,
                ].concat(args)
              );

              if (typeof r !== "undefined") {
                return r;
              }

              // pop off stack
              if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
              }

              stack.push(this.productions_[action[1]][0]); // push nonterminal (reduce)
              vstack.push(yyval.$);
              lstack.push(yyval._$);
              // goto new state = table[STATE][NONTERMINAL]
              newState =
                table[stack[stack.length - 2]][stack[stack.length - 1]];
              stack.push(newState);
              break;

            case 3:
              // accept
              return true;
          }
        }

        return true;
      },
    };

    /* Código del parser */
    const memoria = {};
    window.parser = parser;
    /* generated by jison-lex 0.3.4 */
    var lexer = (function () {
      var lexer = {
        EOF: 1,

        parseError: function parseError(str, hash) {
          if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
          } else {
            throw new Error(str);
          }
        },

        // resets the lexer, sets new input
        setInput: function (input, yy) {
          this.yy = yy || this.yy || {};
          this._input = input;
          this._more = this._backtrack = this.done = false;
          this.yylineno = this.yyleng = 0;
          this.yytext = this.matched = this.match = "";
          this.conditionStack = ["INITIAL"];
          this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0,
          };
          if (this.options.ranges) {
            this.yylloc.range = [0, 0];
          }
          this.offset = 0;
          return this;
        },

        // consumes and returns one char from the input
        input: function () {
          var ch = this._input[0];
          this.yytext += ch;
          this.yyleng++;
          this.offset++;
          this.match += ch;
          this.matched += ch;
          var lines = ch.match(/(?:\r\n?|\n).*/g);
          if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
          } else {
            this.yylloc.last_column++;
          }
          if (this.options.ranges) {
            this.yylloc.range[1]++;
          }

          this._input = this._input.slice(1);
          return ch;
        },

        // unshifts one char (or a string) into the input
        unput: function (ch) {
          var len = ch.length;
          var lines = ch.split(/(?:\r\n?|\n)/g);

          this._input = ch + this._input;
          this.yytext = this.yytext.substr(0, this.yytext.length - len);
          //this.yyleng -= len;
          this.offset -= len;
          var oldLines = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length - 1);
          this.matched = this.matched.substr(0, this.matched.length - 1);

          if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
          }
          var r = this.yylloc.range;

          this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines
              ? (lines.length === oldLines.length
                  ? this.yylloc.first_column
                  : 0) +
                oldLines[oldLines.length - lines.length].length -
                lines[0].length
              : this.yylloc.first_column - len,
          };

          if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
          }
          this.yyleng = this.yytext.length;
          return this;
        },

        // When called from action, caches matched text and appends it on next action
        more: function () {
          this._more = true;
          return this;
        },

        // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
        reject: function () {
          if (this.options.backtrack_lexer) {
            this._backtrack = true;
          } else {
            return this.parseError(
              "Lexical error on line " +
                (this.yylineno + 1) +
                ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" +
                this.showPosition(),
              {
                text: "",
                token: null,
                line: this.yylineno,
              }
            );
          }
          return this;
        },

        // retain first n characters of the match
        less: function (n) {
          this.unput(this.match.slice(n));
        },

        // displays already matched input, i.e. for error messages
        pastInput: function () {
          var past = this.matched.substr(
            0,
            this.matched.length - this.match.length
          );
          return (
            (past.length > 20 ? "..." : "") +
            past.substr(-20).replace(/\n/g, "")
          );
        },

        // displays upcoming input, i.e. for error messages
        upcomingInput: function () {
          var next = this.match;
          if (next.length < 20) {
            next += this._input.substr(0, 20 - next.length);
          }
          return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(
            /\n/g,
            ""
          );
        },

        // displays the character position where the lexing error occurred, i.e. for error messages
        showPosition: function () {
          var pre = this.pastInput();
          var c = new Array(pre.length + 1).join("-");
          return pre + this.upcomingInput() + "\n" + c + "^";
        },

        // test the lexed token: return FALSE when not a match, otherwise return token
        test_match: function (match, indexed_rule) {
          var token, lines, backup;

          if (this.options.backtrack_lexer) {
            // save context
            backup = {
              yylineno: this.yylineno,
              yylloc: {
                first_line: this.yylloc.first_line,
                last_line: this.last_line,
                first_column: this.yylloc.first_column,
                last_column: this.yylloc.last_column,
              },
              yytext: this.yytext,
              match: this.match,
              matches: this.matches,
              matched: this.matched,
              yyleng: this.yyleng,
              offset: this.offset,
              _more: this._more,
              _input: this._input,
              yy: this.yy,
              conditionStack: this.conditionStack.slice(0),
              done: this.done,
            };
            if (this.options.ranges) {
              backup.yylloc.range = this.yylloc.range.slice(0);
            }
          }

          lines = match[0].match(/(?:\r\n?|\n).*/g);
          if (lines) {
            this.yylineno += lines.length;
          }
          this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines
              ? lines[lines.length - 1].length -
                lines[lines.length - 1].match(/\r?\n?/)[0].length
              : this.yylloc.last_column + match[0].length,
          };
          this.yytext += match[0];
          this.match += match[0];
          this.matches = match;
          this.yyleng = this.yytext.length;
          if (this.options.ranges) {
            this.yylloc.range = [this.offset, (this.offset += this.yyleng)];
          }
          this._more = false;
          this._backtrack = false;
          this._input = this._input.slice(match[0].length);
          this.matched += match[0];
          token = this.performAction.call(
            this,
            this.yy,
            this,
            indexed_rule,
            this.conditionStack[this.conditionStack.length - 1]
          );
          if (this.done && this._input) {
            this.done = false;
          }
          if (token) {
            return token;
          } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
              this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
          }
          return false;
        },

        // return next match in input
        next: function () {
          if (this.done) {
            return this.EOF;
          }
          if (!this._input) {
            this.done = true;
          }

          var token, match, tempMatch, index;
          if (!this._more) {
            this.yytext = "";
            this.match = "";
          }
          var rules = this._currentRules();
          for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (
              tempMatch &&
              (!match || tempMatch[0].length > match[0].length)
            ) {
              match = tempMatch;
              index = i;
              if (this.options.backtrack_lexer) {
                token = this.test_match(tempMatch, rules[i]);
                if (token !== false) {
                  return token;
                } else if (this._backtrack) {
                  match = false;
                  continue; // rule action called reject() implying a rule MISmatch.
                } else {
                  // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                  return false;
                }
              } else if (!this.options.flex) {
                break;
              }
            }
          }
          if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
              return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
          }
          if (this._input === "") {
            return this.EOF;
          } else {
            return this.parseError(
              "Lexical error on line " +
                (this.yylineno + 1) +
                ". Unrecognized text.\n" +
                this.showPosition(),
              {
                text: "",
                token: null,
                line: this.yylineno,
              }
            );
          }
        },

        // return next match that has a token
        lex: function lex() {
          var r = this.next();
          if (r) {
            return r;
          } else {
            return this.lex();
          }
        },

        // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
        begin: function begin(condition) {
          this.conditionStack.push(condition);
        },

        // pop the previously active lexer condition state off the condition stack
        popState: function popState() {
          var n = this.conditionStack.length - 1;
          if (n > 0) {
            return this.conditionStack.pop();
          } else {
            return this.conditionStack[0];
          }
        },

        // produce the lexer rule set which is active for the currently active lexer condition state
        _currentRules: function _currentRules() {
          if (
            this.conditionStack.length &&
            this.conditionStack[this.conditionStack.length - 1]
          ) {
            return this.conditions[
              this.conditionStack[this.conditionStack.length - 1]
            ].rules;
          } else {
            return this.conditions["INITIAL"].rules;
          }
        },

        // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
        topState: function topState(n) {
          n = this.conditionStack.length - 1 - Math.abs(n || 0);
          if (n >= 0) {
            return this.conditionStack[n];
          } else {
            return "INITIAL";
          }
        },

        // alias for begin(condition)
        pushState: function pushState(condition) {
          this.begin(condition);
        },

        // return the number of states currently on the stack
        stateStackSize: function stateStackSize() {
          return this.conditionStack.length;
        },
        options: { "case-insensitive": true },
        performAction: function anonymous(
          yy,
          yy_,
          $avoiding_name_collisions,
          YY_START
        ) {
          var YYSTATE = YY_START;
          switch ($avoiding_name_collisions) {
            case 0:
              return 7;
              break;
            case 1:
              return 11;
              break;
            case 2:
              return 21;
              break;
            case 3:
              return 22;
              break;
            case 4:
              return 8;
              break;
            case 5:
              return 10;
              break;
            case 6:
              return 15;
              break;
            case 7:
              return 14;
              break;
            case 8:
              return 16;
              break;
            case 9:
              return 17;
              break;
            case 10:
              return 13;
              break;
            case 11:
              return 20;
              break;
            case 12:
              break;
            case 13:
              break;
            case 14:
              return 19;
              break;
            case 15:
              return 18;
              break;
            case 16:
              return 12;
              break;
            case 17:
              return 5;
              break;
            case 18:
              // setCompileErrorLexTemp(
              //   "Este es un error léxico: " +
              //     yy_.yytext +
              //     ", en la linea: " +
              //     yy_.yylloc.first_line +
              //     ", en la columna: " +
              //     yy_.yylloc.first_column
              // );

              setCompileErrorLex((prevCompileErrorLex) => [
                ...prevCompileErrorLex,
                "Este es un error léxico: " +
                  yy_.yytext +
                  ", en la linea: " +
                  yy_.yylloc.first_line +
                  ", en la columna: " +
                  yy_.yylloc.first_column,
              ]);

              break;
          }
        },
        rules: [
          /^(?:Imprimir\b)/i,
          /^(?:;)/i,
          /^(?:\()/i,
          /^(?:\))/i,
          /^(?:\[)/i,
          /^(?:\])/i,
          /^(?:\+)/i,
          /^(?:-)/i,
          /^(?:\*)/i,
          /^(?:\/)/i,
          /^(?:=)/i,
          /^(?:"([^"\\]|\\.)*")/i,
          /^(?:[ \r\t]+)/i,
          /^(?:\n)/i,
          /^(?:[0-9]+(\.[0-9]+)?\b)/i,
          /^(?:[0-9]+\b)/i,
          /^(?:[a-zA-Z][a-zA-Z0-9_]*\b)/i,
          /^(?:$)/i,
          /^(?:.)/i,
        ],
        conditions: {
          INITIAL: {
            rules: [
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            ],
            inclusive: true,
          },
        },
      };
      return lexer;
    })();
    parser.lexer = lexer;
    function Parser() {
      this.yy = {};
    }
    Parser.prototype = parser;
    parser.Parser = Parser;
    return new Parser();
  })();

  if (typeof require !== "undefined" && typeof exports !== "undefined") {
    exports.parser = gramatica;
    exports.Parser = gramatica.Parser;
    exports.parse = function () {
      return gramatica.parse.apply(gramatica, arguments);
    };
    exports.main = function commonjsMain(args) {
      if (!args[1]) {
        console.log("Usage: " + args[0] + " FILE");
        process.exit(1);
      }
      var source = require("fs").readFileSync(
        require("path").normalize(args[1]),
        "utf8"
      );
      return exports.parser.parse(source);
    };
    if (typeof module !== "undefined" && require.main === module) {
      exports.main(process.argv.slice(1));
    }
  }

  return (
    <CompilerContext.Provider
      value={{
        compileResult,
        compileError,
        compileErrorLex,
        gramatica,
        resetStates,
      }}
    >
      {children}
    </CompilerContext.Provider>
  );
};

export const useCompiler = () => {
  return useContext(CompilerContext);
};
