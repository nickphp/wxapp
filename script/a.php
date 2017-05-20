<?php
namespace Qs\test;
class Hello {
    public function __construct() {
        echo "hello __construct";
        $this->run();
    }

    public function run() {
        echo "auto run ";
    }

    public function say($name)
    {
      echo "sayHello " . $name;
    }
}

$hello = new \Qs\Test\Hello();
$hello->say("张三");////
