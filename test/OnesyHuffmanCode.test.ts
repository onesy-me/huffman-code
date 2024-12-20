/* tslint:disable: no-shadowed-variable */
import { assert } from '@onesy/test';

import { evaluate } from '../utils/js/test/utils';

import OnesyHuffmanCode from '../src';

group('OnesyHuffmanCode', () => {

  to('OnesyHuffmanCodeResponse', async () => {
    const value = new OnesyHuffmanCode.OnesyHuffmanCodeResponse(
      'a',
      { a: '1' },
      'e',
      { a: 1.04 },
      1,
      1,
      1,
      14,
      1.4,
      4,
      7,
      1.4,
      40.4,
      true,
      4.04,
      1.04,
      '1 milliseconds'
    );

    const valueBrowsers = await evaluate((window: any) => {
      const value = new window.OnesyHuffmanCode.OnesyHuffmanCodeResponse(
        'a',
        { a: '1' },
        'e',
        { a: 1.04 },
        1,
        1,
        1,
        14,
        1.4,
        4,
        7,
        1.4,
        40.4,
        true,
        4.04,
        1.04,
        '1 milliseconds'
      );

      return value;
    });
    const valueNode = value;
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql({
      value: 'a',
      values: { a: '1' },
      values_encoded: 'e',
      probabilities: { a: 1.04 },
      efficiency: 1,
      redundency: 1,
      entropy: 1,
      original_byte_size: 14,
      values_byte_size: 1.4,
      value_byte_size: 4,
      encoded_byte_size: 7,
      compression_ratio: 1.4,
      compression_percentage: 40.4,
      positive: true,
      average_code_word_length: 4.04,
      performance_milliseconds: 1.04,
      performance: '1 milliseconds',
    }));
  });

  to('OnesyNode', async () => {
    const value = new OnesyHuffmanCode.OnesyNode(1, 'a');

    value.left = new OnesyHuffmanCode.OnesyNode(11);
    value.right = new OnesyHuffmanCode.OnesyNode(14);

    const valueBrowsers = await evaluate((window: any) => {
      const value = new window.OnesyHuffmanCode.OnesyNode(1, 'a');

      value.left = new window.OnesyHuffmanCode.OnesyNode(11);
      value.right = new window.OnesyHuffmanCode.OnesyNode(14);

      return [
        value.value,
        value.word,
        value.leaf,
        value.maxDepth,
        value.left.value,
        value.left.leaf,
        value.left.maxDepth,
        value.right.value,
        value.right.leaf,
        value.right.maxDepth,
      ];
    });
    const valueNode = [
      value.value,
      value.word,
      value.leaf,
      value.maxDepth,
      value.left.value,
      value.left.leaf,
      value.left.maxDepth,
      value.right.value,
      value.right.leaf,
      value.right.maxDepth,
    ];
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([
      1,
      'a',
      false,
      2,
      11,
      true,
      1,
      14,
      true,
      1,
    ]));
  });

  group('OnesyHuffmanTree', () => {

    group('OnesyHuffmanTree', () => {

      to('make', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            window.OnesyHuffmanCode.OnesyHuffmanTree.make([]),
            window.OnesyHuffmanCode.OnesyHuffmanTree.make([
              ['a'],
            ]),
            window.OnesyHuffmanCode.OnesyHuffmanTree.make([
              '0', '0', ['e'], '1', ['o', 'n'], '1', '0', ['u'], '1', ['d', 'c'], '1', ['r'], '1', '0', '0', ['g', 'b'], '1', ['1'], '1', ['v', 'D'], '1', '0', ['h'], '1', ['I', 'C'], '1', ['f'], '1', ['P', 'j'], '1', '0', '0', ['i', 't'], '1', ['s'], '1', ['l', 'm'], '1', [' '], '1', ['a'], '1', '0', ['p', '.'], '1', [','], '1', ['q'], '1', '0', ['0', 'L'], '1', ['F', 'S'],
            ]),
          ]
            .map(item => item.array.filter(Boolean));
        });
        const valueNode = [
          OnesyHuffmanCode.OnesyHuffmanTree.make([]),
          OnesyHuffmanCode.OnesyHuffmanTree.make([
            ['a'],
          ]),
          OnesyHuffmanCode.OnesyHuffmanTree.make([
            '0', '0', ['e'], '1', ['o', 'n'], '1', '0', ['u'], '1', ['d', 'c'], '1', ['r'], '1', '0', '0', ['g', 'b'], '1', ['1'], '1', ['v', 'D'], '1', '0', ['h'], '1', ['I', 'C'], '1', ['f'], '1', ['P', 'j'], '1', '0', '0', ['i', 't'], '1', ['s'], '1', ['l', 'm'], '1', [' '], '1', ['a'], '1', '0', ['p', '.'], '1', [','], '1', ['q'], '1', '0', ['0', 'L'], '1', ['F', 'S'],
          ]),
        ]
          .map(item => item.array.filter(Boolean));
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          [],
          ['a'],
          ['0', '0', 'e', '1', 'o', 'n', '1', '0', 'u', '1', 'd', 'c', '1', 'r', '1', '0', '0', 'g', 'b', '1', '1', '1', 'v', 'D', '1', '0', 'h', '1', 'I', 'C', '1', 'f', '1', 'P', 'j', '1', '0', '0', 'i', 't', '1', 's', '1', 'l', 'm', '1', ' ', '1', 'a', '1', '0', 'p', '.', '1', ',', '1', 'q', '1', '0', '0', 'L', '1', 'F', 'S'],
        ]));
      });

    });

    group('onesyHuffmanTree', () => {

      to('array', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            window.OnesyHuffmanCode.OnesyHuffmanTree.make([]),
            window.OnesyHuffmanCode.OnesyHuffmanTree.make([
              ['a'],
            ]),
            window.OnesyHuffmanCode.OnesyHuffmanTree.make([
              '0', '0', ['e'], '1', ['o', 'n'], '1', '0', ['u'], '1', ['d', 'c'], '1', ['r'], '1', '0', '0', ['g', 'b'], '1', ['1'], '1', ['v', 'D'], '1', '0', ['h'], '1', ['I', 'C'], '1', ['f'], '1', ['P', 'j'], '1', '0', '0', ['i', 't'], '1', ['s'], '1', ['l', 'm'], '1', [' '], '1', ['a'], '1', '0', ['p', '.'], '1', [','], '1', ['q'], '1', '0', ['0', 'L'], '1', ['F', 'S'],
            ]),
          ]
            .map(item => item.array.filter(Boolean));
        });
        const valueNode = [
          OnesyHuffmanCode.OnesyHuffmanTree.make([]),
          OnesyHuffmanCode.OnesyHuffmanTree.make([
            ['a'],
          ]),
          OnesyHuffmanCode.OnesyHuffmanTree.make([
            '0', '0', ['e'], '1', ['o', 'n'], '1', '0', ['u'], '1', ['d', 'c'], '1', ['r'], '1', '0', '0', ['g', 'b'], '1', ['1'], '1', ['v', 'D'], '1', '0', ['h'], '1', ['I', 'C'], '1', ['f'], '1', ['P', 'j'], '1', '0', '0', ['i', 't'], '1', ['s'], '1', ['l', 'm'], '1', [' '], '1', ['a'], '1', '0', ['p', '.'], '1', [','], '1', ['q'], '1', '0', ['0', 'L'], '1', ['F', 'S'],
          ]),
        ]
          .map(item => item.array.filter(Boolean));
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          [],
          ['a'],
          ['0', '0', 'e', '1', 'o', 'n', '1', '0', 'u', '1', 'd', 'c', '1', 'r', '1', '0', '0', 'g', 'b', '1', '1', '1', 'v', 'D', '1', '0', 'h', '1', 'I', 'C', '1', 'f', '1', 'P', 'j', '1', '0', '0', 'i', 't', '1', 's', '1', 'l', 'm', '1', ' ', '1', 'a', '1', '0', 'p', '.', '1', ',', '1', 'q', '1', '0', '0', 'L', '1', 'F', 'S'],
        ]));
      });

      to('isRoot', async () => {
        const tree = OnesyHuffmanCode.OnesyHuffmanTree.make(['0', ['a']]);

        const valueBrowsers = await evaluate((window: any) => {
          const tree = window.OnesyHuffmanCode.OnesyHuffmanTree.make(['0', ['a']]);

          return [
            tree.isRoot(tree.root),
            tree.isRoot(tree.root.left),
          ];
        });
        const valueNode = [
          tree.isRoot(tree.root),
          tree.isRoot(tree.root.left),
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          true,
          false,
        ]));
      });

      to('array', async () => {
        const tree = OnesyHuffmanCode.OnesyHuffmanTree.make([
          '0', '0', ['e'], '1', ['o', 'n'], '1', '0', ['u'], '1', ['d', 'c'], '1', ['r'], '1', '0', '0', ['g', 'b'], '1', ['1'], '1', ['v', 'D'], '1', '0', ['h'], '1', ['I', 'C'], '1', ['f'], '1', ['P', 'j'], '1', '0', '0', ['i', 't'], '1', ['s'], '1', ['l', 'm'], '1', [' '], '1', ['a'], '1', '0', ['p', '.'], '1', [','], '1', ['q'], '1', '0', ['0', 'L'], '1', ['F', 'S'],
        ]);

        const values_ = [];

        tree.preorder(tree.root, onesyNode => values_.push(onesyNode.word || 1));

        const valueBrowsers = await evaluate((window: any) => {
          const tree = window.OnesyHuffmanCode.OnesyHuffmanTree.make([
            '0', '0', ['e'], '1', ['o', 'n'], '1', '0', ['u'], '1', ['d', 'c'], '1', ['r'], '1', '0', '0', ['g', 'b'], '1', ['1'], '1', ['v', 'D'], '1', '0', ['h'], '1', ['I', 'C'], '1', ['f'], '1', ['P', 'j'], '1', '0', '0', ['i', 't'], '1', ['s'], '1', ['l', 'm'], '1', [' '], '1', ['a'], '1', '0', ['p', '.'], '1', [','], '1', ['q'], '1', '0', ['0', 'L'], '1', ['F', 'S'],
          ]);

          const values_ = [];

          tree.preorder(tree.root, onesyNode => values_.push(onesyNode.word || 1));

          return values_;
        });
        const valueNode = values_;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          1, 1, 1, 'e', 1, 'o', 'n', 1, 1, 'u', 1, 'd', 'c', 1, 'r', 1, 1, 1, 'g', 'b', 1, '1', 1, 'v', 'D', 1, 1, 'h', 1, 'I', 'C', 1, 'f', 1, 'P', 'j', 1, 1, 1, 'i', 't', 1, 's', 1, 'l', 'm', 1, ' ', 1, 'a', 1, 1, 'p', '.', 1, ',', 1, 'q', 1, 1, '0', 'L', 1, 'F', 'S',
        ]));
      });

      to('make', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            new window.OnesyHuffmanCode.OnesyHuffmanTree().make([]),
            new window.OnesyHuffmanCode.OnesyHuffmanTree().make([
              ['a'],
            ]),
            new window.OnesyHuffmanCode.OnesyHuffmanTree().make([
              '0', '0', ['e'], '1', ['o', 'n'], '1', '0', ['u'], '1', ['d', 'c'], '1', ['r'], '1', '0', '0', ['g', 'b'], '1', ['1'], '1', ['v', 'D'], '1', '0', ['h'], '1', ['I', 'C'], '1', ['f'], '1', ['P', 'j'], '1', '0', '0', ['i', 't'], '1', ['s'], '1', ['l', 'm'], '1', [' '], '1', ['a'], '1', '0', ['p', '.'], '1', [','], '1', ['q'], '1', '0', ['0', 'L'], '1', ['F', 'S'],
            ]),
          ]
            .map(item => item.array.filter(Boolean));
        });
        const valueNode = [
          new OnesyHuffmanCode.OnesyHuffmanTree().make([]),
          new OnesyHuffmanCode.OnesyHuffmanTree().make([
            ['a'],
          ]),
          new OnesyHuffmanCode.OnesyHuffmanTree().make([
            '0', '0', ['e'], '1', ['o', 'n'], '1', '0', ['u'], '1', ['d', 'c'], '1', ['r'], '1', '0', '0', ['g', 'b'], '1', ['1'], '1', ['v', 'D'], '1', '0', ['h'], '1', ['I', 'C'], '1', ['f'], '1', ['P', 'j'], '1', '0', '0', ['i', 't'], '1', ['s'], '1', ['l', 'm'], '1', [' '], '1', ['a'], '1', '0', ['p', '.'], '1', [','], '1', ['q'], '1', '0', ['0', 'L'], '1', ['F', 'S'],
          ]),
        ]
          .map(item => item.array.filter(Boolean));
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          [],
          ['a'],
          ['0', '0', 'e', '1', 'o', 'n', '1', '0', 'u', '1', 'd', 'c', '1', 'r', '1', '0', '0', 'g', 'b', '1', '1', '1', 'v', 'D', '1', '0', 'h', '1', 'I', 'C', '1', 'f', '1', 'P', 'j', '1', '0', '0', 'i', 't', '1', 's', '1', 'l', 'm', '1', ' ', '1', 'a', '1', '0', 'p', '.', '1', ',', '1', 'q', '1', '0', '0', 'L', '1', 'F', 'S'],
        ]));
      });

    });

  });

  group('OnesyHuffmanCode', () => {

    group('OnesyHuffmanCode', () => {

      to('OnesyHuffmanCodeResponse', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            new window.OnesyHuffmanCode.OnesyHuffmanCodeResponse() instanceof window.OnesyHuffmanCode.OnesyHuffmanCodeResponse,
          ];
        });
        const valueNode = [
          new OnesyHuffmanCode.OnesyHuffmanCodeResponse() instanceof OnesyHuffmanCode.OnesyHuffmanCodeResponse,
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          true,
        ]));
      });

      to('OnesyNode', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            new window.OnesyHuffmanCode.OnesyNode() instanceof window.OnesyHuffmanCode.OnesyNode,
          ];
        });
        const valueNode = [
          new OnesyHuffmanCode.OnesyNode() instanceof OnesyHuffmanCode.OnesyNode,
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          true,
        ]));
      });

      to('OnesyHuffmanTree', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            new window.OnesyHuffmanCode.OnesyHuffmanTree() instanceof window.OnesyHuffmanCode.OnesyHuffmanTree,
          ];
        });
        const valueNode = [
          new OnesyHuffmanCode.OnesyHuffmanTree() instanceof OnesyHuffmanCode.OnesyHuffmanTree,
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          true,
        ]));
      });

      to('encodeValue', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            window.OnesyHuffmanCode.encodeValue(''),
            window.OnesyHuffmanCode.encodeValue('0'),
            window.OnesyHuffmanCode.encodeValue('11111110100100110000101111100111010011101001110101111111000111010110100011110010100100101111100101000101011000100110110101010001001110111010111000100111111011001011001000111010000010111001000100101000110110111001010100011110010001010010111000001101110001100001011010001001111101110111111110010010100101100011001010001010110001001101101010000101111111101100111110111001011100010110100010101000101011010100000101011000001101110100111010101000100111011101011100010011111101101111000111100111001100001001011011101100111001101101110001101010100010011101110010001110000100000111101110111111111000010101101000010101101111001011011100101100001101110100111001111100001011010001010111110110101111110101100001010010011100101011101100110010010010110010010111110001110001010101101111011100111101000111100100101101001011010000101100010101101010000010101101011111100100011010001010110011111010000011100001110010100101011010111111010110000101001001110010101110111101110011110111011011101010101011011101111001001000001110011101001111001011100010011000110101000100101110000010101011111100100110111001010110101101000100100100110111011010010010011011111100100000001110011101111000000110110010110010001101000111001100011101100011001010101001011011101111101101111000000110110100000110101100011110010010010101011001111001000101110000011111000000101010111101110011110100011100100001110000000110110010110100011010100100101011111011000100101010000010110100001010110011001001001011001001011111001110011011011100011010101000100111111011000110001111110010000011001110110000101101000100111011101011010001111110010011101011111000100101010000010111110110111010011100110011110000100011010110100101011000010110100010011100001010100111000110000101111000001101110100111110111001111110011000101000001111000001110000001010100111101010110101111110010001101000101011000010110100010011111101101010100010011101110101110001001110101110010101100001010100110000001100011100010101000110101000010111111100000011011011101001111101110011110110110111010101101000001110010000110010100100101111101011111101010101011101100011000010111101011100101011000010101001100000011001100100100101100100101111111011100111011101001000101011001011001010111101110010010100010110011101100000011000001111101001100010101100111111101001010100100101111101101110010111101111000010011010011110110100100010110101100100101011011110000010110101100000011100100010101111110010000011010100000101011110111001110111001000110000101111000010011100011100010101000110111001001011101001010111101'),
          ]
            .map(item => Array.from(new TextEncoder().encode(item)));
        });
        const valueNode = [
          OnesyHuffmanCode.encodeValue(''),
          OnesyHuffmanCode.encodeValue('0'),
          OnesyHuffmanCode.encodeValue('11111110100100110000101111100111010011101001110101111111000111010110100011110010100100101111100101000101011000100110110101010001001110111010111000100111111011001011001000111010000010111001000100101000110110111001010100011110010001010010111000001101110001100001011010001001111101110111111110010010100101100011001010001010110001001101101010000101111111101100111110111001011100010110100010101000101011010100000101011000001101110100111010101000100111011101011100010011111101101111000111100111001100001001011011101100111001101101110001101010100010011101110010001110000100000111101110111111111000010101101000010101101111001011011100101100001101110100111001111100001011010001010111110110101111110101100001010010011100101011101100110010010010110010010111110001110001010101101111011100111101000111100100101101001011010000101100010101101010000010101101011111100100011010001010110011111010000011100001110010100101011010111111010110000101001001110010101110111101110011110111011011101010101011011101111001001000001110011101001111001011100010011000110101000100101110000010101011111100100110111001010110101101000100100100110111011010010010011011111100100000001110011101111000000110110010110010001101000111001100011101100011001010101001011011101111101101111000000110110100000110101100011110010010010101011001111001000101110000011111000000101010111101110011110100011100100001110000000110110010110100011010100100101011111011000100101010000010110100001010110011001001001011001001011111001110011011011100011010101000100111111011000110001111110010000011001110110000101101000100111011101011010001111110010011101011111000100101010000010111110110111010011100110011110000100011010110100101011000010110100010011100001010100111000110000101111000001101110100111110111001111110011000101000001111000001110000001010100111101010110101111110010001101000101011000010110100010011111101101010100010011101110101110001001110101110010101100001010100110000001100011100010101000110101000010111111100000011011011101001111101110011110110110111010101101000001110010000110010100100101111101011111101010101011101100011000010111101011100101011000010101001100000011001100100100101100100101111111011100111011101001000101011001011001010111101110010010100010110011101100000011000001111101001100010101100111111101001010100100101111101101110010111101111000010011010011110110100100010110101100100101011011110000010110101100000011100100010101111110010000011010100000101011110111001110111001000110000101111000010011100011100010101000110111001001011101001010111101'),
        ]
          .map(item => Array.from(new TextEncoder().encode(item)));
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          [],
          [0, 2, 2],
          [
            0, 2, 195, 191, 195, 153, 194, 156, 194, 155, 195, 185, 195, 172, 195, 186, 194, 189, 194, 191, 195, 169, 195, 173, 195, 152, 195, 188, 195, 153, 194, 155, 195, 185, 194, 169, 194, 174, 194, 153, 195, 157, 194, 172, 194, 171, 195, 158, 195, 158, 194, 153, 195, 190, 195, 170, 195, 170, 194, 158, 195, 136, 195, 158, 194, 169, 194, 154, 194, 157, 195, 158, 194, 173, 194, 143, 195, 140, 194, 172, 195, 158, 194, 139, 194, 188, 194, 184, 194, 174, 195, 138, 194, 191, 194, 189, 195, 191, 195, 140, 195, 153, 194, 184, 195, 170, 195, 138, 195, 156, 194, 171, 194, 186, 195, 137, 194, 191, 195, 187, 194, 159, 195, 158, 194, 175, 194, 141, 195, 152, 195, 154, 194, 154, 195, 173, 194, 137, 194, 174, 194, 139, 194, 189, 194, 158, 195, 154, 194, 153, 195, 175, 194, 175, 194, 140, 195, 191, 194, 187, 195, 169, 195, 185, 195, 171, 194, 138, 194, 174, 195, 187, 194, 158, 194, 187, 194, 188, 194, 186, 195, 152, 195, 143, 194, 188, 195, 139, 195, 137, 194, 137, 195, 187, 195, 159, 195, 190, 194, 141, 194, 186, 194, 141, 194, 187, 195, 170, 195, 175, 194, 155, 194, 139, 194, 189, 194, 158, 194, 191, 194, 138, 195, 172, 194, 173, 195, 189, 195, 155, 195, 189, 194, 184, 194, 172, 195, 143, 194, 154, 195, 187, 194, 156, 195, 140, 195, 156, 195, 141, 195, 188, 194, 188, 194, 173, 194, 187, 195, 175, 194, 159, 194, 169, 195, 185, 194, 155, 194, 170, 195, 172, 194, 155, 194, 141, 194, 186, 195, 136, 195, 155, 194, 175, 195, 185, 194, 142, 195, 138, 195, 156, 195, 190, 195, 136, 195, 184, 194, 188, 195, 153, 194, 174, 195, 159, 195, 173, 195, 137, 194, 170, 194, 188, 195, 155, 195, 159, 194, 188, 195, 189, 195, 174, 195, 186, 195, 154, 195, 175, 194, 190, 194, 170, 194, 139, 195, 143, 194, 171, 195, 170, 195, 184, 195, 142, 194, 157, 194, 169, 194, 155, 195, 136, 195, 154, 195, 191, 194, 153, 195, 158, 194, 173, 195, 155, 194, 169, 194, 153, 194, 157, 195, 174, 195, 140, 195, 142, 195, 191, 194, 152, 194, 139, 195, 143, 194, 190, 194, 137, 195, 156, 195, 156, 195, 139, 194, 169, 195, 171, 194, 143, 194, 184, 195, 170, 195, 154, 194, 174, 195, 187, 195, 187, 194, 190, 194, 137, 195, 157, 194, 137, 195, 155, 194, 143, 195, 140, 195, 141, 194, 174, 194, 190, 194, 169, 194, 188, 194, 143, 195, 168, 194, 154, 195, 159, 194, 188, 195, 189, 194, 143, 194, 152, 194, 188, 194, 137, 195, 156, 195, 157, 194, 142, 195, 153, 194, 154, 195, 190, 195, 169, 194, 154, 195, 136, 195, 157, 194, 138, 195, 156, 195, 170, 194, 170, 195, 170, 194, 175, 195, 171, 195, 142, 195, 175, 194, 142, 195, 154, 194, 153, 195, 190, 195, 169, 195, 139, 195, 188, 195, 136, 195, 171, 195, 156, 194, 155, 194, 169, 194, 158, 195, 186, 195, 172, 194, 191, 195, 140, 195, 186, 195, 190, 194, 153, 194, 172, 194, 141, 195, 189, 195, 158, 195, 143, 194, 156, 195, 188, 194, 152, 195, 173, 195, 153, 194, 174, 194, 141, 195, 152, 195, 143, 194, 138, 195, 153, 195, 169, 195, 137, 194, 190, 194, 139, 194, 189, 194, 159, 195, 158, 194, 191, 195, 142, 194, 154, 194, 139, 195, 168, 194, 188, 194, 138, 195, 153, 195, 186, 195, 157, 194, 191, 195, 140, 194, 186, 194, 154, 195, 168, 195, 157, 194, 140, 195, 191, 194, 186, 195, 152, 195, 143, 194, 189, 194, 188, 194, 171, 195, 155, 195, 141, 194, 184, 194, 173, 194, 156, 194, 139, 194, 143, 194, 141, 194, 169, 195, 154, 194, 141, 195, 191, 194, 136, 195, 174, 195, 186, 194, 191, 194, 188, 195, 189, 195, 157, 195, 173, 194, 186, 194, 139, 195, 140, 194, 156, 195, 153, 194, 155, 195, 186, 195, 191, 194, 173, 194, 175, 194, 184, 195, 168, 195, 159, 194, 175, 194, 154, 195, 168, 195, 154, 194, 184, 194, 142, 194, 185, 194, 153, 194, 185, 194, 155, 195, 190, 195, 185, 195, 175, 194, 170, 194, 154, 195, 170, 195, 170, 195, 159, 194, 188, 195, 141, 194, 141, 195, 143, 194, 184, 194, 142, 194, 139, 195, 186, 194, 184, 195, 155, 194, 159, 195, 186, 194, 173, 194, 153, 194, 191, 194, 187, 195, 141, 195, 187, 195, 168, 195, 142, 195, 143, 195, 157, 194, 152, 195, 157, 194, 185, 194, 154, 195, 175, 195, 136, 195, 157, 194, 184, 194, 143, 194, 152, 195, 155, 195, 188, 195, 136, 195, 173, 194, 137, 194, 175, 195, 158, 194, 189, 195, 170, 194, 156, 194, 155, 195, 168, 195, 143, 194, 143, 194, 141, 194, 169, 195, 158, 194, 170, 195, 186, 194, 173, 195, 181
          ],
        ]));
      });

      to('decodeValue', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            window.OnesyHuffmanCode.decodeValue(''),
            window.OnesyHuffmanCode.decodeValue(new TextDecoder().decode(new Uint8Array([0, 2, 2]))),
            window.OnesyHuffmanCode.decodeValue(new TextDecoder().decode(new Uint8Array([
              0, 2, 195, 191, 195, 153, 194, 156, 194, 155, 195, 185, 195, 172, 195, 186, 194, 189, 194, 191, 195, 169, 195, 173, 195, 152, 195, 188, 195, 153, 194, 155, 195, 185, 194, 169, 194, 174, 194, 153, 195, 157, 194, 172, 194, 171, 195, 158, 195, 158, 194, 153, 195, 190, 195, 170, 195, 170, 194, 158, 195, 136, 195, 158, 194, 169, 194, 154, 194, 157, 195, 158, 194, 173, 194, 143, 195, 140, 194, 172, 195, 158, 194, 139, 194, 188, 194, 184, 194, 174, 195, 138, 194, 191, 194, 189, 195, 191, 195, 140, 195, 153, 194, 184, 195, 170, 195, 138, 195, 156, 194, 171, 194, 186, 195, 137, 194, 191, 195, 187, 194, 159, 195, 158, 194, 175, 194, 141, 195, 152, 195, 154, 194, 154, 195, 173, 194, 137, 194, 174, 194, 139, 194, 189, 194, 158, 195, 154, 194, 153, 195, 175, 194, 175, 194, 140, 195, 191, 194, 187, 195, 169, 195, 185, 195, 171, 194, 138, 194, 174, 195, 187, 194, 158, 194, 187, 194, 188, 194, 186, 195, 152, 195, 143, 194, 188, 195, 139, 195, 137, 194, 137, 195, 187, 195, 159, 195, 190, 194, 141, 194, 186, 194, 141, 194, 187, 195, 170, 195, 175, 194, 155, 194, 139, 194, 189, 194, 158, 194, 191, 194, 138, 195, 172, 194, 173, 195, 189, 195, 155, 195, 189, 194, 184, 194, 172, 195, 143, 194, 154, 195, 187, 194, 156, 195, 140, 195, 156, 195, 141, 195, 188, 194, 188, 194, 173, 194, 187, 195, 175, 194, 159, 194, 169, 195, 185, 194, 155, 194, 170, 195, 172, 194, 155, 194, 141, 194, 186, 195, 136, 195, 155, 194, 175, 195, 185, 194, 142, 195, 138, 195, 156, 195, 190, 195, 136, 195, 184, 194, 188, 195, 153, 194, 174, 195, 159, 195, 173, 195, 137, 194, 170, 194, 188, 195, 155, 195, 159, 194, 188, 195, 189, 195, 174, 195, 186, 195, 154, 195, 175, 194, 190, 194, 170, 194, 139, 195, 143, 194, 171, 195, 170, 195, 184, 195, 142, 194, 157, 194, 169, 194, 155, 195, 136, 195, 154, 195, 191, 194, 153, 195, 158, 194, 173, 195, 155, 194, 169, 194, 153, 194, 157, 195, 174, 195, 140, 195, 142, 195, 191, 194, 152, 194, 139, 195, 143, 194, 190, 194, 137, 195, 156, 195, 156, 195, 139, 194, 169, 195, 171, 194, 143, 194, 184, 195, 170, 195, 154, 194, 174, 195, 187, 195, 187, 194, 190, 194, 137, 195, 157, 194, 137, 195, 155, 194, 143, 195, 140, 195, 141, 194, 174, 194, 190, 194, 169, 194, 188, 194, 143, 195, 168, 194, 154, 195, 159, 194, 188, 195, 189, 194, 143, 194, 152, 194, 188, 194, 137, 195, 156, 195, 157, 194, 142, 195, 153, 194, 154, 195, 190, 195, 169, 194, 154, 195, 136, 195, 157, 194, 138, 195, 156, 195, 170, 194, 170, 195, 170, 194, 175, 195, 171, 195, 142, 195, 175, 194, 142, 195, 154, 194, 153, 195, 190, 195, 169, 195, 139, 195, 188, 195, 136, 195, 171, 195, 156, 194, 155, 194, 169, 194, 158, 195, 186, 195, 172, 194, 191, 195, 140, 195, 186, 195, 190, 194, 153, 194, 172, 194, 141, 195, 189, 195, 158, 195, 143, 194, 156, 195, 188, 194, 152, 195, 173, 195, 153, 194, 174, 194, 141, 195, 152, 195, 143, 194, 138, 195, 153, 195, 169, 195, 137, 194, 190, 194, 139, 194, 189, 194, 159, 195, 158, 194, 191, 195, 142, 194, 154, 194, 139, 195, 168, 194, 188, 194, 138, 195, 153, 195, 186, 195, 157, 194, 191, 195, 140, 194, 186, 194, 154, 195, 168, 195, 157, 194, 140, 195, 191, 194, 186, 195, 152, 195, 143, 194, 189, 194, 188, 194, 171, 195, 155, 195, 141, 194, 184, 194, 173, 194, 156, 194, 139, 194, 143, 194, 141, 194, 169, 195, 154, 194, 141, 195, 191, 194, 136, 195, 174, 195, 186, 194, 191, 194, 188, 195, 189, 195, 157, 195, 173, 194, 186, 194, 139, 195, 140, 194, 156, 195, 153, 194, 155, 195, 186, 195, 191, 194, 173, 194, 175, 194, 184, 195, 168, 195, 159, 194, 175, 194, 154, 195, 168, 195, 154, 194, 184, 194, 142, 194, 185, 194, 153, 194, 185, 194, 155, 195, 190, 195, 185, 195, 175, 194, 170, 194, 154, 195, 170, 195, 170, 195, 159, 194, 188, 195, 141, 194, 141, 195, 143, 194, 184, 194, 142, 194, 139, 195, 186, 194, 184, 195, 155, 194, 159, 195, 186, 194, 173, 194, 153, 194, 191, 194, 187, 195, 141, 195, 187, 195, 168, 195, 142, 195, 143, 195, 157, 194, 152, 195, 157, 194, 185, 194, 154, 195, 175, 195, 136, 195, 157, 194, 184, 194, 143, 194, 152, 195, 155, 195, 188, 195, 136, 195, 173, 194, 137, 194, 175, 195, 158, 194, 189, 195, 170, 194, 156, 194, 155, 195, 168, 195, 143, 194, 143, 194, 141, 194, 169, 195, 158, 194, 170, 195, 186, 194, 173, 195, 181
            ]))),
          ];
        });
        const valueNode = [
          OnesyHuffmanCode.decodeValue(''),
          OnesyHuffmanCode.decodeValue(new TextDecoder().decode(new Uint8Array([0, 2, 2]))),
          OnesyHuffmanCode.decodeValue(new TextDecoder().decode(new Uint8Array([
            0, 2, 195, 191, 195, 153, 194, 156, 194, 155, 195, 185, 195, 172, 195, 186, 194, 189, 194, 191, 195, 169, 195, 173, 195, 152, 195, 188, 195, 153, 194, 155, 195, 185, 194, 169, 194, 174, 194, 153, 195, 157, 194, 172, 194, 171, 195, 158, 195, 158, 194, 153, 195, 190, 195, 170, 195, 170, 194, 158, 195, 136, 195, 158, 194, 169, 194, 154, 194, 157, 195, 158, 194, 173, 194, 143, 195, 140, 194, 172, 195, 158, 194, 139, 194, 188, 194, 184, 194, 174, 195, 138, 194, 191, 194, 189, 195, 191, 195, 140, 195, 153, 194, 184, 195, 170, 195, 138, 195, 156, 194, 171, 194, 186, 195, 137, 194, 191, 195, 187, 194, 159, 195, 158, 194, 175, 194, 141, 195, 152, 195, 154, 194, 154, 195, 173, 194, 137, 194, 174, 194, 139, 194, 189, 194, 158, 195, 154, 194, 153, 195, 175, 194, 175, 194, 140, 195, 191, 194, 187, 195, 169, 195, 185, 195, 171, 194, 138, 194, 174, 195, 187, 194, 158, 194, 187, 194, 188, 194, 186, 195, 152, 195, 143, 194, 188, 195, 139, 195, 137, 194, 137, 195, 187, 195, 159, 195, 190, 194, 141, 194, 186, 194, 141, 194, 187, 195, 170, 195, 175, 194, 155, 194, 139, 194, 189, 194, 158, 194, 191, 194, 138, 195, 172, 194, 173, 195, 189, 195, 155, 195, 189, 194, 184, 194, 172, 195, 143, 194, 154, 195, 187, 194, 156, 195, 140, 195, 156, 195, 141, 195, 188, 194, 188, 194, 173, 194, 187, 195, 175, 194, 159, 194, 169, 195, 185, 194, 155, 194, 170, 195, 172, 194, 155, 194, 141, 194, 186, 195, 136, 195, 155, 194, 175, 195, 185, 194, 142, 195, 138, 195, 156, 195, 190, 195, 136, 195, 184, 194, 188, 195, 153, 194, 174, 195, 159, 195, 173, 195, 137, 194, 170, 194, 188, 195, 155, 195, 159, 194, 188, 195, 189, 195, 174, 195, 186, 195, 154, 195, 175, 194, 190, 194, 170, 194, 139, 195, 143, 194, 171, 195, 170, 195, 184, 195, 142, 194, 157, 194, 169, 194, 155, 195, 136, 195, 154, 195, 191, 194, 153, 195, 158, 194, 173, 195, 155, 194, 169, 194, 153, 194, 157, 195, 174, 195, 140, 195, 142, 195, 191, 194, 152, 194, 139, 195, 143, 194, 190, 194, 137, 195, 156, 195, 156, 195, 139, 194, 169, 195, 171, 194, 143, 194, 184, 195, 170, 195, 154, 194, 174, 195, 187, 195, 187, 194, 190, 194, 137, 195, 157, 194, 137, 195, 155, 194, 143, 195, 140, 195, 141, 194, 174, 194, 190, 194, 169, 194, 188, 194, 143, 195, 168, 194, 154, 195, 159, 194, 188, 195, 189, 194, 143, 194, 152, 194, 188, 194, 137, 195, 156, 195, 157, 194, 142, 195, 153, 194, 154, 195, 190, 195, 169, 194, 154, 195, 136, 195, 157, 194, 138, 195, 156, 195, 170, 194, 170, 195, 170, 194, 175, 195, 171, 195, 142, 195, 175, 194, 142, 195, 154, 194, 153, 195, 190, 195, 169, 195, 139, 195, 188, 195, 136, 195, 171, 195, 156, 194, 155, 194, 169, 194, 158, 195, 186, 195, 172, 194, 191, 195, 140, 195, 186, 195, 190, 194, 153, 194, 172, 194, 141, 195, 189, 195, 158, 195, 143, 194, 156, 195, 188, 194, 152, 195, 173, 195, 153, 194, 174, 194, 141, 195, 152, 195, 143, 194, 138, 195, 153, 195, 169, 195, 137, 194, 190, 194, 139, 194, 189, 194, 159, 195, 158, 194, 191, 195, 142, 194, 154, 194, 139, 195, 168, 194, 188, 194, 138, 195, 153, 195, 186, 195, 157, 194, 191, 195, 140, 194, 186, 194, 154, 195, 168, 195, 157, 194, 140, 195, 191, 194, 186, 195, 152, 195, 143, 194, 189, 194, 188, 194, 171, 195, 155, 195, 141, 194, 184, 194, 173, 194, 156, 194, 139, 194, 143, 194, 141, 194, 169, 195, 154, 194, 141, 195, 191, 194, 136, 195, 174, 195, 186, 194, 191, 194, 188, 195, 189, 195, 157, 195, 173, 194, 186, 194, 139, 195, 140, 194, 156, 195, 153, 194, 155, 195, 186, 195, 191, 194, 173, 194, 175, 194, 184, 195, 168, 195, 159, 194, 175, 194, 154, 195, 168, 195, 154, 194, 184, 194, 142, 194, 185, 194, 153, 194, 185, 194, 155, 195, 190, 195, 185, 195, 175, 194, 170, 194, 154, 195, 170, 195, 170, 195, 159, 194, 188, 195, 141, 194, 141, 195, 143, 194, 184, 194, 142, 194, 139, 195, 186, 194, 184, 195, 155, 194, 159, 195, 186, 194, 173, 194, 153, 194, 191, 194, 187, 195, 141, 195, 187, 195, 168, 195, 142, 195, 143, 195, 157, 194, 152, 195, 157, 194, 185, 194, 154, 195, 175, 195, 136, 195, 157, 194, 184, 194, 143, 194, 152, 195, 155, 195, 188, 195, 136, 195, 173, 194, 137, 194, 175, 195, 158, 194, 189, 195, 170, 194, 156, 194, 155, 195, 168, 195, 143, 194, 143, 194, 141, 194, 169, 195, 158, 194, 170, 195, 186, 194, 173, 195, 181
          ]))),
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          '',
          '0',
          '11111110100100110000101111100111010011101001110101111111000111010110100011110010100100101111100101000101011000100110110101010001001110111010111000100111111011001011001000111010000010111001000100101000110110111001010100011110010001010010111000001101110001100001011010001001111101110111111110010010100101100011001010001010110001001101101010000101111111101100111110111001011100010110100010101000101011010100000101011000001101110100111010101000100111011101011100010011111101101111000111100111001100001001011011101100111001101101110001101010100010011101110010001110000100000111101110111111111000010101101000010101101111001011011100101100001101110100111001111100001011010001010111110110101111110101100001010010011100101011101100110010010010110010010111110001110001010101101111011100111101000111100100101101001011010000101100010101101010000010101101011111100100011010001010110011111010000011100001110010100101011010111111010110000101001001110010101110111101110011110111011011101010101011011101111001001000001110011101001111001011100010011000110101000100101110000010101011111100100110111001010110101101000100100100110111011010010010011011111100100000001110011101111000000110110010110010001101000111001100011101100011001010101001011011101111101101111000000110110100000110101100011110010010010101011001111001000101110000011111000000101010111101110011110100011100100001110000000110110010110100011010100100101011111011000100101010000010110100001010110011001001001011001001011111001110011011011100011010101000100111111011000110001111110010000011001110110000101101000100111011101011010001111110010011101011111000100101010000010111110110111010011100110011110000100011010110100101011000010110100010011100001010100111000110000101111000001101110100111110111001111110011000101000001111000001110000001010100111101010110101111110010001101000101011000010110100010011111101101010100010011101110101110001001110101110010101100001010100110000001100011100010101000110101000010111111100000011011011101001111101110011110110110111010101101000001110010000110010100100101111101011111101010101011101100011000010111101011100101011000010101001100000011001100100100101100100101111111011100111011101001000101011001011001010111101110010010100010110011101100000011000001111101001100010101100111111101001010100100101111101101110010111101111000010011010011110110100100010110101100100101011011110000010110101100000011100100010101111110010000011010100000101011110111001110111001000110000101111000010011100011100010101000110111001001011101001010111101'
        ]));
      });

      to('encodeValues', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          const values_ = [
            '',
            '4',
            ' ',
            '  ',
            'a',
            'Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt justo sit amet mi ornare volutpat. Praesent consequat mauris id massa vehicula, ac molestie dolor tincidunt. Fusce neque dolor, commodo nec justo nec, commodo euismod erat. Vivamus at tincidunt massa, nec tempor ante. In suscipit nisl nec faucibus gravida. In non commodo erat, eu luctus ligula. Sed purus justo, congue in congue eget, placerat scelerisque velit. Sed vel arcu risus. Vivamus auctor quis erat a porta.\n\nMauris vel dui at lectus tincidunt finibus id ut massa. Phasellus in velit elit. Etiam eu dapibus lorem. Maecenas at tincidunt urna. Cras vulputate lobortis urna quis condimentum. Ut sit amet sodales metus, eu eleifend arcu. In sed porta elit. Duis sit amet dictum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed commodo vitae magna eu consectetur. Vivamus faucibus vehicula dignissim. Aliquam vitae mauris lacinia, sodales ante eu, faucibus leo. Suspendisse vel sodales lacus. Aliquam erat volutpat.\n\nMaecenas molestie neque vel purus aliquam, vitae pharetra purus molestie. Fusce sit amet odio condimentum, bibendum velit scelerisque, placerat lorem. Aenean vestibulum lacus sit amet lectus sagittis consequat. Suspendisse est ante, dignissim eget lectus ac, dapibus ornare purus. Proin porta pharetra ipsum, eu eleifend erat consectetur pretium. Nullam sodales nisi non metus volutpat, luctus blandit tellus iaculis. Quisque eleifend erat orci, ac elementum nunc consectetur at. Vestibulum cursus aliquet fermentum. Ut fringilla ligula sed quam pharetra, sed congue metus euismod.\n\nQuisque vulputate in velit vel volutpat. Fusce sollicitudin sed risus et volutpat. Aliquam eget nisi vel risus tempor iaculis. In lobortis consectetur ipsum, sed consectetur mi eleifend a. Maecenas egestas erat quis gravida tristique. In hac habitasse platea dictumst. Cras sollicitudin non augue volutpat ultricies. Mauris finibus urna velit, a egestas tellus finibus ut. Nam a tortor et ligula vestibulum consectetur sit amet ac mi. Nulla consectetur diam vitae elit tristique fringilla. Duis eget magna mauris.\n\nInteger ut ipsum eu tortor mollis accumsan nec vitae ex. Proin convallis, eros et viverra fringilla, orci purus ultricies lectus, rutrum ultrices odio nibh non odio. Quisque imperdiet elit eu suscipit suscipit. Pellentesque suscipit ex sed mattis imperdiet. Vivamus egestas tristique nisl non ornare. Duis fringilla maximus venenatis. Proin porttitor eget quam sit amet volutpat. Nulla arcu purus, lacinia id volutpat ut, tincidunt sed purus. Donec ullamcorper id lacus in placerat. Pellentesque a tortor ut mauris egestas pulvinar. Mauris laoreet sem augue, eget auctor erat semper gravida. Nulla et lectus mi. Etiam sagittis libero at lobortis tincidunt. Suspendisse sem ligula, auctor eu lacinia id, pharetra sit amet lacus. Fusce quis arcu vestibulum, pulvinar neque ultricies, gravida justo.'
          ];

          return values_.map(item => window.OnesyHuffmanCode.encodeValues(new window.OnesyHuffmanCode(item).response.values));
        });

        const values_ = [
          '',
          '4',
          ' ',
          '  ',
          'a',
          'Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt justo sit amet mi ornare volutpat. Praesent consequat mauris id massa vehicula, ac molestie dolor tincidunt. Fusce neque dolor, commodo nec justo nec, commodo euismod erat. Vivamus at tincidunt massa, nec tempor ante. In suscipit nisl nec faucibus gravida. In non commodo erat, eu luctus ligula. Sed purus justo, congue in congue eget, placerat scelerisque velit. Sed vel arcu risus. Vivamus auctor quis erat a porta.\n\nMauris vel dui at lectus tincidunt finibus id ut massa. Phasellus in velit elit. Etiam eu dapibus lorem. Maecenas at tincidunt urna. Cras vulputate lobortis urna quis condimentum. Ut sit amet sodales metus, eu eleifend arcu. In sed porta elit. Duis sit amet dictum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed commodo vitae magna eu consectetur. Vivamus faucibus vehicula dignissim. Aliquam vitae mauris lacinia, sodales ante eu, faucibus leo. Suspendisse vel sodales lacus. Aliquam erat volutpat.\n\nMaecenas molestie neque vel purus aliquam, vitae pharetra purus molestie. Fusce sit amet odio condimentum, bibendum velit scelerisque, placerat lorem. Aenean vestibulum lacus sit amet lectus sagittis consequat. Suspendisse est ante, dignissim eget lectus ac, dapibus ornare purus. Proin porta pharetra ipsum, eu eleifend erat consectetur pretium. Nullam sodales nisi non metus volutpat, luctus blandit tellus iaculis. Quisque eleifend erat orci, ac elementum nunc consectetur at. Vestibulum cursus aliquet fermentum. Ut fringilla ligula sed quam pharetra, sed congue metus euismod.\n\nQuisque vulputate in velit vel volutpat. Fusce sollicitudin sed risus et volutpat. Aliquam eget nisi vel risus tempor iaculis. In lobortis consectetur ipsum, sed consectetur mi eleifend a. Maecenas egestas erat quis gravida tristique. In hac habitasse platea dictumst. Cras sollicitudin non augue volutpat ultricies. Mauris finibus urna velit, a egestas tellus finibus ut. Nam a tortor et ligula vestibulum consectetur sit amet ac mi. Nulla consectetur diam vitae elit tristique fringilla. Duis eget magna mauris.\n\nInteger ut ipsum eu tortor mollis accumsan nec vitae ex. Proin convallis, eros et viverra fringilla, orci purus ultricies lectus, rutrum ultrices odio nibh non odio. Quisque imperdiet elit eu suscipit suscipit. Pellentesque suscipit ex sed mattis imperdiet. Vivamus egestas tristique nisl non ornare. Duis fringilla maximus venenatis. Proin porttitor eget quam sit amet volutpat. Nulla arcu purus, lacinia id volutpat ut, tincidunt sed purus. Donec ullamcorper id lacus in placerat. Pellentesque a tortor ut mauris egestas pulvinar. Mauris laoreet sem augue, eget auctor erat semper gravida. Nulla et lectus mi. Etiam sagittis libero at lobortis tincidunt. Suspendisse sem ligula, auctor eu lacinia id, pharetra sit amet lacus. Fusce quis arcu vestibulum, pulvinar neque ultricies, gravida justo.'
        ];

        const valueNode = values_.map(item => OnesyHuffmanCode.encodeValues(new OnesyHuffmanCode(item).response.values));

        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          undefined,
          "14\u0000\u0002\u0002",
          "1 \u0000\u0002\u0002",
          "1 \u0000\u0002\u0002",
          "1a\u0000\u0002\u0002",
          "10\u0000\u0000ÿ\f 1\u0000\u0002½\u0002 e\u0000\u0000\b o\u0000\u0002 n\u0000\u0002 u\u0000\u0002¢ d\u0000\u0002¦ c\u0000\u0002§ r\u0000\u0002² g\u0000\u0002¼\u0002 b\u0000\u0002¼\u0003 v\u0000\u0002½\u0006 D\u0000\u0002½\u0007 h\u0000\u0002¾\u0002 I\u0000\u0002¾\u0006 C\u0000\u0002¾\u0007 f\u0000\u0002¿\u0002 P\u0000\u0002¿\u0006 j\u0000\u0002¿\u0007 i\u0000\u0002Â t\u0000\u0002Ã s\u0000\u0002Ò l\u0000\u0002Ö m\u0000\u0002×  \u0000\u0000\u000e a\u0000\u0002ò p\u0000\u0000ü .\u0000\u0000ý ,\u0000\u0000þ q\u0000\u0002ÿ\u0002 L\u0000\u0000ÿ\r F\u0000\u0000ÿ\u000e S\u0000\u0000ÿ\u000f",
          "1t\u0000\u0002 u\u0000\u0002 i\u0000\u0002 o\u0000\u0002 .\u0000\u0000 q\u0000\u0002\u0002 f\u0000\u0002\u0006 \n\u0000\u0000\u000e Q\u0000\u0002ò x\u0000\u0002ó  \u0000\u0000\n s\u0000\u0002² c\u0000\u0002¶ p\u0000\u0000¾ P\u0000\u0000¿\b V\u0000\u0000¿\t I\u0000\u0000¿\n S\u0000\u0000¿\u000b M\u0000\u0000¿\f F\u0000\u0002¿Ò E\u0000\u0002¿Ó C\u0000\u0002¿â U\u0000\u0002¿ã D\u0000\u0002¿ò A\u0000\u0002¿ó e\u0000\u0000\f r\u0000\u0002Ò n\u0000\u0002Ó l\u0000\u0002â d\u0000\u0002æ g\u0000\u0000î ,\u0000\u0000ï a\u0000\u0002ò m\u0000\u0002ö v\u0000\u0000þ b\u0000\u0002ÿ\u0002 h\u0000\u0002ÿ\u0006 N\u0000\u0000ÿ\u000e j\u0000\u0002ÿò L\u0000\u0002ÿó"
        ]));
      });

      to('decodeValues', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          const values_ = [
            undefined,
            "14\u0000\u0002\u0002",
            "1 \u0000\u0002\u0002",
            "1 \u0000\u0002\u0002",
            "1a\u0000\u0002\u0002",
            "10\u0000\u0000ÿ\f 1\u0000\u0002½\u0002 e\u0000\u0000\b o\u0000\u0002 n\u0000\u0002 u\u0000\u0002¢ d\u0000\u0002¦ c\u0000\u0002§ r\u0000\u0002² g\u0000\u0002¼\u0002 b\u0000\u0002¼\u0003 v\u0000\u0002½\u0006 D\u0000\u0002½\u0007 h\u0000\u0002¾\u0002 I\u0000\u0002¾\u0006 C\u0000\u0002¾\u0007 f\u0000\u0002¿\u0002 P\u0000\u0002¿\u0006 j\u0000\u0002¿\u0007 i\u0000\u0002Â t\u0000\u0002Ã s\u0000\u0002Ò l\u0000\u0002Ö m\u0000\u0002×  \u0000\u0000\u000e a\u0000\u0002ò p\u0000\u0000ü .\u0000\u0000ý ,\u0000\u0000þ q\u0000\u0002ÿ\u0002 L\u0000\u0000ÿ\r F\u0000\u0000ÿ\u000e S\u0000\u0000ÿ\u000f",
            "1t\u0000\u0002 u\u0000\u0002 i\u0000\u0002 o\u0000\u0002 .\u0000\u0000 q\u0000\u0002\u0002 f\u0000\u0002\u0006 \n\u0000\u0000\u000e Q\u0000\u0002ò x\u0000\u0002ó  \u0000\u0000\n s\u0000\u0002² c\u0000\u0002¶ p\u0000\u0000¾ P\u0000\u0000¿\b V\u0000\u0000¿\t I\u0000\u0000¿\n S\u0000\u0000¿\u000b M\u0000\u0000¿\f F\u0000\u0002¿Ò E\u0000\u0002¿Ó C\u0000\u0002¿â U\u0000\u0002¿ã D\u0000\u0002¿ò A\u0000\u0002¿ó e\u0000\u0000\f r\u0000\u0002Ò n\u0000\u0002Ó l\u0000\u0002â d\u0000\u0002æ g\u0000\u0000î ,\u0000\u0000ï a\u0000\u0002ò m\u0000\u0002ö v\u0000\u0000þ b\u0000\u0002ÿ\u0002 h\u0000\u0002ÿ\u0006 N\u0000\u0000ÿ\u000e j\u0000\u0002ÿò L\u0000\u0002ÿó"
          ];

          return values_.map(item => window.OnesyHuffmanCode.decodeValues(item));
        });

        const values_ = [
          undefined,
          "14\u0000\u0002\u0002",
          "1 \u0000\u0002\u0002",
          "1 \u0000\u0002\u0002",
          "1a\u0000\u0002\u0002",
          "10\u0000\u0000ÿ\f 1\u0000\u0002½\u0002 e\u0000\u0000\b o\u0000\u0002 n\u0000\u0002 u\u0000\u0002¢ d\u0000\u0002¦ c\u0000\u0002§ r\u0000\u0002² g\u0000\u0002¼\u0002 b\u0000\u0002¼\u0003 v\u0000\u0002½\u0006 D\u0000\u0002½\u0007 h\u0000\u0002¾\u0002 I\u0000\u0002¾\u0006 C\u0000\u0002¾\u0007 f\u0000\u0002¿\u0002 P\u0000\u0002¿\u0006 j\u0000\u0002¿\u0007 i\u0000\u0002Â t\u0000\u0002Ã s\u0000\u0002Ò l\u0000\u0002Ö m\u0000\u0002×  \u0000\u0000\u000e a\u0000\u0002ò p\u0000\u0000ü .\u0000\u0000ý ,\u0000\u0000þ q\u0000\u0002ÿ\u0002 L\u0000\u0000ÿ\r F\u0000\u0000ÿ\u000e S\u0000\u0000ÿ\u000f",
          "1t\u0000\u0002 u\u0000\u0002 i\u0000\u0002 o\u0000\u0002 .\u0000\u0000 q\u0000\u0002\u0002 f\u0000\u0002\u0006 \n\u0000\u0000\u000e Q\u0000\u0002ò x\u0000\u0002ó  \u0000\u0000\n s\u0000\u0002² c\u0000\u0002¶ p\u0000\u0000¾ P\u0000\u0000¿\b V\u0000\u0000¿\t I\u0000\u0000¿\n S\u0000\u0000¿\u000b M\u0000\u0000¿\f F\u0000\u0002¿Ò E\u0000\u0002¿Ó C\u0000\u0002¿â U\u0000\u0002¿ã D\u0000\u0002¿ò A\u0000\u0002¿ó e\u0000\u0000\f r\u0000\u0002Ò n\u0000\u0002Ó l\u0000\u0002â d\u0000\u0002æ g\u0000\u0000î ,\u0000\u0000ï a\u0000\u0002ò m\u0000\u0002ö v\u0000\u0000þ b\u0000\u0002ÿ\u0002 h\u0000\u0002ÿ\u0006 N\u0000\u0000ÿ\u000e j\u0000\u0002ÿò L\u0000\u0002ÿó"
        ];

        const valueNode = values_.map(item => OnesyHuffmanCode.decodeValues(item));

        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          {},
          {
            "4": "0"
          },
          {
            " ": "0"
          },
          {
            " ": "0"
          },
          {
            "a": "0"
          },
          {
            "0": "111111100",
            "1": "0111010",
            "e": "000",
            "o": "0010",
            "n": "0011",
            "u": "0100",
            "d": "01010",
            "c": "01011",
            "r": "0110",
            "g": "0111000",
            "b": "0111001",
            "v": "01110110",
            "D": "01110111",
            "h": "0111100",
            "I": "01111010",
            "C": "01111011",
            "f": "0111110",
            "P": "01111110",
            "j": "01111111",
            "i": "1000",
            "t": "1001",
            "s": "1010",
            "l": "10110",
            "m": "10111",
            " ": "110",
            "a": "1110",
            "p": "111100",
            ".": "111101",
            ",": "111110",
            "q": "1111110",
            "L": "111111101",
            "F": "111111110",
            "S": "111111111"
          },
          {
            "t": "0000",
            "u": "0001",
            "i": "0010",
            "o": "00110",
            ".": "001110",
            "q": "0011110",
            "f": "00111110",
            "\n": "001111110",
            "Q": "0011111110",
            "x": "0011111111",
            " ": "010",
            "s": "0110",
            "c": "01110",
            "p": "011110",
            "P": "011111000",
            "V": "011111001",
            "I": "011111010",
            "S": "011111011",
            "M": "011111100",
            "F": "0111111010",
            "E": "0111111011",
            "C": "0111111100",
            "U": "0111111101",
            "D": "0111111110",
            "A": "0111111111",
            "e": "100",
            "r": "1010",
            "n": "1011",
            "l": "1100",
            "d": "11010",
            "g": "110110",
            ",": "110111",
            "a": "1110",
            "m": "11110",
            "v": "111110",
            "b": "1111110",
            "h": "11111110",
            "N": "111111110",
            "j": "1111111110",
            "L": "1111111111"
          }
        ]));
      });

      to('getValues', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            window.OnesyHuffmanCode.getValues(new window.OnesyHuffmanCode.OnesyHuffmanTree().make([])),
            window.OnesyHuffmanCode.getValues(new window.OnesyHuffmanCode.OnesyHuffmanTree().make([
              ['a'],
            ])),
            window.OnesyHuffmanCode.getValues(new window.OnesyHuffmanCode.OnesyHuffmanTree().make([
              '0', '0', ['e'], '1', ['o', 'n'], '1', '0', ['u'], '1', ['d', 'c'], '1', ['r'], '1', '0', '0', ['g', 'b'], '1', ['1'], '1', ['v', 'D'], '1', '0', ['h'], '1', ['I', 'C'], '1', ['f'], '1', ['P', 'j'], '1', '0', '0', ['i', 't'], '1', ['s'], '1', ['l', 'm'], '1', [' '], '1', ['a'], '1', '0', ['p', '.'], '1', [','], '1', ['q'], '1', '0', ['0', 'L'], '1', ['F', 'S'],
            ])),
          ];
        });
        const valueNode = [
          OnesyHuffmanCode.getValues(new OnesyHuffmanCode.OnesyHuffmanTree().make([])),
          OnesyHuffmanCode.getValues(new OnesyHuffmanCode.OnesyHuffmanTree().make([
            ['a'],
          ])),
          OnesyHuffmanCode.getValues(new OnesyHuffmanCode.OnesyHuffmanTree().make([
            '0', '0', ['e'], '1', ['o', 'n'], '1', '0', ['u'], '1', ['d', 'c'], '1', ['r'], '1', '0', '0', ['g', 'b'], '1', ['1'], '1', ['v', 'D'], '1', '0', ['h'], '1', ['I', 'C'], '1', ['f'], '1', ['P', 'j'], '1', '0', '0', ['i', 't'], '1', ['s'], '1', ['l', 'm'], '1', [' '], '1', ['a'], '1', '0', ['p', '.'], '1', [','], '1', ['q'], '1', '0', ['0', 'L'], '1', ['F', 'S'],
          ])),
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          {},
          { 'a': '0' },
          {
            0: '111111100',
            1: '0111010',
            e: '000',
            o: '0010',
            n: '0011',
            u: '0100',
            d: '01010',
            c: '01011',
            r: '0110',
            g: '0111000',
            b: '0111001',
            v: '01110110',
            D: '01110111',
            h: '0111100',
            I: '01111010',
            C: '01111011',
            f: '0111110',
            P: '01111110',
            j: '01111111',
            i: '1000',
            t: '1001',
            s: '1010',
            l: '10110',
            m: '10111',
            ' ': '110',
            a: '1110',
            p: '111100',
            '.': '111101',
            ',': '111110',
            q: '1111110',
            L: '111111101',
            F: '111111110',
            S: '111111111'
          },
        ]));
      });

      to('decode', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            window.OnesyHuffmanCode.decode('', {}).value,
            window.OnesyHuffmanCode.decode(4, {}).value,
            window.OnesyHuffmanCode.decode('AAIC', { ' ': '0' }).value,
            window.OnesyHuffmanCode.decode('AAIE', { ' ': '0' }).value,
            window.OnesyHuffmanCode.decode('AAIC', { a: '0' }).value,
            window.OnesyHuffmanCode.decode('AAL/2Zyb+ez6vb/p7dj82Zv5qa6Z3ayr3t6Z/urqnsjeqZqd3q2PzKzei7y4rsq/vf/M2bjqytyrusm/+5/er43Y2prtia6LvZ7ame+vjP+76fnriq77nru8utjPvMvJifvf/o26jbvq75uLvZ6/iuyt/dv9uKzPmvuczNzN/Lytu++fqfmbquybjbrI26/5jsrc/sj4vNmu3+3Jqrzb37z97vra776qi8+r6vjOnambyNr/md6t26mZne7Mzv+Yi8++idzcy6nrj7jq2q77+76J3Ynbj8zNrr6pvI/omt+8/Y+YvInc3Y7Zmv7pmsjditzqquqv687vjtqZ/unL/Mjr3Jupnvrsv8z6/pmsjf3ez5z8mO3Zro3Yz4rZ6cm+i72f3r/OmovovIrZ+t2/zLqa6N2M/7rYz728q9vNuK2ci4+NqdqN/4ju+r+8/d3tuovMnNmb+v+tr7jo36+a6Nq4jrmZuZv++e+qmurq37zNjc+4jov6uNuf+q2Zv7vN++jOz92Y3bma78jduI+Y2/zI7Ymv3r3qnJvoz4+Nqd6q+q31', { 0: '111111100', 1: '0111010', e: '000', o: '0010', n: '0011', u: '0100', d: '01010', c: '01011', r: '0110', g: '0111000', b: '0111001', v: '01110110', D: '01110111', h: '0111100', I: '01111010', C: '01111011', f: '0111110', P: '01111110', j: '01111111', i: '1000', t: '1001', s: '1010', l: '10110', m: '10111', ' ': '110', a: '1110', p: '111100', '.': '111101', ',': '111110', q: '1111110', L: '111111101', F: '111111110', S: '111111111' }).value,
            window.OnesyHuffmanCode.decode('AAL//O2r6pn5yfzdjujtmcqJvfqJ3s+O3dj4mIjs3uyr6Zz42+6s6Mier/776ojbvK7J3I3/6NyJzOmI3v2Ir8qp2t/ayv6dyMj96I+Z/K3suq6KvLruyfi+ib74upnMrs37zrvN/Z/4z4vPu9vPm+ncy4isrsu4usyJrvjdi7iPmf7Jueyt6Pycrsu4ut3s+O/fjuy5r4+b/8m4i5r4+72enfvp3Y6sjM78u6rNvInqv5m/vfiur4jImu+N2LuJvvnO+72vj5iZ+fjtm9uKj5n9rs6Nz4z8qJrqu428vMv7ybyv+K6u7b38rt6eq/rdrrrs+O/fjuy5qt6LvaityN6Irq6N3J68vM/vnZn4uo3N/+jcid3s+O37i4yt2enb7o6au6id7P3Pns28irns6qyrj8nK/s6Mieq/vOzf2cr6z4ramcm4+Z/M3978m5vJvInaqfiquareibzPy6yPj4/4/5/rydjOr+zpuozN6JuY+Im5iK3em6juip/K3N/o3MrsyYm++c74+Z/L/vnZzorqmu39nJiNnJiLzP+4je/Nia7evpv8m5uLrZ+Pmf69j6r+ubyKiNu8rsncjJ2v6eq/6t65v4vL6Mnoqbi7/LrImcydr+qfiquZ6dvsr9m4i/j5n/qKuMivvsiZy7r7mOr9iI3d7Yms6oy/qv2b2ryZ6r+t2dnZn47YnqzoyJ6r/4qrmcqJvfqI3Yz4ifzf2cmIvM/86865vPyM3IyPnpiKq468qc6fit7s3JiLreqI7Y/JzcjP2aq8uun/jerc64mvu9n6rMrd7L6I65v+m+zf2LnLzP752Z6d++ndjq/pieyv3u7fzYmry67svIyIup6r+Zv734rqn96N6b/Jub+r/pno+ersru3M6434+Z//yY/J++r+mJ7K/ejsq5uevK3N7vq47t7qnN7cmNie+p/ejem/ybm5i4+Z/crr7N+pnOyv7Omcu6+5jq68+K6eq//4qfi+/NmviN/LuJifvInp/p/r/Pqezfzq/LuY6I2NvJ+Ljf2cq+jsm5vcmPyfvu+v6Ynsq+/97aia+Z+LqNzfjuqciaj5n+ybnsq4yK++yJjuypzPjt+pvs3In93t/pv9m+yfzf2cmIzr2czYzp+Lnez9z57NvIro7avp6r/+r57dv6nIm/yei/m568m5nKib36iNzLyI3M77uMiIzqvLruyfi+iPmf3K6+zfqZzsrLiN7cmd7djd25nOm+rO7Im5j4ibm8+726+fjf6NzLrb+tjPydiunqv42Omuz8usj5n7/vrYjbzKvri/u9qK2cyY/s36rNvIq8uu7LyMiLqr7aiKj+nq/+j5z76rju3uqc25nKrc7dvsiK6v6dyMj96LvbibyI3N/uvb7KiYmc6K6pvPi8mcvMv+jM6fi42cyY/s36rNvIqdq8rvr56s6r7NyJ/NuO75np27qeioidm8ieq/nLiK/4vI/qvJ2cm5vcmPyciY/s2+zcify8z/2Jj+2Nvum5z5uK7o+eq6uqn4vvzP3/vayK3u+rq6q8uv3Jyv2Ijc2Jmd+O7Ly/y/y/6Mzp+Ljfyen4qPiYyt2/q4qJv6uN/LuJifvInqv9iuvYzp3OjPjIj6muzs7NqZybmojfy7iYn7yJ6r//ip+L782d2Irczpm/q42pnJuYmfn47ZjevJ6M6eq/rduLv8usiZzPjt3Y+JiI7Mq+uL+72dnZnp27qeioidm+mauYqf2b7N6eq/z6ns386s7suJ65qt6Jj8mZzd2vv43bzI2M6Iy+jo+Z/a7f+8+b/vv8qLzrqZ+56KvN2M+In86I+Z/5r5zOnc6M+MiPqa7bnbr4vcnK/p3IyP3omLyKyrysuPmf68nYzqn8rc3+jcydr+r+zoyO+vmrupyPnMjOuJuY/prq/4rqjIvN/9783qiO2Ius2Iro3cnrzf2OiN/o+J/M+O3dj4mIjszpiN79iK+er8qer/6PnPmenbup6KiJ2bqb35v4yPqauKiYmpnImPycqf2pr9yuuenqv/iquau6iN+93b+b74upnLy/y/z+24q7qsyYmM/Oj+rI2Iusidqvy7nJnN68+L+d7dr4+b+Mj6mo/+vM/pqcrdnp2/77nJnd7Zqc6sib+N/ZrbzL+srfuNzr3ey6z4zPydiuqPiNjPjY6uqeiK7vrYqNi/mLyKyr2Oqd2Mua6v+/6tzt2O7KnLzL/ozOn4uMr8/ZrsrImriomorOjc+M/KiZybnpn4yJ6r+M65m4qcvo6Zybnpn4yKyf/Z2dm++IiZzK/P2a7KyI+Z/M3978m5q7qcj5zI2M6Iy+jprqu42526na39rJ6r/4qrmP7Y2+6bnPm++P/q/Jub+q+b+Iq4+Z/Ky426vp2oiKiO2au6iMvo/fmcqJvfqI38u4mJ+8ier/6PnPm9q8mr6Oybu9uevK3N6puq/p3IyP3omKjvqI27yuydyM7OzPydiunqv/jt6eqPnPvry6z9mqm6rrz4rqmuz9z57NvInqv4zrmbipy+jpvMidqI7Zior96OyrmrupyPnM/J6/jb+svM/56Oyrm56drMiZ2fm8nujrvau6iN6N6I7Zqt6JnZ+fqs3dr7+N28vN/8nrnqyJuY+Im5vpj5n+6Jvfmd7umIiZzcm/2anN6JuLv8usiZzImu+N2LuI+Z/crr7N+pnOyrq+ro3cnr3e3o3ojtmorc+emur5jdu9n7/vrYjbzOmI3v2Irrz4rp6r/Yrr2MvozOr6z4rf2OiN/o+J/d7Pyev42/rNvJ+LjJ6JqZ6and7d2vv43bzf/o3InLBg==', {
              t: '0000', u: '0001', i: '0010', o: '00110', '.': '001110', q: '0011110', f: '00111110', '\n': '001111110', Q: '0011111110', x: '0011111111', ' ': '010', s: '0110', c: '01110', p: '011110', P: '011111000', V: '011111001', I: '011111010', S: '011111011', M: '011111100', F: '0111111010', E: '0111111011', C: '0111111100', U: '0111111101', D: '0111111110', A: '0111111111', e: '100', r: '1010', n: '1011', l: '1100', d: '11010', g: '110110', ',': '110111', a: '1110', m: '11110', v: '111110', b: '1111110', h: '11111110', N: '111111110', j: '1111111110', L: '1111111111'
            }).value
          ];
        });
        const valueNode = [
          OnesyHuffmanCode.decode('', {}).value,
          OnesyHuffmanCode.decode(4 as any, {}).value,
          OnesyHuffmanCode.decode('AAIC', { ' ': '0' }).value,
          OnesyHuffmanCode.decode('AAIE', { ' ': '0' }).value,
          OnesyHuffmanCode.decode('AAIC', { a: '0' }).value,
          OnesyHuffmanCode.decode('AAL/2Zyb+ez6vb/p7dj82Zv5qa6Z3ayr3t6Z/urqnsjeqZqd3q2PzKzei7y4rsq/vf/M2bjqytyrusm/+5/er43Y2prtia6LvZ7ame+vjP+76fnriq77nru8utjPvMvJifvf/o26jbvq75uLvZ6/iuyt/dv9uKzPmvuczNzN/Lytu++fqfmbquybjbrI26/5jsrc/sj4vNmu3+3Jqrzb37z97vra776qi8+r6vjOnambyNr/md6t26mZne7Mzv+Yi8++idzcy6nrj7jq2q77+76J3Ynbj8zNrr6pvI/omt+8/Y+YvInc3Y7Zmv7pmsjditzqquqv687vjtqZ/unL/Mjr3Jupnvrsv8z6/pmsjf3ez5z8mO3Zro3Yz4rZ6cm+i72f3r/OmovovIrZ+t2/zLqa6N2M/7rYz728q9vNuK2ci4+NqdqN/4ju+r+8/d3tuovMnNmb+v+tr7jo36+a6Nq4jrmZuZv++e+qmurq37zNjc+4jov6uNuf+q2Zv7vN++jOz92Y3bma78jduI+Y2/zI7Ymv3r3qnJvoz4+Nqd6q+q31', { 0: '111111100', 1: '0111010', e: '000', o: '0010', n: '0011', u: '0100', d: '01010', c: '01011', r: '0110', g: '0111000', b: '0111001', v: '01110110', D: '01110111', h: '0111100', I: '01111010', C: '01111011', f: '0111110', P: '01111110', j: '01111111', i: '1000', t: '1001', s: '1010', l: '10110', m: '10111', ' ': '110', a: '1110', p: '111100', '.': '111101', ',': '111110', q: '1111110', L: '111111101', F: '111111110', S: '111111111' }).value,
          OnesyHuffmanCode.decode('AAL//O2r6pn5yfzdjujtmcqJvfqJ3s+O3dj4mIjs3uyr6Zz42+6s6Mier/776ojbvK7J3I3/6NyJzOmI3v2Ir8qp2t/ayv6dyMj96I+Z/K3suq6KvLruyfi+ib74upnMrs37zrvN/Z/4z4vPu9vPm+ncy4isrsu4usyJrvjdi7iPmf7Jueyt6Pycrsu4ut3s+O/fjuy5r4+b/8m4i5r4+72enfvp3Y6sjM78u6rNvInqv5m/vfiur4jImu+N2LuJvvnO+72vj5iZ+fjtm9uKj5n9rs6Nz4z8qJrqu428vMv7ybyv+K6u7b38rt6eq/rdrrrs+O/fjuy5qt6LvaityN6Irq6N3J68vM/vnZn4uo3N/+jcid3s+O37i4yt2enb7o6au6id7P3Pns28irns6qyrj8nK/s6Mieq/vOzf2cr6z4ramcm4+Z/M3978m5vJvInaqfiquareibzPy6yPj4/4/5/rydjOr+zpuozN6JuY+Im5iK3em6juip/K3N/o3MrsyYm++c74+Z/L/vnZzorqmu39nJiNnJiLzP+4je/Nia7evpv8m5uLrZ+Pmf69j6r+ubyKiNu8rsncjJ2v6eq/6t65v4vL6Mnoqbi7/LrImcydr+qfiquZ6dvsr9m4i/j5n/qKuMivvsiZy7r7mOr9iI3d7Yms6oy/qv2b2ryZ6r+t2dnZn47YnqzoyJ6r/4qrmcqJvfqI3Yz4ifzf2cmIvM/86865vPyM3IyPnpiKq468qc6fit7s3JiLreqI7Y/JzcjP2aq8uun/jerc64mvu9n6rMrd7L6I65v+m+zf2LnLzP752Z6d++ndjq/pieyv3u7fzYmry67svIyIup6r+Zv734rqn96N6b/Jub+r/pno+ersru3M6434+Z//yY/J++r+mJ7K/ejsq5uevK3N7vq47t7qnN7cmNie+p/ejem/ybm5i4+Z/crr7N+pnOyv7Omcu6+5jq68+K6eq//4qfi+/NmviN/LuJifvInp/p/r/Pqezfzq/LuY6I2NvJ+Ljf2cq+jsm5vcmPyfvu+v6Ynsq+/97aia+Z+LqNzfjuqciaj5n+ybnsq4yK++yJjuypzPjt+pvs3In93t/pv9m+yfzf2cmIzr2czYzp+Lnez9z57NvIro7avp6r/+r57dv6nIm/yei/m568m5nKib36iNzLyI3M77uMiIzqvLruyfi+iPmf3K6+zfqZzsrLiN7cmd7djd25nOm+rO7Im5j4ibm8+726+fjf6NzLrb+tjPydiunqv42Omuz8usj5n7/vrYjbzKvri/u9qK2cyY/s36rNvIq8uu7LyMiLqr7aiKj+nq/+j5z76rju3uqc25nKrc7dvsiK6v6dyMj96LvbibyI3N/uvb7KiYmc6K6pvPi8mcvMv+jM6fi42cyY/s36rNvIqdq8rvr56s6r7NyJ/NuO75np27qeioidm8ieq/nLiK/4vI/qvJ2cm5vcmPyciY/s2+zcify8z/2Jj+2Nvum5z5uK7o+eq6uqn4vvzP3/vayK3u+rq6q8uv3Jyv2Ijc2Jmd+O7Ly/y/y/6Mzp+Ljfyen4qPiYyt2/q4qJv6uN/LuJifvInqv9iuvYzp3OjPjIj6muzs7NqZybmojfy7iYn7yJ6r//ip+L782d2Irczpm/q42pnJuYmfn47ZjevJ6M6eq/rduLv8usiZzPjt3Y+JiI7Mq+uL+72dnZnp27qeioidm+mauYqf2b7N6eq/z6ns386s7suJ65qt6Jj8mZzd2vv43bzI2M6Iy+jo+Z/a7f+8+b/vv8qLzrqZ+56KvN2M+In86I+Z/5r5zOnc6M+MiPqa7bnbr4vcnK/p3IyP3omLyKyrysuPmf68nYzqn8rc3+jcydr+r+zoyO+vmrupyPnMjOuJuY/prq/4rqjIvN/9783qiO2Ius2Iro3cnrzf2OiN/o+J/M+O3dj4mIjszpiN79iK+er8qer/6PnPmenbup6KiJ2bqb35v4yPqauKiYmpnImPycqf2pr9yuuenqv/iquau6iN+93b+b74upnLy/y/z+24q7qsyYmM/Oj+rI2Iusidqvy7nJnN68+L+d7dr4+b+Mj6mo/+vM/pqcrdnp2/77nJnd7Zqc6sib+N/ZrbzL+srfuNzr3ey6z4zPydiuqPiNjPjY6uqeiK7vrYqNi/mLyKyr2Oqd2Mua6v+/6tzt2O7KnLzL/ozOn4uMr8/ZrsrImriomorOjc+M/KiZybnpn4yJ6r+M65m4qcvo6Zybnpn4yKyf/Z2dm++IiZzK/P2a7KyI+Z/M3978m5q7qcj5zI2M6Iy+jprqu42526na39rJ6r/4qrmP7Y2+6bnPm++P/q/Jub+q+b+Iq4+Z/Ky426vp2oiKiO2au6iMvo/fmcqJvfqI38u4mJ+8ier/6PnPm9q8mr6Oybu9uevK3N6puq/p3IyP3omKjvqI27yuydyM7OzPydiunqv/jt6eqPnPvry6z9mqm6rrz4rqmuz9z57NvInqv4zrmbipy+jpvMidqI7Zior96OyrmrupyPnM/J6/jb+svM/56Oyrm56drMiZ2fm8nujrvau6iN6N6I7Zqt6JnZ+fqs3dr7+N28vN/8nrnqyJuY+Im5vpj5n+6Jvfmd7umIiZzcm/2anN6JuLv8usiZzImu+N2LuI+Z/crr7N+pnOyrq+ro3cnr3e3o3ojtmorc+emur5jdu9n7/vrYjbzOmI3v2Irrz4rp6r/Yrr2MvozOr6z4rf2OiN/o+J/d7Pyev42/rNvJ+LjJ6JqZ6and7d2vv43bzf/o3InLBg==', {
            t: '0000', u: '0001', i: '0010', o: '00110', '.': '001110', q: '0011110', f: '00111110', '\n': '001111110', Q: '0011111110', x: '0011111111', ' ': '010', s: '0110', c: '01110', p: '011110', P: '011111000', V: '011111001', I: '011111010', S: '011111011', M: '011111100', F: '0111111010', E: '0111111011', C: '0111111100', U: '0111111101', D: '0111111110', A: '0111111111', e: '100', r: '1010', n: '1011', l: '1100', d: '11010', g: '110110', ',': '110111', a: '1110', m: '11110', v: '111110', b: '1111110', h: '11111110', N: '111111110', j: '1111111110', L: '1111111111'
          }).value
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          '',
          4,
          ' ',
          '  ',
          'a',
          'Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt justo sit amet mi ornare volutpat. Praesent consequat mauris id massa vehicula, ac molestie dolor tincidunt. Fusce neque dolor, commodo nec justo nec, commodo euismod erat. Vivamus at tincidunt massa, nec tempor ante. In suscipit nisl nec faucibus gravida. In non commodo erat, eu luctus ligula. Sed purus justo, congue in congue eget, placerat scelerisque velit. Sed vel arcu risus. Vivamus auctor quis erat a porta.\n\nMauris vel dui at lectus tincidunt finibus id ut massa. Phasellus in velit elit. Etiam eu dapibus lorem. Maecenas at tincidunt urna. Cras vulputate lobortis urna quis condimentum. Ut sit amet sodales metus, eu eleifend arcu. In sed porta elit. Duis sit amet dictum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed commodo vitae magna eu consectetur. Vivamus faucibus vehicula dignissim. Aliquam vitae mauris lacinia, sodales ante eu, faucibus leo. Suspendisse vel sodales lacus. Aliquam erat volutpat.\n\nMaecenas molestie neque vel purus aliquam, vitae pharetra purus molestie. Fusce sit amet odio condimentum, bibendum velit scelerisque, placerat lorem. Aenean vestibulum lacus sit amet lectus sagittis consequat. Suspendisse est ante, dignissim eget lectus ac, dapibus ornare purus. Proin porta pharetra ipsum, eu eleifend erat consectetur pretium. Nullam sodales nisi non metus volutpat, luctus blandit tellus iaculis. Quisque eleifend erat orci, ac elementum nunc consectetur at. Vestibulum cursus aliquet fermentum. Ut fringilla ligula sed quam pharetra, sed congue metus euismod.\n\nQuisque vulputate in velit vel volutpat. Fusce sollicitudin sed risus et volutpat. Aliquam eget nisi vel risus tempor iaculis. In lobortis consectetur ipsum, sed consectetur mi eleifend a. Maecenas egestas erat quis gravida tristique. In hac habitasse platea dictumst. Cras sollicitudin non augue volutpat ultricies. Mauris finibus urna velit, a egestas tellus finibus ut. Nam a tortor et ligula vestibulum consectetur sit amet ac mi. Nulla consectetur diam vitae elit tristique fringilla. Duis eget magna mauris.\n\nInteger ut ipsum eu tortor mollis accumsan nec vitae ex. Proin convallis, eros et viverra fringilla, orci purus ultricies lectus, rutrum ultrices odio nibh non odio. Quisque imperdiet elit eu suscipit suscipit. Pellentesque suscipit ex sed mattis imperdiet. Vivamus egestas tristique nisl non ornare. Duis fringilla maximus venenatis. Proin porttitor eget quam sit amet volutpat. Nulla arcu purus, lacinia id volutpat ut, tincidunt sed purus. Donec ullamcorper id lacus in placerat. Pellentesque a tortor ut mauris egestas pulvinar. Mauris laoreet sem augue, eget auctor erat semper gravida. Nulla et lectus mi. Etiam sagittis libero at lobortis tincidunt. Suspendisse sem ligula, auctor eu lacinia id, pharetra sit amet lacus. Fusce quis arcu vestibulum, pulvinar neque ultricies, gravida justo.'
        ]));
      });

      to('encodeBase64', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            window.OnesyHuffmanCode.encodeBase64(''),
            window.OnesyHuffmanCode.encodeBase64('AAAA'),
            window.OnesyHuffmanCode.encodeBase64(`þ\x93\x00\vçN\x9D\x7F\x1Dhò\x92ùEbmQ;®'ì²: \x00\v\x91(Û\x95\x1EE.\x00\rÆ\x16\x89÷\x7F\x92\x962\x8AÄÚ\x85þÏ¹qh¨­AX7N¨\x9D×\x13öñç0\x96ìæÜj\x89Ü\x8E\x10{¿áZ\x15¼·, 7N | -\x15ö¿XRr»2K % ñÅ[Üôy--\x00\v\x15¨+_\x91¢³è8r\x95¯Ö\x14\x9C®÷=Ûª·y çO.& 5\x12à«ònV´I7i & ü\x80çx\x1B, \x8D\x1CÇc *\x96ï·\x81´\x1AÇ\x92U\x9EEÁð *÷=\x1C\x87\x00\x01²Ñ©+ìJ\x82Ð¬É, \x97ÎmÆ¨\x9F±\x8FÈ3°´NëGäëâT\x17Û§3Â5¥ah\x9C * q\x85àÝ > çæ(<\x1C\x00\n\x9E­~F\x8AÂÑ ? j\x89Ýq: åaS\x00\x03\x1CTj\x17ð6é÷=·V\x83\x90ÊKëõWc\x00\v×+\x00\n\x98\x19\x92Y / îwH¬²½ÉE\x9D\x81\x83é\x8AÏéR_n ^ ð\x9A{ Hµ\x92·\x82Ö\x00\x07'¿ Ô\x15îw#\x00\vÂqÅFäºWP\x00`),
          ];
        });
        const valueNode = [
          OnesyHuffmanCode.encodeBase64(''),
          OnesyHuffmanCode.encodeBase64('AAAA'),
          OnesyHuffmanCode.encodeBase64(`þ\x93\x00\vçN\x9D\x7F\x1Dhò\x92ùEbmQ;®'ì²: \x00\v\x91(Û\x95\x1EE.\x00\rÆ\x16\x89÷\x7F\x92\x962\x8AÄÚ\x85þÏ¹qh¨­AX7N¨\x9D×\x13öñç0\x96ìæÜj\x89Ü\x8E\x10{¿áZ\x15¼·, 7N | -\x15ö¿XRr»2K % ñÅ[Üôy--\x00\v\x15¨+_\x91¢³è8r\x95¯Ö\x14\x9C®÷=Ûª·y çO.& 5\x12à«ònV´I7i & ü\x80çx\x1B, \x8D\x1CÇc *\x96ï·\x81´\x1AÇ\x92U\x9EEÁð *÷=\x1C\x87\x00\x01²Ñ©+ìJ\x82Ð¬É, \x97ÎmÆ¨\x9F±\x8FÈ3°´NëGäëâT\x17Û§3Â5¥ah\x9C * q\x85àÝ > çæ(<\x1C\x00\n\x9E­~F\x8AÂÑ ? j\x89Ýq: åaS\x00\x03\x1CTj\x17ð6é÷=·V\x83\x90ÊKëõWc\x00\v×+\x00\n\x98\x19\x92Y / îwH¬²½ÉE\x9D\x81\x83é\x8AÏéR_n ^ ð\x9A{ Hµ\x92·\x82Ö\x00\x07'¿ Ô\x15îw#\x00\vÂqÅFäºWP\x00`),
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          '',
          'AAAA',
          '/pMAC+dOnX8daPKS+UVibVE7rifssjogAAuRKNuVHkUuAA3GFon3f5KWMorE2oX+z7lxaKitQVg3Tqid1xP28ecwluzm3GqJ3I4Qe7/hWhW8tywgN04gfCAtFfa/WFJyuzJLICUg8cVb3PR5LS0ACxWoK1+RorPoOHKVr9YUnK73Pduqt3kg508uJiA1EuCr8m5WtEk3aSAmIPyA53gbLCCNHMdjICqW77eBtBrHklWeRcHwICr3PRyHAAGy0akr7EqC0KzJLCCXzm3GqJ+xj8gzsLRO60fk6+JUF9unM8I1pWFonCAqIHGF4N0gPiDn5ig8HAAKnq1+RorC0SA/IGqJ3XE6IOVhUwADHFRqF/A26fc9t1aDkMpL6/VXYwAL1ysACpgZklkgLyDud0issr3JRZ2Bg+mKz+lSX24gXiDwmnsgSLWSt4LWAAcnvyDUFe53IwALwnHFRuS6V1AA',
        ]));
      });

      to('decodeBase64', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            window.OnesyHuffmanCode.decodeBase64(''),
            window.OnesyHuffmanCode.decodeBase64('AAAA'),
            window.OnesyHuffmanCode.decodeBase64('/pMAC+dOnX8daPKS+UVibVE7rifssjogAAuRKNuVHkUuAA3GFon3f5KWMorE2oX+z7lxaKitQVg3Tqid1xP28ecwluzm3GqJ3I4Qe7/hWhW8tywgN04gfCAtFfa/WFJyuzJLICUg8cVb3PR5LS0ACxWoK1+RorPoOHKVr9YUnK73Pduqt3kg508uJiA1EuCr8m5WtEk3aSAmIPyA53gbLCCNHMdjICqW77eBtBrHklWeRcHwICr3PRyHAAGy0akr7EqC0KzJLCCXzm3GqJ+xj8gzsLRO60fk6+JUF9unM8I1pWFonCAqIHGF4N0gPiDn5ig8HAAKnq1+RorC0SA/IGqJ3XE6IOVhUwADHFRqF/A26fc9t1aDkMpL6/VXYwAL1ysACpgZklkgLyDud0issr3JRZ2Bg+mKz+lSX24gXiDwmnsgSLWSt4LWAAcnvyDUFe53IwALwnHFRuS6V1AA'),
          ];
        });
        const valueNode = [
          OnesyHuffmanCode.decodeBase64(''),
          OnesyHuffmanCode.decodeBase64('AAAA'),
          OnesyHuffmanCode.decodeBase64('/pMAC+dOnX8daPKS+UVibVE7rifssjogAAuRKNuVHkUuAA3GFon3f5KWMorE2oX+z7lxaKitQVg3Tqid1xP28ecwluzm3GqJ3I4Qe7/hWhW8tywgN04gfCAtFfa/WFJyuzJLICUg8cVb3PR5LS0ACxWoK1+RorPoOHKVr9YUnK73Pduqt3kg508uJiA1EuCr8m5WtEk3aSAmIPyA53gbLCCNHMdjICqW77eBtBrHklWeRcHwICr3PRyHAAGy0akr7EqC0KzJLCCXzm3GqJ+xj8gzsLRO60fk6+JUF9unM8I1pWFonCAqIHGF4N0gPiDn5ig8HAAKnq1+RorC0SA/IGqJ3XE6IOVhUwADHFRqF/A26fc9t1aDkMpL6/VXYwAL1ysACpgZklkgLyDud0issr3JRZ2Bg+mKz+lSX24gXiDwmnsgSLWSt4LWAAcnvyDUFe53IwALwnHFRuS6V1AA'),
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          '',
          '\x00\x00\x00',
          `þ\x93\x00\vçN\x9D\x7F\x1Dhò\x92ùEbmQ;®'ì²: \x00\v\x91(Û\x95\x1EE.\x00\rÆ\x16\x89÷\x7F\x92\x962\x8AÄÚ\x85þÏ¹qh¨­AX7N¨\x9D×\x13öñç0\x96ìæÜj\x89Ü\x8E\x10{¿áZ\x15¼·, 7N | -\x15ö¿XRr»2K % ñÅ[Üôy--\x00\v\x15¨+_\x91¢³è8r\x95¯Ö\x14\x9C®÷=Ûª·y çO.& 5\x12à«ònV´I7i & ü\x80çx\x1B, \x8D\x1CÇc *\x96ï·\x81´\x1AÇ\x92U\x9EEÁð *÷=\x1C\x87\x00\x01²Ñ©+ìJ\x82Ð¬É, \x97ÎmÆ¨\x9F±\x8FÈ3°´NëGäëâT\x17Û§3Â5¥ah\x9C * q\x85àÝ > çæ(<\x1C\x00\n\x9E­~F\x8AÂÑ ? j\x89Ýq: åaS\x00\x03\x1CTj\x17ð6é÷=·V\x83\x90ÊKëõWc\x00\v×+\x00\n\x98\x19\x92Y / îwH¬²½ÉE\x9D\x81\x83é\x8AÏéR_n ^ ð\x9A{ Hµ\x92·\x82Ö\x00\x07'¿ Ô\x15îw#\x00\vÂqÅFäºWP\x00`,
        ]));
      });

    });

    group('onesyHuffmanCode', () => {

      to('onesyHuffmanCode', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            new window.OnesyHuffmanCode('').response.value,
            new window.OnesyHuffmanCode(4).response.value,
            new window.OnesyHuffmanCode(' ').response.value,
            new window.OnesyHuffmanCode('  ').response.value,
            new window.OnesyHuffmanCode('a').response.value,
            new window.OnesyHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').response.value,
            new window.OnesyHuffmanCode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt justo sit amet mi ornare volutpat. Praesent consequat mauris id massa vehicula, ac molestie dolor tincidunt. Fusce neque dolor, commodo nec justo nec, commodo euismod erat. Vivamus at tincidunt massa, nec tempor ante. In suscipit nisl nec faucibus gravida. In non commodo erat, eu luctus ligula. Sed purus justo, congue in congue eget, placerat scelerisque velit. Sed vel arcu risus. Vivamus auctor quis erat a porta.\n\nMauris vel dui at lectus tincidunt finibus id ut massa. Phasellus in velit elit. Etiam eu dapibus lorem. Maecenas at tincidunt urna. Cras vulputate lobortis urna quis condimentum. Ut sit amet sodales metus, eu eleifend arcu. In sed porta elit. Duis sit amet dictum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed commodo vitae magna eu consectetur. Vivamus faucibus vehicula dignissim. Aliquam vitae mauris lacinia, sodales ante eu, faucibus leo. Suspendisse vel sodales lacus. Aliquam erat volutpat.\n\nMaecenas molestie neque vel purus aliquam, vitae pharetra purus molestie. Fusce sit amet odio condimentum, bibendum velit scelerisque, placerat lorem. Aenean vestibulum lacus sit amet lectus sagittis consequat. Suspendisse est ante, dignissim eget lectus ac, dapibus ornare purus. Proin porta pharetra ipsum, eu eleifend erat consectetur pretium. Nullam sodales nisi non metus volutpat, luctus blandit tellus iaculis. Quisque eleifend erat orci, ac elementum nunc consectetur at. Vestibulum cursus aliquet fermentum. Ut fringilla ligula sed quam pharetra, sed congue metus euismod.\n\nQuisque vulputate in velit vel volutpat. Fusce sollicitudin sed risus et volutpat. Aliquam eget nisi vel risus tempor iaculis. In lobortis consectetur ipsum, sed consectetur mi eleifend a. Maecenas egestas erat quis gravida tristique. In hac habitasse platea dictumst. Cras sollicitudin non augue volutpat ultricies. Mauris finibus urna velit, a egestas tellus finibus ut. Nam a tortor et ligula vestibulum consectetur sit amet ac mi. Nulla consectetur diam vitae elit tristique fringilla. Duis eget magna mauris.\n\nInteger ut ipsum eu tortor mollis accumsan nec vitae ex. Proin convallis, eros et viverra fringilla, orci purus ultricies lectus, rutrum ultrices odio nibh non odio. Quisque imperdiet elit eu suscipit suscipit. Pellentesque suscipit ex sed mattis imperdiet. Vivamus egestas tristique nisl non ornare. Duis fringilla maximus venenatis. Proin porttitor eget quam sit amet volutpat. Nulla arcu purus, lacinia id volutpat ut, tincidunt sed purus. Donec ullamcorper id lacus in placerat. Pellentesque a tortor ut mauris egestas pulvinar. Mauris laoreet sem augue, eget auctor erat semper gravida. Nulla et lectus mi. Etiam sagittis libero at lobortis tincidunt. Suspendisse sem ligula, auctor eu lacinia id, pharetra sit amet lacus. Fusce quis arcu vestibulum, pulvinar neque ultricies, gravida justo.').response.value,
          ];
        });
        const valueNode = [
          new OnesyHuffmanCode('').response.value,
          new OnesyHuffmanCode(4 as any).response.value,
          new OnesyHuffmanCode(' ').response.value,
          new OnesyHuffmanCode('  ').response.value,
          new OnesyHuffmanCode('a').response.value,
          new OnesyHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').response.value,
          new OnesyHuffmanCode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt justo sit amet mi ornare volutpat. Praesent consequat mauris id massa vehicula, ac molestie dolor tincidunt. Fusce neque dolor, commodo nec justo nec, commodo euismod erat. Vivamus at tincidunt massa, nec tempor ante. In suscipit nisl nec faucibus gravida. In non commodo erat, eu luctus ligula. Sed purus justo, congue in congue eget, placerat scelerisque velit. Sed vel arcu risus. Vivamus auctor quis erat a porta.\n\nMauris vel dui at lectus tincidunt finibus id ut massa. Phasellus in velit elit. Etiam eu dapibus lorem. Maecenas at tincidunt urna. Cras vulputate lobortis urna quis condimentum. Ut sit amet sodales metus, eu eleifend arcu. In sed porta elit. Duis sit amet dictum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed commodo vitae magna eu consectetur. Vivamus faucibus vehicula dignissim. Aliquam vitae mauris lacinia, sodales ante eu, faucibus leo. Suspendisse vel sodales lacus. Aliquam erat volutpat.\n\nMaecenas molestie neque vel purus aliquam, vitae pharetra purus molestie. Fusce sit amet odio condimentum, bibendum velit scelerisque, placerat lorem. Aenean vestibulum lacus sit amet lectus sagittis consequat. Suspendisse est ante, dignissim eget lectus ac, dapibus ornare purus. Proin porta pharetra ipsum, eu eleifend erat consectetur pretium. Nullam sodales nisi non metus volutpat, luctus blandit tellus iaculis. Quisque eleifend erat orci, ac elementum nunc consectetur at. Vestibulum cursus aliquet fermentum. Ut fringilla ligula sed quam pharetra, sed congue metus euismod.\n\nQuisque vulputate in velit vel volutpat. Fusce sollicitudin sed risus et volutpat. Aliquam eget nisi vel risus tempor iaculis. In lobortis consectetur ipsum, sed consectetur mi eleifend a. Maecenas egestas erat quis gravida tristique. In hac habitasse platea dictumst. Cras sollicitudin non augue volutpat ultricies. Mauris finibus urna velit, a egestas tellus finibus ut. Nam a tortor et ligula vestibulum consectetur sit amet ac mi. Nulla consectetur diam vitae elit tristique fringilla. Duis eget magna mauris.\n\nInteger ut ipsum eu tortor mollis accumsan nec vitae ex. Proin convallis, eros et viverra fringilla, orci purus ultricies lectus, rutrum ultrices odio nibh non odio. Quisque imperdiet elit eu suscipit suscipit. Pellentesque suscipit ex sed mattis imperdiet. Vivamus egestas tristique nisl non ornare. Duis fringilla maximus venenatis. Proin porttitor eget quam sit amet volutpat. Nulla arcu purus, lacinia id volutpat ut, tincidunt sed purus. Donec ullamcorper id lacus in placerat. Pellentesque a tortor ut mauris egestas pulvinar. Mauris laoreet sem augue, eget auctor erat semper gravida. Nulla et lectus mi. Etiam sagittis libero at lobortis tincidunt. Suspendisse sem ligula, auctor eu lacinia id, pharetra sit amet lacus. Fusce quis arcu vestibulum, pulvinar neque ultricies, gravida justo.').response.value,
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          '',
          '',
          'AAIC',
          'AAIE',
          'AAIC',
          'AAL/2Zyb+ez6vb/p7dj82Zv5qa6Z3ayr3t6Z/urqnsjeqZqd3q2PzKzei7y4rsq/vf/M2bjqytyrusm/+5/er43Y2prtia6LvZ7ame+vjP+76fnriq77nru8utjPvMvJifvf/o26jbvq75uLvZ6/iuyt/dv9uKzPmvuczNzN/Lytu++fqfmbquybjbrI26/5jsrc/sj4vNmu3+3Jqrzb37z97vra776qi8+r6vjOnambyNr/md6t26mZne7Mzv+Yi8++idzcy6nrj7jq2q77+76J3Ynbj8zNrr6pvI/omt+8/Y+YvInc3Y7Zmv7pmsjditzqquqv687vjtqZ/unL/Mjr3Jupnvrsv8z6/pmsjf3ez5z8mO3Zro3Yz4rZ6cm+i72f3r/OmovovIrZ+t2/zLqa6N2M/7rYz728q9vNuK2ci4+NqdqN/4ju+r+8/d3tuovMnNmb+v+tr7jo36+a6Nq4jrmZuZv++e+qmurq37zNjc+4jov6uNuf+q2Zv7vN++jOz92Y3bma78jduI+Y2/zI7Ymv3r3qnJvoz4+Nqd6q+q31',
          'AAL//O2r6pn5yfzdjujtmcqJvfqJ3s+O3dj4mIjs3uyr6Zz42+6s6Mier/776ojbvK7J3I3/6NyJzOmI3v2Ir8qp2t/ayv6dyMj96I+Z/K3suq6KvLruyfi+ib74upnMrs37zrvN/Z/4z4vPu9vPm+ncy4isrsu4usyJrvjdi7iPmf7Jueyt6Pycrsu4ut3s+O/fjuy5r4+b/8m4i5r4+72enfvp3Y6sjM78u6rNvInqv5m/vfiur4jImu+N2LuJvvnO+72vj5iZ+fjtm9uKj5n9rs6Nz4z8qJrqu428vMv7ybyv+K6u7b38rt6eq/rdrrrs+O/fjuy5qt6LvaityN6Irq6N3J68vM/vnZn4uo3N/+jcid3s+O37i4yt2enb7o6au6id7P3Pns28irns6qyrj8nK/s6Mieq/vOzf2cr6z4ramcm4+Z/M3978m5vJvInaqfiquareibzPy6yPj4/4/5/rydjOr+zpuozN6JuY+Im5iK3em6juip/K3N/o3MrsyYm++c74+Z/L/vnZzorqmu39nJiNnJiLzP+4je/Nia7evpv8m5uLrZ+Pmf69j6r+ubyKiNu8rsncjJ2v6eq/6t65v4vL6Mnoqbi7/LrImcydr+qfiquZ6dvsr9m4i/j5n/qKuMivvsiZy7r7mOr9iI3d7Yms6oy/qv2b2ryZ6r+t2dnZn47YnqzoyJ6r/4qrmcqJvfqI3Yz4ifzf2cmIvM/86865vPyM3IyPnpiKq468qc6fit7s3JiLreqI7Y/JzcjP2aq8uun/jerc64mvu9n6rMrd7L6I65v+m+zf2LnLzP752Z6d++ndjq/pieyv3u7fzYmry67svIyIup6r+Zv734rqn96N6b/Jub+r/pno+ersru3M6434+Z//yY/J++r+mJ7K/ejsq5uevK3N7vq47t7qnN7cmNie+p/ejem/ybm5i4+Z/crr7N+pnOyv7Omcu6+5jq68+K6eq//4qfi+/NmviN/LuJifvInp/p/r/Pqezfzq/LuY6I2NvJ+Ljf2cq+jsm5vcmPyfvu+v6Ynsq+/97aia+Z+LqNzfjuqciaj5n+ybnsq4yK++yJjuypzPjt+pvs3In93t/pv9m+yfzf2cmIzr2czYzp+Lnez9z57NvIro7avp6r/+r57dv6nIm/yei/m568m5nKib36iNzLyI3M77uMiIzqvLruyfi+iPmf3K6+zfqZzsrLiN7cmd7djd25nOm+rO7Im5j4ibm8+726+fjf6NzLrb+tjPydiunqv42Omuz8usj5n7/vrYjbzKvri/u9qK2cyY/s36rNvIq8uu7LyMiLqr7aiKj+nq/+j5z76rju3uqc25nKrc7dvsiK6v6dyMj96LvbibyI3N/uvb7KiYmc6K6pvPi8mcvMv+jM6fi42cyY/s36rNvIqdq8rvr56s6r7NyJ/NuO75np27qeioidm8ieq/nLiK/4vI/qvJ2cm5vcmPyciY/s2+zcify8z/2Jj+2Nvum5z5uK7o+eq6uqn4vvzP3/vayK3u+rq6q8uv3Jyv2Ijc2Jmd+O7Ly/y/y/6Mzp+Ljfyen4qPiYyt2/q4qJv6uN/LuJifvInqv9iuvYzp3OjPjIj6muzs7NqZybmojfy7iYn7yJ6r//ip+L782d2Irczpm/q42pnJuYmfn47ZjevJ6M6eq/rduLv8usiZzPjt3Y+JiI7Mq+uL+72dnZnp27qeioidm+mauYqf2b7N6eq/z6ns386s7suJ65qt6Jj8mZzd2vv43bzI2M6Iy+jo+Z/a7f+8+b/vv8qLzrqZ+56KvN2M+In86I+Z/5r5zOnc6M+MiPqa7bnbr4vcnK/p3IyP3omLyKyrysuPmf68nYzqn8rc3+jcydr+r+zoyO+vmrupyPnMjOuJuY/prq/4rqjIvN/9783qiO2Ius2Iro3cnrzf2OiN/o+J/M+O3dj4mIjszpiN79iK+er8qer/6PnPmenbup6KiJ2bqb35v4yPqauKiYmpnImPycqf2pr9yuuenqv/iquau6iN+93b+b74upnLy/y/z+24q7qsyYmM/Oj+rI2Iusidqvy7nJnN68+L+d7dr4+b+Mj6mo/+vM/pqcrdnp2/77nJnd7Zqc6sib+N/ZrbzL+srfuNzr3ey6z4zPydiuqPiNjPjY6uqeiK7vrYqNi/mLyKyr2Oqd2Mua6v+/6tzt2O7KnLzL/ozOn4uMr8/ZrsrImriomorOjc+M/KiZybnpn4yJ6r+M65m4qcvo6Zybnpn4yKyf/Z2dm++IiZzK/P2a7KyI+Z/M3978m5q7qcj5zI2M6Iy+jprqu42526na39rJ6r/4qrmP7Y2+6bnPm++P/q/Jub+q+b+Iq4+Z/Ky426vp2oiKiO2au6iMvo/fmcqJvfqI38u4mJ+8ier/6PnPm9q8mr6Oybu9uevK3N6puq/p3IyP3omKjvqI27yuydyM7OzPydiunqv/jt6eqPnPvry6z9mqm6rrz4rqmuz9z57NvInqv4zrmbipy+jpvMidqI7Zior96OyrmrupyPnM/J6/jb+svM/56Oyrm56drMiZ2fm8nujrvau6iN6N6I7Zqt6JnZ+fqs3dr7+N28vN/8nrnqyJuY+Im5vpj5n+6Jvfmd7umIiZzcm/2anN6JuLv8usiZzImu+N2LuI+Z/crr7N+pnOyrq+ro3cnr3e3o3ojtmorc+emur5jdu9n7/vrYjbzOmI3v2Irrz4rp6r/Yrr2MvozOr6z4rf2OiN/o+J/d7Pyev42/rNvJ+LjJ6JqZ6and7d2vv43bzf/o3InLBg=='
        ]));
      });

      to('encoded', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            new window.OnesyHuffmanCode('').encoded.value,
            new window.OnesyHuffmanCode(4 as any).encoded.value,
            new window.OnesyHuffmanCode(' ').encoded.value,
            new window.OnesyHuffmanCode('  ').encoded.value,
            new window.OnesyHuffmanCode('a').encoded.value,
            new window.OnesyHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').encoded.value,
            new window.OnesyHuffmanCode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt justo sit amet mi ornare volutpat. Praesent consequat mauris id massa vehicula, ac molestie dolor tincidunt. Fusce neque dolor, commodo nec justo nec, commodo euismod erat. Vivamus at tincidunt massa, nec tempor ante. In suscipit nisl nec faucibus gravida. In non commodo erat, eu luctus ligula. Sed purus justo, congue in congue eget, placerat scelerisque velit. Sed vel arcu risus. Vivamus auctor quis erat a porta.\n\nMauris vel dui at lectus tincidunt finibus id ut massa. Phasellus in velit elit. Etiam eu dapibus lorem. Maecenas at tincidunt urna. Cras vulputate lobortis urna quis condimentum. Ut sit amet sodales metus, eu eleifend arcu. In sed porta elit. Duis sit amet dictum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed commodo vitae magna eu consectetur. Vivamus faucibus vehicula dignissim. Aliquam vitae mauris lacinia, sodales ante eu, faucibus leo. Suspendisse vel sodales lacus. Aliquam erat volutpat.\n\nMaecenas molestie neque vel purus aliquam, vitae pharetra purus molestie. Fusce sit amet odio condimentum, bibendum velit scelerisque, placerat lorem. Aenean vestibulum lacus sit amet lectus sagittis consequat. Suspendisse est ante, dignissim eget lectus ac, dapibus ornare purus. Proin porta pharetra ipsum, eu eleifend erat consectetur pretium. Nullam sodales nisi non metus volutpat, luctus blandit tellus iaculis. Quisque eleifend erat orci, ac elementum nunc consectetur at. Vestibulum cursus aliquet fermentum. Ut fringilla ligula sed quam pharetra, sed congue metus euismod.\n\nQuisque vulputate in velit vel volutpat. Fusce sollicitudin sed risus et volutpat. Aliquam eget nisi vel risus tempor iaculis. In lobortis consectetur ipsum, sed consectetur mi eleifend a. Maecenas egestas erat quis gravida tristique. In hac habitasse platea dictumst. Cras sollicitudin non augue volutpat ultricies. Mauris finibus urna velit, a egestas tellus finibus ut. Nam a tortor et ligula vestibulum consectetur sit amet ac mi. Nulla consectetur diam vitae elit tristique fringilla. Duis eget magna mauris.\n\nInteger ut ipsum eu tortor mollis accumsan nec vitae ex. Proin convallis, eros et viverra fringilla, orci purus ultricies lectus, rutrum ultrices odio nibh non odio. Quisque imperdiet elit eu suscipit suscipit. Pellentesque suscipit ex sed mattis imperdiet. Vivamus egestas tristique nisl non ornare. Duis fringilla maximus venenatis. Proin porttitor eget quam sit amet volutpat. Nulla arcu purus, lacinia id volutpat ut, tincidunt sed purus. Donec ullamcorper id lacus in placerat. Pellentesque a tortor ut mauris egestas pulvinar. Mauris laoreet sem augue, eget auctor erat semper gravida. Nulla et lectus mi. Etiam sagittis libero at lobortis tincidunt. Suspendisse sem ligula, auctor eu lacinia id, pharetra sit amet lacus. Fusce quis arcu vestibulum, pulvinar neque ultricies, gravida justo.').encoded.value
          ];
        });
        const valueNode = [
          new OnesyHuffmanCode('').encoded.value,
          new OnesyHuffmanCode(4 as any).encoded.value,
          new OnesyHuffmanCode(' ').encoded.value,
          new OnesyHuffmanCode('  ').encoded.value,
          new OnesyHuffmanCode('a').encoded.value,
          new OnesyHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').encoded.value,
          new OnesyHuffmanCode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt justo sit amet mi ornare volutpat. Praesent consequat mauris id massa vehicula, ac molestie dolor tincidunt. Fusce neque dolor, commodo nec justo nec, commodo euismod erat. Vivamus at tincidunt massa, nec tempor ante. In suscipit nisl nec faucibus gravida. In non commodo erat, eu luctus ligula. Sed purus justo, congue in congue eget, placerat scelerisque velit. Sed vel arcu risus. Vivamus auctor quis erat a porta.\n\nMauris vel dui at lectus tincidunt finibus id ut massa. Phasellus in velit elit. Etiam eu dapibus lorem. Maecenas at tincidunt urna. Cras vulputate lobortis urna quis condimentum. Ut sit amet sodales metus, eu eleifend arcu. In sed porta elit. Duis sit amet dictum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed commodo vitae magna eu consectetur. Vivamus faucibus vehicula dignissim. Aliquam vitae mauris lacinia, sodales ante eu, faucibus leo. Suspendisse vel sodales lacus. Aliquam erat volutpat.\n\nMaecenas molestie neque vel purus aliquam, vitae pharetra purus molestie. Fusce sit amet odio condimentum, bibendum velit scelerisque, placerat lorem. Aenean vestibulum lacus sit amet lectus sagittis consequat. Suspendisse est ante, dignissim eget lectus ac, dapibus ornare purus. Proin porta pharetra ipsum, eu eleifend erat consectetur pretium. Nullam sodales nisi non metus volutpat, luctus blandit tellus iaculis. Quisque eleifend erat orci, ac elementum nunc consectetur at. Vestibulum cursus aliquet fermentum. Ut fringilla ligula sed quam pharetra, sed congue metus euismod.\n\nQuisque vulputate in velit vel volutpat. Fusce sollicitudin sed risus et volutpat. Aliquam eget nisi vel risus tempor iaculis. In lobortis consectetur ipsum, sed consectetur mi eleifend a. Maecenas egestas erat quis gravida tristique. In hac habitasse platea dictumst. Cras sollicitudin non augue volutpat ultricies. Mauris finibus urna velit, a egestas tellus finibus ut. Nam a tortor et ligula vestibulum consectetur sit amet ac mi. Nulla consectetur diam vitae elit tristique fringilla. Duis eget magna mauris.\n\nInteger ut ipsum eu tortor mollis accumsan nec vitae ex. Proin convallis, eros et viverra fringilla, orci purus ultricies lectus, rutrum ultrices odio nibh non odio. Quisque imperdiet elit eu suscipit suscipit. Pellentesque suscipit ex sed mattis imperdiet. Vivamus egestas tristique nisl non ornare. Duis fringilla maximus venenatis. Proin porttitor eget quam sit amet volutpat. Nulla arcu purus, lacinia id volutpat ut, tincidunt sed purus. Donec ullamcorper id lacus in placerat. Pellentesque a tortor ut mauris egestas pulvinar. Mauris laoreet sem augue, eget auctor erat semper gravida. Nulla et lectus mi. Etiam sagittis libero at lobortis tincidunt. Suspendisse sem ligula, auctor eu lacinia id, pharetra sit amet lacus. Fusce quis arcu vestibulum, pulvinar neque ultricies, gravida justo.').encoded.value
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          '',
          '',
          'AAIC',
          'AAIE',
          'AAIC',
          'AAL/2Zyb+ez6vb/p7dj82Zv5qa6Z3ayr3t6Z/urqnsjeqZqd3q2PzKzei7y4rsq/vf/M2bjqytyrusm/+5/er43Y2prtia6LvZ7ame+vjP+76fnriq77nru8utjPvMvJifvf/o26jbvq75uLvZ6/iuyt/dv9uKzPmvuczNzN/Lytu++fqfmbquybjbrI26/5jsrc/sj4vNmu3+3Jqrzb37z97vra776qi8+r6vjOnambyNr/md6t26mZne7Mzv+Yi8++idzcy6nrj7jq2q77+76J3Ynbj8zNrr6pvI/omt+8/Y+YvInc3Y7Zmv7pmsjditzqquqv687vjtqZ/unL/Mjr3Jupnvrsv8z6/pmsjf3ez5z8mO3Zro3Yz4rZ6cm+i72f3r/OmovovIrZ+t2/zLqa6N2M/7rYz728q9vNuK2ci4+NqdqN/4ju+r+8/d3tuovMnNmb+v+tr7jo36+a6Nq4jrmZuZv++e+qmurq37zNjc+4jov6uNuf+q2Zv7vN++jOz92Y3bma78jduI+Y2/zI7Ymv3r3qnJvoz4+Nqd6q+q31',
          'AAL//O2r6pn5yfzdjujtmcqJvfqJ3s+O3dj4mIjs3uyr6Zz42+6s6Mier/776ojbvK7J3I3/6NyJzOmI3v2Ir8qp2t/ayv6dyMj96I+Z/K3suq6KvLruyfi+ib74upnMrs37zrvN/Z/4z4vPu9vPm+ncy4isrsu4usyJrvjdi7iPmf7Jueyt6Pycrsu4ut3s+O/fjuy5r4+b/8m4i5r4+72enfvp3Y6sjM78u6rNvInqv5m/vfiur4jImu+N2LuJvvnO+72vj5iZ+fjtm9uKj5n9rs6Nz4z8qJrqu428vMv7ybyv+K6u7b38rt6eq/rdrrrs+O/fjuy5qt6LvaityN6Irq6N3J68vM/vnZn4uo3N/+jcid3s+O37i4yt2enb7o6au6id7P3Pns28irns6qyrj8nK/s6Mieq/vOzf2cr6z4ramcm4+Z/M3978m5vJvInaqfiquareibzPy6yPj4/4/5/rydjOr+zpuozN6JuY+Im5iK3em6juip/K3N/o3MrsyYm++c74+Z/L/vnZzorqmu39nJiNnJiLzP+4je/Nia7evpv8m5uLrZ+Pmf69j6r+ubyKiNu8rsncjJ2v6eq/6t65v4vL6Mnoqbi7/LrImcydr+qfiquZ6dvsr9m4i/j5n/qKuMivvsiZy7r7mOr9iI3d7Yms6oy/qv2b2ryZ6r+t2dnZn47YnqzoyJ6r/4qrmcqJvfqI3Yz4ifzf2cmIvM/86865vPyM3IyPnpiKq468qc6fit7s3JiLreqI7Y/JzcjP2aq8uun/jerc64mvu9n6rMrd7L6I65v+m+zf2LnLzP752Z6d++ndjq/pieyv3u7fzYmry67svIyIup6r+Zv734rqn96N6b/Jub+r/pno+ersru3M6434+Z//yY/J++r+mJ7K/ejsq5uevK3N7vq47t7qnN7cmNie+p/ejem/ybm5i4+Z/crr7N+pnOyv7Omcu6+5jq68+K6eq//4qfi+/NmviN/LuJifvInp/p/r/Pqezfzq/LuY6I2NvJ+Ljf2cq+jsm5vcmPyfvu+v6Ynsq+/97aia+Z+LqNzfjuqciaj5n+ybnsq4yK++yJjuypzPjt+pvs3In93t/pv9m+yfzf2cmIzr2czYzp+Lnez9z57NvIro7avp6r/+r57dv6nIm/yei/m568m5nKib36iNzLyI3M77uMiIzqvLruyfi+iPmf3K6+zfqZzsrLiN7cmd7djd25nOm+rO7Im5j4ibm8+726+fjf6NzLrb+tjPydiunqv42Omuz8usj5n7/vrYjbzKvri/u9qK2cyY/s36rNvIq8uu7LyMiLqr7aiKj+nq/+j5z76rju3uqc25nKrc7dvsiK6v6dyMj96LvbibyI3N/uvb7KiYmc6K6pvPi8mcvMv+jM6fi42cyY/s36rNvIqdq8rvr56s6r7NyJ/NuO75np27qeioidm8ieq/nLiK/4vI/qvJ2cm5vcmPyciY/s2+zcify8z/2Jj+2Nvum5z5uK7o+eq6uqn4vvzP3/vayK3u+rq6q8uv3Jyv2Ijc2Jmd+O7Ly/y/y/6Mzp+Ljfyen4qPiYyt2/q4qJv6uN/LuJifvInqv9iuvYzp3OjPjIj6muzs7NqZybmojfy7iYn7yJ6r//ip+L782d2Irczpm/q42pnJuYmfn47ZjevJ6M6eq/rduLv8usiZzPjt3Y+JiI7Mq+uL+72dnZnp27qeioidm+mauYqf2b7N6eq/z6ns386s7suJ65qt6Jj8mZzd2vv43bzI2M6Iy+jo+Z/a7f+8+b/vv8qLzrqZ+56KvN2M+In86I+Z/5r5zOnc6M+MiPqa7bnbr4vcnK/p3IyP3omLyKyrysuPmf68nYzqn8rc3+jcydr+r+zoyO+vmrupyPnMjOuJuY/prq/4rqjIvN/9783qiO2Ius2Iro3cnrzf2OiN/o+J/M+O3dj4mIjszpiN79iK+er8qer/6PnPmenbup6KiJ2bqb35v4yPqauKiYmpnImPycqf2pr9yuuenqv/iquau6iN+93b+b74upnLy/y/z+24q7qsyYmM/Oj+rI2Iusidqvy7nJnN68+L+d7dr4+b+Mj6mo/+vM/pqcrdnp2/77nJnd7Zqc6sib+N/ZrbzL+srfuNzr3ey6z4zPydiuqPiNjPjY6uqeiK7vrYqNi/mLyKyr2Oqd2Mua6v+/6tzt2O7KnLzL/ozOn4uMr8/ZrsrImriomorOjc+M/KiZybnpn4yJ6r+M65m4qcvo6Zybnpn4yKyf/Z2dm++IiZzK/P2a7KyI+Z/M3978m5q7qcj5zI2M6Iy+jprqu42526na39rJ6r/4qrmP7Y2+6bnPm++P/q/Jub+q+b+Iq4+Z/Ky426vp2oiKiO2au6iMvo/fmcqJvfqI38u4mJ+8ier/6PnPm9q8mr6Oybu9uevK3N6puq/p3IyP3omKjvqI27yuydyM7OzPydiunqv/jt6eqPnPvry6z9mqm6rrz4rqmuz9z57NvInqv4zrmbipy+jpvMidqI7Zior96OyrmrupyPnM/J6/jb+svM/56Oyrm56drMiZ2fm8nujrvau6iN6N6I7Zqt6JnZ+fqs3dr7+N28vN/8nrnqyJuY+Im5vpj5n+6Jvfmd7umIiZzcm/2anN6JuLv8usiZzImu+N2LuI+Z/crr7N+pnOyrq+ro3cnr3e3o3ojtmorc+emur5jdu9n7/vrYjbzOmI3v2Irrz4rp6r/Yrr2MvozOr6z4rf2OiN/o+J/d7Pyev42/rNvJ+LjJ6JqZ6and7d2vv43bzf/o3InLBg=='
        ]));
      });

      to('entropy', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            new window.OnesyHuffmanCode('').entropy,
            new window.OnesyHuffmanCode('a').entropy,
            new window.OnesyHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').entropy,
          ];
        });
        const valueNode = [
          new OnesyHuffmanCode('').entropy,
          new OnesyHuffmanCode('a').entropy,
          new OnesyHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').entropy,
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          0,
          0,
          4.18,
        ]));
      });

      to('entropy', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            new window.OnesyHuffmanCode('').entropy,
            new window.OnesyHuffmanCode('a').entropy,
            new window.OnesyHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').entropy,
          ];
        });
        const valueNode = [
          new OnesyHuffmanCode('').entropy,
          new OnesyHuffmanCode('a').entropy,
          new OnesyHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').entropy,
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          0,
          0,
          4.18,
        ]));
      });

      to('averageCodeWordLength', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            new window.OnesyHuffmanCode('').averageCodeWordLength,
            new window.OnesyHuffmanCode('a').averageCodeWordLength,
            new window.OnesyHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').averageCodeWordLength,
          ];
        });
        const valueNode = [
          new OnesyHuffmanCode('').averageCodeWordLength,
          new OnesyHuffmanCode('a').averageCodeWordLength,
          new OnesyHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').averageCodeWordLength,
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          0,
          1,
          4.215,
        ]));
      });

      to('redundency', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            new window.OnesyHuffmanCode('').redundency,
            new window.OnesyHuffmanCode('a').redundency,
            new window.OnesyHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').redundency,
          ];
        });
        const valueNode = [
          new OnesyHuffmanCode('').redundency,
          new OnesyHuffmanCode('a').redundency,
          new OnesyHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').redundency,
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          0,
          1,
          0.035,
        ]));
      });

      to('efficiency', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            new window.OnesyHuffmanCode('').efficiency,
            new window.OnesyHuffmanCode('a').efficiency,
            new window.OnesyHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').efficiency,
          ];
        });
        const valueNode = [
          new OnesyHuffmanCode('').efficiency,
          new OnesyHuffmanCode('a').efficiency,
          new OnesyHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').efficiency,
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          0,
          0,
          0.992,
        ]));
      });

      to('encode', async () => {
        let onesyHuffmanCodes = [
          new OnesyHuffmanCode(''),
          new OnesyHuffmanCode(4 as any),
          new OnesyHuffmanCode(' '),
          new OnesyHuffmanCode('  '),
          new OnesyHuffmanCode('a'),
          new OnesyHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.'),
          new OnesyHuffmanCode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt justo sit amet mi ornare volutpat. Praesent consequat mauris id massa vehicula, ac molestie dolor tincidunt. Fusce neque dolor, commodo nec justo nec, commodo euismod erat. Vivamus at tincidunt massa, nec tempor ante. In suscipit nisl nec faucibus gravida. In non commodo erat, eu luctus ligula. Sed purus justo, congue in congue eget, placerat scelerisque velit. Sed vel arcu risus. Vivamus auctor quis erat a porta.\n\nMauris vel dui at lectus tincidunt finibus id ut massa. Phasellus in velit elit. Etiam eu dapibus lorem. Maecenas at tincidunt urna. Cras vulputate lobortis urna quis condimentum. Ut sit amet sodales metus, eu eleifend arcu. In sed porta elit. Duis sit amet dictum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed commodo vitae magna eu consectetur. Vivamus faucibus vehicula dignissim. Aliquam vitae mauris lacinia, sodales ante eu, faucibus leo. Suspendisse vel sodales lacus. Aliquam erat volutpat.\n\nMaecenas molestie neque vel purus aliquam, vitae pharetra purus molestie. Fusce sit amet odio condimentum, bibendum velit scelerisque, placerat lorem. Aenean vestibulum lacus sit amet lectus sagittis consequat. Suspendisse est ante, dignissim eget lectus ac, dapibus ornare purus. Proin porta pharetra ipsum, eu eleifend erat consectetur pretium. Nullam sodales nisi non metus volutpat, luctus blandit tellus iaculis. Quisque eleifend erat orci, ac elementum nunc consectetur at. Vestibulum cursus aliquet fermentum. Ut fringilla ligula sed quam pharetra, sed congue metus euismod.\n\nQuisque vulputate in velit vel volutpat. Fusce sollicitudin sed risus et volutpat. Aliquam eget nisi vel risus tempor iaculis. In lobortis consectetur ipsum, sed consectetur mi eleifend a. Maecenas egestas erat quis gravida tristique. In hac habitasse platea dictumst. Cras sollicitudin non augue volutpat ultricies. Mauris finibus urna velit, a egestas tellus finibus ut. Nam a tortor et ligula vestibulum consectetur sit amet ac mi. Nulla consectetur diam vitae elit tristique fringilla. Duis eget magna mauris.\n\nInteger ut ipsum eu tortor mollis accumsan nec vitae ex. Proin convallis, eros et viverra fringilla, orci purus ultricies lectus, rutrum ultrices odio nibh non odio. Quisque imperdiet elit eu suscipit suscipit. Pellentesque suscipit ex sed mattis imperdiet. Vivamus egestas tristique nisl non ornare. Duis fringilla maximus venenatis. Proin porttitor eget quam sit amet volutpat. Nulla arcu purus, lacinia id volutpat ut, tincidunt sed purus. Donec ullamcorper id lacus in placerat. Pellentesque a tortor ut mauris egestas pulvinar. Mauris laoreet sem augue, eget auctor erat semper gravida. Nulla et lectus mi. Etiam sagittis libero at lobortis tincidunt. Suspendisse sem ligula, auctor eu lacinia id, pharetra sit amet lacus. Fusce quis arcu vestibulum, pulvinar neque ultricies, gravida justo.')
        ];

        onesyHuffmanCodes = onesyHuffmanCodes.map(item => {
          item.getProbabilities();
          item.normalizeProbabilities();
          item.makeHuffmanTree();
          item.values = OnesyHuffmanCode.getValues(item.huffmanTree);

          item.encode();

          return item.response.value;
        });

        const valueBrowsers = await evaluate((window: any) => {
          let onesyHuffmanCodes = [
            new window.OnesyHuffmanCode(''),
            new window.OnesyHuffmanCode(4),
            new window.OnesyHuffmanCode(' '),
            new window.OnesyHuffmanCode('  '),
            new window.OnesyHuffmanCode('a'),
            new window.OnesyHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.'),
            new window.OnesyHuffmanCode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt justo sit amet mi ornare volutpat. Praesent consequat mauris id massa vehicula, ac molestie dolor tincidunt. Fusce neque dolor, commodo nec justo nec, commodo euismod erat. Vivamus at tincidunt massa, nec tempor ante. In suscipit nisl nec faucibus gravida. In non commodo erat, eu luctus ligula. Sed purus justo, congue in congue eget, placerat scelerisque velit. Sed vel arcu risus. Vivamus auctor quis erat a porta.\n\nMauris vel dui at lectus tincidunt finibus id ut massa. Phasellus in velit elit. Etiam eu dapibus lorem. Maecenas at tincidunt urna. Cras vulputate lobortis urna quis condimentum. Ut sit amet sodales metus, eu eleifend arcu. In sed porta elit. Duis sit amet dictum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed commodo vitae magna eu consectetur. Vivamus faucibus vehicula dignissim. Aliquam vitae mauris lacinia, sodales ante eu, faucibus leo. Suspendisse vel sodales lacus. Aliquam erat volutpat.\n\nMaecenas molestie neque vel purus aliquam, vitae pharetra purus molestie. Fusce sit amet odio condimentum, bibendum velit scelerisque, placerat lorem. Aenean vestibulum lacus sit amet lectus sagittis consequat. Suspendisse est ante, dignissim eget lectus ac, dapibus ornare purus. Proin porta pharetra ipsum, eu eleifend erat consectetur pretium. Nullam sodales nisi non metus volutpat, luctus blandit tellus iaculis. Quisque eleifend erat orci, ac elementum nunc consectetur at. Vestibulum cursus aliquet fermentum. Ut fringilla ligula sed quam pharetra, sed congue metus euismod.\n\nQuisque vulputate in velit vel volutpat. Fusce sollicitudin sed risus et volutpat. Aliquam eget nisi vel risus tempor iaculis. In lobortis consectetur ipsum, sed consectetur mi eleifend a. Maecenas egestas erat quis gravida tristique. In hac habitasse platea dictumst. Cras sollicitudin non augue volutpat ultricies. Mauris finibus urna velit, a egestas tellus finibus ut. Nam a tortor et ligula vestibulum consectetur sit amet ac mi. Nulla consectetur diam vitae elit tristique fringilla. Duis eget magna mauris.\n\nInteger ut ipsum eu tortor mollis accumsan nec vitae ex. Proin convallis, eros et viverra fringilla, orci purus ultricies lectus, rutrum ultrices odio nibh non odio. Quisque imperdiet elit eu suscipit suscipit. Pellentesque suscipit ex sed mattis imperdiet. Vivamus egestas tristique nisl non ornare. Duis fringilla maximus venenatis. Proin porttitor eget quam sit amet volutpat. Nulla arcu purus, lacinia id volutpat ut, tincidunt sed purus. Donec ullamcorper id lacus in placerat. Pellentesque a tortor ut mauris egestas pulvinar. Mauris laoreet sem augue, eget auctor erat semper gravida. Nulla et lectus mi. Etiam sagittis libero at lobortis tincidunt. Suspendisse sem ligula, auctor eu lacinia id, pharetra sit amet lacus. Fusce quis arcu vestibulum, pulvinar neque ultricies, gravida justo.')
          ];

          onesyHuffmanCodes = onesyHuffmanCodes.map(item => {
            item.getProbabilities();
            item.normalizeProbabilities();
            item.makeHuffmanTree();
            item.values = window.OnesyHuffmanCode.getValues(item.huffmanTree);

            item.encode();

            return item.response.value;
          });

          return onesyHuffmanCodes;
        });
        const valueNode = onesyHuffmanCodes;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          '',
          '',
          'AAIC',
          'AAIE',
          'AAIC',
          'AAL/2Zyb+ez6vb/p7dj82Zv5qa6Z3ayr3t6Z/urqnsjeqZqd3q2PzKzei7y4rsq/vf/M2bjqytyrusm/+5/er43Y2prtia6LvZ7ame+vjP+76fnriq77nru8utjPvMvJifvf/o26jbvq75uLvZ6/iuyt/dv9uKzPmvuczNzN/Lytu++fqfmbquybjbrI26/5jsrc/sj4vNmu3+3Jqrzb37z97vra776qi8+r6vjOnambyNr/md6t26mZne7Mzv+Yi8++idzcy6nrj7jq2q77+76J3Ynbj8zNrr6pvI/omt+8/Y+YvInc3Y7Zmv7pmsjditzqquqv687vjtqZ/unL/Mjr3Jupnvrsv8z6/pmsjf3ez5z8mO3Zro3Yz4rZ6cm+i72f3r/OmovovIrZ+t2/zLqa6N2M/7rYz728q9vNuK2ci4+NqdqN/4ju+r+8/d3tuovMnNmb+v+tr7jo36+a6Nq4jrmZuZv++e+qmurq37zNjc+4jov6uNuf+q2Zv7vN++jOz92Y3bma78jduI+Y2/zI7Ymv3r3qnJvoz4+Nqd6q+q31',
          'AAL//O2r6pn5yfzdjujtmcqJvfqJ3s+O3dj4mIjs3uyr6Zz42+6s6Mier/776ojbvK7J3I3/6NyJzOmI3v2Ir8qp2t/ayv6dyMj96I+Z/K3suq6KvLruyfi+ib74upnMrs37zrvN/Z/4z4vPu9vPm+ncy4isrsu4usyJrvjdi7iPmf7Jueyt6Pycrsu4ut3s+O/fjuy5r4+b/8m4i5r4+72enfvp3Y6sjM78u6rNvInqv5m/vfiur4jImu+N2LuJvvnO+72vj5iZ+fjtm9uKj5n9rs6Nz4z8qJrqu428vMv7ybyv+K6u7b38rt6eq/rdrrrs+O/fjuy5qt6LvaityN6Irq6N3J68vM/vnZn4uo3N/+jcid3s+O37i4yt2enb7o6au6id7P3Pns28irns6qyrj8nK/s6Mieq/vOzf2cr6z4ramcm4+Z/M3978m5vJvInaqfiquareibzPy6yPj4/4/5/rydjOr+zpuozN6JuY+Im5iK3em6juip/K3N/o3MrsyYm++c74+Z/L/vnZzorqmu39nJiNnJiLzP+4je/Nia7evpv8m5uLrZ+Pmf69j6r+ubyKiNu8rsncjJ2v6eq/6t65v4vL6Mnoqbi7/LrImcydr+qfiquZ6dvsr9m4i/j5n/qKuMivvsiZy7r7mOr9iI3d7Yms6oy/qv2b2ryZ6r+t2dnZn47YnqzoyJ6r/4qrmcqJvfqI3Yz4ifzf2cmIvM/86865vPyM3IyPnpiKq468qc6fit7s3JiLreqI7Y/JzcjP2aq8uun/jerc64mvu9n6rMrd7L6I65v+m+zf2LnLzP752Z6d++ndjq/pieyv3u7fzYmry67svIyIup6r+Zv734rqn96N6b/Jub+r/pno+ersru3M6434+Z//yY/J++r+mJ7K/ejsq5uevK3N7vq47t7qnN7cmNie+p/ejem/ybm5i4+Z/crr7N+pnOyv7Omcu6+5jq68+K6eq//4qfi+/NmviN/LuJifvInp/p/r/Pqezfzq/LuY6I2NvJ+Ljf2cq+jsm5vcmPyfvu+v6Ynsq+/97aia+Z+LqNzfjuqciaj5n+ybnsq4yK++yJjuypzPjt+pvs3In93t/pv9m+yfzf2cmIzr2czYzp+Lnez9z57NvIro7avp6r/+r57dv6nIm/yei/m568m5nKib36iNzLyI3M77uMiIzqvLruyfi+iPmf3K6+zfqZzsrLiN7cmd7djd25nOm+rO7Im5j4ibm8+726+fjf6NzLrb+tjPydiunqv42Omuz8usj5n7/vrYjbzKvri/u9qK2cyY/s36rNvIq8uu7LyMiLqr7aiKj+nq/+j5z76rju3uqc25nKrc7dvsiK6v6dyMj96LvbibyI3N/uvb7KiYmc6K6pvPi8mcvMv+jM6fi42cyY/s36rNvIqdq8rvr56s6r7NyJ/NuO75np27qeioidm8ieq/nLiK/4vI/qvJ2cm5vcmPyciY/s2+zcify8z/2Jj+2Nvum5z5uK7o+eq6uqn4vvzP3/vayK3u+rq6q8uv3Jyv2Ijc2Jmd+O7Ly/y/y/6Mzp+Ljfyen4qPiYyt2/q4qJv6uN/LuJifvInqv9iuvYzp3OjPjIj6muzs7NqZybmojfy7iYn7yJ6r//ip+L782d2Irczpm/q42pnJuYmfn47ZjevJ6M6eq/rduLv8usiZzPjt3Y+JiI7Mq+uL+72dnZnp27qeioidm+mauYqf2b7N6eq/z6ns386s7suJ65qt6Jj8mZzd2vv43bzI2M6Iy+jo+Z/a7f+8+b/vv8qLzrqZ+56KvN2M+In86I+Z/5r5zOnc6M+MiPqa7bnbr4vcnK/p3IyP3omLyKyrysuPmf68nYzqn8rc3+jcydr+r+zoyO+vmrupyPnMjOuJuY/prq/4rqjIvN/9783qiO2Ius2Iro3cnrzf2OiN/o+J/M+O3dj4mIjszpiN79iK+er8qer/6PnPmenbup6KiJ2bqb35v4yPqauKiYmpnImPycqf2pr9yuuenqv/iquau6iN+93b+b74upnLy/y/z+24q7qsyYmM/Oj+rI2Iusidqvy7nJnN68+L+d7dr4+b+Mj6mo/+vM/pqcrdnp2/77nJnd7Zqc6sib+N/ZrbzL+srfuNzr3ey6z4zPydiuqPiNjPjY6uqeiK7vrYqNi/mLyKyr2Oqd2Mua6v+/6tzt2O7KnLzL/ozOn4uMr8/ZrsrImriomorOjc+M/KiZybnpn4yJ6r+M65m4qcvo6Zybnpn4yKyf/Z2dm++IiZzK/P2a7KyI+Z/M3978m5q7qcj5zI2M6Iy+jprqu42526na39rJ6r/4qrmP7Y2+6bnPm++P/q/Jub+q+b+Iq4+Z/Ky426vp2oiKiO2au6iMvo/fmcqJvfqI38u4mJ+8ier/6PnPm9q8mr6Oybu9uevK3N6puq/p3IyP3omKjvqI27yuydyM7OzPydiunqv/jt6eqPnPvry6z9mqm6rrz4rqmuz9z57NvInqv4zrmbipy+jpvMidqI7Zior96OyrmrupyPnM/J6/jb+svM/56Oyrm56drMiZ2fm8nujrvau6iN6N6I7Zqt6JnZ+fqs3dr7+N28vN/8nrnqyJuY+Im5vpj5n+6Jvfmd7umIiZzcm/2anN6JuLv8usiZzImu+N2LuI+Z/crr7N+pnOyrq+ro3cnr3e3o3ojtmorc+emur5jdu9n7/vrYjbzOmI3v2Irrz4rp6r/Yrr2MvozOr6z4rf2OiN/o+J/d7Pyev42/rNvJ+LjJ6JqZ6and7d2vv43bzf/o3InLBg=='
        ]));
      });

      to('decode', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            new window.OnesyHuffmanCode('').decode('').value,
            new window.OnesyHuffmanCode(4).decode(4).value,
            new window.OnesyHuffmanCode(' ').decode('AAIC').value,
            new window.OnesyHuffmanCode('  ').decode('AAIE').value,
            new window.OnesyHuffmanCode('a').decode('AAIC').value,
            new window.OnesyHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').decode('AAL/2Zyb+ez6vb/p7dj82Zv5qa6Z3ayr3t6Z/urqnsjeqZqd3q2PzKzei7y4rsq/vf/M2bjqytyrusm/+5/er43Y2prtia6LvZ7ame+vjP+76fnriq77nru8utjPvMvJifvf/o26jbvq75uLvZ6/iuyt/dv9uKzPmvuczNzN/Lytu++fqfmbquybjbrI26/5jsrc/sj4vNmu3+3Jqrzb37z97vra776qi8+r6vjOnambyNr/md6t26mZne7Mzv+Yi8++idzcy6nrj7jq2q77+76J3Ynbj8zNrr6pvI/omt+8/Y+YvInc3Y7Zmv7pmsjditzqquqv687vjtqZ/unL/Mjr3Jupnvrsv8z6/pmsjf3ez5z8mO3Zro3Yz4rZ6cm+i72f3r/OmovovIrZ+t2/zLqa6N2M/7rYz728q9vNuK2ci4+NqdqN/4ju+r+8/d3tuovMnNmb+v+tr7jo36+a6Nq4jrmZuZv++e+qmurq37zNjc+4jov6uNuf+q2Zv7vN++jOz92Y3bma78jduI+Y2/zI7Ymv3r3qnJvoz4+Nqd6q+q31').value,
          ];
        });
        const valueNode = [
          new OnesyHuffmanCode('').decode('').value,
          new OnesyHuffmanCode(4 as any).decode(4 as any).value,
          new OnesyHuffmanCode(' ').decode('AAIC').value,
          new OnesyHuffmanCode('  ').decode('AAIE').value,
          new OnesyHuffmanCode('a').decode('AAIC').value,
          new OnesyHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').decode('AAL/2Zyb+ez6vb/p7dj82Zv5qa6Z3ayr3t6Z/urqnsjeqZqd3q2PzKzei7y4rsq/vf/M2bjqytyrusm/+5/er43Y2prtia6LvZ7ame+vjP+76fnriq77nru8utjPvMvJifvf/o26jbvq75uLvZ6/iuyt/dv9uKzPmvuczNzN/Lytu++fqfmbquybjbrI26/5jsrc/sj4vNmu3+3Jqrzb37z97vra776qi8+r6vjOnambyNr/md6t26mZne7Mzv+Yi8++idzcy6nrj7jq2q77+76J3Ynbj8zNrr6pvI/omt+8/Y+YvInc3Y7Zmv7pmsjditzqquqv687vjtqZ/unL/Mjr3Jupnvrsv8z6/pmsjf3ez5z8mO3Zro3Yz4rZ6cm+i72f3r/OmovovIrZ+t2/zLqa6N2M/7rYz728q9vNuK2ci4+NqdqN/4ju+r+8/d3tuovMnNmb+v+tr7jo36+a6Nq4jrmZuZv++e+qmurq37zNjc+4jov6uNuf+q2Zv7vN++jOz92Y3bma78jduI+Y2/zI7Ymv3r3qnJvoz4+Nqd6q+q31').value,
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          '',
          4,
          ' ',
          '  ',
          'a',
          'Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.',
        ]));
      });

      to('getProbabilities', async () => {
        const onesyHuffmanCodes = [
          new OnesyHuffmanCode(),
          new OnesyHuffmanCode(),
          new OnesyHuffmanCode(),
        ];

        onesyHuffmanCodes[0].value = '';
        onesyHuffmanCodes[1].value = 'a';
        onesyHuffmanCodes[2].value = 'Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.';

        const valueBrowsers = await evaluate((window: any) => {
          const onesyHuffmanCodes = [
            new window.OnesyHuffmanCode(),
            new window.OnesyHuffmanCode(),
            new window.OnesyHuffmanCode(),
          ];

          onesyHuffmanCodes[0].value = '';
          onesyHuffmanCodes[1].value = 'a';
          onesyHuffmanCodes[2].value = 'Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.';

          return [
            onesyHuffmanCodes[0].getProbabilities(),
            onesyHuffmanCodes[1].getProbabilities(),
            onesyHuffmanCodes[2].getProbabilities(),
          ];
        });

        const valueNode = [
          onesyHuffmanCodes[0].getProbabilities(),
          onesyHuffmanCodes[1].getProbabilities(),
          onesyHuffmanCodes[2].getProbabilities(),
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          {},
          { 'a': 1 },
          { '0': 1, '1': 4, 'L': 1, 'o': 28, 'r': 31, 'e': 57, 'm': 23, ' ': 90, 'i': 45, 'p': 11, 's': 48, 'u': 32, 'd': 18, 'l': 24, 't': 45, 'a': 42, ',': 10, 'c': 18, 'n': 26, 'g': 4, '.': 10, 'F': 1, 'f': 3, 'h': 3, 'b': 4, 'S': 1, 'I': 2, 'C': 2, 'q': 5, 'v': 2, 'P': 1, 'D': 2, 'j': 1 },
        ]));
      });

      to('normalizeProbabilities', async () => {
        const onesyHuffmanCodes = [
          new OnesyHuffmanCode(),
          new OnesyHuffmanCode(),
          new OnesyHuffmanCode(),
        ];

        onesyHuffmanCodes[0].probabilities = {};
        onesyHuffmanCodes[1].probabilities = { 'a': 1 };
        onesyHuffmanCodes[2].probabilities = { '0': 1, '1': 4, 'L': 1, 'o': 28, 'r': 31, 'e': 57, 'm': 23, ' ': 90, 'i': 45, 'p': 11, 's': 48, 'u': 32, 'd': 18, 'l': 24, 't': 45, 'a': 42, ',': 10, 'c': 18, 'n': 26, 'g': 4, '.': 10, 'F': 1, 'f': 3, 'h': 3, 'b': 4, 'S': 1, 'I': 2, 'C': 2, 'q': 5, 'v': 2, 'P': 1, 'D': 2, 'j': 1 };

        const valueBrowsers = await evaluate((window: any) => {
          const onesyHuffmanCodes = [
            new window.OnesyHuffmanCode(),
            new window.OnesyHuffmanCode(),
            new window.OnesyHuffmanCode(),
          ];

          onesyHuffmanCodes[0].probabilities = {};
          onesyHuffmanCodes[1].probabilities = { 'a': 1 };
          onesyHuffmanCodes[2].probabilities = { '0': 1, '1': 4, 'L': 1, 'o': 28, 'r': 31, 'e': 57, 'm': 23, ' ': 90, 'i': 45, 'p': 11, 's': 48, 'u': 32, 'd': 18, 'l': 24, 't': 45, 'a': 42, ',': 10, 'c': 18, 'n': 26, 'g': 4, '.': 10, 'F': 1, 'f': 3, 'h': 3, 'b': 4, 'S': 1, 'I': 2, 'C': 2, 'q': 5, 'v': 2, 'P': 1, 'D': 2, 'j': 1 };

          return [
            onesyHuffmanCodes[0].normalizeProbabilities(),
            onesyHuffmanCodes[1].normalizeProbabilities(),
            onesyHuffmanCodes[2].normalizeProbabilities(),
          ];
        });

        const valueNode = [
          onesyHuffmanCodes[0].normalizeProbabilities(),
          onesyHuffmanCodes[1].normalizeProbabilities(),
          onesyHuffmanCodes[2].normalizeProbabilities(),
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          {},
          { 'a': 1 },
          { '0': 0.0017, '1': 0.0067, 'L': 0.0017, 'o': 0.0471, 'r': 0.0521, 'e': 0.0958, 'm': 0.0387, ' ': 0.1513, 'i': 0.0756, 'p': 0.0185, 's': 0.0807, 'u': 0.0538, 'd': 0.0303, 'l': 0.0403, 't': 0.0756, 'a': 0.0706, ',': 0.0168, 'c': 0.0303, 'n': 0.0437, 'g': 0.0067, '.': 0.0168, 'F': 0.0017, 'f': 0.005, 'h': 0.005, 'b': 0.0067, 'S': 0.0017, 'I': 0.0034, 'C': 0.0034, 'q': 0.0084, 'v': 0.0034, 'P': 0.0017, 'D': 0.0034, 'j': 0.0017 }
        ]));
      });

      to('makeHuffmanTree', async () => {
        const onesyHuffmanCodes = [
          new OnesyHuffmanCode(),
          new OnesyHuffmanCode(),
          new OnesyHuffmanCode(),
        ];

        onesyHuffmanCodes[0].probabilities = {};
        onesyHuffmanCodes[1].probabilities = { 'a': 1 };
        onesyHuffmanCodes[2].probabilities = { '0': 1, '1': 4, 'L': 1, 'o': 28, 'r': 31, 'e': 57, 'm': 23, ' ': 90, 'i': 45, 'p': 11, 's': 48, 'u': 32, 'd': 18, 'l': 24, 't': 45, 'a': 42, ',': 10, 'c': 18, 'n': 26, 'g': 4, '.': 10, 'F': 1, 'f': 3, 'h': 3, 'b': 4, 'S': 1, 'I': 2, 'C': 2, 'q': 5, 'v': 2, 'P': 1, 'D': 2, 'j': 1 };

        const valueBrowsers = await evaluate((window: any) => {
          const onesyHuffmanCodes = [
            new window.OnesyHuffmanCode(),
            new window.OnesyHuffmanCode(),
            new window.OnesyHuffmanCode(),
          ];

          onesyHuffmanCodes[0].probabilities = {};
          onesyHuffmanCodes[1].probabilities = { 'a': 1 };
          onesyHuffmanCodes[2].probabilities = { '0': 1, '1': 4, 'L': 1, 'o': 28, 'r': 31, 'e': 57, 'm': 23, ' ': 90, 'i': 45, 'p': 11, 's': 48, 'u': 32, 'd': 18, 'l': 24, 't': 45, 'a': 42, ',': 10, 'c': 18, 'n': 26, 'g': 4, '.': 10, 'F': 1, 'f': 3, 'h': 3, 'b': 4, 'S': 1, 'I': 2, 'C': 2, 'q': 5, 'v': 2, 'P': 1, 'D': 2, 'j': 1 };

          return [
            onesyHuffmanCodes[0].makeHuffmanTree().array,
            onesyHuffmanCodes[1].makeHuffmanTree().array,
            onesyHuffmanCodes[2].makeHuffmanTree().array,
          ]
            .map(item => item.filter(Boolean));
        });

        const valueNode = [
          onesyHuffmanCodes[0].makeHuffmanTree().array,
          onesyHuffmanCodes[1].makeHuffmanTree().array,
          onesyHuffmanCodes[2].makeHuffmanTree().array,
        ]
          .map(item => item.filter(Boolean));
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          [],
          ['a'],
          ['e', 'o', 'n', 'u', 'd', 'c', 'r', 'g', 'b', 'I', 'C', 'v', 'D', '1', 'h', 'f', 'P', 'j', 'i', 't', 's', 'l', 'm', ' ', 'a', 'p', '.', ',', 'q', '0', 'L', 'F', 'S'],
        ]));
      });

    });

  });

  group('Use cases', () => {

    to(`Bug with words that end up having padded 0's, and hexToBinary returns incorrect values`, async () => {

      const valueBrowsers = await evaluate((window: any) => {
        const onesyHuffmanCode = new window.OnesyHuffmanCode(' asdad`5,dh`');

        return [
          onesyHuffmanCode.decode(onesyHuffmanCode.response.value).value
        ];
      });

      const onesyHuffmanCode = new OnesyHuffmanCode(' asdad`5,dh`');

      const valueNode = [
        onesyHuffmanCode.decode(onesyHuffmanCode.response.value).value
      ];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([
        ` asdad\`5,dh\``
      ]));
    });

    to('Bug with incorrectly decoded last character having 0011 instead of 00011, when converted back to binary', async () => {

      const valueBrowsers = await evaluate((window: any) => {
        const onesyHuffmanCode = new window.OnesyHuffmanCode(' {"id":"a","name":"è¿\x99æ\x98¯ä¸\x80å\x8F¥ä¸­æ\x96\x87"}');

        return [
          onesyHuffmanCode.decode(onesyHuffmanCode.response.value).value
        ];
      });

      const onesyHuffmanCode = new OnesyHuffmanCode(' {"id":"a","name":"è¿\x99æ\x98¯ä¸\x80å\x8F¥ä¸­æ\x96\x87"}');

      const valueNode = [
        onesyHuffmanCode.decode(onesyHuffmanCode.response.value).value
      ];
      const values = [valueNode, ...valueBrowsers];

      values.forEach(value => assert(value).eql([
        ` {\"id\":\"a\",\"name\":\"è¿æ¯ä¸å¥ä¸­æ\"}`
      ]));
    });

  });

});
